import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VerificationModule } from 'src/verification/verification.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VerificationModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
