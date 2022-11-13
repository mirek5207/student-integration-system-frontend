import { Injectable } from '@angular/core';
import {navlinks as AdminNavLinks} from "../../navigation/AminNavLinks";
import {navlinks as ModeratorNavLinks} from "../../navigation/moderatorNavLinks";
import {navlinks as PlaceOwnerNavLinks} from "../../navigation/placeOwnerNavLinks";
import {navlinks as UserNavLinks} from "../../navigation/userNavLinks";
import {TokenService} from "../token/token.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private tokenService: TokenService, private router: Router) { }

  getNavLinks(): any{
    switch(this.tokenService.getRole()) {
      case 'Admin':
        return AdminNavLinks
      case 'Moderator':
        return ModeratorNavLinks
      case 'PlaceOwner':
        return PlaceOwnerNavLinks
      case 'Client':
        return UserNavLinks
      default:
        return []
    }
  }

  async navigate(){
    switch(this.tokenService.getRole()) {
      case 'Admin':
        await this.router.navigateByUrl('/admin');
        break;
      case 'Moderator':
        await this.router.navigateByUrl('/moderator');
        break;
      case 'PlaceOwner':
        await this.router.navigateByUrl('/placeowner');
        break;
      case 'Client':
        await this.router.navigateByUrl('/client');
        break;
      default:
        await this.router.navigateByUrl('/login');
    }
  }
}
