import { Injectable } from '@angular/core';
import {getUrl} from "../../API/api";
import {PlaceOwnerInfo} from "../../interfaces/placeOwner.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlaceownerService {
  model='PlaceOwner/createAccount'

  constructor(private http: HttpClient) { }

  registerPlaceOwner(placeOwner: PlaceOwnerInfo) {
    return this.http.post(getUrl(this.model), placeOwner)
      .subscribe(response => console.log(response))
  }
}
