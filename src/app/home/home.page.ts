import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(public quizService:QuizService) {
    /*var king = firebase.database().ref().child('Categories')

    king.on("child_added",snap => {
      this.name = snap.child("Name").val();
      this.questions.push({
        Name: this.name
      })
    })*/
  }
}
