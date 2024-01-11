'use client'

import React, { useState, useEffect } from "react"
import Feature from "./Feature";
import Ball from "./Ball";
import Box from "./Box";
import RoundIndicator from "./RoundIndicator";
import Outlane from "./Outlane";

export default function Table(props) {
    const bumperGroupBoxIds = [
        'box-bumper-12-1st-1',
        'box-bumper-12-2nd-1',
        'box-bumper-12-1st-2',
        'box-bumper-12-2nd-2',
        'box-bumper-34-1st-3',
        'box-bumper-34-2nd-3',
        'box-bumper-34-1st-4',
        'box-bumper-34-2nd-4',
        'box-bumper-56-1st-5',
        'box-bumper-56-2nd-5',
        'box-bumper-56-1st-6',
        'box-bumper-56-2nd-6'
    ];
    const bumperFeatureIds = [
        'feature-bumper-12',
        'feature-bumper-34',
        'feature-bumper-56'
    ];
    const yelDropTargetGroupBoxIds = [
        'box-droptarget-yel-12',
        'box-droptarget-yel-34',
        'box-droptarget-yel-56'
    ];
    const redDropTargetGroupBoxIds = [
        'box-droptarget-red-12',
        'box-droptarget-red-3',
        'box-droptarget-red-4',
        'box-droptarget-red-56'
    ];
    const redFlipperGroupBoxIds = [
        'red-flipper-inlane-box-2',
        'red-flipper-box-3',
        'red-flipper-box-45',
        'red-flipper-box-6'
    ];
    const yelFlipperGroupBoxIds = [
        'yel-flipper-inlane-box-5',
        'yel-flipper-box-1',
        'yel-flipper-box-23',
        'yel-flipper-box-4'
    ];
    const flipperGroupBoxIds = [...redFlipperGroupBoxIds, ...yelFlipperGroupBoxIds];
    const flipperIds = [
        'red-flipper',
        'yel-flipper'
    ];
    const yelDropTargetFeatureIds = [
        'feature-droptarget-yel-12',
        'feature-droptarget-yel-34',
        'feature-droptarget-yel-56'
    ];
    const redDropTargetFeatureIds = [
        'feature-droptarget-red-12',
        'feature-droptarget-red-3',
        'feature-droptarget-red-4',
        'feature-droptarget-red-56'
    ];
    const allFeatureIds = [...bumperFeatureIds, ...flipperIds, ...yelDropTargetFeatureIds, ...redDropTargetFeatureIds, 'start'];

    useEffect(() => {
        
    }, [props.round])

    function drainAction() {
        for (const flipperBoxId of flipperGroupBoxIds) {
            document.getElementById(flipperBoxId).style.backgroundColor = 'transparent';
        }

        props.setRound(() => Number(props.round) + 1);
    }

    return (
        <div id="table">
            <img src="/images/carniball.jpg" alt="Carniball board" />
            {/* bumper-12 */}
            <Box boxId="box-bumper-12-1st-1"
                canReceiveOn={[1]}
                canReceiveFrom={['start', 'feature-bumper-56', ...flipperIds]}
                correspondingFeatureId="feature-bumper-12"
                groupBoxIds={bumperGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="155px"
                y="373px"
                height="25px"
                width="25px"
                points="1"
                {...props}
            />
            <Box boxId="box-bumper-12-2nd-1"
                canReceiveOn={[1]}
                canReceiveFrom={['start', 'feature-bumper-56', ...flipperIds]}
                correspondingFeatureId="feature-bumper-12"
                groupBoxIds={bumperGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="155px"
                y="402px"
                height="25px"
                width="25px"
                points="1"
                {...props}
            />
            <Box boxId="box-bumper-12-1st-2"
                canReceiveOn={[2]}
                canReceiveFrom={['start', 'feature-bumper-56', ...flipperIds]}
                correspondingFeatureId="feature-bumper-12"
                groupBoxIds={bumperGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="185px"
                y="373px"
                height="25px"
                width="25px"
                points="1"
                {...props}
            />
            <Box boxId="box-bumper-12-2nd-2"
                canReceiveOn={[2]}
                canReceiveFrom={['start', 'feature-bumper-56', ...flipperIds]}
                correspondingFeatureId="feature-bumper-12"
                groupBoxIds={bumperGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="185px"
                y="402px"
                height="25px"
                width="25px"
                points="1"
                {...props}
            />
            <Feature featureId="feature-bumper-12"
                x="170px"
                y="388px"
            />
            {/* bumper-34 */}
            <Box boxId="box-bumper-34-1st-3"
                canReceiveOn={[3]}
                canReceiveFrom={['start', 'feature-bumper-12', ...flipperIds]}
                correspondingFeatureId="feature-bumper-34"
                groupBoxIds={bumperGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="288px"
                y="373px"
                height="25px"
                width="25px"
                points="1"
                {...props}
            />
            <Box boxId="box-bumper-34-2nd-3"
                canReceiveOn={[3]}
                canReceiveFrom={['start', 'feature-bumper-12', ...flipperIds]}
                correspondingFeatureId="feature-bumper-34"
                groupBoxIds={bumperGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="288px"
                y="402px"
                height="25px"
                width="25px"
                points="1"
                {...props}
            />
            <Box boxId="box-bumper-34-1st-4"
                canReceiveOn={[4]}
                canReceiveFrom={['start', 'feature-bumper-12', ...flipperIds]}
                correspondingFeatureId="feature-bumper-34"
                groupBoxIds={bumperGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="317px"
                y="373px"
                height="25px"
                width="25px"
                points="1"
                {...props}
            />
            <Box boxId="box-bumper-34-2nd-4"
                canReceiveOn={[4]}
                canReceiveFrom={['start', 'feature-bumper-12', ...flipperIds]}
                correspondingFeatureId="feature-bumper-34"
                groupBoxIds={bumperGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="317px"
                y="402px"
                height="25px"
                width="25px"
                points="1"
                {...props}
            />
            <Feature featureId="feature-bumper-34"
                x="303px"
                y="388px"
            />
            {/* bumper-56 */}
            <Box boxId="box-bumper-56-1st-5"
                canReceiveOn={[5]}
                canReceiveFrom={['start', 'feature-bumper-34', ...flipperIds]}
                correspondingFeatureId="feature-bumper-56"
                groupBoxIds={bumperGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="221px"
                y="475px"
                height="25px"
                width="25px"
                points="1"
                {...props}
            />
            <Box boxId="box-bumper-56-2nd-5"
                canReceiveOn={[5]}
                canReceiveFrom={['start', 'feature-bumper-34', ...flipperIds]}
                correspondingFeatureId="feature-bumper-56"
                groupBoxIds={bumperGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="221px"
                y="505px"
                height="25px"
                width="25px"
                points="1"
                {...props}
            />
            <Box boxId="box-bumper-56-1st-6"
                canReceiveOn={[6]}
                canReceiveFrom={['start', 'feature-bumper-34', ...flipperIds]}
                correspondingFeatureId="feature-bumper-56"
                groupBoxIds={bumperGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="251px"
                y="475px"
                height="25px"
                width="25px"
                points="1"
                {...props}
            />
            <Box boxId="box-bumper-56-2nd-6"
                canReceiveOn={[6]}
                canReceiveFrom={['start', 'feature-bumper-34', ...flipperIds]}
                correspondingFeatureId="feature-bumper-56"
                groupBoxIds={bumperGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="251px"
                y="505px"
                height="25px"
                width="25px"
                points="1"
                {...props}
            />
            <Feature featureId="feature-bumper-56"
                x="236px"
                y="490px"
            />
            <Feature featureId="feature-droptarget-yel-12"
                x="35px"
                y="700px"
            />
            <Box boxId="box-droptarget-yel-12"
                canReceiveOn={[1, 2]}
                canReceiveFrom={[...bumperFeatureIds, 'yel-flipper', 'start']}
                correspondingFeatureId="feature-droptarget-yel-12"
                groupBoxIds={yelDropTargetGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="30px"
                y="675px"
                height="60px"
                width="35px"
                points="1"
                {...props}
            />
            <Feature featureId="feature-droptarget-yel-34"
                x="65px"
                y="630px"
            />
            <Box boxId="box-droptarget-yel-34"
                canReceiveOn={[3, 4]}
                canReceiveFrom={[...bumperFeatureIds, 'yel-flipper', 'start']}
                correspondingFeatureId="feature-droptarget-yel-34"
                groupBoxIds={yelDropTargetGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="60px"
                y="615px"
                height="60px"
                width="35px"
                points="1"
                {...props}
            />
            <Feature featureId="feature-droptarget-yel-56"
                x="100px"
                y="575px"
            />
            <Box boxId="box-droptarget-yel-56"
                canReceiveOn={[5, 6]}
                canReceiveFrom={[...bumperFeatureIds, 'yel-flipper', 'start']}
                correspondingFeatureId="feature-droptarget-yel-56"
                groupBoxIds={yelDropTargetGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="95px"
                y="560px"
                height="60px"
                width="35px"
                points="1"
                {...props}
            />
            <Feature featureId="feature-droptarget-red-12"
                x="418px"
                y="585px"
            />
            <Box boxId="box-droptarget-red-12"
                canReceiveOn={[1, 2]}
                canReceiveFrom={[...bumperFeatureIds, 'red-flipper', 'start']}
                correspondingFeatureId="feature-droptarget-red-12"
                groupBoxIds={redDropTargetGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="415px"
                y="570px"
                height="50px"
                width="35px"
                points="1"
                {...props}
            />
            <Feature featureId="feature-droptarget-red-3"
                x="440px"
                y="628px"
            />
            <Box boxId="box-droptarget-red-3"
                canReceiveOn={[3]}
                canReceiveFrom={[...bumperFeatureIds, 'red-flipper', 'start']}
                correspondingFeatureId="feature-droptarget-red-3"
                groupBoxIds={redDropTargetGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="435px"
                y="621px"
                height="40px"
                width="35px"
                points="1"
                {...props}
            />
            <Feature featureId="feature-droptarget-red-4"
                x="460px"
                y="674px"
            />
            <Box boxId="box-droptarget-red-4"
                canReceiveOn={[4]}
                canReceiveFrom={[...bumperFeatureIds, 'red-flipper', 'start']}
                correspondingFeatureId="feature-droptarget-red-4"
                groupBoxIds={redDropTargetGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="455px"
                y="665px"
                height="42px"
                width="35px"
                points="1"
                {...props}
            />
            <Feature featureId="feature-droptarget-red-56"
                x="485px"
                y="725px"
            />
            <Box boxId="box-droptarget-red-56"
                canReceiveOn={[5, 6]}
                canReceiveFrom={[...bumperFeatureIds, 'red-flipper', 'start']}
                correspondingFeatureId="feature-droptarget-red-56"
                groupBoxIds={redDropTargetGroupBoxIds}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="480px"
                y="710px"
                height="55px"
                width="35px"
                points="1"
                {...props}
            />
            <Outlane boxId="red-outlane-1"
                canReceiveOn={[1]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='start'
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                relevantFlipperBoxIds={redFlipperGroupBoxIds}
                x="18px"
                y="815px"
                {...props}
            />
            <Outlane boxId="yel-outlane-6"
                canReceiveOn={[6]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='start'
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                relevantFlipperBoxIds={yelFlipperGroupBoxIds}
                x="458px"
                y="815px"
                {...props}
            />
            <Box boxId="red-flipper-inlane-box-2"
                canReceiveOn={[2]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='red-flipper'
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="94px"
                y="821px"
                height="25px"
                width="25px"
                points="2"
                {...props}
            />
            <Box boxId="red-flipper-box-3"
                canReceiveOn={[3]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='red-flipper'
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="215px"
                y="840px"
                height="35px"
                width="40px"
                {...props}
            />
            <Box boxId="red-flipper-box-45"
                canReceiveOn={[4, 5]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='red-flipper'
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="195px"
                y="875px"
                height="45px"
                width="45px"
                {...props}
            />
            <Box boxId="red-flipper-box-6"
                canReceiveOn={[6]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='red-flipper'
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="178px"
                y="915px"
                height="45px"
                width="45px"
                {...props}
            />
            <Box boxId="yel-flipper-inlane-box-5"
                canReceiveOn={[5]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='yel-flipper'
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="419px"
                y="821px"
                height="25px"
                width="25px"
                points="2"
                {...props}
            />
            <Box boxId="yel-flipper-box-1"
                canReceiveOn={[1]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='yel-flipper'
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="285px"
                y="840px"
                height="40px"
                width="40px"
                {...props}
            />
            <Box boxId="yel-flipper-box-23"
                canReceiveOn={[2, 3]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='yel-flipper'
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="300px"
                y="875px"
                height="45px"
                width="45px"
                {...props}
            />
            <Box boxId="yel-flipper-box-4"
                canReceiveOn={[4]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='yel-flipper'
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="315px"
                y="915px"
                height="45px"
                width="45px"
                {...props}
            />
            <Feature featureId="red-flipper"
                x="195px"
                y="970px"
            />
            <Feature featureId="yel-flipper"
                x="320px" 
                y="970px"
            />
            <Feature featureId="start"
                x="450px"
                y="240px"
                height="50px"
                width="50px"
            />
            <Box boxId="drain"
                canReceiveOn={[1, 2, 3, 4, 5, 6]}
                canReceiveFrom={allFeatureIds}
                correspondingFeatureId='start'
                action={drainAction}
                groupBoxIds={['drain']}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                x="220px"
                y="920px"
                height="85px"
                width="98px"
                {...props}
            />
            <Ball x="450px" y="240px" round={props.round} />
            <RoundIndicator RoundIndicatorId="round-1-indicator" forRound="1" x="950px" y="414px" {...props}/>
            <RoundIndicator RoundIndicatorId="round-2-indicator" forRound="2" x="950px" y="451px" {...props}/>
            <RoundIndicator RoundIndicatorId="round-3-indicator" forRound="3" x="950px" y="487px" {...props}/>
        </div>
    );
}