"use client"

import React, { useState, useEffect } from "react";
import styles from "./roundindicator.module.css";

export default function RoundIndicator(props) {
    function isOnThisRoundOrLater() {
        return (Number(props.forRound) <= Number(props.round));
    }

    return (
        <p id={props.RoundIndicatorId}
            className={styles.RoundIndicator}
            style={{
                top: props.top,
                left: props.left,
                visibility: (isOnThisRoundOrLater() ? "visible": "hidden"),
            }}
        >
            X
        </p>
    );
}