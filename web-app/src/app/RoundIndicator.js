"use client"

import React, { useState, useEffect } from "react";
import styles from "./roundindicator.module.css";

export default function RoundIndicator(props) {
    return (
        <p id={props.RoundIndicatorId}
            className={styles.RoundIndicator}
            style={{
                top: props.top,
                left: props.left,
                visibility: (Number(props.forRound) <= Number(props.round) ? "visible": "hidden"),
            }}
        >
            X
        </p>
    );
}