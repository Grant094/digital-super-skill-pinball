"use client"

import React from "react";
import styles from "./rulestray.module.css";
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
        <div id={constants.RULES_TRAY_ID}
            title={constants.RULES_TRAY_ID}
            className={styles.RulesTray}
        >
            <p><a href="https://wizkids.com/posters/repository/wizkids/Super-Skill-Pinball---Carniball---FREE.pdf" target="_blank">Rules</a></p>
        </div>
    );
}