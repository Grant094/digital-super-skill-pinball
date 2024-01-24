"use client"

import React, { useState, useEffect } from "react";
import * as constants from "./constants";
import DashedBox from "./DashedBox";

export default function Outlane(props) {
    return (
        <DashedBox
            height="130px"
            width="62px"
            {...props}
        />
    );
}