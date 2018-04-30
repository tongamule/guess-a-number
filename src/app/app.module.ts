import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GuessANumberComponent } from './guess-a-number/guess-a-number.component';
import { ProvideANumberComponent } from './provide-a-number/provide-a-number.component';
import { NumberHelperService } from './services';

@NgModule({
  declarations: [AppComponent, GuessANumberComponent, ProvideANumberComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [NumberHelperService],
  bootstrap: [AppComponent]
})
export class AppModule {}
