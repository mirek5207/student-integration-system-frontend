import { Injectable } from '@angular/core';
import {ModeratorInfo} from "../../interfaces/moderator.interface";
import {getUrl, httpOptions} from "../../API/api";
import {HttpClient} from "@angular/common/http";
import {GetClient, UpdateClient} from "../../interfaces/client.interface";

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
  getClientById(id: number){
    return this.http.get<GetClient>(getUrl(`Client/getClientData/${id}`), httpOptions)
  }
  updateClient(id: number, client: UpdateClient){
    return this.http.patch(getUrl(`Client/updateClientAccount/${id}`),client, httpOptions)
  }
}
