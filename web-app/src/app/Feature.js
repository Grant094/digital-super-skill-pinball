'use client'

import React, { useState } from "react";

export default function Feature(props) {
    const [xCoord, setXCoord] = useState(props.x);
    const [yCoord, setYCoord] = useState(props.y);
    const [enterableFromAbove, setEnterableFromAbove] = useState(true);
    const [imgSrc, setImgSrc] = useState(props.imgSrc);
    const [imgAlt, setImgAlt] = useState(props.imgAlt);

    if (props.enterableFromAbove) {
        setEnterableFromAbove(props.enterableFromAbove);
    }

    return (
        <div enterableFromAbove={enterableFromAbove} style={{position: "absolute", top: yCoord, left: xCoord}}>
            <img src={imgSrc} alt={imgAlt} />
        </div>
    );
}