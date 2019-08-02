import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  database = firebase.database();
  Name;
  Surname;
  userID;
  Email;

  name;
  cat_name;
  new_id;
  constructor() { }
  logIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    }).then((category) => {
    });
  }

  getID(Q) {
    this.new_id = Q.ID;
  }

  Return_ID() {
    return this.new_id;
  }

  signUp(name,surname,email,password) {
    firebase.auth().createUserWithEmailAndPassword(email,password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    }).then((user) => {
      console.log(user);
      this.userID = user['user'].uid;
      this.Email = user['user'].email;
      console.log(user['user'].uid);

      firebase.database().ref('users/' + this.userID).set({
        username: name,
        email: this.Email,
      }),(error) => {
        if(error){
          console.log(error);
        }else{
          console.log("Data Saved");
        }
      };
    });
  }

  resetPassord() {}

  logOut() {}

  deleteAccount() {}
}
