"use client"

import React from "react";
import styles from "./scoreindicator.module.css";

export default function ScoreIndicator(props) {
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
        <div id={props.scoreIndicatorId} title={props.scoreIndicatorId} className={styles.ScoreIndicator}>
            <p id={props.scorePId} title={props.scorePId} className={styles.Score}>{props.score}</p>
        </div>
    );
}