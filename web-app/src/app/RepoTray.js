"use client"

import React from "react";
import styles from "./repotray.module.css";
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
        <div id={constants.REPO_TRAY_ID}
            title={constants.REPO_TRAY_ID}
            className={styles.SourceCodeTray}
        >
            <p><a href="https://github.com/Grant094/super-skill-pinball-digital" target="_blank">Repo</a></p>
        </div>
    );
}