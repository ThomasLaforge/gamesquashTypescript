import { Country } from './Gamesquash'

export class Coach {

    private _name:string
    private _playerCarrier: PlayerCarrier;
    private _dateOfBirth: number;
    private _aptitude: AptitudeCoachSchema;
    private _cost: number;
    private _nationality: Country;


	constructor(playerCarrier: PlayerCarrier, dateOfBirth: number, aptitude: AptitudeCoachSchema, cost: number, nationality: Country = Country.FRANCE) {
		this._playerCarrier = playerCarrier;
		this._dateOfBirth = dateOfBirth;
		this._aptitude = aptitude;
		this._cost = cost;
		this._nationality = nationality;
	}
    

	public get playerCarrier(): PlayerCarrier {
		return this._playerCarrier;
	}

	public set playerCarrier(value: PlayerCarrier) {
		this._playerCarrier = value;
	}

	public get dateOfBirth(): number {
		return this._dateOfBirth;
	}

	public set dateOfBirth(value: number) {
		this._dateOfBirth = value;
	}

	public get aptitude(): AptitudeCoachSchema {
		return this._aptitude;
	}

	public set aptitude(value: AptitudeCoachSchema) {
		this._aptitude = value;
	}

	public get cost(): number {
		return this._cost;
	}

	public set cost(value: number) {
		this._cost = value;
	}

	public get nationality(): Country {
		return this._nationality;
	}

	public set nationality(value: Country) {
		this._nationality = value;
	}
    
}