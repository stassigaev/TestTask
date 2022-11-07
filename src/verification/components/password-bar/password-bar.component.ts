import { Component, Input, OnInit } from '@angular/core';
import { Difficulty } from 'src/enums/verification-difficulty-enum';
import { PasswordModel } from 'src/verification/model/password-model';

@Component({
  selector: 'app-password-bar',
  templateUrl: './password-bar.component.html',
  styleUrls: ['./password-bar.component.css']
})
export class PasswordBarComponent implements OnInit {

  @Input() password = new PasswordModel();

  get isNormal(){
    return this.password.difficulty === Difficulty.NORMAL;
  }
  get isLess(){
    return this.password.difficulty === Difficulty.LESS;
  }
  get isEasy(){
    return this.password.difficulty === Difficulty.EASY;
  }
  get isMedium(){
    return this.password.difficulty === Difficulty.MEDIUM;
  }
  get isStrong(){
    return this.password.difficulty === Difficulty.STRONG;
  }

  constructor() { }

  ngOnInit() {
  }



}
