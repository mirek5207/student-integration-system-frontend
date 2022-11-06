import { Component, OnInit } from '@angular/core';
import {ClientInfo} from "../shared/interfaces/client.interface";
import {RegisterService} from "../shared/services/register/register.service";
import {AuthService} from "../shared/services/auth/auth.service";

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

  constructor(private registerClient: RegisterService, private authService : AuthService) { }

  ngOnInit(): void {
  }

    async register(client: ClientInfo){
      await this.registerClient.createAccount(client, 'Client/createAccount')
      await this.authService.loginAfterRegistration()
  }

}
