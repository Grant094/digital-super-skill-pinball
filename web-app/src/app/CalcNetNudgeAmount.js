export default function calcNetNudgeAmount(die1AmountNudgedBy, die2AmountNudgedBy) {
    // since one nudge amount is always zero, you can just add both of them to get the nudge amount from either die.
    return Math.abs(die1AmountNudgedBy + die2AmountNudgedBy);
}