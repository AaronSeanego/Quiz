import { Component, OnInit, ViewChild } from '@angular/core';
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
  ID;
  Answered = [];
  Ans
  constructor(public questionService:QuizService) {
    this.ID = this.questionService.Return_ID();
    this.Questions = this.questionService.ViewQuiz();
  }

  ngOnInit() {
  }

  setData(event,quiz) {
    this.Ans = event.detail.value;
    let index01 = this.Questions.indexOf(quiz);
    let index02 = this.Questions[index01].Answer.indexOf(event)
    if(this.Questions[quiz.Answer][0]){
      console.log("Score: " + false);
    }else{
      console.log("Score: " + true);
    }
  }

}
