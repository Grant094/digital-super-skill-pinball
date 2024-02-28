"use client"

import React from "react";
import styles from "./restarttray.module.css";

export default function RestartTray(props) {
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
        <div id={props.restartTrayId} title={props.restartTrayId} className={styles.RestartTray}>
            <button id={props.restartButtonId}
                title={props.restartButtonId}
                className={styles.RestartButton}
                type="button"
                onClick={props.handleRestart}
            >
                Restart
            </button>
        </div>
    );
}