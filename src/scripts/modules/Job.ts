import {PlayerAptitudes, JobInterface} from './Gamesquash'

export class Job implements JobInterface {
    private _neededAptitude: PlayerAptitudes;
    private _salary: number;
    private _energyCost: number;
    private _duration: number;
    private _cost: number;
    private _aptitudesGain: PlayerAptitudes;   

	constructor(neededAptitude: PlayerAptitudes, salary: number, energyCost: number, duration: number, cost: number, aptitudesGain: PlayerAptitudes) {
		this._neededAptitude = neededAptitude;
		this._salary = salary;
		this._energyCost = energyCost;
		this._duration = duration;
		this._cost = cost;
		this._aptitudesGain = aptitudesGain;
	}
    
    public get neededAptitude(): PlayerAptitudes {
		return this._neededAptitude;
	}

	public set neededAptitude(value: PlayerAptitudes) {
		this._neededAptitude = value;
	}

	public get salary(): number {
		return this._salary;
	}

	public set salary(value: number) {
		this._salary = value;
	}

	public get energyCost(): number {
		return this._energyCost;
	}

	public set energyCost(value: number) {
		this._energyCost = value;
	}

	public get duration(): number {
		return this._duration;
	}

	public set duration(value: number) {
		this._duration = value;
	}

	public get cost(): number {
		return this._cost;
	}

	public set cost(value: number) {
		this._cost = value;
	}

	public get aptitudesGain(): PlayerAptitudes {
		return this._aptitudesGain;
	}

	public set aptitudesGain(value: PlayerAptitudes) {
		this._aptitudesGain = value;
	}

    
}