import { GameLevel } from './Gamesquash'

export class Competition {

    private _startDate: number;
    private _endDate: number;
    private _name: string;
    private _points: number;
	private _reward: number;
	private _aptitudeReward: AptitudeReward; 
    private _minLevel: GameLevel;
    private _maxLevel: GameLevel;


	constructor(startDate: number, endDate: number, name: string, points: number, minLevel: GameLevel, maxLevel: GameLevel) {
		this._startDate = startDate;
		this._endDate = endDate;
		this._name = name;
		this._points = points;
		this._minLevel = minLevel;
		this._maxLevel = maxLevel;
	}
    

	public get endDate(): number {
		return this._endDate;
	}

	public set endDate(value: number) {
		this._endDate = value;
	}

	public get startDate(): number {
		return this._startDate;
	}

	public set startDate(value: number) {
		this._startDate = value;
	}

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public get points(): number {
		return this._points;
	}

	public set points(value: number) {
		this._points = value;
	}

	public get minLevel(): GameLevel {
		return this._minLevel;
	}

	public set minLevel(value: GameLevel) {
		this._minLevel = value;
	}

	public get maxLevel(): GameLevel {
		return this._maxLevel;
	}

	public set maxLevel(value: GameLevel) {
		this._maxLevel = value;
	}
    

}