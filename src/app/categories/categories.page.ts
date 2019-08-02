import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import * as firebase from 'firebase'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  questions = [];
  name;
  id;
  constructor(public categoryService:QuizService) {
    var king = firebase.database().ref().child('Categories')

      king.on("child_added",snap => {
        this.name = snap.child("Name").val();
        this.id = snap.child("ID").val();
        this.questions.push({
        ID: this.id,
        Name: this.name
      })
    })
  }

  ngOnInit() {
  }

  setID(Q) {
    this.categoryService.getID(Q);
  }
}
