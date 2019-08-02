import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name;
  surname;
  email;
  password;
  confirm_password;
  constructor(public registerService:QuizService) { }

  ngOnInit() {
  }

  registerUser() {
    this.registerService.signUp(this.name,this.surname,this.email,this.password);
  }
}
