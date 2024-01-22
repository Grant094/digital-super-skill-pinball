"use client"

import React, { useState, useEffect } from "react";
import * as constants from "./constants";
import * as utilities from "./utilities";

export default function Ball(props) {
    const [ballVisibility, setBallVisibility] = useState("visible");

    // make the ball invisible if it is at `constants.drainedFeatureId`
    useEffect(function hideDrainedBall() {
        setBallVisibility((props.ballFeatureId === constants.drainFeatureId)? "hidden": "visible");
    }, [props.round, props.ballFeatureId]);

    return (
        <img id={props.ballId}
            style={{
                position: "absolute",
                top: props.top,
                left: props.left,
                visibility: ballVisibility,
            }}
            src="/images/ball.jpg"
            height="25px"
            width="25px"
        />
    );
}