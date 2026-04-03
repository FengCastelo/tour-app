import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {
  profile: Profile | undefined;

  constructor(private router: Router) {
    
  }

  navigate() {
    this.router.navigate(['/pages/gallery']);
  }

  loginWithGoogle() {

  }

  isLoggedIn(): boolean{
    return !!this.profile;
  }
}
