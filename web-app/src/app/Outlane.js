'use client'

import React, { useState, useEffect } from "react"
import Box from "./Box";

export default function Outlane(props) {
    const POINTS_PER_USED_FLIPPER_BOX = 2;
    const redFlipperGroupBoxIds = [
        'red-flipper-inlane-box-2',
        'red-flipper-box-3',
        'red-flipper-box-45',
        'red-flipper-box-6'
    ];
    const yelFlipperGroupBoxIds = [
        'yel-flipper-inlane-box-5',
        'yel-flipper-box-1',
        'yel-flipper-box-23',
        'yel-flipper-box-4'
    ];
    const flipperGroupBoxIds = [...redFlipperGroupBoxIds, ...yelFlipperGroupBoxIds];

    function awardOutlanePoints() {
        let relevantFlipperBoxesUsed = 0;
        for (const boxId of props.relevantFlipperBoxIds) {
            if (document.getElementById(boxId).style.backgroundColor === "black") {
                relevantFlipperBoxesUsed++;
            }
        }

        props.setScore(props.score + (relevantFlipperBoxesUsed * POINTS_PER_USED_FLIPPER_BOX));


        // end the round
        for (const flipperBoxId of flipperGroupBoxIds) {
            document.getElementById(flipperBoxId).style.backgroundColor = 'transparent';
        }

        document.getElementById("red-outlane-1").style.backgroundColor = 'transparent';
        document.getElementById("yel-outlane-6").style.backgroundColor = 'transparent';

        props.setRound(() => Number(props.round) + 1);
    }
    
    return (
        <Box
            height="130px"
            width="62px"
            action={awardOutlanePoints}
            {...props}
        />
    );
}