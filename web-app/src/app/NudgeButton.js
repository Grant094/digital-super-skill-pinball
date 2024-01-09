'use client'

import React, { useEffect } from "react";
import styles from './nudgebutton.module.css'

export default function NudgeButton(props) {

    function handleClick() {

    }

    return (
        <button id={props.buttonId}
            className={styles.NudgeButton}
            type="button"
            onClick={handleClick}
        >
            Nudge
        </button>
    );
}