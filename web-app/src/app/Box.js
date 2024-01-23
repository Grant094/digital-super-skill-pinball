"use client"

import React, { useState, useEffect } from "react";
import styles from "./box.module.css";
import * as constants from "./constants";
import * as utilities from "./utilities";

export default function Box(props) {
    const [boxVisibility, setBoxVisibility] = useState("visible");
    const BOX_ELEMENT = (typeof window !== 'undefined'? document.getElementById(props.boxId): null);

    //#region functions
    function canReceiveFromEitherDie() {
        return (props.canReceiveOn.includes(props.die1) || props.canReceiveOn.includes(props.die2));
    }

    function couldReceiveSelectedBall() {
        return (
            canReceiveFromEitherDie() &&
            props.canReceiveFrom.includes(props.getSelectedBallFeatureId()) &&
            BOX_ELEMENT.style.backgroundColor !== "black"
        );
    }

    function handleClick() {
        if (
            (
                props.boxId === constants.RED_OUTLANE_BOX_ID ||
                props.boxId === constants.YEL_OUTLANE_BOX_ID
            ) &&
            utilities.calcNetNudgeAmount(props.die1AmountNudgedBy, props.die2AmountNudgedBy)
        ) {
            // a user cannot nudge to use an outlane, so this situation is checked for first
            alert("You cannot nudge into an outlane");
        } else if (couldReceiveSelectedBall()) {
            if (
                (constants.HAMMER_SPACE_GROUP_BOX_IDS.includes(props.boxId)) &&
                (props.boxId !== constants.HAMMER_SPACE_1_BOX_ID) &&
                (document.getElementById(constants.HAMMER_SPACE_GROUP_BOX_IDS[constants.HAMMER_SPACE_GROUP_BOX_IDS.indexOf(props.boxId) - 1]).style.backgroundColor !== "black")
            ) {
                alert(`You must fill in the hammer spaces in sequence from 1 to 6!`);
            } else { // moveBallAndPerformConsequences
                // if nudged, increment nudges used
                if (utilities.calcNetNudgeAmount(props.die1AmountNudgedBy, props.die2AmountNudgedBy)) {
                    props.incNudgesUsed();
                }
                
                props.fillBox();

                // move ball
                props.moveSelectedBall(props.correspondingFeatureId);
                
                if (props.points) {
                    props.addPoints(props.points);
                }
                
                if (props.action) {
                    props.action();
                }

                props.rollDice();
            }
        } else { // invalidChoiceAlert
            alert(`
                invalid choice!
                Die1: ${props.die1}
                Die2: ${props.die2}
                canRecieveOn: ${props.canReceiveOn}
                canRecieveFrom: ${props.canReceiveFrom}
                selectedBallFeatureId: ${props.getSelectedBallFeatureId()}
                ball1FeatureId: ${props.ball1FeatureId}
                ball2FeatureId: ${props.ball2FeatureId}
            `);
        }
    }
    //#endregion
    
    useEffect(function hideBoxOnGameOver() {
        setBoxVisibility(utilities.isGameOver(props.round)? "hidden": "visible");
    }, [props.round]);

    return (
        <div id={props.boxId}
            className={styles.box}
            onClick={handleClick}
            style={{
                backgroundColor: props.boxBackgroundColor,
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