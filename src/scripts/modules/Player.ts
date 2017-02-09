// Imports
    import { PlayerStatType } from './Gamesquash'
// -------

class Player {

    private _pseudo: string;
    private _xp: number;
    private _strength: number;
    private _stamina: number;
    private _technique: number;

	constructor(p = 'Invité-' + Date.now(), xp = 0, str = 0, sta = 0, tec = 0) {
        this.pseudo = p;
        this.xp = xp;
        this.strength = str;
        this.stamina = sta;
        this.technique = tec;
	}

    winStat(type:PlayerStatType, value: number){
        switch (type) {
            case PlayerStatType.XP:
                this.xp += value;
                break;
            case PlayerStatType.TECHNIQUE:
                this.technique += value;
                break;
            case PlayerStatType.STRENGTH:
                this.strength += value;
                break;
            case PlayerStatType.STAMINA:
                this.stamina += value;
                break;
            default:
                console.log('stat type unknown ' + type + ', can\'t win stats')
                break;
        }
    }
    
    loseStat(type:PlayerStatType, value: number){
        value = -value
        this.winStat(type, value);
    }

    getStyle(){
        return this.strength > 2 ? 'bourrin' : 'équilibré';
    }

// Getters / Setters

	public get pseudo(): string {
		return this._pseudo;
	}
	public set pseudo(value: string) {
		this._pseudo = value;
	}

	public get xp(): number {
		return this._xp;
	}

	public set xp(value: number) {
		this._xp = value;
	}

	public get stamina(): number {
		return this._stamina;
	}

	public set stamina(value: number) {
		this._stamina = value;
	}

	public get technique(): number {
		return this._technique;
	}

	public set technique(value: number) {
		this._technique = value;
	}

	public get strength(): number {
		return this._strength;
	}

	public set strength(value: number) {
		this._strength = value;
	}
    
// ------------------

}

export {Player}