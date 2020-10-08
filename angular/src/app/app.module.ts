import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from './service/userservice';
import { PassengerService } from './service/passengerservice';

import { AddUserComponent } from './add-user/add-user.component';
import { ListallUsersComponent } from './listall-users/listall-users.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { ListallPassengersComponent } from './listall-passengers/listall-passengers.component';
import { ListPassengerComponent } from './list-passenger/list-passenger.component';


@NgModule({
  declarations: [
    AppComponent,
    
    AddUserComponent,
    ListallUsersComponent,
    ListUserComponent,
    AddPassengerComponent,
    ListallPassengersComponent,
    ListPassengerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient,UserService,PassengerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
