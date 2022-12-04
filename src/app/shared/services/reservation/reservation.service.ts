import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {getUrl, httpOptions} from "../../API/api";
import {CreateReservation} from "../../interfaces/client.interface";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient) { }

  createReservation(reservation: CreateReservation) {
    console.log(getUrl('Reservation/createReservation'))
    return this.http.post(getUrl('Reservation/createReservation'), reservation, httpOptions).subscribe()
  }

}
