import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {lastValueFrom, Observable} from 'rxjs';
import {AUTHENTICATION_KEY} from "../../authenticationKey/authenticationKey";
import {getUrl} from "../../API/api";

import { UserInfo } from '../../interfaces/auth.interface';
import {HttpClient} from "@angular/common/http";




interface Token {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  model = 'Auth/authenticate';

  constructor(
    private router: Router,
    private http: HttpClient
    ) { }

   createToken(user: UserInfo): Observable<Token> {
      return this.http.post<Token>(getUrl(this.model), user)
  }
    async login(userInfo: UserInfo) {
      const fetchToken$ = await this.createToken(userInfo)
      const fetchToken = await lastValueFrom(fetchToken$)
      localStorage.setItem(AUTHENTICATION_KEY, fetchToken.token)
      if(this.setIsAuthenticated()){
        await this.router.navigateByUrl('/admin');
      }

  }

  private setIsAuthenticated() {
    return !(localStorage.getItem(AUTHENTICATION_KEY) === '' || localStorage.getItem(AUTHENTICATION_KEY) == null);

  }


}
