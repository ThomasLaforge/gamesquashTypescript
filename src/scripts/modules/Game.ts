import { Player } from './Player'

export class Game {

    private _player: Player;
    private _startDate: number;

    constructor(p:Player){
        this.player = p;
        this.startDate = Date.now();
    }

    public get player(){
        return this._player;
    }
    public set player(value){
        this.player = value
    }
    public get startDate(){
        return this._startDate;
    }
    public set startDate(value){
        this.startDate = value
    }

}