"use client"

import React, { useEffect } from "react"

export default function Ball(props) {

    useEffect(() => {

    }, [props.round])

    return (
        <img id="ball"
            style={{
                position: "absolute",
                top: props.y,
                left: props.x,
                visibility: (Number(props.round) > 3)? "hidden": "visible"
            }}
            src="/images/ball.jpg"
            height="25px"
            width="25px"
        />
    );
}