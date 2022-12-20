import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { LoginComponent } from './login/login.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import { AuthService } from "./shared/services/auth/auth.service";
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { PlaceownerComponent } from './placeowner/placeowner.component';
import { RegisterComponent } from './register/register.component';
import { SystemReportComponent } from './system-report/system-report.component';
import { UserReportComponent } from './user-report/user-report.component';
import { LobbiesListComponent } from './client/lobbies/lobbies-list/lobbies-list.component';
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { AdminGetModeratorsComponent } from './admin/admin-get-moderators/admin-get-moderators.component';
import { AdminCreateModeratorComponent } from './admin/admin-create-moderator/admin-create-moderator.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { AdminGetModeratorComponent } from './admin/admin-get-moderator/admin-get-moderator.component';
import { HomeComponent } from './home/home.component';
import {MatSelectModule} from "@angular/material/select";
import { PlacesListComponent } from './placeowner/places/places-list/places-list.component';
import { RegisterPlaceownerComponent } from './placeowner/register-placeowner/register-placeowner.component';
import { CreatePlaceComponent } from './placeowner/places/create-place/create-place.component';
import { PlaceDetailsComponent } from './placeowner/places/place-details/place-details.component';
import { PlacesComponent } from './placeowner/places/places.component';
import { ModeratorUsersComponent } from "./moderator/moderator-users/moderator-users.component";
import { ModeratorComponent } from "./moderator/moderator.component";
import { ModeratorReportsComponent } from "./moderator/moderator-reports/moderator-reports.component";
import { ModeratorUsersListComponent } from './moderator/moderator-users/moderator-users-list/moderator-users-list.component';
import { ModeratorUpdateUserComponent } from './moderator/moderator-users/moderator-update-user/moderator-update-user.component';
import { ModeratorPlaceOwnersComponent } from './moderator/moderator-place-owners/moderator-place-owners.component';
import { ModeratorPlaceOwnersListComponent } from './moderator/moderator-place-owners/moderator-place-owners-list/moderator-place-owners-list.component';
import { ModeratorUpdatePlaceOwnerComponent } from './moderator/moderator-place-owners/moderator-update-place-owner/moderator-update-place-owner.component';
import { ModeratorUserReportsComponent } from './moderator/moderator-user-reports/moderator-user-reports.component';
import { ModeratorUserReportsListComponent } from './moderator/moderator-user-reports/moderator-user-reports-list/moderator-user-reports-list.component';
import { AdminSystemReportsComponent } from './admin/admin-system-reports/admin-system-reports.component';
import { AdminSystemReportsListComponent } from './admin/admin-system-reports/admin-system-reports-list/admin-system-reports-list.component';
import { LobbiesComponent } from './client/lobbies/lobbies.component';
import { FriendsComponent } from './client/friends/friends.component';
import { OwnerLobbiesListComponent } from './client/lobbies/lobbies-list/owner-lobbies-list/owner-lobbies-list.component';
import { GuestLobbiesListComponent } from './client/lobbies/lobbies-list/guest-lobbies-list/guest-lobbies-list.component';
import { CreateLobbyComponent } from './client/lobbies/create-lobby/create-lobby.component';
import { LobbiesNavComponent } from './client/lobbies/lobbies-nav/lobbies-nav.component';
import { LobbiesInvitesComponent } from './client/lobbies/lobbies-invites/lobbies-invites.component';
import { OwnerLobbyDetailsComponent } from './client/lobbies/owner-lobby-details/owner-lobby-details.component';
import { OwnerLobbyDetailsNavComponent } from './client/lobbies/owner-lobby-details/owner-lobby-details-nav/owner-lobby-details-nav.component';
import { OwnerLobbyDetailsDataComponent } from './client/lobbies/owner-lobby-details/owner-lobby-details-data/owner-lobby-details-data.component';
import { OwnerLobbyDetailsGuestListComponent } from './client/lobbies/owner-lobby-details/owner-lobby-details-guest-list/owner-lobby-details-guest-list.component';
import { OwnerLobbyDetailsPlaceReservationComponent } from './client/lobbies/owner-lobby-details/owner-lobby-details-place-reservation/owner-lobby-details-place-reservation.component';
import { CreateLobbyMapComponent } from './client/lobbies/create-lobby/create-lobby-map/create-lobby-map.component'
import {AgmCoreModule} from "@agm/core";
import { InviteFriendToLobbyDialogComponent } from './client/lobbies/owner-lobby-details/owner-lobby-details-guest-list/invite-friend-to-lobby-dialog/invite-friend-to-lobby-dialog.component';
import { FriendsNavComponent } from './client/friends/friends-nav/friends-nav.component';
import { RequestsToFriendListComponent } from './client/friends/requests-to-friend-list/requests-to-friend-list.component';
import { ReservationsComponent } from './placeowner/places/reservations/reservations.component';
import { ReservationsForDayComponent } from './placeowner/places/reservations/reservations-for-day/reservations-for-day.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { ClientHomeMapComponent } from './client/client-home/client-home-map/client-home-map.component';
import { ClientHomePublicLobbiesListComponent } from './client/client-home/client-home-public-lobbies-list/client-home-public-lobbies-list.component';
import { GuestLobbyDetailsComponent } from './client/lobbies/guest-lobby-details/guest-lobby-details.component';
import { GuestLobbyNavComponent } from './client/lobbies/guest-lobby-details/guest-lobby-nav/guest-lobby-nav.component';
import { GuestLobbyDataComponent } from './client/lobbies/guest-lobby-details/guest-lobby-data/guest-lobby-data.component';
import { GuestLobbyGuestListComponent } from './client/lobbies/guest-lobby-details/guest-lobby-guest-list/guest-lobby-guest-list.component';
import { GuestLobbyPlaceComponent } from './client/lobbies/guest-lobby-details/guest-lobby-place/guest-lobby-place.component';
import { SendInvitationToFriendComponent } from './client/friends/send-invitation-to-friend/send-invitation-to-friend.component';
import {MyFriendsListComponent} from "./client/friends/my-friends-list/my-friends-list.component";
import {ReportsComponent} from "./client/reports/reports.component";
import { ReportsNavComponent } from './client/reports/reports-nav/reports-nav.component';
import { RequestedReservationComponent } from './placeowner/places/reservations/requested-reservation/requested-reservation.component';
import { AdminUpdateSystemReportComponent } from './admin/admin-system-reports/admin-update-system-report/admin-update-system-report.component';
import { ModeratorUpdateUserReportComponent } from './moderator/moderator-user-reports/moderator-update-user-report/moderator-update-user-report.component';
// @ts-ignore
@NgModule({
  declarations: [
    MyFriendsListComponent,
    ReportsComponent,
    AppComponent,
    LoginComponent,
    AdminComponent,
    ClientComponent,
    PlaceownerComponent,
    RegisterComponent,
    SystemReportComponent,
    UserReportComponent,
    LobbiesListComponent,
    AdminGetModeratorsComponent,
    AdminCreateModeratorComponent,
    AdminGetModeratorComponent,
    HomeComponent,
    PlacesListComponent,
    RegisterPlaceownerComponent,
    CreatePlaceComponent,
    PlaceDetailsComponent,
    PlacesComponent,
    ModeratorComponent,
    ModeratorUsersComponent,
    ModeratorReportsComponent,
    ModeratorUsersListComponent,
    ModeratorUpdateUserComponent,
    ModeratorPlaceOwnersComponent,
    ModeratorPlaceOwnersListComponent,
    ModeratorUpdatePlaceOwnerComponent,
    ModeratorUserReportsComponent,
    ModeratorUserReportsListComponent,
    AdminSystemReportsComponent,
    AdminSystemReportsListComponent,
    LobbiesComponent,
    LobbiesListComponent,
    FriendsComponent,
    OwnerLobbiesListComponent,
    GuestLobbiesListComponent,
    CreateLobbyComponent,
    LobbiesNavComponent,
    LobbiesInvitesComponent,
    OwnerLobbyDetailsComponent,
    OwnerLobbyDetailsNavComponent,
    OwnerLobbyDetailsDataComponent,
    OwnerLobbyDetailsGuestListComponent,
    OwnerLobbyDetailsPlaceReservationComponent,
    CreateLobbyMapComponent,
    InviteFriendToLobbyDialogComponent,
    FriendsNavComponent,
    RequestsToFriendListComponent,
    ReservationsComponent,
    ReservationsForDayComponent,
    ClientHomeComponent,
    ClientHomeMapComponent,
    ClientHomePublicLobbiesListComponent,
    GuestLobbyDetailsComponent,
    GuestLobbyNavComponent,
    GuestLobbyDataComponent,
    GuestLobbyGuestListComponent,
    GuestLobbyPlaceComponent,
    SendInvitationToFriendComponent,
    ReportsNavComponent,
    RequestedReservationComponent,
    AdminUpdateSystemReportComponent,
    ModeratorUpdateUserReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'Tu bedzie Api KEY',
      libraries: ['places']
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
