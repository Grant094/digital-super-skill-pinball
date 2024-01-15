"use client"

import React, { useState, useEffect } from "react"
import * as constants from "./constants"
import DashedBox from "./DashedBox";

export default function Outlane(props) {
    const POINTS_PER_USED_FLIPPER_BOX = 2;

    function awardOutlanePoints() {
        let relevantFlipperBoxesUsed = 0;
        for (const boxId of props.relevantFlipperBoxIds) {
            if (document.getElementById(boxId).style.backgroundColor === "black") {
                relevantFlipperBoxesUsed++;
            }
        }

        props.setScore(props.score + (relevantFlipperBoxesUsed * POINTS_PER_USED_FLIPPER_BOX));


        // end the round
        for (const dashedBoxId of constants.dashedBoxIds) {
            document.getElementById(dashedBoxId).style.backgroundColor = "transparent";
        }

        props.setRound(() => Number(props.round) + 1);
    }
    
    return (
        <DashedBox
            height="130px"
            width="62px"
            action={awardOutlanePoints}
            {...props}
        />
    );
}