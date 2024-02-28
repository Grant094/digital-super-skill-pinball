"use client"

import React from "react";
import styles from "./skillshotbox.module.css";

export default function SkillShotBox(props) {
    //#region state
    // none
    //#endregion

    //#region functions
    // none
    //#endregion

    //#region useEffect
    // none
    //#endregion

    return (
        <div id={props.skillShotBoxId} title={props.skillShotBoxId}
            className={styles.SkillShotBox}
            onClick={props.handleClick}
            style={{
                top: props.top,
                left: props.left,
                borderColor: props.borderColor,
            }}
        >

        </div>
    );
}