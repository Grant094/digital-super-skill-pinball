"use client"

import React, { useState } from "react";
import styles from "./skillshotindicator.module.css";

export default function SkillShotIndicator(props) {
    return (
        <div id={props.indicatorId} title={props.indicatorId}
            className={styles.SkillShotIndicator}
            style={{
                top: props.top,
                left: props.left,
            }}
        >

        </div>
    );
}