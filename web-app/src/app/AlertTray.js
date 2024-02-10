"use client"

import React from "react";
import styles from "./alerttray.module.css";

export default function AlertTray(props) {
    return (
        <div id={props.alertTrayId} title={props.alertTrayId}
            className={styles.AlertTray}
        >
            <p id={props.paragraphId} title={props.paragraphId}
                className={styles.AlertTrayParagraph}
            >
                {props.alertParagraphText}
            </p>
        </div>
    );
}