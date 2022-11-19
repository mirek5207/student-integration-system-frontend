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
    this.dialogRef.open(PlaceownerComponent, this.getDialogConfig("80vw","89vh","600px", "500px"))
  }
  getDialogConfig(width: string, height: string, maxHeight: string, maxWidth: string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = width;
    dialogConfig.height = height;
    dialogConfig.maxHeight = maxHeight;
    dialogConfig.maxWidth = maxWidth;
    dialogConfig.panelClass = "dialog";
    return dialogConfig;
  }
}
