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
import { LobbyComponent } from './lobby/lobby.component';
import { LobbiesListComponent } from './lobby/lobbies-list/lobbies-list.component';
import { LobbyDetailsComponent } from './lobby/lobbies-list/lobby-details/lobby-details.component';
import { MapComponent } from './lobby/map/map.component';
import {MatListModule} from "@angular/material/list";
import {LobbyDetailsDialogComponent} from "./lobby/lobbies-list/lobby-details/lobby-details.component";
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
import { ModeratorUserDetailsComponent } from './moderator/moderator-users/moderator-user-details/moderator-user-details.component';
import { ModeratorUsersListComponent } from './moderator/moderator-users/moderator-users-list/moderator-users-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ClientComponent,
    PlaceownerComponent,
    RegisterComponent,
    SystemReportComponent,
    UserReportComponent,
    LobbyComponent,
    LobbiesListComponent,
    LobbyDetailsComponent,
    MapComponent,
    LobbyDetailsDialogComponent,
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
    ModeratorUserDetailsComponent,
    ModeratorUsersListComponent
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
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
