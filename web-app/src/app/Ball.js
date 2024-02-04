"use client"

import React, { useState, useEffect } from "react";
import * as constants from "./constants";
import * as utilities from "./utilities";

export default function Ball(props) {
    const [ballVisibility, setBallVisibility] = useState("visible");
    let ballTop, ballLeft;
    
    // since the first render is before the document becomes available, the balls' initial values need to be set this way
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

    // make the ball invisible if it is at `constants.DRAIN_FEATURE_ID`
    useEffect(function hideDrainedBall() {
        setBallVisibility((props.ballFeatureId === constants.DRAIN_FEATURE_ID)? "hidden": "visible");
    }, [props.round, props.ballFeatureId]);

    return (
        <img id={props.ballId}
            alt={props.ballId}
            style={{
                position: "absolute",
                top: ballTop,
                left: ballLeft,
                visibility: ballVisibility,
            }}
            src="/images/ball.jpg"
            height="25px"
            width="25px"
        />
    );
}