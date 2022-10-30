import { Injectable } from '@angular/core';
import {ModeratorInfo} from "../../interfaces/moderator.interface";
import {getUrl} from "../../API/api";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  model = 'Client/createAccount'
  constructor(private http: HttpClient) { }

  registerClient(moderator: ModeratorInfo) {
    return this.http.post(getUrl(this.model), moderator)
      .subscribe(response => console.log(response))
  }
}
