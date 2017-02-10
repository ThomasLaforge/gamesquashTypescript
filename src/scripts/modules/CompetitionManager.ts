import {Competition} from './Competition'

export class CompetitionManager {

    private _competitionList: Array<Competition>;

    constructor(competitionList: Array<Competition> = []){
        this.competitionList = competitionList;
    }

	public get competitionList(): Array<Competition> {
		return this._competitionList;
	}

	public set competitionList(value: Array<Competition>) {
		this._competitionList = value;
	}
    
}