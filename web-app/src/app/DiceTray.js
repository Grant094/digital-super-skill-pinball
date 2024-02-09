"use client"

import React, { useState, Fragment } from "react";
import styles from "./dicetray.module.css";
import * as constants from "./constants";
import * as utilities from "./utilities";
import NudgeUpButton from "./NudgeUpButton";
import NudgeDnButton from "./NudgeDnButton";

export default function DiceTray(props) {
    let netNudgeAmount = utilities.calcNetNudgeAmount(props.die1AmountNudgedBy, props.die2AmountNudgedBy);

    return (
        <div id={props.dicetrayId} className={styles.DiceTray}>
            <Fragment key="dice">
                <p title={constants.DIE1_ID} className={styles.Die1}>{props.die1}</p>
                <p title={constants.DIE2_ID} className={styles.Die2}>{props.die2}</p>
            </Fragment>
            <Fragment key="nudge-buttons">
                <NudgeUpButton buttonId={constants.DIE1_NUDGE_UP_BUTTON_ID}
                    dieId="1"
                    die={props.die1}
                    otherDieAmountNudgedBy={props.die2AmountNudgedBy}
                    {...props}
                />
                <NudgeDnButton buttonId={constants.DIE1_NUDGE_DN_BUTTON_ID}
                    dieId="1"
                    die={props.die1}
                    otherDieAmountNudgedBy={props.die2AmountNudgedBy}
                    {...props}
                />
                <NudgeUpButton buttonId={constants.DIE2_NUDGE_UP_BUTTON_ID}
                    dieId="2"
                    die={props.die2}
                    otherDieAmountNudgedBy={props.die1AmountNudgedBy}
                    {...props}
                />
                <NudgeDnButton buttonId={constants.DIE2_NUDGE_DN_BUTTON_ID}
                    dieId="2"
                    die={props.die2}
                    otherDieAmountNudgedBy={props.die1AmountNudgedBy}
                    {...props}
                />
            </Fragment>
            <Fragment key="nudge-and-tilt-info">
                <p title="nudgesUsed">Nudges Used: {props.nudgesUsed}</p>
                <p title="differenceToTiltOnOrGreaterThan">{netNudgeAmount? `Tilt if difference <= ${netNudgeAmount}`: `Cannot Tilt`}</p> {/* if one of the dice has been nudged, display by how much, otherwise do not show anything */}
            </Fragment>
        </div>
    );
}