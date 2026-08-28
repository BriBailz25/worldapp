import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
}

