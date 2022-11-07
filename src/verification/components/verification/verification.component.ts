import { Component, Output, EventEmitter, Input } from '@angular/core';
import { PasswordModel } from 'src/verification/model/password-model';
PasswordModel;
@Component({
  selector: 'app-verification-component',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css'],
})
export class VerificationComponent {

  @Input() password = new PasswordModel();
  @Output() passwordChange = new EventEmitter<PasswordModel>();
  constructor() {
  }
  
  changeStatus(){
    this.passwordChange.emit(this.password);
  }

}
