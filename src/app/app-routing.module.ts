import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { LoginComponent } from './login/login.component';
import { DashboardRespoComponent } from './respo/dashboard-respo/dashboard-respo.component';
import { TableComponent } from './shared/table/table.component';
import { AddClientComponent } from './view/add-client/add-client.component';
import { AddInterventionComponent } from './view/add-intervention/add-intervention.component';
import { AddTeamComponent } from './view/add-team/add-team.component';
import { AddUserComponent } from './view/add-user/add-user.component';
import { ClientComponent } from './view/client/client.component';
import { DeleteChefEquipeComponent } from './view/delete-chef-equipe/delete-chef-equipe.component';
import { DeleteClientComponent } from './view/delete-client/delete-client.component';
import { DeleteInterventionComponent } from './view/delete-intervention/delete-intervention.component';
import { DeleteTeamComponent } from './view/delete-team/delete-team.component';
import { DeleteUserComponent } from './view/delete-user/delete-user.component';
import { DetailsInterventionComponent } from './view/details-intervention/details-intervention.component';
import { InterventionsListComponent } from './view/interventions-list/interventions-list.component';
import { ModifyChefEquipeComponent } from './view/modify-chef-equipe/modify-chef-equipe.component';
import { ModifyClientComponent } from './view/modify-client/modify-client.component';
import { ModifyInterventionComponent } from './view/modify-intervention/modify-intervention.component';
import { ModifyTeamComponent } from './view/modify-team/modify-team.component';
import { ModifyUserComponent } from './view/modify-user/modify-user.component';
import { TeamsComponent } from './view/teams/teams.component';
import { UsersListComponent } from './view/users-list/users-list.component';
import { WelcomComponent } from './welcom/welcom.component';

const routes: Routes = [
{
  path:'',
  redirectTo:'/welcom',
  pathMatch:'full'
},
{
 path:'welcom',
 component: WelcomComponent
},
{
  path:'loginAdmin',
  component: LoginComponent
},
{
  path:'loginResonsable',
  component: LoginComponent
},
{
  path:'dashboardAdmin',
  component: DashboardAdminComponent,
  children: [
    {
      path:'users',
      component: UsersListComponent
    },
    {
      path:'modifyUser/:id',
      component: ModifyUserComponent
    },
    {
      path:'modifyChefEquipe/:id',
      component: ModifyChefEquipeComponent
    },
    {
      path:'addUser',
      component: AddUserComponent
    },
    {
      path:'deleteUser/:id',
      component: DeleteUserComponent
    },
    {
      path:'deleteChefEquipe/:id',
      component: DeleteChefEquipeComponent
    }
  ]
},
{
  path:'dashboardRespo',
  component: DashboardRespoComponent,
  children: [
    {
      path:'interventions',
      component: InterventionsListComponent
    },
    {
      path:'addIntervention',
      component: AddInterventionComponent
    },
    {
      path:'modifyIntervention/:id',
      component: ModifyInterventionComponent
    },
    {
      path:'deleteIntervention/:id',
      component: DeleteInterventionComponent
    },
    {
      path:'InterventionDetails/:id',
      component: DetailsInterventionComponent
    },
    {
      path:'teams',
      component: TeamsComponent
    },
    {
      path:'addTeam',
      component: AddTeamComponent
    },
    {
      path:'modifyTeam/:id',
      component: ModifyTeamComponent
    },
    {
      path:'deleteTeam/:id',
      component : DeleteTeamComponent
    },
    {
      path:'clients',
      component: ClientComponent
    },
    {
      path:'addClient',
      component: AddClientComponent
    },
    {
      path:'modifyClient/:id',
      component: ModifyClientComponent
    },
    {
      path:'deleteClient/:id',
      component : DeleteClientComponent
    }
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
