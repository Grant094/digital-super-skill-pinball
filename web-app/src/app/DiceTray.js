'use client'

import React, { useEffect } from "react";
import styles from './dicetray.module.css'
import NudgeButton from "./NudgeButton";

export default function DiceTray(props) {
    useEffect(() => {
        props.rollDice();
    },[])

    return (
        <div id="dice-tray"
            className={styles.DiceTray}
        >
            <p className={styles.Die1}>{props.die1}</p>
            <p className={styles.Die2}>{props.die2}</p>
            <NudgeButton buttonId="nudge-button-1" />
            <NudgeButton buttonId="nudge-button-2" />
        </div>
    );
}