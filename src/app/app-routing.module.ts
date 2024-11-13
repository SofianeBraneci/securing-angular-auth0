import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent as MainLandingComponent } from './main/landing/landing.component';
import { LandingComponent  as WelcomeLandingComponent } from './welcome/landing/landing.component';
import { AuthGuard } from '@auth0/auth0-angular';
const routes: Routes = [
  {
    path: "",
    component: MainLandingComponent,
    title: "Landing"
  }, 
  {
    path: "welcome",
    pathMatch: "full",
    component: WelcomeLandingComponent,
    canActivate: [AuthGuard],
    title: "Welcome"
  },
  {
    path: "**",
    redirectTo:"/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
