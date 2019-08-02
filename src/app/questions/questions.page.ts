import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import * as firebase from 'firebase';
import { ngDevModeResetPerfCounters } from '@angular/core/src/render3/ng_dev_mode';
import { computeStackId } from '@ionic/angular/dist/directives/navigation/stack-utils';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  Questions = [];
  question;
  Quiz_ID;
  ID;
  answer
  Answers = []
  Counter = 0;
  newRoot
  constructor(public questionService:QuizService) {
    this.ID = this.questionService.Return_ID();
    var rootRef = firebase.database().ref('Questions/' + this.ID)
    //  rootRef.once('value').then((snapshot) => {
    //    snapshot.forEach((chidSnapshot) => {
    //     this.question = chidSnapshot.key;
    //     this.answer = chidSnapshot.val()
    //     this.Counter++;

    //      this.Questions.push({
    //        Counter: this.Counter,
    //        Question: this.question
    //       })

    //       this.Answers.push({
    //         Answer: this.answer
    //       })
    //    })
       
    // });
    // this.Answers.forEach((data) =>{
    //   console.log(this.Answers)
    // })

    rootRef.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        this.question = childSnapshot.key;
        this.answer = childSnapshot.val();
        this.Counter++;
        this.Questions.push({
          Counter : this.Counter,
          Question: this.question
        })

        this.Answers.push({
          Answer: this.answer
        })
      })
    })

    console.log(this.Questions);
    this.Answers.forEach((data) => {
      console.log(this.answer);
    })
  }

  ngOnInit() {
  }

}
