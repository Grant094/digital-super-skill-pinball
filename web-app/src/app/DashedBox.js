"use client"

import React, { useState, useEffect } from "react";
import styles from "./box.module.css";
import * as utilities from "./utilities"
import Box from "./Box";

export default function DashedBox(props) {
    const [backgroundColor, setBackgroundColor] = useState("transparent");

    useEffect(() => {
        if (utilities.isRoundOver(props.ball1FeatureId, props.ball2FeatureId)) {
            setBackgroundColor("transparent");
        }
    },[props.ball1FeatureId, props.ball2FeatureId]);

    return (
        <Box {...props} />
    );
}