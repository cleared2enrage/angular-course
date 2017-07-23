import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private firebaseConfig = {
    apiKey: "AIzaSyCVEf56Pjokssr3DqGHCocus2nADxHeHgs",
    authDomain: "learn-angular-87635.firebaseapp.com",
    databaseURL: "https://learn-angular-87635.firebaseio.com",
    projectId: "learn-angular-87635",
    storageBucket: "learn-angular-87635.appspot.com",
    messagingSenderId: "663234677278"
  };

  ngOnInit(): void {
    firebase.initializeApp(this.firebaseConfig);
  }
}
