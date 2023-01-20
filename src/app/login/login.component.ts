import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../shared/interfaces/auth.interface';
import { AuthService } from '../shared/services/auth/auth.service';
import { URL } from "url";
import * as url from "url";
import {RegisterComponent} from "../register/register.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

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

  constructor(private authService: AuthService, private dialogRef : MatDialog) {}

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
  openRegisterClientDialog(){
    this.dialogRef.open(RegisterComponent, this.getDialogConfig("80vw","89vh","600px", "500px"))
  }
  getDialogConfig(width: string, height: string, maxHeight: string, maxWidth: string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = width;
    dialogConfig.height = height;
    dialogConfig.maxHeight = maxHeight;
    dialogConfig.maxWidth = maxWidth;
    dialogConfig.panelClass = "dialog";
    return dialogConfig;
  }
}
