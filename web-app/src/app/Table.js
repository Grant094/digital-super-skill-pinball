'use client'

import React from "react";
import Feature from "./Feature";
import Flipper from "./Flipper";

export default function Table(props) {
    return (
        <div>
            <Flipper imgSrc="/images/red-flipper.png" imgAlt="A Red Flipper" />
            <Flipper imgSrc="/images/yellow-flipper.png" imgAlt="A Yellow Flipper" x="100px" />
        </div>
    );
}