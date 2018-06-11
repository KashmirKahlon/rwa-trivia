import { Component, Input, Output, OnInit, OnDestroy, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { Question, Answer, User } from '../../../model';

@Component({
  selector: 'game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.scss']
})
export class GameQuestionComponent implements OnInit, OnDestroy {
  @Input() questionIndex: number;
  @Input() question: Question;
  @Input() categoryName: string;
  @Input() timer: number;
  @Input() continueNext: boolean;
  @Input() correctCount: number;
  @Input() questionRound: number;
  @Input() noOfQuestions: number;
  @Input() showContinueBtn: boolean;
  @Input() otherPlayer: User;
  @Output() answerClicked = new EventEmitter<number>();
  @Output() okClick = new EventEmitter();
  @Output() continueClicked = new EventEmitter();
  @Output() viewQuestionClicked = new EventEmitter();

  answeredIndex: number;
  correctAnswerIndex: number;
  @ViewChild('overlay') overlay: ElementRef;
  @Input() userDict: { [key: string]: User };

  totalRound = 16;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  answerButtonClicked(answer: Answer, index: number) {
    if (this.answeredIndex >= 0 || this.continueNext)
      return;
    this.answeredIndex = index;
    this.answerClicked.emit(index)
  }

  disableQuestions(correctAnswerIndex: number) {
    this.correctAnswerIndex = correctAnswerIndex;
  }
}
