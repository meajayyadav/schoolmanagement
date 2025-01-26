// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as global from '../globals'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

 

  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }

  setAuthToken(token:string):void{
    localStorage.setItem('token',token)
  }
  logOut(){
    localStorage.removeItem('token');
  }
}
