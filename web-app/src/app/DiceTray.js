'use client'

import React, { useState } from "react";
import getRndIntegerInclusive from "./getRndIntegerInclusive";
import styles from './dicetray.module.css'

export default function DiceTray(props) {
    const [die1, setDie1] = useState(0);
    const [die2, setDie2] = useState(0);

    function rollDice() {
        setDie1(getRndIntegerInclusive(1, 6));
        setDie2(getRndIntegerInclusive(1, 6));
    }

    return (
        <div id="dice-tray"
            className={styles.DiceTray}
        >
            <p className={styles.Die1}>{die1}</p>
            <p className={styles.Die2}>{die2}</p>
            <button className={styles.RollButton} type="button" onClick={rollDice}>Roll</button>
        </div>
    );
}