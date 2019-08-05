import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {QuizService} from './quiz.service';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBR8mS2nMw-coBmIHrCYmVeH8KcdXLtz3Y",
  authDomain: "quiz-d6f15.firebaseapp.com",
  databaseURL: "https://quiz-d6f15.firebaseio.com",
  projectId: "quiz-d6f15",
  storageBucket: "",
  messagingSenderId: "748032026327",
  appId: "1:748032026327:web:a6a59f0cf4918d47",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,ReactiveFormsModule],
  providers: [
    StatusBar,
    QuizService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
