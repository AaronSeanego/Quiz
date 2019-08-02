import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  email;
  password;
  constructor(public logInService:QuizService) { }

  ngOnInit() {
  }

  Log_In() {
    this.logInService.logIn(this.email, this.password);
  }

}
