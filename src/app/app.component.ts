import {Component} from '@angular/core';
import {AuthService} from "./shared/services/auth/auth.service";
import {shareReplay} from "rxjs";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";


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
    this.dialogRef.open(LoginComponent, this.getLoginDialogConfig())
  }
  openRegisterDialog(){
    this.dialogRef.open(RegisterComponent, this.getRegisterDialogConfig())
  }

  getLoginDialogConfig(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "490px";
    dialogConfig.height = "600px";
    return dialogConfig;
  }
  getRegisterDialogConfig(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "490px";
    dialogConfig.height = "800px";
    return dialogConfig;
  }
}
