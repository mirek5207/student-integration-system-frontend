import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {PlaceownerComponent} from "./placeowner/placeowner.component";
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
import {ClientComponent} from "./client/client.component";
import {LobbiesComponent} from "./client/lobbies/lobbies.component";
import {LobbiesListComponent} from "./client/lobbies/lobbies-list/lobbies-list.component";
import {LobbiesInvitesComponent} from "./client/lobbies/lobbies-invites/lobbies-invites.component";
import {CreateLobbyComponent} from "./client/lobbies/create-lobby/create-lobby.component";
import {OwnerLobbyDetailsComponent} from "./client/lobbies/owner-lobby-details/owner-lobby-details.component";
import {OwnerLobbyDetailsDataComponent} from "./client/lobbies/owner-lobby-details/owner-lobby-details-data/owner-lobby-details-data.component";
import {
  OwnerLobbyDetailsGuestListComponent
} from "./client/lobbies/owner-lobby-details/owner-lobby-details-guest-list/owner-lobby-details-guest-list.component";
import {
  OwnerLobbyDetailsPlaceReservationComponent
} from "./client/lobbies/owner-lobby-details/owner-lobby-details-place-reservation/owner-lobby-details-place-reservation.component";
import {FriendsComponent} from "./client/friends/friends.component";
import {ClientHomeComponent} from "./client/client-home/client-home.component";
import {GuestLobbyDetailsComponent} from "./client/lobbies/guest-lobby-details/guest-lobby-details.component";
import {
  GuestLobbyPlaceComponent
} from "./client/lobbies/guest-lobby-details/guest-lobby-place/guest-lobby-place.component";
import {
  GuestLobbyDataComponent
} from "./client/lobbies/guest-lobby-details/guest-lobby-data/guest-lobby-data.component";
import {
  GuestLobbyGuestListComponent
} from "./client/lobbies/guest-lobby-details/guest-lobby-guest-list/guest-lobby-guest-list.component";
import {
  SendInvitationToFriendComponent
} from "./client/friends/send-invitation-to-friend/send-invitation-to-friend.component";
import {MyFriendsListComponent} from "./client/friends/my-friends-list/my-friends-list.component";
import {
  RequestsToFriendListComponent
} from "./client/friends/requests-to-friend-list/requests-to-friend-list.component";
import {SystemReportComponent} from "./system-report/system-report.component";
import {ReportsComponent} from "./client/reports/reports.component";
import {UserReportComponent} from "./user-report/user-report.component";
import {ReservationsComponent} from "./placeowner/places/reservations/reservations.component";
import {PlacesListComponent} from "./placeowner/places/places-list/places-list.component";
import {ReservationsForDayComponent} from "./placeowner/places/reservations/reservations-for-day/reservations-for-day.component";
import {
  RequestedReservationComponent
} from "./placeowner/places/reservations/requested-reservation/requested-reservation.component";

const routes: Routes = [
  { path: 'client',
    component: ClientComponent,
    children: [
      {path: '',
        component: ClientHomeComponent,
      },
      {path: 'lobbies',
        component: LobbiesComponent,
        children: [
          {path: '', component: LobbiesListComponent},
          {path: 'invitations', component: LobbiesInvitesComponent},
          {path: 'create', component: CreateLobbyComponent},
          {path: ':id',
            component: OwnerLobbyDetailsComponent,
            children: [
              {path: '', component: OwnerLobbyDetailsDataComponent},
              {path: 'guests', component: OwnerLobbyDetailsGuestListComponent},
              {path: 'place/reservation', component: OwnerLobbyDetailsPlaceReservationComponent}
            ]
          },
          {path: 'asGuest/:id',
            component: GuestLobbyDetailsComponent,
            children: [
              {path: '', component: GuestLobbyDataComponent},
              {path: 'guests', component: GuestLobbyGuestListComponent},
              {path: 'place', component: GuestLobbyPlaceComponent}
            ]
          }
        ]
      },
      {path: 'friends', component: FriendsComponent,
      children: [
        {path:'', component: MyFriendsListComponent},
        {path:'inviteUser', component: SendInvitationToFriendComponent},
        {path:'friendshipRequests', component: RequestsToFriendListComponent},
      ]},
      {path: 'report',
        component: ReportsComponent,
        children: [
          {path:'', component: UserReportComponent},
          {path:'system', component: SystemReportComponent}
        ]

      }
    ]
  },
  { path: 'admin',
    component: AdminComponent,
    children: [
      {path: '', component: AdminGetModeratorsComponent},
      {path: 'createModerator', component: AdminCreateModeratorComponent},
      {path: 'getModerator/:id', component: AdminGetModeratorComponent},
      {path: 'systemReport', component: AdminSystemReportsComponent}
    ]
  },
  { path: 'placeowner',
    component: PlaceownerComponent,
    children: [
      {path: '',
        component: PlacesComponent,
        children: [
          {path: '', component: PlacesListComponent},
          {path: 'reservation',
            component: ReservationsComponent,
            children: [
              {path: '' , component: ReservationsForDayComponent},
              {path: 'requestedReservation' , component: RequestedReservationComponent},
            ]
          }
        ]
      },
      {path: 'reports',
        component: SystemReportComponent
      },
      {path: 'create', component: CreatePlaceComponent},
    ]
  },
  { path: 'moderator',
    component: ModeratorComponent,
    children: [
      {path: 'clients', component: ModeratorUsersComponent},
      {path: 'owners', component: ModeratorPlaceOwnersComponent},
      {path: '', component: ModeratorUserReportsComponent},
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
