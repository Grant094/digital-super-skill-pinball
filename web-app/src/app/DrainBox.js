"use client"

import React, { useState, useEffect } from "react";
import Box from "./Box";

export default function DrainBox(props) {
    function drainAction() {
        props.endRound();
    }

    return (
        <Box action={drainAction} {...props} />
    );
}