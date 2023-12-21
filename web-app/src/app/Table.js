'use client'

import React, { useState } from "react"
import Feature from "./Feature";
import Flipper from "./Flipper";
import Ball from "./Ball";

export default function Table(props) {
    const [ball1FeatureId, setBall1FeatureId] = useState('start');
    const [ball2FeatureId, setBall2FeatureId] = useState('');

    return (
        <div id="table">
            <img src="/images/carniball.jpg" alt="Carniball board" />
            <Feature featureId="droptarget-yel-12"
                canReceiveFrom={['yel-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="245px"
                y="675px"
                height="60px"
                width="35px"
            />
            <Feature featureId="droptarget-yel-34"
                canReceiveFrom={['yel-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="280px"
                y="615px"
                height="60px"
                width="35px"
            />
            <Feature featureId="droptarget-yel-56"
                canReceiveFrom={['yel-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="310px"
                y="560px"
                height="60px"
                width="35px"
            />
            <Feature featureId="droptarget-red-12"
                canReceiveFrom={['red-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="630px"
                y="570px"
                height="55px"
                width="35px"
            />
            <Feature featureId="droptarget-red-3"
                canReceiveFrom={['red-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="650px"
                y="610px"
                height="55px"
                width="35px"
            />
            <Feature featureId="droptarget-red-4"
                canReceiveFrom={['red-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="675px"
                y="660px"
                height="55px"
                width="35px"
            />
            <Feature featureId="droptarget-red-56"
                canReceiveFrom={['red-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="695px"
                y="710px"
                height="55px"
                width="35px"
            />
            <Feature featureId="red-flipper"
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
                x="0px"
                y="100px"
                height="50px"
                width="50px"
            />
            <Feature featureId="yel-flipper"
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