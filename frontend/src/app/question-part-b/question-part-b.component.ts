import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-part-b',
  templateUrl: './question-part-b.component.html',
  styleUrls: ['./question-part-b.component.css']
})
export class QuestionsPartBComponent {
  questionAnswers: { [key: string]: { a: number | null, b: number | null } } = {};

  constructor() {
    // Initialize the values to null when the component is created
    const questions = ['11', '12', '13', '14', '15'];
    for (const question of questions) {
      this.questionAnswers[question] = { a: null, b: null };
    }
  }

  checkValue(value: number) {
    if (value > 16) {
      alert('Mark should be less than 16');
    }
  }

  disableCorrespondingInput(question: string, part: 'a' | 'b') {
    const correspondingPart = part === 'a' ? 'b' : 'a';

    // Check if the current input has a value
    if (this.questionAnswers[question][part] !== null) {
      // Disable the corresponding input
      this.questionAnswers[question][correspondingPart] = null;
    }
  }
}