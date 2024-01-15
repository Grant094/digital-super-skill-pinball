"use client"

import React, { useEffect } from "react";
import styles from "./box.module.css"

export default function Box(props) {

    useEffect(() => {

    }, [props.round])

    function handleClick() {
        const box = document.getElementById(props.boxId);

        if (
                props.canReceiveFrom.includes(props.ball1FeatureId) &&
                box.style.backgroundColor != "black" &&
                props.correspondingFeatureId &&
                (
                    props.canReceiveOn.includes(props.die1) ||
                    props.canReceiveOn.includes(props.die2)
                )
            ) {
            // black-out box
            box.style.backgroundColor = "black";
            
            // move the ball to the corresponding feature
            const ball = document.getElementById("ball");
            const correspondingFeature = document.getElementById(props.correspondingFeatureId);
            ball.style.left = correspondingFeature.style.left;
            ball.style.top = correspondingFeature.style.top;
            props.setBall1FeatureId(correspondingFeature.id);

            // add points from this box to the total score
            if (props.points) {
                props.setScore(Number(props.score) + Number(props.points));
            }

            // check if the set this is in is completed
            if (props.groupBoxIds) {
                var filledInBoxes = 0;
                for (const boxId of props.groupBoxIds) {
                    if (document.getElementById(boxId).style.backgroundColor === "black") {
                        filledInBoxes++;
                    } else {
                        break;
                    }
                }
                if (filledInBoxes === props.groupBoxIds.length) {
                    // set has been completed, so the boxes should be cleared
                    for (const boxId of props.groupBoxIds) {
                        document.getElementById(boxId).style.backgroundColor = "transparent";
                    }
                }
            }

            props.rollDice();
            
        } else {
            alert(`
                invalid choice!
                Die1: ${props.die1}
                Die2: ${props.die2}
                canRecieveOn: ${props.canReceiveOn}
                canRecieveFrom: ${props.canReceiveFrom}
            `);
        }

        if (props.action) {
            props.action();
        }
    }

    return (
        <div id={props.boxId}
            className={styles.box}
            onClick={handleClick}
            style={{
                top: props.top,
                left: props.left,
                height: props.height,
                width: props.width,
                visibility: (Number(props.round) > 3)? "hidden": "visible",
            }}
        >
        </div>
    )
}