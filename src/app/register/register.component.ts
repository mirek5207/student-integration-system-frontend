import { Component, OnInit } from '@angular/core';
import {ClientInfo} from "../shared/interfaces/client.interface";
import {RegisterService} from "../shared/services/register/register.service";
import {AuthService} from "../shared/services/auth/auth.service";
import {PlaceownerComponent} from "../placeowner/placeowner.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

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
    this.dialogRef.open(PlaceownerComponent, this.getRegisterDialogConfig())
  }
  getRegisterDialogConfig(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "490px";
    dialogConfig.height = "800px";
    return dialogConfig;
  }
}
