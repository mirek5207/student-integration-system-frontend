import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
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

  getConfirmedReservationsForOneDay(date: any, placeId: number){
    const params = new HttpParams()
      .set('placeId', placeId)
      .set('date', date)
    return this.http.get<any[]>(getUrl('Reservation/getConfirmedReservationsForOneDay'), {
      headers: httpOptions.headers,
      params: params
    })
  }

  getSentReservationsForPlace(placeId: number){
    const params = new HttpParams()
      .set('placeId', placeId)
    return this.http.get<any[]>(getUrl('Reservation/getSentReservationsForPlace'), {
      headers: httpOptions.headers,
      params: params
    })
  }

  declineReservation(reservationId: number){
    const params = new HttpParams()
      .set('reservationId', reservationId)
    return this.http.patch(getUrl('Reservation/declineReservation'), {}, {
      headers: httpOptions.headers,
      params: params
    })
  }

  confirmReservation(reservationId: number){
    const params = new HttpParams()
      .set('reservationId', reservationId)
    return this.http.patch(getUrl('Reservation/confirmReservation'), {}, {
      headers: httpOptions.headers,
      params: params
    })
  }

  deleteReservation(reservationId: number){
    const params = new HttpParams()
      .set('reservationId', reservationId)
    return this.http.patch(getUrl('Reservation/deleteReservation'), {}, {
      headers: httpOptions.headers,
      params: params
    })
  }

  updateReservation(reservationId: number, reservation: any){
    const params = new HttpParams()
      .set('reservationId', reservationId)
    return this.http.patch(getUrl('Reservation/updateReservation'),  reservation, {
      headers: httpOptions.headers,
      params: params
    })
  }



}
