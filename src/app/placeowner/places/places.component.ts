import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../shared/services/token/token.service";
import {PlaceownerService} from "../../shared/services/placeowner/placeowner.service";
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";
import {Place} from "../../shared/interfaces/placeOwner.interface";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  places$!: Observable<any>;
  selectedPlace: any
  constructor(private tokenService: TokenService, private placeOwnerService: PlaceownerService) { }

  ngOnInit(): void {
    this.getPlaces()
  }

  getPlaces(){
    this.places$ =  this.placeOwnerService.getAllPlaces(this.tokenService.getId())
  }

  selectPlace(place: Place){
    this.selectedPlace = place
  }

  updatePlace(place: Place){
    this.placeOwnerService.updatePlace(place, place.id).pipe(
      tap( () => this.getPlaces())
    ).subscribe();
  }

  deletePlace(id: number){
    this.placeOwnerService.deletePlace(id).pipe(
      tap( ()=> this.getPlaces())
    ).subscribe()
  }
}