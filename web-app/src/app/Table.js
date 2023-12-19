'use client'

import React from "react";
import Feature from "./Feature";
import Flipper from "./Flipper";
import Ball from "./Ball";

export default function Table(props) {
    return (
        <div>
            <Flipper imgSrc="/images/red-flipper.png" imgAlt="A Red Flipper" />
            <Ball x="75px" />
            <Flipper imgSrc="/images/yellow-flipper.png" imgAlt="A Yellow Flipper" x="100px" />
        </div>
    );
}