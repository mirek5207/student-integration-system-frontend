import { Injectable } from '@angular/core';
import {getUrl} from "../../API/api";
import {HttpClient} from "@angular/common/http";
import {AUTHENTICATION_KEY} from "../../authenticationKey/authenticationKey";
import {lastValueFrom} from "rxjs";

interface Token{
  token: string
}
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }

   async createAccount<T>(user: T, path: string){
     const fetchToken$ = await this.http.post<Token>(getUrl(path),user)
     const fetchToken = await lastValueFrom(fetchToken$)
     localStorage.setItem(AUTHENTICATION_KEY, fetchToken.token)
  }
}
