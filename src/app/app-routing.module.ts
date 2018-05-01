import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuessANumberComponent } from './guess-a-number/guess-a-number.component';
import { ProvideANumberComponent } from './provide-a-number/provide-a-number.component';

const routes: Routes = [
  { path: 'guess-a-number', component: GuessANumberComponent },
  { path: 'provide-a-number', component: ProvideANumberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
