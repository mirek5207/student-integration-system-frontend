import { Component, OnInit } from '@angular/core';
import {ClientInfo} from "../shared/interfaces/client.interface";
import {RegisterService} from "../shared/services/register/register.service";
import {AuthService} from "../shared/services/auth/auth.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {RegisterPlaceownerComponent} from "../placeowner/register-placeowner/register-placeowner.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerNewClient: ClientInfo = {
    login: '',
    email: '',
    firstName: '',
    surName: '',
    hashedPassword: ''
  }

  constructor(private registerClient: RegisterService, private authService : AuthService, private dialogRef : MatDialog) { }

  ngOnInit(): void {
  }

    async register(client: ClientInfo){
      await this.registerClient.createAccount(client, 'Client/createAccount')
      await this.authService.loginAfterRegistration()
  }
  openRegisterPlaceOwnerDialog(){
    this.dialogRef.open(RegisterPlaceownerComponent, this.getDialogConfig("80vw","89vh","600px", "500px"))
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
