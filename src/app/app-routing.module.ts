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
import {AdminGetModeratorComponent} from "./admin/admin-get-moderator/admin-get-moderator.component";
import {CreatePlaceComponent} from "./placeowner/places/create-place/create-place.component";
import {PlacesComponent} from "./placeowner/places/places.component";
import {ModeratorComponent} from "./moderator/moderator.component";
import {ModeratorUsersComponent} from "./moderator/moderator-users/moderator-users.component";
import {ModeratorPlaceOwnersComponent} from "./moderator/moderator-place-owners/moderator-place-owners.component";
import {ModeratorUserReportsComponent} from "./moderator/moderator-user-reports/moderator-user-reports.component";
import {AdminSystemReportsComponent} from "./admin/admin-system-reports/admin-system-reports.component";

const routes: Routes = [
  { path: 'user/lobbies', component: LobbyComponent},
  { path: 'createAccount', component: RegisterComponent},
  { path: 'placeowner', component: PlaceownerComponent },
  { path: 'client', component: ClientComponent },
  { path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'getModerators', component: AdminGetModeratorsComponent},
      {path: 'createModerator', component: AdminCreateModeratorComponent},
      {path: 'getModerator/:id', component: AdminGetModeratorComponent},
      {path: 'systemReport', component: AdminSystemReportsComponent}
    ]
  },
  { path: 'placeowner',
    component: PlaceownerComponent,
    children: [
      {path: 'places', component: PlacesComponent},
      {path: 'create', component: CreatePlaceComponent},
      //{path: 'createModerator', component: AdminCreateModeratorComponent},
      //{path: 'getModerator/:id', component: AdminGetModeratorComponent}
    ]
  },
  { path: 'moderator',
    component: ModeratorComponent,
    children: [
      {path: 'clients', component: ModeratorUsersComponent},
      {path: 'owners', component: ModeratorPlaceOwnersComponent},
      {path: 'users/reports', component: ModeratorUserReportsComponent},
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
