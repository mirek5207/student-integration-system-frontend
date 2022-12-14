import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Place} from "../../../shared/interfaces/placeOwner.interface";
import {Router} from "@angular/router";
import {CreatePlaceComponent} from "../create-place/create-place.component";
import {AdminGetModeratorComponent} from "../../../admin/admin-get-moderator/admin-get-moderator.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {

  @Input() places: any[] = []
  @Output() placeSelected = new EventEmitter<any>();
  @Output() reservations = new EventEmitter<any>();
  @Output() confirmedReservations = new EventEmitter<any>();
  today = Date.now()
  pipe = new DatePipe('en-US')


  constructor(private router: Router, private dialogRef : MatDialog) { }

  ngOnInit(): void {}

  selectPlace(place: Place){
    this.placeSelected.emit(place)
    this.reservations.emit(place.id)
    this.confirmedReservations.emit({placeId: place.id, date: this.pipe.transform(this.today, 'yyyy-MM-ddThh:mm:ss')})
  }

  redirectCreatePlace(){
    this.router.navigate(["placeowner/create"]);
  }

  openRegisterPlaceDialog(){
    this.dialogRef.open(CreatePlaceComponent, this.getRegisterDialogConfig())
  }

  getRegisterDialogConfig(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "450px";
    dialogConfig.height = "580px";
    return dialogConfig;
  }

}
