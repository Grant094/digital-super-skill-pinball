'use client'

import React, { useState, useEffect } from "react";
import styles from './box.module.css'
import Box from "./Box";

export default function DashedBox(props) {
    const [backgroundColor, setBackgroundColor] = useState("transparent");

    useEffect(() => {
        // if there is no ball on the table, the round has ended, and thus this dashed box should be cleared
        if (props.ball1FeatureId === "" && props.ball2FeatureId === "") {
            setBackgroundColor("transparent");
        }
    },[props.ball1FeatureId, props.ball2FeatureId]);

    return (
        <Box {...props} />
    );
}