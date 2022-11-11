import { Component, OnInit } from '@angular/core';
import {ModeratorInfo} from "../shared/interfaces/moderator.interface";
import {AdminService} from "../shared/services/admin/admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  registerNewModerator: ModeratorInfo = {
    login: '',
    email: '',
    firstName: '',
    surName: '',
    hashedPassword: ''
  }

  constructor(private registerService: AdminService) { }

  ngOnInit(): void {}

  async register(moderator: ModeratorInfo){
    await this.registerService.registerModerator(moderator)
  }

}
