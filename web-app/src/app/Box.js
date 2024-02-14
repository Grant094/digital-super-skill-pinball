"use client"

import React, { useState } from "react";
import styles from "./box.module.css";
import * as constants from "./constants";
import * as utilities from "./utilities";

export default function Box(props) {
    //#region functions
    function canReceiveFromEitherDie() {
        return (props.canReceiveOn.includes(props.die1) || props.canReceiveOn.includes(props.die2));
    }

    function couldReceiveSelectedBall() {
        return (
            canReceiveFromEitherDie() &&
            props.canReceiveFrom.includes(props.getSelectedBallFeatureId()) &&
            !props.isThisBoxFilled
        );
    }

    function moveWillEndTheGame(round, boxId) {
        return (
            (round === 3) &&
            (
                boxId === constants.YEL_OUTLANE_BOX_ID ||
                boxId === constants.RED_OUTLANE_BOX_ID ||
                boxId === constants.DRAIN_BOX_ID
            )
        )
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
            props.setAlertParagraphText(constants.OUTLANE_NUDGE_ALERT);
        } else if (couldReceiveSelectedBall()) {
            if (
                (constants.HAMMER_SPACE_GROUP_BOX_IDS.includes(props.boxId)) &&
                (props.boxId !== constants.HAMMER_SPACE_1_BOX_ID) &&
                (!props.isPrecedingHammerspaceBoxFilled)
            ) {
                props.setAlertParagraphText(`You must fill in the hammer spaces in sequence from 1 to 6!`);
            } else { // moveBallAndPerformConsequences
                props.setAlertParagraphText("");
                // if nudged, increment nudges used
                if (utilities.calcNetNudgeAmount(props.die1AmountNudgedBy, props.die2AmountNudgedBy)) {
                    props.incNudgesUsed();
                }

                if (props.fillBox) {
                    props.fillBox();
                }

                props.moveSelectedBallToCorrespondingFeature();

                if (props.points) {
                    props.addPoints(props.points);
                }

                if (props.action) {
                    props.action();
                }

                if (props.possiblyClearBoxGroup) {
                    props.possiblyClearBoxGroup();
                }

                if (
                    (   // since you do not select the ball in the drain, if either ball is in the drain, it must be the non-selected ball
                        props.ball1FeatureId === constants.DRAIN_FEATURE_ID ||
                        props.ball2FeatureId === constants.DRAIN_FEATURE_ID
                    ) &&
                    (constants.DRAIN_CORRESPONDING_BOX_IDS.includes(props.boxId)) // does this box send the ball to the drain?
                ) {
                    if (utilities.isLastRound(props.round)) {
                        props.gameOverAlert();
                    } else {
                        props.endRound();
                    }
                }

                props.autoSelectOnlyRemainingBall();

                if (!moveWillEndTheGame(props.round, props.boxId)) {
                    props.rollDice();
                }
            }
        } else { // invalidChoiceAlert
            props.setAlertParagraphText(`Invalid choice!`);
        }
    }
    //#endregion

    return (
        <div id={props.boxId}
            title={props.boxId}
            className={styles.box}
            onClick={handleClick}
            style={{
                backgroundColor: (props.isThisBoxFilled ? constants.FILLED_BACKGROUND_COLOR : constants.UNFILLED_BACKGROUND_COLOR),
                top: props.top,
                left: props.left,
                height: props.height,
                width: props.width,
                visibility: (utilities.isGameOver(props.round) ? "hidden" : "visible"),
            }}
        >
        </div>
    )
}