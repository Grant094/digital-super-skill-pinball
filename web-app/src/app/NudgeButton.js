'use client'

import React, { useEffect } from "react";
import styles from './nudgebutton.module.css'

export default function NudgeButton(props) {
    return (
        <button id={props.buttonId}
            className={styles.NudgeButton}
            type="button"
            onClick={props.onClick}
            disabled={(props.haveMaxNudgesBeenUsed) || (props.atMinOrMax)}
        >
            {props.symbol}
        </button>
    );
}