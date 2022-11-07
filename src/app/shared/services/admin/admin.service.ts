import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GetModerator, ModeratorInfo} from "../../interfaces/moderator.interface";
import {AUTHENTICATION_KEY} from "../../authenticationKey/authenticationKey";
import {getUrl} from "../../API/api";
import {Observable} from "rxjs";



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

  getAllModerators(){
    return this.http.get<GetModerator[]>(getUrl('Admin/getModerators'), this.httpOptions)
  }

  getModeratorById(id: number){
    return this.http.get<GetModerator>(getUrl(`Admin/getModerator/${id}`), this.httpOptions)
  }

}
