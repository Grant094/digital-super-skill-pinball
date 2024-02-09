"use client"

import React from "react";
import NudgeButton from "./NudgeButton";

export default function NudgeDnButton(props) {
    return (
        <NudgeButton buttonId={props.buttonId}
            symbol="-"
            atMinOrMax={Number(props.die) === 1}
            {...props}
        />
    );
}