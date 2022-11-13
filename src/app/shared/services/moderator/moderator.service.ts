import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {getUrl, httpOptions} from "../../API/api";

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {

  constructor(private http: HttpClient) { }

  getAllClients(){
    return this.http.get(getUrl(`Moderator/getAllClients`), httpOptions)
  }

  getAllPlaceowners(){
    return this.http.get(getUrl(`Moderator/getAllPlaceOwner`), httpOptions)
  }

  updateAccountStatus(isAccountActive: boolean, id: number){
    return this.http.patch(getUrl(`Moderator/updateStatusOfUserAccount/${id}`), {isActive: isAccountActive}, httpOptions)
  }
}
