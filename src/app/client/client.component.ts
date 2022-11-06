import { Component, OnInit } from '@angular/core';
import {ClientInfo} from "../shared/interfaces/client.interface";
import {ClientService} from "../shared/services/client/client.service";
import {AuthService} from "../shared/services/auth/auth.service";


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  registerNewClient: ClientInfo = {
    login: '',
    email: '',
    firstName: '',
    surName: '',
    hashedPassword: ''
  }

  constructor(private clientService : ClientService) { }

  ngOnInit(): void {
  }

  async register(client: ClientInfo){
    await this.clientService.registerClient(client)
    console.log(client)
  }

}
