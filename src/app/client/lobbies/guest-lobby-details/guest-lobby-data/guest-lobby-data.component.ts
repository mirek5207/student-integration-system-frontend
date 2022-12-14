import { Component, OnInit } from '@angular/core';
import {first, Subscription} from "rxjs";
import {LobbyService} from "../../../../shared/services/lobby/lobby.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-guest-lobby-data',
  templateUrl: './guest-lobby-data.component.html',
  styleUrls: ['./guest-lobby-data.component.scss']
})
export class GuestLobbyDataComponent implements OnInit {

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
