import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {getUrl, httpOptions} from "../../API/api";
import {TokenService} from "../token/token.service";

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  constructor(private http: HttpClient, private authService: TokenService) { }

  getLobby(id: number){
    return this.http.get<any[]>(getUrl(`Lobby/getLobby/${id}`), httpOptions)
  }

  getLobbies(){
    return this.http.get<any[]>(getUrl(`Lobby/allLobbies`), httpOptions)
  }
  getLobbyGuests(id: number) {
    return this.http.get<any[]>(getUrl(`Lobby/getLobbyGuests/${id}`), httpOptions)
  }
  getAllOwnerLobbies(){
    const params = new HttpParams().set('userId', this.authService.getId())

    return this.http.get<any[]>(getUrl(`Lobby/allOwnerLobbies`), {
      headers: httpOptions.headers,
      params: params
    })
  }

  getAllPublicLobbies(){
    return this.http.get<any[]>(getUrl(`Lobby/allPublicLobbies`), httpOptions)
  }

  getAllGuestLobbies(){
    const params = new HttpParams()
      .set('userId', this.authService.getId())

    return this.http.get<any[]>(getUrl(`Lobby/allGuestLobbies`), {
      headers: httpOptions.headers,
      params: params
    })
  }

  getAllLobbyInvites(){
    const params = new HttpParams()
      .set('userId', this.authService.getId())

    return this.http.get<any[]>(getUrl(`Lobby/allLobbyInvites`), {
      headers: httpOptions.headers,
      params: params
    })
  }

  createLobby(lobby: any){
    const params = new HttpParams()
      .set('userId', this.authService.getId())

    return this.http.post(getUrl(`Lobby/createLobbyAtPlace`), lobby, {
      headers: httpOptions.headers,
      params: params
    }).subscribe(response => console.log(response))
  }

  joinLobby(id: number, lobbyId: number){
    const params = new HttpParams()
      .set('lobbyId', lobbyId)
    return this.http.put(getUrl(`Lobby/joinLobby${id}`), {}, {
      headers: httpOptions.headers,
      params: params
    });
  }


  addGuestToLobby(userId: number, lobbyId: number){
    const params = new HttpParams()
      .set('userId', userId)
      .set('lobbyId', lobbyId)
    return this.http.post(getUrl(`Lobby/cinviteGuest`), {}, {
      headers: httpOptions.headers,
      params: params
    })
      .subscribe(response => response)
  }

  leaveLobby(lobbyId: number){
    const params = new HttpParams()
      .set('userId', this.authService.getId())
      .set('lobbyId', lobbyId)

    return this.http.delete(getUrl(`Lobby/leaveLobby`),{
      headers: httpOptions.headers,
      params: params
    }).subscribe(value => console.log(value))
  }

  acceptInvite(lobbyId: number){
    const userId = this.authService.getId()
    return this.http.put(getUrl(`Lobby/acceptInvite/${userId}/${lobbyId}`), {}, httpOptions).subscribe(value => console.log(value))
  }
  deleteLobby(lobbyId: number){
    return this.http.delete(getUrl(`Lobby/deleteLobby/${lobbyId}`), httpOptions).subscribe(value => console.log(value))
  }
}



