"use client"

import React from "react";
import styles from "./nudgebutton.module.css";

export default function NudgeButton(props) {
    //#region state
    // none
    //#endregion

    //#region functions
    // none
    //#endregion

    //#region useEffect
    // none
    //#endregion
    
    return (
        <button id={props.buttonId}
            title={props.buttonId}
            className={styles.NudgeButton}
            type="button"
            onClick={() => props.handleNudge(props.dieId, props.symbol)}
            disabled={
                (props.atMinOrMax) ||
                (props.nudgesUsed === 3) ||
                (props.otherDieAmountNudgedBy) // if the other die has been nudged, do not allow this die to be nudged
            }
        >
            {props.symbol}
        </button>
    );
}