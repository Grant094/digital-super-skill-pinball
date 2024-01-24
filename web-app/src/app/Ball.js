"use client"

import React, { useState, useEffect } from "react";
import * as constants from "./constants";
import * as utilities from "./utilities";

export default function Ball(props) {
    const [ballVisibility, setBallVisibility] = useState("visible");

    // make the ball invisible if it is at `constants.DRAIN_FEATURE_ID`
    useEffect(function hideDrainedBall() {
        setBallVisibility((props.ballFeatureId === constants.DRAIN_FEATURE_ID)? "hidden": "visible");
    }, [props.round, props.ballFeatureId]);

    return (
        <img id={props.ballId}
            style={{
                position: "absolute",
                top: (document.getElementById(props.ballFeatureId)? document.getElementById(props.ballFeatureId).style.top: "0"),
                left: (document.getElementById(props.ballFeatureId)? document.getElementById(props.ballFeatureId).style.left: "0"),
                visibility: ballVisibility,
            }}
            src="/images/ball.jpg"
            height="25px"
            width="25px"
        />
    );
}