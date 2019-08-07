import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { FormBuilder,Validators, FormGroup} from '@angular/forms'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  email;
  password;
  logInForm:FormGroup
  constructor(public logInService:QuizService,public alertController:AlertController) {
  }

  ngOnInit() {
  }

  Log_In() {
    this.logInService.logIn(this.email, this.password);
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Forget Password?!',
      inputs: [
        {
          name: 'Email',
          type: 'text',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (Email) => {
            console.log(Email);
          }
        }
      ]
    });

    await alert.present();
  }


}
