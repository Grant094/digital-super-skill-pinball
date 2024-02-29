"use client"

import React from "react";
import styles from "./roundindicator.module.css";

export default function RoundIndicator(props) {
    //#region state
    // none
    //#endregion

    //#region functions
    function isOnThisRoundOrLater() {
        return (Number(props.forRound) <= Number(props.round));
    }
    //#endregion

    //#region useEffect
    // none
    //#endregion

    return (
        <p id={props.roundIndicatorId}
            title={props.roundIndicatorId}
            className={styles.RoundIndicator}
            style={{
                top: props.top,
                left: props.left,
                visibility: (isOnThisRoundOrLater() ? "visible" : "hidden"),
            }}
        >
            X
        </p>
    );
}