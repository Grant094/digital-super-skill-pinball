'use client'

import React, { useState, useEffect } from "react"
import Box from "./Box";

export default function Outlane(props) {
    const POINTS_PER_USED_FLIPPER_BOX = 2;
    const redFlipperGroupBoxIds = [
        'red-flipper-box-3',
        'red-flipper-box-45',
        'red-flipper-box-6'
    ];
    const yelFlipperGroupBoxIds = [
                'yel-flipper-box-1',
        'yel-flipper-box-23',
        'yel-flipper-box-4'
    ];
    const inlaneBoxIds = [
        'red-flipper-inlane-box-2',
        'yel-flipper-inlane-box-5'
    ];
    const flipperGroupBoxIds = [...redFlipperGroupBoxIds, ...yelFlipperGroupBoxIds];
    const dashedBoxIds = [...redFlipperGroupBoxIds, ...yelFlipperGroupBoxIds, ...inlaneBoxIds];

    function awardOutlanePoints() {
        let relevantFlipperBoxesUsed = 0;
        for (const boxId of props.relevantFlipperBoxIds) {
            if (document.getElementById(boxId).style.backgroundColor === "black") {
                relevantFlipperBoxesUsed++;
            }
        }

        props.setScore(props.score + (relevantFlipperBoxesUsed * POINTS_PER_USED_FLIPPER_BOX));


        // end the round
        for (const dashedBoxId of dashedBoxIds) {
            document.getElementById(dashedBoxId).style.backgroundColor = 'transparent';
        }

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