import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomComponent } from './welcom/welcom.component';
import { LoginComponent } from './login/login.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TableComponent } from './shared/table/table.component';
import { UsersListComponent } from './view/users-list/users-list.component';
import { ModifyUserComponent } from './view/modify-user/modify-user.component';
import { DeleteUserComponent } from './view/delete-user/delete-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AddUserComponent } from './view/add-user/add-user.component';
import { DashboardRespoComponent } from './respo/dashboard-respo/dashboard-respo.component';
import { SidebarRespoComponent } from './shared/sidebar-respo/sidebar-respo.component';
import { TeamsComponent } from './view/teams/teams.component';
import { InterventionsListComponent } from './view/interventions-list/interventions-list.component';
import { AddInterventionComponent } from './view/add-intervention/add-intervention.component';
import { ModifyInterventionComponent } from './view/modify-intervention/modify-intervention.component';
import { DeleteInterventionComponent } from './view/delete-intervention/delete-intervention.component';
import { TableInterventionComponent } from './shared/table-intervention/table-intervention.component';
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';

// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';

// import and register filepond file type validation plugin
import * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { DetailsInterventionComponent } from './view/details-intervention/details-intervention.component';
import { AddTeamComponent } from './view/add-team/add-team.component';
import { TableEquipeComponent } from './shared/table-equipe/table-equipe.component';
import { ModifyTeamComponent } from './view/modify-team/modify-team.component';
import { DeleteTeamComponent } from './view/delete-team/delete-team.component';
import { ClientComponent } from './view/client/client.component';
import { AddClientComponent } from './view/add-client/add-client.component';
import { ModifyClientComponent } from './view/modify-client/modify-client.component';
import { DeleteClientComponent } from './view/delete-client/delete-client.component';
import { DeleteChefEquipeComponent } from './view/delete-chef-equipe/delete-chef-equipe.component';
import { ModifyChefEquipeComponent } from './view/modify-chef-equipe/modify-chef-equipe.component';
registerPlugin(FilePondPluginFileValidateType)

@NgModule({
  declarations: [
    AppComponent,
    WelcomComponent,
    LoginComponent,
    DashboardAdminComponent,
    SidebarComponent,
    TableComponent,
    UsersListComponent,
    ModifyUserComponent,
    DeleteUserComponent,
    AddUserComponent,
    DashboardRespoComponent,
    SidebarRespoComponent,
    TeamsComponent,
    InterventionsListComponent,
    AddInterventionComponent,
    ModifyInterventionComponent,
    DeleteInterventionComponent,
    TableInterventionComponent,
    DetailsInterventionComponent,
    AddTeamComponent,
    TableEquipeComponent,
    ModifyTeamComponent,
    DeleteTeamComponent,
    ClientComponent,
    AddClientComponent,
    ModifyClientComponent,
    DeleteClientComponent,
    DeleteChefEquipeComponent,
    ModifyChefEquipeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FilePondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
