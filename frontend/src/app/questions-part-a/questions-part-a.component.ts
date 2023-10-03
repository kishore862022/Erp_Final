import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-questions-part-a',
  templateUrl: './questions-part-a.component.html',
  styleUrls: ['./questions-part-a.component.css']
})
export class QuestionsPartAComponent {
    questionAnswers: { register: string, marks: number, q: number[] }[] = [];

  constructor(private router : Router) {
    // Initialize the questionAnswers array with empty objects
    for (let i = 0; i < 10; i++) {
      this.questionAnswers.push({ register: `R${i + 1}`, marks: 0, q: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
    }
  }
checkValue(value: number) {
        if (value > 2) {
            alert('Mark should be less than 2');
        }
    }
    redirectToQuestionPartB(){
        this.router.navigate(['/questions_part_B']);
      }
}