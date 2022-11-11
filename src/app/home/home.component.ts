import { Component, OnInit } from '@angular/core';
import {PlaceownerComponent} from "../placeowner/placeowner.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void {
  }
  openRegisterPlaceOwnerDialog(){
    this.dialogRef.open(PlaceownerComponent, this.getRegisterDialogConfig())
  }
  getRegisterDialogConfig(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "490px";
    dialogConfig.height = "800px";
    return dialogConfig;
  }
}
