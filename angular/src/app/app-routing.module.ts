import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListallUsersComponent } from './listall-users/listall-users.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { ListallPassengersComponent } from './listall-passengers/listall-passengers.component';
import { ListPassengerComponent } from './list-passenger/list-passenger.component';

const routes: Routes = [
  
  {path:'add-user', component:AddUserComponent},
  { path:'list-user', component:ListUserComponent},
  {path:'listall-users', component:ListallUsersComponent},
  {path:"add-passenger" ,component:AddPassengerComponent},
  {path:"listall-passengers" ,component:ListallPassengersComponent},
  {path:'list-passenger', component:ListPassengerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
