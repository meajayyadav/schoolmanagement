// angular import
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import * as global from '../../../../../globals'

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  imports: [SharedModule,RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../authentication.scss'],
})
export default class LoginComponent implements OnInit {
  // public props
  hide = true;Email:any;password:any
  loginForm:FormGroup
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private authservices:AuthService){
    this.loginForm =this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
    
  }
  
  // public method
  getErrorMessage() {
    return this.loginForm.controls
  }
  loginFormSubmit(val:any){
    this.http.post(global.AUTHAPI.signin, JSON.stringify(val), { headers: global.HeaderValue }).subscribe((data: any) => {
      if (data && data.token) {

        Swal.fire({
          text: data['message'],
          icon: 'success'
        });
        this.authservices.setAuthToken(data.token)
        localStorage.setItem('userDetails', JSON.stringify(data));
        this.router.navigate(['/dashboard']);
      } else {
        Swal.fire({
          text: data?.message,
          icon: 'error'
        });
      }
    })
  }
  loginType = [
    {
      image: 'assets/images/authentication/facebook.svg',
      alt: 'facebook',
      title: 'Sign In with Facebook'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      alt: 'twitter',
      title: 'Sign In with Twitter'
    },
    {
      image: 'assets/images/authentication/google.svg',
      alt: 'google',
      title: 'Sign In with Google'
    }
  ];
}
