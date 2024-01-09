'use client'

import React, { useEffect } from "react";
import styles from './dicetray.module.css'

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
            <button id="nudge-die-1" className={styles.NudgeButton1} type="button">Nudge</button>
            <button id="nudge-die-2" className={styles.NudgeButton2} type="button">Nudge</button>
        </div>
    );
}