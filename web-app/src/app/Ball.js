'use client'

import React, { useState } from "react"

export default function Ball(props) {
    const [xCoord, setXCoord] = useState(props.x);
    const [yCoord, setYCoord] = useState(props.y);

    return (
        <img 
            src="/images/ball.jpg"
            height="25px"
            width="25px"
            style={{position: "absolute", top: yCoord, left: xCoord}}
        />
    );
}