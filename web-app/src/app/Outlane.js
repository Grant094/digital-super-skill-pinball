'use client'

import React, { useState, useEffect } from "react"
import Box from "./Box";

export default function Outlane(props) {
    const POINTS_PER_USED_FLIPPER_BOX = 2;

    function awardOutlanePoints() {
        for (const boxId of props.relevantFlipperBoxIds) {
            if (document.getElementById(boxId).style.backgroundColor === "black") {
                props.setScore(() => props.score + POINTS_PER_USED_FLIPPER_BOX);
            }
        }
    }
    
    return (
        <Box boxId={props.boxId}
            action={awardOutlanePoints}
            {...props}
        />
    );
}