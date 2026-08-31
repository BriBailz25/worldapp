import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'world-app';
  name: string = 'Russia';
  capital: string = 'Moscow';
  region: string = 'Europe';
  income: string = 'High income';
  population: string = '146,000,000';
  currency: string = 'Russian Ruble';

  getCountry(event:any) {
    console.log(event.target.id);
  }

}
