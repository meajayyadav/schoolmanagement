// angular import
import { Component, OnInit } from '@angular/core';
import * as global from '../../../../../globals'
// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-right',
  imports: [SharedModule],
  templateUrl: './toolbar-right.component.html',
  styleUrls: ['./toolbar-right.component.scss']
})
export class NavRightComponent implements OnInit {

loggedInDetails:any;userName:any;email:any

constructor(private autservices:AuthService,private router:Router){

}
  ngOnInit(): void {
    this.loggedInDetails =global.fetchDataFromLocalStore();
    console.log("user",this.loggedInDetails);
    if(this.loggedInDetails && this.loggedInDetails.user){
      this.userName =this.loggedInDetails.user.firstName.toUpperCase() +' ' +this.loggedInDetails.user.lastName.toUpperCase();
    this.email = this.loggedInDetails.user.email;
    }
  }

  logOut(){
    this.autservices.logOut();
    this.router.navigate(['/login']);

  }
  // public props
  mainCards = [
    {
      day: 'Today',
      cards: [
        {
          icon: 'custom-layer',
          time: '2 min ago',
          position: 'UI/UX Design',
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type",
          status: false
        },
        {
          icon: 'custom-sms',
          time: '1 hour ago',
          position: 'Message',
          description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
          status: false
        }
      ]
    },
    {
      day: 'Yesterday',
      cards: [
        {
          icon: 'custom-document-text',
          time: '12 hour ago',
          position: 'Forms',
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type",
          status: false
        },
        {
          icon: 'custom-security-safe',
          time: '18 hour ago',
          position: 'Security',
          description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
          status: false
        },
        {
          icon: 'custom-user-bold',
          time: '15 hour ago',
          position: 'Challenge invitation',
          description: 'Jonny aber invites to join the challenge',
          status: true
        }
      ]
    }
  ];

  notification = [
    {
      sub_title: 'Improvement',
      time: '12 hour ago',
      title: 'Widgets update',
      img: 'assets/images/layout/img-announcement-3.png'
    },
    {
      sub_title: 'New Feature',
      time: '18 hour ago',
      title: 'Coming soon dark mode',
      img: 'assets/images/layout/img-announcement-4.png'
    }
  ];
}
