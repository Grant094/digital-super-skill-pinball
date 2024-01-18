"use client"

import React, { useState, useEffect } from "react";
import * as utilities from "./utilities";

export default function Ball(props) {
    const [ballVisibility, setBallVisibility] = useState("visible");

    useEffect(() => {
        setBallVisibility(utilities.isGameOver(props.round)? "hidden": "visible");
    }, [props.round]);

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