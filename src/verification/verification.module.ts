import { NgModule } from '@angular/core';
import { PasswordBarComponent } from './components/password-bar/password-bar.component';
import { VerificationComponent } from './components/verification/verification.component';
import { VerificationPageComponent } from './pages/verification-page/verification-page.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [VerificationComponent,VerificationPageComponent,PasswordBarComponent],
    imports:[FormsModule,CommonModule ]
    ,exports:[
      VerificationPageComponent
    ]
  })
  export class VerificationModule {}