import { Component, OnInit } from '@angular/core';
import {ModeratorInfo} from "../../shared/interfaces/moderator.interface";
import {AdminService} from "../../shared/services/admin/admin.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-admin-create-moderator',
  templateUrl: './admin-create-moderator.component.html',
  styleUrls: ['./admin-create-moderator.component.scss']
})
export class AdminCreateModeratorComponent implements OnInit {

  registerNewModerator: ModeratorInfo = {
    login: '',
    email: '',
    firstName: '',
    surName: '',
    hashedPassword: ''
  }

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  async register(moderator: ModeratorInfo){
    await this.adminService.registerModerator(moderator).pipe(
        tap(() => this.adminService.getAllModerators())
    ).subscribe();
  }
}
