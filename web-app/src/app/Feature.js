'use client'

import React, { useState } from "react";
import Ball from "./Ball";

export default function Feature(props) {
    const [xCoord, setXCoord] = useState(props.x);
    const [yCoord, setYCoord] = useState(props.y);
    const [enterableFromAbove, setEnterableFromAbove] = useState(true);
    const [imgSrc, setImgSrc] = useState(props.imgSrc);
    const [imgAlt, setImgAlt] = useState(props.imgAlt);
    
    if (props.enterableFromAbove) {
        setEnterableFromAbove(props.enterableFromAbove);
    }

    function handleClick() {
        if (props.canReceiveFrom.includes(props.ball1FeatureId)) {
            const ball = document.getElementById('ball');
            ball.style.left = props.x;
            ball.style.top = props.y;
            props.setBall1FeatureId(props.featureId);
        } else {
            alert("invalid choice!");
        }
    }

    return (
        <div id={props.featureId} style={{position: "absolute", top: yCoord, left: xCoord}}>
            <img src={imgSrc} alt={imgAlt} onClick={handleClick} height={props.height} width={props.width} />
        </div>
    );
}