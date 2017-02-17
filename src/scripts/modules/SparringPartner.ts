import {Player} from './Player'

export class SparringPartner {

    private _player: Player;
    private _firstLinkDate: number;
    private _trainingMatchTogether: number;


	constructor(player: Player, firstLinkDate: number, trainingMatchTogether: number) {
		this._player = player;
		this._firstLinkDate = firstLinkDate;
		this._trainingMatchTogether = trainingMatchTogether;
	}
    

	public get player(): Player {
		return this._player;
	}

	public set player(value: Player) {
		this._player = value;
	}

	public get firstLinkDate(): number {
		return this._firstLinkDate;
	}

	public set firstLinkDate(value: number) {
		this._firstLinkDate = value;
	}

	public get trainingMatchTogether(): number {
		return this._trainingMatchTogether;
	}

	public set trainingMatchTogether(value: number) {
		this._trainingMatchTogether = value;
	}
    

}