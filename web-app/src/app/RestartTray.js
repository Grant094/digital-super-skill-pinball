"use client"

import React from "react";
import styles from "./restarttray.module.css";

export default function RestartTray(props) {
    return (
        <div id={props.restartrayId} className={styles.RestartTray}>
            <button id={props.restartButtonId}
                className={styles.RestartButton}
                type="button"
                onClick={props.onClick}
            >
                Restart
            </button>
        </div>
    );
}