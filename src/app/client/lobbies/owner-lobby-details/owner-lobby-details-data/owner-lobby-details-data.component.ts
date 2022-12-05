import { Component, OnInit } from '@angular/core';
import {LobbyService} from "../../../../shared/services/lobby/lobby.service";
import {first, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-owner-lobby-details-data',
  templateUrl: './owner-lobby-details-data.component.html',
  styleUrls: ['./owner-lobby-details-data.component.scss']
})
export class OwnerLobbyDetailsDataComponent implements OnInit {
  private routeSub!: Subscription;
  lobby$ : any
  lobby : any
  lobbyId!: number;
  constructor(private lobbyService: LobbyService,private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.lobbyId = params['id']
    });
    this.getLobbyById()
    this.lobby$.pipe(first()).subscribe((l: any)=> this.lobby = l)

  }
  getLobbyById(){
    this.lobby$ = this.lobbyService.getLobby(this.lobbyId)
  }
}
