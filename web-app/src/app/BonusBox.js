"use client"

import React, { useState } from "react";
import styles from "./bonusbox.module.css";

export default function BonusBox(props) {
    return (
        <div id={props.bonusBoxId} title={props.bonusBoxId}
            className={styles.BonusBox}
            // onClick={props.handleClick}
            style={{
                top: props.top,
                left: props.left,
                backgroundColor: props.backgroundColor,
            }}
        >

        </div>
    );
}