export enum PlayerStatType {
    XP,
    TECHNIQUE,
    STRENGTH,
    STAMINA
}

export interface PlayerAptitudes {
    
}

export interface AptitudeCoachSchema {

}

export enum GameLevel {
    TUTO,
    JUNIOR,
    NEW_ON_CIRCUIT,
    PRO,
    CHAMPION,
    LEGEND
}

export enum Country {
    FRANCE,
    SPAIN,
    HUNGARY,
    CANADA,
    ENGLAND,
    CHINA
}

export enum TrainingType {
    Bike,
    Footing,
    Research,
    VideoReview,
    Reflex,
    BodyBuilding,
    Racket
}

/**
 * Score
 */

export interface ScoreInterface {
    games : Array<GameScoreInterface>
}

export interface GameScoreInterface {
    p1 : number
    p2 : number
}


/**
 * Shop
 */


/**
 * Job
 */
export interface JobInterface {
    neededAptitude: PlayerAptitudes;
    salary: number;
    energyCost: number;
    duration: number;
    cost: number;
    aptitudesGain: PlayerAptitudes;
}