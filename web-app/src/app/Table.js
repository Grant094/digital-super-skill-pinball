'use client'

import React, { useState } from "react"
import Feature from "./Feature";
import Flipper from "./Flipper";
import Ball from "./Ball";

export default function Table(props) {
    const [ball1FeatureId, setBall1FeatureId] = useState('start');
    const [ball2FeatureId, setBall2FeatureId] = useState('');

    return (
        <div id="table" style={{height: "500px", width: "500px"}}>
            <Feature featureId="droptarget-yel-12"
                canReceiveFrom={['yel-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                imgSrc="/images/DropTargetYel12.png"
                imgAlt="A Yellow Drop Target with a 1 & 2 Combobox"
                x="0px"
                y="0px"
                height="50px"
                width="50px"
            />
            <Feature featureId="droptarget-yel-34"
                canReceiveFrom={['yel-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                imgSrc="/images/DropTargetYel34.png"
                imgAlt="A Yellow Drop Target with a 3 & 4 Combobox"
                x="50px"
                y="0px"
                height="50px"
                width="50px"
            />
            <Feature featureId="droptarget-yel-56"
                canReceiveFrom={['yel-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                imgSrc="/images/DropTargetYel56.png"
                imgAlt="A Yellow Drop Target with a 5 & 6 Combobox"
                x="100px"
                y="0px"
                height="50px"
                width="50px"
            />
            <Feature featureId="droptarget-red-12"
                canReceiveFrom={['red-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                imgSrc="/images/DropTargetRed12.png"
                imgAlt="A Red Drop Target with a 1 & 2 Combobox"
                x="200px"
                y="0px"
                height="50px"
                width="50px"
            />
            <Feature featureId="droptarget-red-3"
                canReceiveFrom={['red-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                imgSrc="/images/DropTargetRed3.png"
                imgAlt="A Red Drop Target with a 3 Box"
                x="250px"
                y="0px"
                height="50px"
                width="50px"
            />
            <Feature featureId="droptarget-red-4"
                canReceiveFrom={['red-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                imgSrc="/images/DropTargetRed4.png"
                imgAlt="A Red Drop Target with a 4 Box"
                x="300px"
                y="0px"
                height="50px"
                width="50px"
            />
            <Feature featureId="droptarget-red-56"
                canReceiveFrom={['red-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                imgSrc="/images/DropTargetRed56.png"
                imgAlt="A Red Drop Target with a 5 & 6 Combobox"
                x="350px"
                y="0px"
                height="50px"
                width="50px"
            />
            <Flipper featureId="red-flipper"
                canReceiveFrom={[
                    'red-flipper',
                    'yel-flipper',
                    'droptarget-yel-12',
                    'droptarget-yel-34',
                    'droptarget-yel-56',
                    'droptarget-red-12',
                    'droptarget-red-3',
                    'droptarget-red-4',
                    'droptarget-red-56',
                    'start'
                ]}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                imgSrc="/images/red-flipper.png"
                imgAlt="A Red Flipper"
                x="0px"
                y="100px"
                height="50px"
                width="50px"
            />
            <Flipper featureId="yel-flipper"
                canReceiveFrom={[
                    'red-flipper',
                    'yel-flipper',
                    'droptarget-yel-12',
                    'droptarget-yel-34',
                    'droptarget-yel-56',
                    'droptarget-red-12',
                    'droptarget-red-3',
                    'droptarget-red-4',
                    'droptarget-red-56',
                    'start'
                ]}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                imgSrc="/images/yel-flipper.png"
                imgAlt="A Yellow Flipper"
                x="100px" 
                y="100px"
                height="50px"
                width="50px"
            />
            <Feature featureId="start"
                x="75px"
                y="100px"
            />
            <Ball x="75px" y="100px" />
        </div>
    );
}