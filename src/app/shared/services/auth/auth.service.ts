import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {AUTHENTICATION_KEY} from "../../authenticationKey/authenticationKey";

import { UserInfo } from '../../interfaces/auth.interface';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../token/token.service";
import {NavigationService} from "../navigation/navigation.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  model = 'Auth/authenticate';
  role ='';
  token=''

  private isAuthenticated = new BehaviorSubject(this.setIsAuthenticated() || false);
  isAuthenticated$ = this.isAuthenticated.asObservable();
  private navItems = new BehaviorSubject<{name: string, url: string}[]>(this.navigationService.getNavLinks() || [])
  navItems$ = this.navItems.asObservable();

  constructor(
    private router: Router,
    private http: HttpClient,
    private tokenService: TokenService,
    private navigationService: NavigationService
    ) { }


  async loginAfterRegistration() {
      this.isAuthenticated.next(true);
      this.navItems.next(this.navigationService.getNavLinks())
      await this.navigationService.navigate()
  }

    async login(userInfo: UserInfo) {
      await this.tokenService.setTokenToLocalStorage(userInfo)
      if(this.setIsAuthenticated()){
        this.isAuthenticated.next(true);
        this.navItems.next(this.navigationService.getNavLinks())
        await this.navigationService.navigate()
      }
  }

  async logout() {
    await this.tokenService.removeTokenFromLocalStorage()
    if(!this.setIsAuthenticated()){
      this.isAuthenticated.next(false);
      this.navItems.next([])
      await this.router.navigate(['/']);
    }
  }

   private setIsAuthenticated() {
     return !(localStorage.getItem(AUTHENTICATION_KEY) === '' || localStorage.getItem(AUTHENTICATION_KEY) == null);
  }

}

