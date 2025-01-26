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

@Component({
  selector: 'app-register',
  imports: [SharedModule,RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../authentication.scss'],
 
})
export default class RegisterComponent implements OnInit {
  // public props
  hide = true;
  coHide = true;
  signUpForm:FormGroup
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router){
    this.signUpForm =this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
ngOnInit(): void {
  
}

signUpFormSubmit(val:any){
  this.http.post(global.AUTHAPI.signup,JSON.stringify(val),{headers:global.HeaderValue}).subscribe((data:any)=>{
    if(data && data.error==false){
     
      Swal.fire({
        text:data['message'],
        icon:'success',
      });
      this.router.navigate(['/auth/login']);
    }else{
      Swal.fire({
        text:data?.message,
        icon:'error',
      });
    }
  })
}

getErrorMessage(){
  return this.signUpForm.controls;
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
