import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
public user: User | undefined = undefined;

constructor(private readonly auth: AuthService){

}


ngOnInit(): void {

  this.auth.user$.subscribe((e : any) => this.user = e)
    
}


}
