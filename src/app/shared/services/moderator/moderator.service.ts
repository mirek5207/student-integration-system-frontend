import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {getUrl, httpOptions} from "../../API/api";
import {GetModerator, GetUserReport, UpdateModerator} from "../../interfaces/moderator.interface";
import {GetClient, UpdateClient} from "../../interfaces/client.interface";
import {GetOwner} from "../../interfaces/placeOwner.interface";
import {GetSystemReport, PatchSystemReport, PatchUserAccount} from "../../interfaces/admin.interface";

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {

  constructor(private http: HttpClient) { }

  getAllClients(){
    return this.http.get<GetClient[]>(getUrl(`Moderator/getAllClients`), httpOptions)
  }

  getAllPlaceowners(){
    return this.http.get<GetOwner[]>(getUrl(`Moderator/getAllPlaceOwner`), httpOptions)
  }

  updateAccountStatus(isAccountActive: boolean, id: number){
    return this.http.patch(getUrl(`Moderator/updateStatusOfUserAccount/${id}`), {isActive: isAccountActive}, httpOptions)
  }

  getAllUserReports(){
    return this.http.get<GetUserReport[]>(getUrl(`Moderator/getUserReports`), httpOptions)
  }

  updateStatusOfUserReport(reportId: number, reportStatus: PatchSystemReport) {
    return this.http.patch(getUrl(`Moderator/updateStatusOfUserReport/${reportId}`),reportStatus, httpOptions)
  }
  updateStatusOfUserAccount(userId: number, reportStatus: PatchUserAccount) {
    return this.http.patch(getUrl(`Moderator/UpdateStatusOfUserAccount/${userId}`),reportStatus, httpOptions)
  }
}
