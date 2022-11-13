import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../shared/services/admin/admin.service";
import {GetModerator} from "../../shared/interfaces/moderator.interface";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AdminCreateModeratorComponent} from "../admin-create-moderator/admin-create-moderator.component";
import {AdminGetModeratorComponent} from "../admin-get-moderator/admin-get-moderator.component";

@Component({
  selector: 'app-admin-get-moderators',
  templateUrl: './admin-get-moderators.component.html',
  styleUrls: ['./admin-get-moderators.component.scss']
})


export class AdminGetModeratorsComponent implements OnInit {
  moderators!: Observable<GetModerator[]>;

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'button'];
  dataSource = new MatTableDataSource<GetModerator>();
  constructor(private adminService: AdminService, private router: Router, private dialogRef : MatDialog) {}

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

  openRegisterModeratorDialog(){
    this.dialogRef.open(AdminCreateModeratorComponent, this.getRegisterDialogConfig())
  }
  openUpdateModeratorDialog(id: number){
    this.dialogRef.open(AdminGetModeratorComponent, this.getUpdateModeratorDialogConfig(id))
  }
  getRegisterDialogConfig(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "450px";
    dialogConfig.height = "630px";
    return dialogConfig;
  }
  getUpdateModeratorDialogConfig(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "450px";
    dialogConfig.height = "670px";
    dialogConfig.data = id.toString();
    return dialogConfig;
  }

}

