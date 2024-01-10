'use client'

import React, { useState } from "react"
import styles from "./roundindicator.module.css"

export default function RoundIndicator(props) {
    return (
        <p id={props.RoundIndicatorId}
            className={styles.RoundIndicator}
            // TMK .module.css files cannot access props, so this styling needs to be defined here
            style={{
                top: props.x,
                left: props.y,
                visibility: (Number(props.forRound) <= Number(props.round)) ? "visible": "hidden"
            }}
        >
            X
        </p>
    );
}