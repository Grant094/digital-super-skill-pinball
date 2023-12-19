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
        document.getElementById('ball').remove();
        const child = document.createElement('img');
        child.setAttribute('src', '/images/ball.jpg');
        child.setAttribute('id', 'ball');
        child.setAttribute('height', '25px');
        child.setAttribute('width', '25px');
        child.style.position = 'absolute';
        child.style.top = yCoord;
        child.style.left = xCoord;
        document.getElementById('table').appendChild(child);
    }

    return (
        <div id={id} enterableFromAbove={enterableFromAbove} style={{position: "absolute", top: yCoord, left: xCoord}}>
            <img src={imgSrc} alt={imgAlt} onClick={handleClick}/>
        </div>
    );
}