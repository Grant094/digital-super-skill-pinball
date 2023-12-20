'use client'

import React from "react"

export default function Ball(props) {
    return (
        <img id="ball"
            style={{position: "absolute", top: props.y, left: props.x}}
            src="/images/ball.jpg"
            height="25px"
            width="25px"
        />
    );
}