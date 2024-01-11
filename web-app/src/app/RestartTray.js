'use client'

import React, { useEffect } from "react";
import styles from './restarttray.module.css'

export default function RestartTray(props) {
    return (
        <div id="restart-tray" className={styles.RestartTray}>
            <button id="restart-button"
                className={styles.RestartButton}
                type="button"
                onClick={props.restartFn}
            >
                Restart
            </button>
        </div>
    );
}