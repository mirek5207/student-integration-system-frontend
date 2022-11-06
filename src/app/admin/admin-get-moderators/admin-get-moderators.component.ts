import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../shared/services/admin/admin.service";
import {GetAllModerators} from "../../shared/interfaces/moderator.interface";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-admin-get-moderators',
  templateUrl: './admin-get-moderators.component.html',
  styleUrls: ['./admin-get-moderators.component.scss']
})


export class AdminGetModeratorsComponent implements OnInit {
  moderators!: Observable<GetAllModerators[]>;

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<GetAllModerators>();
  constructor(private adminService: AdminService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  ngOnInit(): void {
    this.getAllModerators()
    this.moderators.subscribe(things =>
    this.dataSource.data = things)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  getAllModerators(){
   this.moderators = this.adminService.getAllModerators()

  }
}

