import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasketballList } from './Components/basketball-list/basketball-list';

@Component({
  imports: [ BasketballList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('basketballLegends');
}
