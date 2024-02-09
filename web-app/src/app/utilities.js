import * as constants from "./constants";

// since one nudge amount is always zero, you can just add both of them to get the nudge amount from either die.
export function calcNetNudgeAmount(die1AmountNudgedBy, die2AmountNudgedBy) {
    return Math.abs(die1AmountNudgedBy + die2AmountNudgedBy);
}

// copied from https://www.w3schools.com/js/js_random.asp
export function getRndIntegerInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function isGameOver(round) {
    return (Number(round) > constants.MAX_ROUNDS);
}

export function isLastRound(round) {
    return (Number(round) === constants.MAX_ROUNDS);
}

// if neither ball is on a feature, the round is over
export function isRoundOver(ball1FeatureId, ball2FeatureId) {
    return (ball1FeatureId === constants.DRAIN_FEATURE_ID && ball2FeatureId === constants.DRAIN_FEATURE_ID);
}