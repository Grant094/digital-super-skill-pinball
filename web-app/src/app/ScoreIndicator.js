"use client"

import React, { useState, useEffect } from "react";
import styles from "./scoreindicator.module.css";

export default function ScoreIndicator(props) {
    return (
        <div id={props.scoreIndicatorId} className={styles.ScoreIndicator}>
            <p id={props.scorePId} className={styles.Score}>{props.score}</p>
        </div>
    );
}