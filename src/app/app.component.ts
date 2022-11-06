import {Component} from '@angular/core';
import {AuthService} from "./shared/services/auth/auth.service";
import {shareReplay} from "rxjs";



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

  constructor(private authService: AuthService) {
    this.navItems$.subscribe(r => this.navigationLinks = r)
  }
}
