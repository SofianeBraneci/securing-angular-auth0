import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { AuthModule } from '@auth0/auth0-angular';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    AuthModule
  ]
})
export class MainModule { }
