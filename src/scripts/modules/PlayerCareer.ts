import { Training } from './Training'
import { Bet } from './Bet'
import { Match } from './Match'
import { CoachHistory } from './CoachHistory'
import { ItemHistory } from './ItemHistory'

export class PlayerCareer {

    private _startDate: number;
    private _endDate: number;
    private _matchHistory: Array<Match>;
    private _trainingsHistory: Array<Training>;
    private _betHistory: Array<Bet>;
    private _coachHistory: CoachHistory;
    private _itemHistory: ItemHistory;

}