"use client"

import React, { useState, useEffect } from "react";
import styles from "./scoreindicator.module.css";

export default function ScoreIndicator(props) {
    return (
        <div id="score-indicator" className={styles.ScoreIndicator}>
            <p id="score" className={styles.Score}>{props.score}</p>
        </div>
    );
}