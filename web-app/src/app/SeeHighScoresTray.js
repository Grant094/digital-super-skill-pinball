"use client"

import React from "react";
import styles from "./seehighscorestray.module.css";
import * as constants from "./constants";

export default function RulesTray(props) {
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
        <div id={constants.SEE_HIGH_SCORES_TRAY_ID}
            title={constants.SEE_HIGH_SCORES_TRAY_ID}
            className={styles.SeeHighScoresTray}
        >
            <p><a href="https://super-skill-pinball-backend.onrender.com/">See High Scores</a></p>
        </div>
    );
}