import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../shared/interfaces/auth.interface';
import { AuthService } from '../shared/services/auth/auth.service';
import { URL } from "url";
import * as url from "url";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isValidLogin =  -1
  isValidPassword = -1

  userInfo: UserInfo = {
    login: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
   async login(userInfo: UserInfo) {
    this.checkIfLoginIsValid(userInfo.login)
    this.checkIfPasswordIsValid(userInfo.password)
    if(this.isValidLogin === 1 && this.isValidPassword === 1){
      await this.authService.login(userInfo).then(()=>{
        window.location.reload()
      }).catch(()=>{
        alert("Podano zły login lub hasło")
      });
    }
  }
  checkIfLoginIsValid(login: string){
    if(login.length !== 0){
      this.isValidLogin = 1
    }
    else {
      this.isValidLogin = 0
    }
  }
  checkIfPasswordIsValid(password: string){
    if(password.length !== 0){
      this.isValidPassword = 1
    }
    else {
      this.isValidPassword = 0
    }
  }

}
