"use client"

import React, { useState, useEffect } from "react";
import styles from "./box.module.css";
import * as constants from "./constants";
import * as utilities from "./utilities";

export default function Box(props) {
    const [boxVisibility, setBoxVisibility] = useState("visible");

    function handleClick() {
        const box = document.getElementById(props.boxId);

        if (
            (
                props.boxId === constants.redOutlaneBoxId ||
                props.boxId === constants.yelOutlaneBoxId
            ) &&
            utilities.calcNetNudgeAmount(props.die1AmountNudgedBy, props.die2AmountNudgedBy)
        ) {
            // a user cannot nudge to use an outlane, so this situation is checked for first
            alert("You cannot nudge into an outlane");
        } else if (
            props.canReceiveFrom.includes(props.selectedBallFeatureId) &&
            box.style.backgroundColor != "black" &&
            (
                props.canReceiveOn.includes(props.die1) ||
                props.canReceiveOn.includes(props.die2)
            )
        ) {
            // if nudged, increment nudges used
            if (utilities.calcNetNudgeAmount(props.die1AmountNudgedBy, props.die2AmountNudgedBy)) {
                props.incNudgesUsed();
            }

            // black-out box
            box.style.backgroundColor = "black";

            // move ball
            props.moveSelectedBall(props.correspondingFeatureId);
            
            if (props.points) {
                props.addPoints(props.points);
            }
            
            // check if the group of BoxIds this is in is completed
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
                    // group has been completed, so the boxes should be cleared
                    for (const boxId of props.groupBoxIds) {
                        document.getElementById(boxId).style.backgroundColor = "transparent";
                    }
                }
            }

            if (props.action) {
                props.action();
            }

            props.rollDice();
            
        } else {
            alert(`
                invalid choice!
                Die1: ${props.die1}
                Die2: ${props.die2}
                canRecieveOn: ${props.canReceiveOn}
                canRecieveFrom: ${props.canReceiveFrom}
                selectedBallFeatureId: ${props.selectedBallFeatureId}
                ball1FeatureId: ${props.ball1FeatureId}
                ball2FeatureId: ${props.ball2FeatureId}
            `);
        }

        
    }

    useEffect(() => {
        setBoxVisibility(utilities.isGameOver(props.round)? "hidden": "visible");
    }, [props.round]);

    return (
        <div id={props.boxId}
            className={styles.box}
            onClick={handleClick}
            style={{
                top: props.top,
                left: props.left,
                height: props.height,
                width: props.width,
                visibility: boxVisibility,
            }}
        >
        </div>
    )
}