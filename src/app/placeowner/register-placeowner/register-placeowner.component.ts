import { Component, OnInit } from '@angular/core';
import {PlaceOwnerInfo} from "../../shared/interfaces/placeOwner.interface";
import {RegisterService} from "../../shared/services/register/register.service";
import {AuthService} from "../../shared/services/auth/auth.service";

@Component({
  selector: 'app-register-placeowner',
  templateUrl: './register-placeowner.component.html',
  styleUrls: ['./register-placeowner.component.scss']
})
export class RegisterPlaceownerComponent implements OnInit {

  registerNewPlaceOwner: PlaceOwnerInfo = {
    login: '',
    email: '',
    firstName: '',
    surName: '',
    hashedPassword: ''
  }

  constructor(private registerService : RegisterService, private authService : AuthService) { }

  ngOnInit(): void {
  }

  async register(placeOwner: PlaceOwnerInfo){
    await this.registerService.createAccount(placeOwner, 'PlaceOwner/createAccount')
    await this.authService.loginAfterRegistration()
  }

}
