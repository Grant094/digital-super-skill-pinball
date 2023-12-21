'use client'

import React from "react";
import Ball from "./Ball";
import styles from './feature.module.css';

export default function Feature(props) {
    function handleClick() {
        if (props.canReceiveFrom.includes(props.ball1FeatureId)) {
            // black-out feature
            const feature = document.getElementById(props.featureId);
            feature.style.backgroundColor = 'black';
            
            // move the ball to this feature
            const ball = document.getElementById('ball');
            ball.style.left = props.x;
            ball.style.top = props.y;
            props.setBall1FeatureId(props.featureId);
        } else {
            alert("invalid choice!");
        }
    }

    return (
        <div id={props.featureId}
            className={styles.feature}
            onClick={handleClick}
            style={{position: "absolute", top: props.y, left: props.x, height: props.height, width: props.width}}
        >
        </div>
    );
}