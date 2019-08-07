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
  Questions = [];
  Counter = 0;
  name;
  cat_name;
  new_id;
  questions = [];
  id;
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

  resetPassord() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(() => {
      // Email sent.
    }).catch((error) => {
      // An error happened.
    });
  }

  logOut() {}

  deleteAccount() {}

  ViewQuiz () {
    var rootRef = firebase.database().ref('Questions/' + this.new_id)
    rootRef.once('value',(snapshot) => {
      let value = snapshot.val();
        for(var key in value){
          this.Counter++;
          this.Questions.push({
            Counter: this.Counter,
            Question: key,
            Answer: Object.keys(value[key]),
            Value: Object.values(value[key])
          });
        }
    })
    return this.Questions
  }

  Categories() {
    var king = firebase.database().ref().child('Categories')

      king.on("child_added",snap => {
        this.name = snap.child("Name").val();
        this.id = snap.child("ID").val();
        this.questions.push({
        ID: this.id,
        Name: this.name
      })
    })
    return this.questions;
  }
}
