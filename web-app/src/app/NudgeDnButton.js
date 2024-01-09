'use client'

import React, { useEffect } from "react";
import NudgeButton from "./NudgeButton";

export default function NudgeDnButton(props) {

    function handleClick() {
        if (Number(props.die) > 1) {
            props.dieSetter(Number(props.die) - 1);
        }
    }

    return (
        <NudgeButton buttonId={props.buttonId}
            onClick={handleClick}
            symbol="-"
            {...props}
        />
    );
}