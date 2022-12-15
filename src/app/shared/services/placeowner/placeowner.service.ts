import { Injectable } from '@angular/core';
import {getUrl, httpOptions} from "../../API/api";
import {CreatePlace, GetOwner, Place, UpdateOwner} from "../../interfaces/placeOwner.interface";
import {HttpClient} from "@angular/common/http";
import {GetClient, UpdateClient} from "../../interfaces/client.interface";

@Injectable({
  providedIn: 'root'
})
export class PlaceownerService {
  model='PlaceOwner/createAccount'

  constructor(private http: HttpClient) { }

  //--------------------Places--------------------\\
  createPlace(place: CreatePlace){
    this.http.post(getUrl('PlaceOwner/createPlace'), place, httpOptions).subscribe()
  }

  getAllPlaces(id: number){
    return this.http.get<any[]>(getUrl(`PlaceOwner/getPlaces/${id}`), httpOptions)
  }

  updatePlace(place: Place, id: number){
    return this.http.patch(getUrl(`PlaceOwner/updatePlace/${id}`), place, httpOptions)
  }

  deletePlace(id: number){
    return this.http.delete(getUrl(`PlaceOwner/deletePlace/${id}`), httpOptions)
  }

  //--------------------Owners--------------------\\

  getOwnerById(id: number){
    return this.http.get<GetOwner>(getUrl(`PlaceOwner/getPlaceOwnerData/${id}`), httpOptions)
  }
  updateOwner(id: number, owner: UpdateOwner){
    return this.http.patch(getUrl(`PlaceOwner/updatePlaceOwnerAccount/${id}`),owner, httpOptions)
  }


}
