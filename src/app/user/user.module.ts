import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { DriverComponent } from './driver/driver.component';
import { UserRoutingModule } from './user-routing.module';
import { DriversService } from '@core/interceptor/drivers.service';
import { UserComponent } from './user.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';


@NgModule({
  declarations: [UserComponent, DriverComponent, User1Component, User2Component],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers:[
    DriversService
  ]
})
export class UserModule { }
