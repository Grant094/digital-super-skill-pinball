"use client"

import React from "react";
import styles from "./ball.module.css";
import * as constants from "./constants";

export default function Ball(props) {
    //#region state
    let ballTop, ballLeft;

    //#region calc ballTop and ballLeft
    // since the first render is before the document becomes available, the balls' initial values need to be initialized another way
    if (typeof window === "undefined") {
        if (props.ballId === constants.BALL1_ID) {
            ballTop = constants.START_BOX_TOP;
            ballLeft = constants.START_BOX_LEFT;
        } else if (props.ballId === constants.BALL2_ID) {
            ballTop = constants.DRAIN_BOX_TOP;
            ballLeft = constants.DRAIN_BOX_LEFT;
        }
    } else if (document.getElementById(props.ballBoxId)) {
        ballTop = document.getElementById(props.ballBoxId).style.top;
        ballLeft = document.getElementById(props.ballBoxId).style.left;
    }
    //#endregion
    //#endregion

    //#region functions
    function isBallInDrain() {
        return (
            props.ballBoxId === constants.DRAIN_BOX_ID ||
            props.ballBoxId === constants.RED_OUTLANE_BOX_ID ||
            props.ballBoxId === constants.YEL_OUTLANE_BOX_ID
        );
    }
    //#endregion

    //#region useEffect
    // not applicable
    //#endregion

    return (
        <div id={props.ballId}
            alt={props.ballId}
            title={props.ballId}
            className={styles.Ball}
            style={{
                position: "absolute",
                top: ballTop,
                left: ballLeft,
                visibility: (isBallInDrain() ? "hidden" : "visible"),
                borderColor: props.borderColor,
                borderStyle: "solid",
            }}
            onClick={props.handleClick}
        >
        </div>
    );
}