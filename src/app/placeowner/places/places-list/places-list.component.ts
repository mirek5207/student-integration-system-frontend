import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Place} from "../../../shared/interfaces/placeOwner.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {

  @Input() places: any[] = []
  @Output() placeSelected = new EventEmitter<any>();


  constructor(private router: Router) { }

  ngOnInit(): void {}

  selectPlace(place: Place){
    this.placeSelected.emit(place)
  }

  redirectCreatePlace(){
    this.router.navigate(["placeowner/create"]);
  }


}
