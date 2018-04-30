import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GuessANumberComponent } from './guess-a-number/guess-a-number.component';
import { ProvideANumberComponent } from './provide-a-number/provide-a-number.component';


@NgModule({
  declarations: [
    AppComponent,
    GuessANumberComponent,
    ProvideANumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
