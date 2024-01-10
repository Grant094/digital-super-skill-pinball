'use client'

import React, { useState, useEffect } from "react";
import styles from './dicetray.module.css'
import NudgeUpButton from "./NudgeUpButton";
import NudgeDnButton from "./NudgeDnButton";

export default function DiceTray(props) {
    let netNudgeAmount = Math.abs(props.die1AmountNudgedBy + props.die2AmountNudgedBy); // since one of them is always zero, you can just add both of them to get the nudge amount from either die.
    
    useEffect(() => {
        props.rollDice();
    },[])

    return (
        <div id="dice-tray" className={styles.DiceTray}>
            <p className={styles.Die1}>{props.die1}</p>
            <p className={styles.Die2}>{props.die2}</p>
            <NudgeUpButton buttonId="nudge-up-button-die1"
                die={props.die1}
                dieSetter={props.setDie1}
                otherDieAmountNudgedBy={props.die2AmountNudgedBy}
                thisDieAmountNudgedBy={props.die1AmountNudgedBy}
                setThisDieAmountNudgedBy={props.setDie1AmountNudgedBy}
                nudgesUsed={props.nudgesUsed}
            />
            <NudgeDnButton buttonId="nudge-dn-button-die1"
                die={props.die1}
                dieSetter={props.setDie1}
                otherDieAmountNudgedBy={props.die2AmountNudgedBy}
                thisDieAmountNudgedBy={props.die1AmountNudgedBy}
                setThisDieAmountNudgedBy={props.setDie1AmountNudgedBy}
                nudgesUsed={props.nudgesUsed}
            />
            <NudgeUpButton buttonId="nudge-up-button-die2"
                die={props.die2}
                dieSetter={props.setDie2}
                otherDieAmountNudgedBy={props.die1AmountNudgedBy}
                thisDieAmountNudgedBy={props.die2AmountNudgedBy}
                setThisDieAmountNudgedBy={props.setDie2AmountNudgedBy}
                nudgesUsed={props.nudgesUsed}
            />
            <NudgeDnButton buttonId="nudge-dn-button-die2"
                die={props.die2}
                dieSetter={props.setDie2}
                otherDieAmountNudgedBy={props.die1AmountNudgedBy}
                thisDieAmountNudgedBy={props.die2AmountNudgedBy}
                setThisDieAmountNudgedBy={props.setDie2AmountNudgedBy}
                nudgesUsed={props.nudgesUsed}
            />
            <p>Nudges Used: {props.nudgesUsed}</p>
            <p>{netNudgeAmount? `Tilt if difference >= ${netNudgeAmount}`: `Cannot Tilt`}</p> {/* if one of the dice has been nudged, display by how much, otherwise do not show anything */}
        </div>
    );
}