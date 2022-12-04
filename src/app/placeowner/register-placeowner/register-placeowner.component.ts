import { Component, OnInit } from '@angular/core';
import {PlaceOwnerInfo} from "../../shared/interfaces/placeOwner.interface";
import {RegisterService} from "../../shared/services/register/register.service";
import {AuthService} from "../../shared/services/auth/auth.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-register-placeowner',
  templateUrl: './register-placeowner.component.html',
  styleUrls: ['./register-placeowner.component.scss']
})
export class RegisterPlaceownerComponent implements OnInit {
  id!: number;
  registerNewPlaceOwner: PlaceOwnerInfo = {
    login: '',
    email: '',
    firstName: '',
    surName: '',
    hashedPassword: ''
  }
  private routeSub!: Subscription;
  constructor(private registerService : RegisterService, private authService : AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id']
    });
  }

  async register(placeOwner: PlaceOwnerInfo){
    await this.registerService.createAccount(placeOwner, 'PlaceOwner/createAccount')
    await this.authService.loginAfterRegistration()
  }

}
