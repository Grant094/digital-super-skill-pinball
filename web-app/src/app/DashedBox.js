"use client"

import React, { useState, useEffect } from "react";
import styles from "./box.module.css";
import * as utilities from "./utilities"
import Box from "./Box";

export default function DashedBox(props) {
    return (
        <Box {...props} />
    );
}