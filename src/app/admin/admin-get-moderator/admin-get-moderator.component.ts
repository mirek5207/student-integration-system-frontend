import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AdminService} from "../../shared/services/admin/admin.service";
import {GetModerator, UpdateModerator} from "../../shared/interfaces/moderator.interface";
import {first, Observable} from "rxjs";

@Component({
  selector: 'app-admin-get-moderator',
  templateUrl: './admin-get-moderator.component.html',
  styleUrls: ['./admin-get-moderator.component.scss']
})
export class AdminGetModeratorComponent implements OnInit {
  moderator!: GetModerator
  updateModerator: UpdateModerator = {} as UpdateModerator
  moderator$!: Observable<GetModerator>

  constructor(private route: ActivatedRoute, private adminService: AdminService) {}

  id!: number;
  ngOnInit(): void {
    this.loadModerator()
    this.moderator$.pipe(first()).subscribe(mod => this.moderator = mod)
  }

  loadModerator(){
    this.route.params.subscribe((params: Params) => this.id = params['id'])
    this.moderator$ = this.adminService.getModeratorById(this.id)

  }
  update(moderator: UpdateModerator){
    this.adminService.updateModerator(this.id, moderator).subscribe()
  }


}
