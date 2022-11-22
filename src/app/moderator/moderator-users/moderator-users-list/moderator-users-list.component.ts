import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {ModeratorService} from "../../../shared/services/moderator/moderator.service";
import {GetClient} from "../../../shared/interfaces/client.interface";
import {AdminGetModeratorComponent} from "../../../admin/admin-get-moderator/admin-get-moderator.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModeratorUpdateUserComponent} from "../moderator-update-user/moderator-update-user.component";

@Component({
  selector: 'app-moderator-users-list',
  templateUrl: './moderator-users-list.component.html',
  styleUrls: ['./moderator-users-list.component.scss']
})
export class ModeratorUsersListComponent implements OnInit {
  clients!: Observable<GetClient[]>;

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'button'];
  dataSource = new MatTableDataSource<GetClient>();

  constructor(private moderatorService: ModeratorService, private dialogRef: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngOnInit(): void {
    this.getAllClients()
    this.clients.subscribe(things =>
    this.dataSource.data = things)
    this.dataSource.paginator = this.paginator
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  getAllClients(){
    this.clients = this.moderatorService.getAllClients()
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
