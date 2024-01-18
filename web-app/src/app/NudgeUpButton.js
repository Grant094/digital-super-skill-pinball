"use client"

import React, { useEffect } from "react";
import NudgeButton from "./NudgeButton";

export default function NudgeUpButton(props) {
    return (
        <NudgeButton buttonId={props.buttonId}
            symbol="+"
            atMinOrMax={Number(props.die) === 6}
            {...props}
        />
    );
}