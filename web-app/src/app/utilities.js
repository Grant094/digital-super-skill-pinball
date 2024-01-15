// since one nudge amount is always zero, you can just add both of them to get the nudge amount from either die.
export function calcNetNudgeAmount(die1AmountNudgedBy, die2AmountNudgedBy) {
    return Math.abs(die1AmountNudgedBy + die2AmountNudgedBy);
}

// copied from https://www.w3schools.com/js/js_random.asp
export function getRndIntegerInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}