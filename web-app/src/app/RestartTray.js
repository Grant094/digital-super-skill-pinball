"use client"

import React from "react";
import styles from "./restarttray.module.css";

export default function RestartTray(props) {
    return (
        <div id={props.restartTrayId} title={props.restartTrayId} className={styles.RestartTray}>
            <button id={props.restartButtonId}
                title={props.restartButtonId}
                className={styles.RestartButton}
                type="button"
                onClick={props.onClick}
            >
                Restart
            </button>
        </div>
    );
}