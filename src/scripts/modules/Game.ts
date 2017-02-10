import {Player} from './Player'
import {GameLevel} from './Gamesquash'
import {TrainingManager} from './TrainingManager'
import {CompetitionManager} from './CompetitionManager'
import {Shop} from './Shop'

export class Game {

    private _player: Player;
    private _level: GameLevel;
    private _trainingManager: TrainingManager;
    private _competitionManager: CompetitionManager;
    private _shop: Shop;

	constructor(p: Player, lvl:GameLevel = GameLevel.TUTO, trainingMng: TrainingManager = new TrainingManager(), competitionMng: CompetitionManager = new CompetitionManager()) {
        this.player = p;
        this.level = lvl;
        this.trainingManager = trainingMng;
        this.competitionManager = competitionMng;
    }

    getCompetitionList(){
        return this.competitionManager.competitionList;
    }

	public get player(): Player {
		return this._player;
	}

	public set player(value: Player) {
		this._player = value;
	}

	public get level(): GameLevel {
		return this._level;
	}

	public set level(value: GameLevel) {
		this._level = value;
	}

	public get trainingManager(): TrainingManager {
		return this._trainingManager;
	}

	public set trainingManager(value: TrainingManager) {
		this._trainingManager = value;
	}

	public get competitionManager(): CompetitionManager {
		return this._competitionManager;
	}

	public set competitionManager(value: CompetitionManager) {
		this._competitionManager = value;
	}
}