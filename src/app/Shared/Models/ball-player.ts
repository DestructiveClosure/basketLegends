export interface BallPlayer {
    id: number,
    name: string,
    position: string,
    points: number,
    team: string,
    isInjured: boolean,
    isRookie: boolean,
    mvpAward?: boolean,
    champion: boolean,
    img?: string,
    action?: "jumper" | "dunk" | "floater"
}
