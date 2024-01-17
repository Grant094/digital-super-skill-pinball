"use client"

import React, { useEffect } from "react";
import * as constants from "./constants";
import styles from "./restarttray.module.css";

export default function RestartTray(props) {
    function handleClick() {
        //#region reset-state
        props.setScore(0);
        props.setRound(1);
        props.resetNudgesUsed();
        //#endregion

        //#region clear-all-boxes
        const allDivs = document.querySelectorAll("div");
        for (const div of allDivs) {
            if (div.className.includes("box")) {
                div.style.backgroundColor = "transparent";
            }
        }
        //#endregion

        //#region move-ball-to-start
        const ball = document.getElementById("ball");
        props.setBall1FeatureId(constants.startFeatureId);
        ball.style.top = constants.startTop;
        ball.style.left = constants.startLeft;
        //#endregion

        props.rollDice();
    }
    return (
        <div id="restart-tray" className={styles.RestartTray}>
            <button id="restart-button"
                className={styles.RestartButton}
                type="button"
                onClick={handleClick}
            >
                Restart
            </button>
        </div>
    );
}