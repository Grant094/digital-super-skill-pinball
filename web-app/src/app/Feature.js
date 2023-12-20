'use client'

import React from "react";
import Ball from "./Ball";

export default function Feature(props) {
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
        <div id={props.featureId}style={{position: "absolute", top: props.y, left: props.x}}>
            <img src={props.imgSrc} alt={props.imgAlt} onClick={handleClick} height={props.height} width={props.width} />
        </div>
    );
}