import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {ModeratorService} from "../../../shared/services/moderator/moderator.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {
  ModeratorUpdateUserComponent
} from "../../moderator-users/moderator-update-user/moderator-update-user.component";
import {GetOwner} from "../../../shared/interfaces/placeOwner.interface";
import {ModeratorPlaceOwnersComponent} from "../moderator-place-owners.component";
import {
  ModeratorUpdatePlaceOwnerComponent
} from "../moderator-update-place-owner/moderator-update-place-owner.component";

@Component({
  selector: 'app-moderator-place-owners-list',
  templateUrl: './moderator-place-owners-list.component.html',
  styleUrls: ['./moderator-place-owners-list.component.scss']
})
export class ModeratorPlaceOwnersListComponent implements OnInit {

  owners!: Observable<GetOwner[]>;

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'button'];
  dataSource = new MatTableDataSource<GetOwner>();

  constructor(private moderatorService: ModeratorService, private dialogRef: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngOnInit(): void {
    this.getAllOwners()
    this.owners.subscribe(things =>
      this.dataSource.data = things)
    this.dataSource.paginator = this.paginator
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  getAllOwners(){
    this.owners = this.moderatorService.getAllPlaceowners()
  }

  openUpdateOwnerDialog(id: number){
    this.dialogRef.open(ModeratorUpdatePlaceOwnerComponent, this.getUpdateDialogConfig(id))
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
