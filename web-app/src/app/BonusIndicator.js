"use client"

import React, { useState } from "react";
import styles from "./bonusindicator.module.css";

export default function BonusIndicator(props) {
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
        <div id={props.bonusIndicatorId} title={props.bonusIndicatorId}
            className={styles.BonusIndicator}
            style={{
                top: props.top,
                left: props.left,
                borderColor: props.borderColor,
            }}
        >
        </div>
    );
}