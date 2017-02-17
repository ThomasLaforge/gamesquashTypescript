import { Player } from './Player'
import {ScoreInterface, GameScoreInterface} from './Gamesquash'

export class Match {
    
    private _player1: Player;
    private _player2: Player;
    private _score: ScoreInterface;
    private _startDate: number;
    private _endDate: number;

	constructor(player1: Player, player2: Player, score: ScoreInterface = { games: [ { p1 : 0, p2 : 0 } ] }, startDate: number = Date.now(), endDate: number = null) {
		this.player1 = player1;
		this.player2 = player2;
		this.score = score;
		this.startDate = startDate;
		this.endDate = endDate;
	}

    newTick(){
        let pointScore = Math.random();
        let victoriousPlayer = pointScore < 0.5 ? this.player1 : this.player2;
        this.increaseScore(victoriousPlayer);
        this.checkGameIntegrity();
    }

    increaseScore(p: Player){
        let playerIndex = this.getPlayers().indexOf(p);
        if(playerIndex === 0){
            this.getCurrentGame().p1 ++
        }
        else if (playerIndex === 1){
            this.getCurrentGame().p2 ++            
        }
        else{
            throw "try to increase score of player who is not in this match";
        }
    }

    checkGameIntegrity(){
        if( this.gameIsFinished(this.getCurrentGame()) && !this.isFinished() ){
            this.startNewGame()
        }
        else{
            this.endDate = Date.now()
        }
    }

    startNewGame(){
        this.score.games.push({p1: 0, p2: 0})
    }

    getCurrentGame(){
        return this.score.games[this.score.games.length - 1]
    }

    gameIsFinished(game: GameScoreInterface){
        let atLeastOnePlayerScoreHigherOrEqualsToEleven = game.p1 >= 11 || game.p2 >= 11
        let gapBetweenPlayers = Math.abs( game.p1 - game.p2 );
        return atLeastOnePlayerScoreHigherOrEqualsToEleven &&  gapBetweenPlayers >= 2
    }

    isFinished(){
        let matchScore = this.getMatchScore();
        return matchScore.p1 >= 3 || matchScore.p2 >= 3
    }

    getMatchScore(){
        let gameScore = { p1 : 0, p2 : 0 };
        this.score.games.forEach( g => {
            if(this.gameIsFinished(g)){
                if(g.p1 > g.p2){
                    gameScore.p1 ++
                }
                else {
                    gameScore.p2 ++
                }
            }
        })

        return gameScore;
    }

    getWinner(){
        return this.getMatchScore().p1 > this.getMatchScore().p2 ? this.player1 : this.player2
    }

    winnerIs(p: Player){
        if(this.getPlayers().indexOf(p) === -1 ){
            throw "winnerIs when player dosn't take part on this match"
        }
        if(!this.isFinished()){
            throw "winnerIs when game is not finished"
        }
        return Object.is( this.getWinner(), p )
    }

    getPlayers(): Array<Player> {
        return [this.player1, this.player2]
    }

    getInitialOdds(): number {
        return 1
    }

	public get player1(): Player {
		return this._player1;
	}

	public set player1(value: Player) {
		this._player1 = value;
	}

	public get player2(): Player {
		return this._player2;
	}

	public set player2(value: Player) {
		this._player2 = value;
	}

	public get score(): ScoreInterface {
		return this._score;
	}

	public set score(value: ScoreInterface) {
		this._score = value;
	}

	public get startDate(): number {
		return this._startDate;
	}

	public set startDate(value: number) {
		this._startDate = value;
	}

	public get endDate(): number {
		return this._endDate;
	}

	public set endDate(value: number) {
		this._endDate = value;
	}
    

}