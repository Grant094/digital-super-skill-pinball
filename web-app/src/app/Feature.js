"use client"

import React from "react";
import styles from "./feature.module.css";

export default function Feature(props) {
    return (
        <div id={props.featureId}
            title={props.featureId}
            className={styles.feature}
            style={{
                top: props.top,
                left: props.left,
            }}
        >
        </div>
    );
}