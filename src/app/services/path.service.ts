import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class PathService {

  constructor(private afAuth: AngularFireAuth, private userService: UserService, private router: Router) { }

  async login(provider: any): Promise<void> {
    await this.afAuth.signInWithPopup(provider.setCustomParameters({
      prompt: 'select_account'
    })).then(
      credential => {
        if (credential) {
          this.userService.UpdateUser(credential.user);

          const returnUrl = localStorage.getItem('returnUrl');
          this.router.navigateByUrl(returnUrl);
        }
      }
    );
  }



  logout(): void {
    this.afAuth.signOut();
    localStorage.clear();
  }
}
