import { Component, OnInit } from '@angular/core';
import {PlaceOwnerInfo} from "../shared/interfaces/placeOwner.interface";
import {RegisterService} from "../shared/services/register/register.service";
import {AuthService} from "../shared/services/auth/auth.service";

@Component({
  selector: 'app-placeowner',
  templateUrl: './placeowner.component.html',
  styleUrls: ['./placeowner.component.scss']
})
export class PlaceownerComponent implements OnInit {

  registerNewPlaceOwner: PlaceOwnerInfo = {
    login: '',
    email: '',
    firstName: '',
    surName: '',
    hashedPassword: ''
  }

  constructor(private placeOwner : RegisterService, private authService : AuthService) { }

  ngOnInit(): void {
  }

  async register(placeOwner: PlaceOwnerInfo){
    await this.placeOwner.createAccount(placeOwner, 'PlaceOwner/createAccount')
    await this.authService.loginAfterRegistration()
  }

}
