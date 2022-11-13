import {Component, Inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AdminService} from "../../shared/services/admin/admin.service";
import {GetModerator, UpdateModerator} from "../../shared/interfaces/moderator.interface";
import {first, Observable} from "rxjs";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-admin-get-moderator',
  templateUrl: './admin-get-moderator.component.html',
  styleUrls: ['./admin-get-moderator.component.scss']
})
export class AdminGetModeratorComponent implements OnInit {
  moderator!: GetModerator
  updateModerator: UpdateModerator = {} as UpdateModerator
  moderator$!: Observable<GetModerator>
  public form: FormGroup = new FormGroup({
    login: new FormControl(''),
    email: new FormControl(''),
    firstName: new FormControl(''),
    surName: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private adminService: AdminService, @Inject(MAT_DIALOG_DATA) public data:any) {}

  id!: number;
  ngOnInit(): void {
    this.id = this.data;
    this.loadModerator()
    this.moderator$.pipe(first()).subscribe(mod => this.moderator = mod)
    this.setUpdateModerator();
  }

  loadModerator(){
    this.moderator$ = this.adminService.getModeratorById(this.id)

  }
  update(moderator: UpdateModerator){
    this.adminService.updateModerator(this.id, moderator).subscribe()
  }

  setUpdateModerator(){
    const moderator = this.moderator$.pipe(first())
    moderator.subscribe(val => {
      this.updateModerator.firstName = val.firstName;
      this.updateModerator.surName = val.surName;
      this.updateModerator.email = val.user.email;
      this.updateModerator.login = val.user.login;
      this.updateModerator.isAccountActive = val.user.account.isActive;
    });
  }
}
