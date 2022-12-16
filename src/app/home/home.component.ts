import { Component, OnInit } from '@angular/core';
import {PlaceownerComponent} from "../placeowner/placeowner.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {RegisterComponent} from "../register/register.component";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void {
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
  openLoginDialog(){
    this.dialogRef.open(LoginComponent, this.getDialogConfig("490px","86vh","570px","490px"))
  }
}
