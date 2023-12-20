'use client'

import React from "react"

export default function Ball(props) {
    return (
        <img 
            src="/images/ball.jpg"
            id="ball"
            height="25px"
            width="25px"
            style={{position: "absolute", top: props.y, left: props.x}}
        />
    );
}