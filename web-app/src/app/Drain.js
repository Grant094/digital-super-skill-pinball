'use client'

import React, { useState, useEffect } from "react"
import Box from "./Box";

export default function Drain(props) {

    function drainAction() {
        props.setRound(() => Number(props.round) + 1);
    }

    return (
        <Box action={drainAction} {...props} />
    );
}