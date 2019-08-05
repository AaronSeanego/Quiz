import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { FormBuilder,Validators, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  email;
  password;
  logInForm:FormGroup
  constructor(public logInService:QuizService) {
  }

  ngOnInit() {
  }

  Log_In() {
    this.logInService.logIn(this.email, this.password);
  }

}
