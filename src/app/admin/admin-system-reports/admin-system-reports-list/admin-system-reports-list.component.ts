import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {GetUserReport} from "../../../shared/interfaces/moderator.interface";
import {MatTableDataSource} from "@angular/material/table";
import {ModeratorService} from "../../../shared/services/moderator/moderator.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {
  ModeratorUpdateUserComponent
} from "../../../moderator/moderator-users/moderator-update-user/moderator-update-user.component";
import {GetSystemReport} from "../../../shared/interfaces/admin.interface";
import {AdminService} from "../../../shared/services/admin/admin.service";

@Component({
  selector: 'app-admin-system-reports-list',
  templateUrl: './admin-system-reports-list.component.html',
  styleUrls: ['./admin-system-reports-list.component.scss']
})
export class AdminSystemReportsListComponent implements OnInit {

  systemReport!: Observable<GetSystemReport[]>;

  displayedColumns = ['position', 'name', 'weight', 'reportingUser', "date", 'button'];
  dataSource = new MatTableDataSource<GetSystemReport>();

  constructor(private adminService: AdminService, private dialogRef: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngOnInit(): void {
    this.getAllSystemReports()
    this.systemReport.subscribe(things =>
      this.dataSource.data = things)
    this.dataSource.paginator = this.paginator
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  getAllSystemReports(){
    this.systemReport = this.adminService.getSystemReports()
  }

  openUpdateClientDialog(id: number){
    this.dialogRef.open(ModeratorUpdateUserComponent, this.getUpdateDialogConfig(id))
  }

  getUpdateDialogConfig(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "450px";
    dialogConfig.height = "620px";
    dialogConfig.data = id.toString();
    return dialogConfig;
  }

  refreshComponent(){
    window.location.reload();
  }

}
