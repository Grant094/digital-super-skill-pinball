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
            <Feature
                featureId="droptarget-yel-du"
                imgSrc="/images/DropTargetYelDu.png"
                imgAlt="A Yellow Drop Target with a 1 & 2 Combobox"
                x="0px"
                y="0px"
                height="50px"
                width="50px"
                canReceiveFrom={['yellow-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
            />
            <Feature
                featureId="droptarget-yel-ck"
                imgSrc="/images/DropTargetYelCk.png"
                imgAlt="A Yellow Drop Target with a 3 & 4 Combobox"
                x="50px"
                y="0px"
                height="50px"
                width="50px"
                canReceiveFrom={['yellow-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
            />
            <Feature
                featureId="droptarget-yel-ies"
                imgSrc="/images/DropTargetYelIes.png"
                imgAlt="A Yellow Drop Target with a 5 & 6 Combobox"
                x="100px"
                y="0px"
                height="50px"
                width="50px"
                canReceiveFrom={['yellow-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
            />
            <Feature
                featureId="droptarget-red-ba"
                imgSrc="/images/DropTargetRedBa.png"
                imgAlt="A Red Drop Target with a 1 & 2 Combobox"
                x="200px"
                y="0px"
                height="50px"
                width="50px"
                canReceiveFrom={['red-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
            />
            <Feature
                featureId="droptarget-red-ll"
                imgSrc="/images/DropTargetRedLl.png"
                imgAlt="A Red Drop Target with a 3 Box"
                x="250px"
                y="0px"
                height="50px"
                width="50px"
                canReceiveFrom={['red-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
            />
            <Feature
                featureId="droptarget-red-oo"
                imgSrc="/images/DropTargetRedOo.png"
                imgAlt="A Red Drop Target with a 4 Box"
                x="300px"
                y="0px"
                height="50px"
                width="50px"
                canReceiveFrom={['red-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
            />
            <Feature
                featureId="droptarget-red-ns"
                imgSrc="/images/DropTargetRedNs.png"
                imgAlt="A Red Drop Target with a 5 & 6 Combobox"
                x="350px"
                y="0px"
                height="50px"
                width="50px"
                canReceiveFrom={['red-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
            />
            <Flipper featureId="red-flipper" 
                imgSrc="/images/red-flipper.png" 
                imgAlt="A Red Flipper" 
                x="0px" 
                y="100px"
                height="50px"
                width="50px"
                canReceiveFrom={[
                    'red-flipper',
                    'yellow-flipper',
                    'droptarget-yel-du',
                    'droptarget-yel-ck',
                    'droptarget-yel-ies',
                    'droptarget-red-ba',
                    'droptarget-red-ll',
                    'droptarget-red-oo',
                    'droptarget-red-ns',
                    'start'
                ]}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
            />
            <Flipper featureId="yellow-flipper" 
                imgSrc="/images/yellow-flipper.png" 
                imgAlt="A Yellow Flipper" 
                x="100px" 
                y="100px"
                height="50px"
                width="50px"
                canReceiveFrom={[
                    'red-flipper',
                    'yellow-flipper',
                    'droptarget-yel-du',
                    'droptarget-yel-ck',
                    'droptarget-yel-ies',
                    'droptarget-red-ba',
                    'droptarget-red-ll',
                    'droptarget-red-oo',
                    'droptarget-red-ns',
                    'start'
                ]}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
            />
            <Feature featureId="start"
                x="75px"
                y="100px"
            />
            <Ball x="75px" y="100px" />
        </div>
    );
}