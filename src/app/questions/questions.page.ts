import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import * as firebase from 'firebase';
import { ngDevModeResetPerfCounters } from '@angular/core/src/render3/ng_dev_mode';
import { computeStackId } from '@ionic/angular/dist/directives/navigation/stack-utils';
import { ChildActivationEnd } from '@angular/router';

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
  Answer;
  constructor(public questionService:QuizService) {
    this.ID = this.questionService.Return_ID();
    var rootRef = firebase.database().ref('Questions/' + this.ID)
    rootRef.once('value',(snapshot) => {
      let value = snapshot.val();
        for(var key in value){
          this.Counter++;
          this.Questions.push({
            Counter: this.Counter,
            Question: key,
            Answer: Object.keys(value[key])
          });

          this.Answers = Object.keys(value[key]);
        }
    })
  }

  setData(event){
    console.log(event.details.value);
  }

  ngOnInit() {
  }

}
