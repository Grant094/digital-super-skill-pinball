"use client"

import React, { useState, useEffect } from "react";
import * as constants from "./constants";
import * as utilities from "./utilities";

export default function Ball(props) {
    const [ballVisibility, setBallVisibility] = useState("visible");

    // make the ball invisible if it is at `constants.drainedBallFeatureId`
    useEffect(() => {
        // TODO remove `utilities.isGameOver(props.round)` from conditional statement since it is redundant
        setBallVisibility((
            props.ballFeatureId === constants.drainedBallFeatureId ||
            utilities.isGameOver(props.round)
        )? "hidden": "visible");
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