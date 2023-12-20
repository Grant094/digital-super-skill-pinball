'use client'

import React, { useState } from "react";
import Ball from "./Ball";

export default function Feature(props) {
    const [id, setId] = useState(props.id);
    const [xCoord, setXCoord] = useState(props.x);
    const [yCoord, setYCoord] = useState(props.y);
    const [enterableFromAbove, setEnterableFromAbove] = useState(true);
    const [imgSrc, setImgSrc] = useState(props.imgSrc);
    const [imgAlt, setImgAlt] = useState(props.imgAlt);
    
    if (props.enterableFromAbove) {
        setEnterableFromAbove(props.enterableFromAbove);
    }

    function handleClick() {
        const ball = document.getElementById('ball');
        ball.setAttribute('src', '/images/ball.jpg');
        ball.setAttribute('id', 'ball');
        ball.setAttribute('height', '25px');
        ball.setAttribute('width', '25px');
        ball.style.position = 'absolute';
        ball.style.top = yCoord;
        ball.style.left = xCoord;
    }

    return (
        <div id={id} enterableFromAbove={enterableFromAbove} style={{position: "absolute", top: yCoord, left: xCoord}}>
            <img src={imgSrc} alt={imgAlt} onClick={handleClick} height={props.height} width={props.width} />
        </div>
    );
}