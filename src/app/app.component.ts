import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDIILmuVP-jSH0J1aSyQCyeiM5xmmTTBvE",
  authDomain: "phonic-realm-253507.firebaseapp.com",
  databaseURL: "https://phonic-realm-253507.firebaseio.com",
  projectId: "phonic-realm-253507",
  storageBucket: "phonic-realm-253507.appspot.com",
  messagingSenderId: "485031312864",
  appId: "1:485031312864:web:a3045a559f073b8077bf85"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ProjetGoogleMap';

  constructor() {
    firebase.initializeApp(config);
  }
  
}

