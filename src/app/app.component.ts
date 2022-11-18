import {Component} from '@angular/core';
import {AuthService} from "./shared/services/auth/auth.service";
import {shareReplay} from "rxjs";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {PlaceownerComponent} from "./placeowner/placeowner.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'system-integration-system-frontend';

  isAuthenticated$ = this.authService.isAuthenticated$.pipe(shareReplay(1));
  navItems$ = this.authService.navItems$.pipe(shareReplay(1));

  navigationLinks: {name: string, url:string}[] = []


  constructor(private authService: AuthService, private dialogRef : MatDialog) {
    this.navItems$.subscribe(r => this.navigationLinks = r)
  }

  openLoginDialog(){
    this.dialogRef.open(LoginComponent, this.getDialogConfig("490px","86vh","600px","490px"))
  }
  openRegisterClientDialog(){
    this.dialogRef.open(RegisterComponent, this.getDialogConfig("80vw","89vh","600px", "500px"))
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

  async logout(){
    await this.authService.logout();
  }
}
