"use client"

import React, { useState } from "react";
import styles from "./box.module.css";
import * as constants from "./constants";
import * as utilities from "./utilities";

export default function Box(props) {
    //#region functions
    //#endregion

    return (
        <div id={props.boxId}
            title={props.boxId}
            className={styles.box}
            onClick={props.handleClick}
            style={{
                backgroundColor: (props.isThisBoxFilled ? constants.FILLED_BACKGROUND_COLOR : constants.UNFILLED_BACKGROUND_COLOR),
                top: props.top,
                left: props.left,
                height: props.height,
                width: props.width,
            }}
        >
        </div>
    )
}