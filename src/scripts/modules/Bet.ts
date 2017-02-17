import { Match } from './Match'
import { Player } from './Player'

export class Bet {

    private _match: Match;
    private _playerOnBet: Player;
    private _playerWhoBet: Player;
    private _amount: number;
    private _odds: number; //Odds = côte du pari


	constructor(match: Match, playerOnBet: Player, playerWhoBet: Player, amount: number, odds: number) {
		this._match = match;
		this._playerOnBet = playerOnBet;
		this._playerWhoBet = playerWhoBet;
		this._amount = amount;
        this._odds = odds;
	}

    resolve(){
        this.playerWhoBet.money += this.match.winnerIs(this.playerOnBet) ? this.amount * this.odds : 0;
    }

	public get match(): Match {
		return this._match;
	}

	public set match(value: Match) {
		this._match = value;
	}

	public get playerOnBet(): Player {
		return this._playerOnBet;
	}

	public set playerOnBet(value: Player) {
		this._playerOnBet = value;
	}

	public get playerWhoBet(): Player {
		return this._playerWhoBet;
	}

	public set playerWhoBet(value: Player) {
		this._playerWhoBet = value;
	}

	public get amount(): number {
		return this._amount;
	}

	public set amount(value: number) {
		this._amount = value;
	}

	public get odds(): number {
		return this._odds;
	}

	public set odds(value: number) {
		this._odds = value;
	}

}