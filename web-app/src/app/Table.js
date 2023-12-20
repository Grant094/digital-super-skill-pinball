'use client'

import React from "react";
import Feature from "./Feature";
import Flipper from "./Flipper";
import Ball from "./Ball";

export default function Table(props) {
    return (
        <div id={props.id}>
            <Feature 
                id="droptarget-yel-du"
                imgSrc="/images/DropTargetYelDu.png"
                imgAlt="A Yellow Drop Target with a 1 & 2 Combobox"
                x="0px"
                y="0px"
                height="50px"
                width="50px"
            />
            <Feature
                id="droptarget-yel-ck"
                imgSrc="/images/DropTargetYelCk.png"
                imgAlt="A Yellow Drop Target with a 3 & 4 Combobox"
                x="50px"
                y="0px"
                height="50px"
                width="50px"
            />
            <Feature
                id="droptarget-yel-ies"
                imgSrc="/images/DropTargetYelIes.png"
                imgAlt="A Yellow Drop Target with a 5 & 6 Combobox"
                x="100px"
                y="0px"
                height="50px"
                width="50px"
            />
            <Feature
                id="droptarget-red-ba"
                imgSrc="/images/DropTargetRedBa.png"
                imgAlt="A Red Drop Target with a 1 & 2 Combobox"
                x="200px"
                y="0px"
                height="50px"
                width="50px"
            />
            <Feature
                id="droptarget-red-ll"
                imgSrc="/images/DropTargetRedLl.png"
                imgAlt="A Red Drop Target with a 3 Box"
                x="250px"
                y="0px"
                height="50px"
                width="50px"
            />
            <Feature
                id="droptarget-red-oo"
                imgSrc="/images/DropTargetRedOo.png"
                imgAlt="A Red Drop Target with a 4 Box"
                x="300px"
                y="0px"
                height="50px"
                width="50px"
            />
            <Feature
                id="droptarget-red-ns"
                imgSrc="/images/DropTargetRedNs.png"
                imgAlt="A Red Drop Target with a 5 & 6 Combobox"
                x="350px"
                y="0px"
                height="50px"
                width="50px"
            />
            <Flipper id="red-flipper" imgSrc="/images/red-flipper.png" imgAlt="A Red Flipper" x="0px" y="100px" />
            <Flipper id="yellow-flipper" imgSrc="/images/yellow-flipper.png" imgAlt="A Yellow Flipper" x="100px" y="100px" />
            <Ball x="75px" y="100px" />
        </div>
    );
}