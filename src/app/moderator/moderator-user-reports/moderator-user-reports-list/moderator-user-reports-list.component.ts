import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {GetClient} from "../../../shared/interfaces/client.interface";
import {MatTableDataSource} from "@angular/material/table";
import {ModeratorService} from "../../../shared/services/moderator/moderator.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {
  ModeratorUpdateUserComponent
} from "../../moderator-users/moderator-update-user/moderator-update-user.component";
import {GetUserReport} from "../../../shared/interfaces/moderator.interface";
import {
  AdminUpdateSystemReportComponent
} from "../../../admin/admin-system-reports/admin-update-system-report/admin-update-system-report.component";
import {
  ModeratorUpdateUserReportComponent
} from "../moderator-update-user-report/moderator-update-user-report.component";

@Component({
  selector: 'app-moderator-user-reports-list',
  templateUrl: './moderator-user-reports-list.component.html',
  styleUrls: ['./moderator-user-reports-list.component.scss']
})
export class ModeratorUserReportsListComponent implements OnInit {

  userReport!: Observable<GetUserReport[]>;

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'reportingUser', "date", 'button'];
  dataSource = new MatTableDataSource<GetUserReport>();

  constructor(private moderatorService: ModeratorService, private dialogRef: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngOnInit(): void {
    this.getAllUserReports()
    this.userReport.subscribe(things =>
      this.dataSource.data = things)
    this.dataSource.paginator = this.paginator
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  getAllUserReports(){
    this.userReport = this.moderatorService.getAllUserReports()
  }

  openUpdateClientDialog(id: number,description: string,date: Date,reportedUserId: number){
    this.dialogRef.open(ModeratorUpdateUserReportComponent, this.getUpdateDialogConfig(id,description,date,reportedUserId))
  }

  getUpdateDialogConfig(id: number,description: string, date: Date,reportedUserId: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "450px";
    dialogConfig.height = "580px";
    dialogConfig.data = [id,description,date,reportedUserId];
    return dialogConfig;
  }

  refreshComponent(){
    window.location.reload();
  }

}
