import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AdminService} from "../../shared/services/admin/admin.service";
import {GetModerator} from "../../shared/interfaces/moderator.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin-get-moderator',
  templateUrl: './admin-get-moderator.component.html',
  styleUrls: ['./admin-get-moderator.component.scss']
})
export class AdminGetModeratorComponent implements OnInit {

  moderator$!: Observable<GetModerator>

  constructor(private route: ActivatedRoute, private adminService: AdminService) { }

  id!: number;
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.id = params['id'])
     this.adminService.getModeratorById(this.id).subscribe(r => console.log(r))


  }

}
