import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {
  
  constructor(private afAuth: AngularFireAuth) {

  }

  @HostListener('click')
  onClick() {
    this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider())
  }

}
