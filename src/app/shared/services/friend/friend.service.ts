import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {getUrl, httpOptions} from "../../API/api";

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient) { }

  getFriendships(friendshipId: number){
    const params = new HttpParams()
      .set('friendshipId', friendshipId)
    return this.http.get(getUrl(`Friend/getAllFriendship`), {
      headers: httpOptions.headers,
      params: params
    })
  }

  getAllFriendships(userId: number){
    const params = new HttpParams()
      .set('userId', userId)
    return this.http.get<any[]>(getUrl(`Friend/getAllFriendships`), {
      headers: httpOptions.headers,
      params: params
    })
  }

  getAllInvites(userId: number){
    const params = new HttpParams()
      .set('userId', userId)
    return this.http.get<any[]>(getUrl(`Friend/getAllInvites`), {
      headers: httpOptions.headers,
      params: params
    })
  }

  getAllInvitedClient(userId: number){
    const params = new HttpParams()
      .set('userId', userId)
    return this.http.get<any[]>(getUrl(`Friend/getAllInvitedClients`), {
      headers: httpOptions.headers,
      params: params
    })
  }

  getAllFriendsToLobby(userId: number, lobbyId: number){
    const params = new HttpParams()
      .set('userId', userId)
      .set('lobbyId', lobbyId)
    return this.http.get<any[]>(getUrl(`Friend/getAllFriendsToLobby`), {
      headers: httpOptions.headers,
      params: params
    })
  }

  sendInvite(userId: number, friendUserId: number){
    const params = new HttpParams()
      .set('userId', userId)
      .set('friendUserId', friendUserId)
    return this.http.post(getUrl(`Friend/sendInvite`),{},{
      headers: httpOptions.headers,
      params: params
    })
  }

  acceptInvite(friendshipId: number){
    const params = new HttpParams()
      .set('friendshipId', friendshipId)
    return this.http.put(getUrl(`Friend/acceptInvite`),{},{
      headers: httpOptions.headers,
      params: params
    })
  }

  rejectInvite(friendshipId: number){
    const params = new HttpParams()
      .set('friendshipId', friendshipId)
    return this.http.delete(getUrl(`Friend/rejectInvite`),{
      headers: httpOptions.headers,
      params: params
    })
  }

  deleteFriend(friendshipId: number){
    const params = new HttpParams()
      .set('friendshipId', friendshipId)
    return this.http.delete(getUrl(`Friend/deleteFriend`),{
      headers: httpOptions.headers,
      params: params
    })
  }
}
