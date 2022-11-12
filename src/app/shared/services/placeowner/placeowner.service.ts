import { Injectable } from '@angular/core';
import {getUrl, httpOptions} from "../../API/api";
import {Place} from "../../interfaces/placeOwner.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlaceownerService {
  model='PlaceOwner/createAccount'

  constructor(private http: HttpClient) { }

  createPlace(place: Place){
    this.http.post(getUrl('PlaceOwner/createPlace'), place, httpOptions).subscribe()
  }

  getAllPlaces(id: number){
    return this.http.get(getUrl(`PlaceOwner/getPlaces/${id}`), httpOptions)
  }

  updatePlace(place: Place, id: number){
    return this.http.patch(getUrl(`PlaceOwner/updatePlace/${id}`), place, httpOptions)
  }

  deletePlace(id: number){
    return this.http.delete(getUrl(`PlaceOwner/deletePlace/${id}`), httpOptions)
  }
}
