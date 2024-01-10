'use client'

import React, { useEffect } from "react";
import NudgeButton from "./NudgeButton";

export default function NudgeDnButton(props) {

    function handleClick() {
        props.dieSetter(Number(props.die) - 1);
        props.setThisDieAmountNudgedBy(Number(props.thisDieAmountNudgedBy) - 1);
    }

    return (
        <NudgeButton buttonId={props.buttonId}
            onClick={handleClick}
            symbol="-"
            atMinOrMax={Number(props.die) === 1}
            {...props}
        />
    );
}