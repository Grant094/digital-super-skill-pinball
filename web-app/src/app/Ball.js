"use client"

import React, { useState } from "react";
import * as constants from "./constants";
import * as utilities from "./utilities";

export default function Ball(props) {
    //#region state
    let ballTop, ballLeft;

    //#region calc ballTop and ballLeft
    // since the first render is before the document becomes available, the balls' initial values need to be initialized another way
    if (typeof window === "undefined") {
        if (props.ballId === constants.BALL1_ID) {
            ballTop = constants.START_FEATURE_TOP;
            ballLeft = constants.START_FEATURE_LEFT;
        } else if (props.ballId === constants.BALL2_ID) {
            ballTop = constants.DRAIN_FEATURE_TOP;
            ballLeft = constants.DRAIN_FEATURE_LEFT;
        }
    } else if (document.getElementById(props.ballFeatureId)) {
        ballTop = document.getElementById(props.ballFeatureId).style.top;
        ballLeft = document.getElementById(props.ballFeatureId).style.left;
    }
    //#endregion
    //#endregion

    //#region functions
    function isBallInDrain() {
        return (
            props.ballFeatureId === constants.DRAIN_FEATURE_ID ||
            props.ballFeatureId === constants.RED_OUTLANE_BOX_ID ||
            props.ballFeatureId === constants.YEL_OUTLANE_BOX_ID
        );
    }
    //#endregion

    //#region useEffect
    // not applicable
    //#endregion

    return (
        <img id={props.ballId}
            alt={props.ballId}
            title={props.ballId}
            style={{
                position: "absolute",
                top: ballTop,
                left: ballLeft,
                visibility: (isBallInDrain() ? "hidden" : "visible"),
                borderColor: props.borderColor,
                borderStyle: "solid",
            }}
            onClick={props.handleClick}
            src="/images/ball.jpg"
            height="25px"
            width="25px"
        />
    );
}