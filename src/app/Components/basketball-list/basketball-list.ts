import { Component, inject, signal } from '@angular/core';
import { BallPlayer } from '../../Shared/Models/ball-player';
import { BasketballService } from '../../Services/basketball-service';
import { BasketballCard } from '../basketball-card/basketball-card';

@Component({
  imports: [BasketballCard],
  selector: 'app-basketball-list',
  styleUrl: './basketball-list.css',
  templateUrl: './basketball-list.html',
})
export class BasketballList {
    protected ballServ = inject(BasketballService);
    protected title = signal("Lakers Legends");

    ballPlayerArray = this.ballServ.ballPlayerArray;

    private expanded = false;

    

    togglePlayerInfo(): void{
        this.expanded = !this.expanded;
    }

    onBallerRemove(baller: BallPlayer): void{
      this.ballServ.removePlayer(baller.id);
    }

}
