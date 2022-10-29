import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ModeratorInfo} from "../../interfaces/register.interface";
import {AUTHENTICATION_KEY} from "../../authenticationKey/authenticationKey";
import {getUrl} from "../../API/api";



@Injectable({
  providedIn: 'root'
})


export class AdminService {
  model = 'Admin/createModeratorAccount';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `bearer ${localStorage.getItem(AUTHENTICATION_KEY) as string}`
    })
  }

  registerModerator(moderator: ModeratorInfo) {
      return this.http.post(getUrl(this.model), moderator, this.httpOptions)
        .subscribe(response => console.log(response))
  }

}
