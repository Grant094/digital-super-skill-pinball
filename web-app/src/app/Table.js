'use client'

import React, { useState } from "react"
import Feature from "./Feature";
import Flipper from "./Flipper";
import Ball from "./Ball";
import Box from "./Box";

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
                height="50px"
                width="35px"
            />
            <Feature featureId="droptarget-red-3"
                canReceiveFrom={['red-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="650px"
                y="621px"
                height="40px"
                width="35px"
            />
            <Feature featureId="droptarget-red-4"
                canReceiveFrom={['red-flipper']}
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="675px"
                y="665px"
                height="42px"
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
            <Box boxId="red-flipper-box-3"
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
                correspondingFeatureId='red-flipper'
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="435px"
                y="840px"
                height="35px"
                width="40px"
            />
            <Box boxId="red-flipper-box-45"
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
                correspondingFeatureId='red-flipper'
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="410px"
                y="875px"
                height="45px"
                width="45px"
            />
            <Box boxId="red-flipper-box-6"
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
                correspondingFeatureId='red-flipper'
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="390px"
                y="915px"
                height="45px"
                width="45px"
            />
            <Box boxId="yel-flipper-box-1"
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
                correspondingFeatureId='yel-flipper'
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="500px"
                y="840px"
                height="40px"
                width="40px"
            />
            <Box boxId="yel-flipper-box-23"
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
                correspondingFeatureId='yel-flipper'
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="515px"
                y="875px"
                height="45px"
                width="45px"
            />
            <Box boxId="yel-flipper-box-4"
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
                correspondingFeatureId='yel-flipper'
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="535px"
                y="915px"
                height="45px"
                width="45px"
            />
            <Feature featureId="red-flipper"
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="410px"
                y="970px"
                height="25px"
                width="25px"
            />
            <Feature featureId="yel-flipper"
                ball1FeatureId={ball1FeatureId}
                ball2FeatureId={ball2FeatureId}
                setBall1FeatureId={setBall1FeatureId}
                setBall2FeatureId={setBall2FeatureId}
                x="540px" 
                y="970px"
                height="25px"
                width="25px"
            />
            <Feature featureId="start"
                x="660px"
                y="240px"
                height="50px"
                width="50px"
            />
            <Ball x="660px" y="240px" />
        </div>
    );
}