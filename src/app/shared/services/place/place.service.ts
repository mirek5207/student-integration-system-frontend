import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {getUrl, httpOptions} from "../../API/api";
import {GetCustomPlace, GetPlace} from "../../interfaces/client.interface";
import {TokenService} from "../token/token.service";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient, private authService: TokenService) { }

  getPlaces(){
    return this.http.get<GetPlace[]>(getUrl('Place/getAllPlaces'), httpOptions)
  }
  getCustomPlaces(){
    let userId = this.authService.getId()
    return this.http.get<GetCustomPlace[]>(getUrl(`Client/getCustomPlaces/${userId}`), httpOptions)
  }
  createCustomPlace(customPlace: any){
    let userId = this.authService.getId()
    return this.http.post(getUrl(`Client/createCustomPlace/${userId}`), customPlace, httpOptions).subscribe(response => console.log(response))
  }

}
