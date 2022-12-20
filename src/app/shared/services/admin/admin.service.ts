import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GetModerator, ModeratorInfo, UpdateModerator} from "../../interfaces/moderator.interface";
import {getUrl, httpOptions} from "../../API/api";
import {GetSystemReport, PatchSystemReport} from "../../interfaces/admin.interface";



@Injectable({
  providedIn: 'root'
})


export class AdminService {
  model = 'Admin/createModeratorAccount';

  constructor(private http: HttpClient) { }



  registerModerator(moderator: ModeratorInfo) {
      return this.http.post(getUrl(this.model), moderator, httpOptions)
  }

  getAllModerators(){
    return this.http.get<GetModerator[]>(getUrl('Admin/getModerators'), httpOptions)
  }

  getModeratorById(id: number){
    return this.http.get<GetModerator>(getUrl(`Admin/getModerator/${id}`), httpOptions)
  }

  updateModerator(id: number, moderator: UpdateModerator){
    return this.http.patch(getUrl(`Admin/updateModeratorAccount/${id}`),moderator, httpOptions)
  }
  updateStatusOfSystemReport(reportId: number, reportStatus: PatchSystemReport){
    return this.http.patch(getUrl(`Admin/updateStatusOfSystemReport/${reportId}`),reportStatus, httpOptions)
  }

  getSystemReports(){
    return this.http.get<GetSystemReport[]>(getUrl('Admin/getSystemReports'), httpOptions)
  }

}
