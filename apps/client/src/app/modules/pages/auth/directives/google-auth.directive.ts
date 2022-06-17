import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Directive({
  selector: '[kanbanGoogleAuth]'
})
export class GoogleAuthDirective {
  constructor(private angularFireAuth: AngularFireAuth) { }

  @HostListener('click') public onClick() {
    this.angularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
