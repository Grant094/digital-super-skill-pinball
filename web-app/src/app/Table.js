'use client'

import React from "react";
import Feature from "./Feature";
import Flipper from "./Flipper";
import Ball from "./Ball";

export default function Table(props) {
    return (
        <div id={props.id}>
            <Flipper id="red-flipper" imgSrc="/images/red-flipper.png" imgAlt="A Red Flipper" />
            <Ball x="75px" />
            <Flipper id="yellow-flipper" imgSrc="/images/yellow-flipper.png" imgAlt="A Yellow Flipper" x="100px" />
        </div>
    );
}