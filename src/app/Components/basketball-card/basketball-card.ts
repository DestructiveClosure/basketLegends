import { Component, input, output } from '@angular/core';
import { BallPlayer } from '../../Shared/Models/ball-player';

@Component({
  imports: [],
  selector: 'app-basketball-card',
  styleUrl: './basketball-card.css',
  templateUrl: './basketball-card.html',
})
export class BasketballCard {
  // Inputs
  ballPlayer = input.required<BallPlayer>();
  expanded = false;
  
  // Outputs

  remove = output<BallPlayer>();

  // Remote Method
  removeBaller(event: MouseEvent): void{
    event.stopPropagation();
    this.remove.emit(this.ballPlayer());
  }

  protected hideStats(event: MouseEvent): void{
    event.stopPropagation();
    this.expanded = !this.expanded;
  }
}
