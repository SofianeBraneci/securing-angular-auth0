import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public username: string  | undefined = "";
  public authenticated : boolean = false;

  constructor(public readonly auth : AuthService){}

  ngOnInit(): void {
      this.auth.user$.subscribe((u : User | undefined | null )=> {
          if(u){
            this.authenticated = true
            this.username = u?.name
          }
          
      })
  }

  public login(){
    this.auth.loginWithRedirect()
  }

  signout() {
    this.auth.logout({ logoutParams : {returnTo: environment.auth.authorizationParams.logout_uri} })
  }

  

}
