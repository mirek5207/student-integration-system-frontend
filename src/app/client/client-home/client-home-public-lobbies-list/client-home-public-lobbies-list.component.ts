import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LobbyService} from "../../../shared/services/lobby/lobby.service";
import {Router} from "@angular/router";
import {first, Observable} from "rxjs";
import {GetPublicLobby} from "../../../shared/interfaces/client.interface";

@Component({
  selector: 'app-client-home-public-lobbies-list',
  templateUrl: './client-home-public-lobbies-list.component.html',
  styleUrls: ['./client-home-public-lobbies-list.component.scss']
})
export class ClientHomePublicLobbiesListComponent implements OnInit {
  @Output() outputToParentLobby: EventEmitter<{lobby: any}> = new EventEmitter()
  Lobbies$!: Observable<GetPublicLobby[]>
  Lobbies!: GetPublicLobby[]
  constructor(private lobbyService: LobbyService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPublicLobbies()
  }
  getAllPublicLobbies(){
    this.Lobbies$ = this.lobbyService.getAllPublicLobbies()
    this.Lobbies$.pipe(first()).subscribe(lob=>{
      this.Lobbies = lob
      console.log(lob)
    })

  }
  changeLocation(lobby: any){
    this.outputToParentLobby.emit(lobby)
  }
  joinPublicLobby(lobbyId: number,placeId:number){
    this.lobbyService.joinPublicLobby(lobbyId)
    this.navigateTo('/client/lobbies/asGuest/' + lobbyId, placeId)
  }
  navigateTo(path: string, placeId: number)
  {
    let typeOfPlace;
    if(placeId == null) typeOfPlace = 'customPlace'
    else typeOfPlace = 'place'
    this.router.navigate([path],{queryParams: {placeId: placeId, type:typeOfPlace}});
  }
}
