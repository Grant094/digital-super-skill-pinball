'use client'

import React from "react";
import styles from './box.module.css'

export default function Box(props) {
    function handleClick() {
        if (props.canReceiveFrom.includes(props.ball1FeatureId)) {
            const ball = document.getElementById('ball');
            const correspondingFeature = document.getElementById(props.correspondingFeatureId);
            ball.style.left = correspondingFeature.style.left;
            ball.style.top = correspondingFeature.style.top;
            props.setBall1FeatureId(correspondingFeature.id);
        } else {
            alert("invalid choice!");
        }
    }

    return (
        <div id={props.boxId}
            className={styles.box}
            onClick={handleClick}
            style={{position: "absolute", top: props.y, left: props.x, height: props.height, width: props.width}}
        >
        </div>
    )
}