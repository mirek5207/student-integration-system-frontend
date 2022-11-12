import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserInfo} from "../../interfaces/auth.interface";
import {lastValueFrom, Observable} from "rxjs";
import {getUrl} from "../../API/api";
import {Token} from "../../interfaces/token.interface";
import {AUTHENTICATION_KEY} from "../../authenticationKey/authenticationKey";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  model = 'Auth/authenticate';

  constructor(private http: HttpClient) { }

  createToken(user: UserInfo): Observable<Token> {
    return this.http.post<Token>(getUrl(this.model), user)
  }

  async setTokenToLocalStorage(userInfo: UserInfo){
    const fetchToken$ = await this.createToken(userInfo)
    const fetchToken = await lastValueFrom(fetchToken$)
    localStorage.setItem(AUTHENTICATION_KEY, fetchToken.token)
  }

   removeTokenFromLocalStorage(){
    localStorage.removeItem(AUTHENTICATION_KEY)
  }

  decodeToken() {
    if (localStorage.getItem(AUTHENTICATION_KEY) === null) {
      return '';
    } else {
      const jwt = localStorage.getItem(AUTHENTICATION_KEY)
      const jwtData = jwt?.split('.')[1]
      const decodedJwtJsonData = window.atob(jwtData as string)
      return JSON.parse(decodedJwtJsonData)
    }
  }

  getRole(){
    return this.decodeToken().role
  }

  getId(){
   return this.decodeToken().id
  }
}
