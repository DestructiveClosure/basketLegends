import { inject, Service, signal } from '@angular/core';
import { BallPlayer } from '../Shared/Models/ball-player';
import {BALL_CONFIG} from '../Shared/ball-config'

@Service()
export class BasketballService {
    // Inject config file into service
    private config = inject(BALL_CONFIG);
    
    
    private ballPlayers = signal<BallPlayer[]>(
        [
            {
                id: 1,
                name: "Kevin D",
                points: 30,
                team: "Houston Rockets",
                mvpAward: true,
                champion: true,
                isRookie: false,
                isInjured: false,
                position: "Small Forward",
                action: "jumper"
            },
            {
                id: 2,
                name: "Lebron James",
                points: 25,
                team: "Philly",
                mvpAward: true,
                champion: true,
                isRookie: false,
                isInjured: false,
                position: "Small Forward",
                action: "dunk"
            },
            {
                id: 3,
                name: "Kawhi L",
                points: 29,
                team: "Toronto Raptors",
                mvpAward: false,
                champion: true,
                isRookie: false,
                isInjured: false,
                position: "Small Forward",
                action: "jumper"
            },
            {
                id: 4,
                name: "Steph Curry",
                points: 28,
                team: "Warriors",
                mvpAward: true,
                champion: true,
                isRookie: false,
                isInjured: false,
                position: "Point Guard",
                action: "jumper"
            },
            {
                id: 5,
                name: "Nikola Jokic",
                points: 31,
                team: "Denver Nuggets",
                mvpAward: true,
                champion: true,
                isRookie: false,
                isInjured: false,
                position: "Center",
                action: "floater"
            },
            {
                id: 6,
                name: "Shai",
                points: 31,
                team: "Thunder",
                mvpAward: true,
                champion: true,
                isRookie: false,
                isInjured: false,
                position: "Point Guard",
                action: "jumper"
            }
    ])

    ballPlayerArray = this.ballPlayers.asReadonly();

    removePlayer(id: number): void{
        console.log(`Hello from the removeMethod\nThe Baller ID: ${id}`);
        this.ballPlayers.update(baller => baller.filter(i => i.id !== id));
    }
}
