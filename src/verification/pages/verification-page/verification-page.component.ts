import { Component,} from '@angular/core';
import { Difficulty } from 'src/enums/verification-difficulty-enum';
import { PasswordModel } from 'src/verification/model/password-model';

@Component({
  selector: 'app-verification-page',
  templateUrl: './verification-page.component.html',
  styleUrls: ['./verification-page.component.css'],
})
export class VerificationPageComponent  {
  password = new PasswordModel();
  onlySymbolRegex = /^[^a-zA-Z0-9]+$/;
  onlyLetterRegex = /^[a-zA-Z]+$/;
  onlyNumberRegex = /^\d+$/;
  symbolRegex = /[^a-zA-Z0-9]/;
  letterRegex = /[a-zA-Z]/;
  numberRegex = /\d/;

  get isOnlySymbols() {
    return this.onlySymbolRegex.test(this.password.text);
  }

  get isOnlyLetters() {
    return this.onlyLetterRegex.test(this.password.text);
  }

  get isOnlyNumbers() {
    return this.onlyNumberRegex.test(this.password.text);
  }

  get isSymbols() {
    return this.symbolRegex.test(this.password.text);
  }

  get isLetters() {
    return this.letterRegex.test(this.password.text);
  }

  get isNumbers() {
    return this.numberRegex.test(this.password.text);
  }

  constructor() {}

  assignPassword(_password: PasswordModel) {
    console.log(this.password.text);
    this.changeStatus();
    this.password = _password;
  }

  changeStatus() {
    if (this.password.text.length > 0 && this.password.text.length < 8) {
      this.password.difficulty = Difficulty.LESS;
    } else if (this.isOnlySymbols || this.isOnlyLetters || this.isOnlyNumbers) {
      this.password.difficulty = Difficulty.EASY;
    } else if (
      (this.isSymbols && this.isLetters && !this.isNumbers) ||
      (this.isLetters && this.isNumbers && !this.isSymbols) ||
      (this.isNumbers && this.isSymbols && !this.isLetters)
    ) {
      this.password.difficulty = Difficulty.MEDIUM;
    } else if (this.isSymbols && this.isLetters && this.isNumbers) {
      this.password.difficulty = Difficulty.STRONG;
    } else {
      this.password.difficulty = Difficulty.NORMAL;
    }
  }
}
