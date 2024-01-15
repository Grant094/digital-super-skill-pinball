"use client"

import React, { useState, useEffect, Fragment } from "react";
import styles from "./dicetray.module.css"
import calcNetNudgeAmount from "./CalcNetNudgeAmount";
import NudgeUpButton from "./NudgeUpButton";
import NudgeDnButton from "./NudgeDnButton";

export default function DiceTray(props) {
    let netNudgeAmount = calcNetNudgeAmount(props.die1AmountNudgedBy, props.die2AmountNudgedBy);
    
    useEffect(() => {
        props.rollDice();
    },[])

    return (
        <div id="dice-tray" className={styles.DiceTray}>
            <Fragment key="dice">
                <p className={styles.Die1}>{props.die1}</p>
                <p className={styles.Die2}>{props.die2}</p>
            </Fragment>
            <Fragment key="nudge-buttons">
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
            </Fragment>
            <Fragment key="nudge-and-tilt-info">
                <p>Nudges Used: {props.nudgesUsed}</p>
                <p>{netNudgeAmount? `Tilt if difference <= ${netNudgeAmount}`: `Cannot Tilt`}</p> {/* if one of the dice has been nudged, display by how much, otherwise do not show anything */}
            </Fragment>
        </div>
    );
}