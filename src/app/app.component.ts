import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature: string = 'recipes'

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCWY41--6BWDh--wul7Q0_UQBLe3DCoLVU",
      authDomain: "ngrecipe-e4893.firebaseapp.com",
    })
  }

}
