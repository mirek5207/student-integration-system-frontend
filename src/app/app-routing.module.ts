import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {ClientComponent} from "./client/client.component";
import {PlaceownerComponent} from "./placeowner/placeowner.component";
import {RegisterComponent} from "./register/register.component";
import {LobbyComponent} from "./lobby/lobby.component";
import {AdminGetModeratorsComponent} from "./admin/admin-get-moderators/admin-get-moderators.component";
import {AdminCreateModeratorComponent} from "./admin/admin-create-moderator/admin-create-moderator.component";

const routes: Routes = [
  { path: 'user/lobbies', component: LobbyComponent},
  { path: 'createAccount', component: RegisterComponent},
  { path: 'placeowner', component: PlaceownerComponent },
  { path: 'client', component: ClientComponent },
  { path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'getModerators', component: AdminGetModeratorsComponent},
      {path: 'createModeratorAccount', component: AdminCreateModeratorComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
