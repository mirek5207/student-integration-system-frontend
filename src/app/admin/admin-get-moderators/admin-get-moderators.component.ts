import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../shared/services/admin/admin.service";
import {GetModerator} from "../../shared/interfaces/moderator.interface";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-get-moderators',
  templateUrl: './admin-get-moderators.component.html',
  styleUrls: ['./admin-get-moderators.component.scss']
})


export class AdminGetModeratorsComponent implements OnInit {
  moderators!: Observable<GetModerator[]>;

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'button'];
  dataSource = new MatTableDataSource<GetModerator>();
  constructor(private adminService: AdminService, private router: Router) {}

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngOnInit(): void {
    this.getAllModerators()
    this.moderators.subscribe(things =>
    this.dataSource.data = things)
    this.dataSource.paginator = this.paginator
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  getAllModerators(){
   this.moderators = this.adminService.getAllModerators()
  }

  redirect(id: number){
    this.router.navigate(["admin/getModerator", id]);
  }
}

