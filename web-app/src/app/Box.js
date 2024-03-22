"use client"

import React from "react";
import styles from "./box.module.css";
import * as constants from "./constants";

export default function Box(props) {
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
        <div id={props.boxId}
            title={props.boxId}
            className={props.boxId === constants.DRAIN_BOX_ID ? styles.DrainBox : styles.box}
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