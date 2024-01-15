'use client'

import React, { useState, useEffect } from "react"
import * as constants from "./constants"
import Feature from "./Feature";
import Ball from "./Ball";
import Box from "./Box";
import RoundIndicator from "./RoundIndicator";
import Outlane from "./Outlane";
import DashedBox from "./DashedBox";
import Drain from "./Drain";

export default function Table(props) {
            
    useEffect(() => {
        for (const dashedBoxId of constants.dashedBoxIds) {
            document.getElementById(dashedBoxId).style.backgroundColor = 'transparent';
        }
    }, [props.round])

    return (
        <div id="table">
            <img src="/images/carniball.jpg" alt="Carniball board" />
            <React.Fragment key="ferriswheel">
                <Box boxId={constants.ferriswheelcar12BoxId}
                    canReceiveOn={[1, 2]}
                    canReceiveFrom={constants.ferriswheelCanReceiveFrom}
                    correspondingFeatureId={constants.ferriswheelcar12FeatureId}
                    groupBoxIds={constants.ferriswheelGroupBoxIds}
                    ball1FeatureId={props.ball1FeatureId}
                    ball2FeatureId={props.ball2FeatureId}
                    setBall1FeatureId={props.setBall1FeatureId}
                    setBall2FeatureId={props.setBall2FeatureId}
                    x="160px"
                    y="246px"
                    height="48px"
                    width="65px"
                    {...props}
                />
                <Feature featureId={constants.ferriswheelcar12FeatureId}
                    x="182px"
                    y="304px"
                />
                <Box boxId={constants.ferriswheelcar34FeatureId}
                    canReceiveOn={[3, 4]}
                    canReceiveFrom={constants.ferriswheelCanReceiveFrom}
                    correspondingFeatureId={constants.ferriswheelcar34FeatureId}
                    groupBoxIds={constants.ferriswheelGroupBoxIds}
                    ball1FeatureId={props.ball1FeatureId}
                    ball2FeatureId={props.ball2FeatureId}
                    setBall1FeatureId={props.setBall1FeatureId}
                    setBall2FeatureId={props.setBall2FeatureId}
                    x="255px"
                    y="230px"
                    height="40px"
                    width="62px"
                    {...props}
                />
                <Feature featureId={constants.ferriswheelcar34FeatureId}
                    x="274px"
                    y="280px"
                />
                <Box boxId={constants.ferriswheelcar56BoxId}
                    canReceiveOn={[5, 6]}
                    canReceiveFrom={constants.ferriswheelCanReceiveFrom}
                    correspondingFeatureId={constants.ferriswheelcar56FeatureId}
                    groupBoxIds={constants.ferriswheelGroupBoxIds}
                    ball1FeatureId={props.ball1FeatureId}
                    ball2FeatureId={props.ball2FeatureId}
                    setBall1FeatureId={props.setBall1FeatureId}
                    setBall2FeatureId={props.setBall2FeatureId}
                    x="350px"
                    y="246px"
                    height="48px"
                    width="62px"
                    {...props}
                />
                <Feature featureId={constants.ferriswheelcar56FeatureId}
                    x="365px"
                    y="304px"
                />
            </React.Fragment>
            <React.Fragment key="featofstrength">
                <React.Fragment key="featofstrength-1">
                    <Feature featureId={constants.featofstrengthSpace1FeatureId}
                        x="376px"
                        y="535px"
                    />
                    <Box boxId={constants.featofstrengthSpace1BoxId}
                        canReceiveOn={[1]}
                        canReceiveFrom={constants.featofstrengthCanReceiveFrom}
                        correspondingFeatureId={constants.featofstrengthSpace1FeatureId}
                        groupBoxIds={constants.featofstrengthGroupBoxIds}
                        ball1FeatureId={props.ball1FeatureId}
                        ball2FeatureId={props.ball2FeatureId}
                        setBall1FeatureId={props.setBall1FeatureId}
                        setBall2FeatureId={props.setBall2FeatureId}
                        x="376px"
                        y="535px"
                        height="25px"
                        width="25px"
                        {...props}
                    />
                </React.Fragment>
                <React.Fragment key="featofstrength-2">
                    <Feature featureId={constants.featofstrengthSpace2FeatureId}
                        x="388px"
                        y="505px"
                    />
                    <Box boxId={constants.featofstrengthSpace2BoxId}
                        canReceiveOn={[2]}
                        canReceiveFrom={constants.featofstrengthCanReceiveFrom}
                        correspondingFeatureId={constants.featofstrengthSpace2FeatureId}
                        groupBoxIds={constants.featofstrengthGroupBoxIds}
                        ball1FeatureId={props.ball1FeatureId}
                        ball2FeatureId={props.ball2FeatureId}
                        setBall1FeatureId={props.setBall1FeatureId}
                        setBall2FeatureId={props.setBall2FeatureId}
                        x="388px"
                        y="505px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </React.Fragment>
                <React.Fragment key="featofstrength-3">
                    <Feature featureId={constants.featofstrengthSpace3FeatureId}
                        x="398px"
                        y="477px"
                    />
                    <Box boxId={constants.featofstrengthSpace3BoxId}
                        canReceiveOn={[3]}
                        canReceiveFrom={constants.featofstrengthCanReceiveFrom}
                        correspondingFeatureId={constants.featofstrengthSpace3FeatureId}
                        groupBoxIds={constants.featofstrengthGroupBoxIds}
                        ball1FeatureId={props.ball1FeatureId}
                        ball2FeatureId={props.ball2FeatureId}
                        setBall1FeatureId={props.setBall1FeatureId}
                        setBall2FeatureId={props.setBall2FeatureId}
                        x="398px"
                        y="477px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </React.Fragment>
                <React.Fragment key="featofstrength-4">
                    <Feature featureId={constants.featofstrengthSpace4FeatureId}
                        x="409px"
                        y="448px"
                    />
                    <Box boxId={constants.featofstrengthSpace4BoxId}
                        canReceiveOn={[4]}
                        canReceiveFrom={constants.featofstrengthCanReceiveFrom}
                        correspondingFeatureId={constants.featofstrengthSpace4FeatureId}
                        groupBoxIds={constants.featofstrengthGroupBoxIds}
                        ball1FeatureId={props.ball1FeatureId}
                        ball2FeatureId={props.ball2FeatureId}
                        setBall1FeatureId={props.setBall1FeatureId}
                        setBall2FeatureId={props.setBall2FeatureId}
                        x="409px"
                        y="448px"
                        height="25px"
                        width="25px"
                        points="2"
                        {...props}
                    />
                </React.Fragment>
                <React.Fragment key="featofstrength-5">
                    <Feature featureId={constants.featofstrengthSpace5FeatureId}
                        x="420px"
                        y="420px"
                    />
                    <Box boxId={constants.featofstrengthSpace5BoxId}
                        canReceiveOn={[5]}
                        canReceiveFrom={constants.featofstrengthCanReceiveFrom}
                        correspondingFeatureId={constants.featofstrengthSpace5FeatureId}
                        groupBoxIds={constants.featofstrengthGroupBoxIds}
                        ball1FeatureId={props.ball1FeatureId}
                        ball2FeatureId={props.ball2FeatureId}
                        setBall1FeatureId={props.setBall1FeatureId}
                        setBall2FeatureId={props.setBall2FeatureId}
                        x="420px"
                        y="420px"
                        height="25px"
                        width="25px"
                        points="5"
                        {...props}
                    />
                </React.Fragment>
                <React.Fragment key="featofstrength-6">
                    <Feature featureId={constants.featofstrengthSpace6FeatureId}
                        x="430px"
                        y="390px"
                    />
                    <Box boxId={constants.featofstrengthSpace6BoxId}
                        canReceiveOn={[6]}
                        canReceiveFrom={constants.featofstrengthCanReceiveFrom}
                        correspondingFeatureId={constants.featofstrengthSpace6FeatureId}
                        groupBoxIds={constants.featofstrengthGroupBoxIds}
                        ball1FeatureId={props.ball1FeatureId}
                        ball2FeatureId={props.ball2FeatureId}
                        setBall1FeatureId={props.setBall1FeatureId}
                        setBall2FeatureId={props.setBall2FeatureId}
                        x="430px"
                        y="390px"
                        height="25px"
                        width="25px"
                        points="20"
                        {...props}
                    />
                </React.Fragment>
            </React.Fragment>
            <Box boxId={constants.bumper121st1BoxId}
                canReceiveOn={[1]}
                canReceiveFrom={constants.bumper12CanReceiveFrom}
                correspondingFeatureId={constants.bumper12FeatureId}
                groupBoxIds={constants.bumperGroupBoxIds}
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
            <Box boxId={constants.bumper122nd1BoxId}
                canReceiveOn={[1]}
                canReceiveFrom={constants.bumper12CanReceiveFrom}
                correspondingFeatureId={constants.bumper12FeatureId}
                groupBoxIds={constants.bumperGroupBoxIds}
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
            <Box boxId={constants.bumper121st2BoxId}
                canReceiveOn={[2]}
                canReceiveFrom={constants.bumper12CanReceiveFrom}
                correspondingFeatureId={constants.bumper12FeatureId}
                groupBoxIds={constants.bumperGroupBoxIds}
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
            <Box boxId={constants.bumper122nd2BoxId}
                canReceiveOn={[2]}
                canReceiveFrom={constants.bumper12CanReceiveFrom}
                correspondingFeatureId={constants.bumper12FeatureId}
                groupBoxIds={constants.bumperGroupBoxIds}
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
            <Feature featureId={constants.bumper12FeatureId}
                x="170px"
                y="388px"
            />
            <Box boxId={constants.bumper341st3BoxId}
                canReceiveOn={[3]}
                canReceiveFrom={constants.bumper34CanReceiveFrom}
                correspondingFeatureId={constants.bumper34FeatureId}
                groupBoxIds={constants.bumperGroupBoxIds}
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
            <Box boxId={constants.bumper342nd3BoxId}
                canReceiveOn={[3]}
                canReceiveFrom={constants.bumper34CanReceiveFrom}
                correspondingFeatureId={constants.bumper34FeatureId}
                groupBoxIds={constants.bumperGroupBoxIds}
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
            <Box boxId={constants.bumper341st4BoxId}
                canReceiveOn={[4]}
                canReceiveFrom={constants.bumper34CanReceiveFrom}
                correspondingFeatureId={constants.bumper34FeatureId}
                groupBoxIds={constants.bumperGroupBoxIds}
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
            <Box boxId={constants.bumper342nd4BoxId}
                canReceiveOn={[4]}
                canReceiveFrom={constants.bumper34CanReceiveFrom}
                correspondingFeatureId={constants.bumper34FeatureId}
                groupBoxIds={constants.bumperGroupBoxIds}
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
            <Feature featureId={constants.bumper34FeatureId}
                x="303px"
                y="388px"
            />
            <Box boxId={constants.bumper561st5BoxId}
                canReceiveOn={[5]}
                canReceiveFrom={constants.bumper56CanReceiveFrom}
                correspondingFeatureId={constants.bumper56FeatureId}
                groupBoxIds={constants.bumperGroupBoxIds}
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
            <Box boxId={constants.bumper562nd5BoxId}
                canReceiveOn={[5]}
                canReceiveFrom={constants.bumper56CanReceiveFrom}
                correspondingFeatureId={constants.bumper56FeatureId}
                groupBoxIds={constants.bumperGroupBoxIds}
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
            <Box boxId={constants.bumper561st6BoxId}
                canReceiveOn={[6]}
                canReceiveFrom={constants.bumper56CanReceiveFrom}
                correspondingFeatureId={constants.bumper56FeatureId}
                groupBoxIds={constants.bumperGroupBoxIds}
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
            <Box boxId={constants.bumper562nd6BoxId}
                canReceiveOn={[6]}
                canReceiveFrom={constants.bumper56CanReceiveFrom}
                correspondingFeatureId={constants.bumper56FeatureId}
                groupBoxIds={constants.bumperGroupBoxIds}
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
            <Feature featureId={constants.bumper56FeatureId}
                x="236px"
                y="490px"
            />
            <Feature featureId={constants.yelDropTarget12FeatureId}
                x="35px"
                y="700px"
            />
            <Box boxId={constants.yelDropTarget12BoxId}
                canReceiveOn={[1, 2]}
                canReceiveFrom={constants.dropTargetAllCanReceiveFrom}
                correspondingFeatureId={constants.yelDropTarget12FeatureId}
                groupBoxIds={constants.yelDropTargetGroupBoxIds}
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
            <Feature featureId={constants.yelDropTarget34FeatureId}
                x="65px"
                y="630px"
            />
            <Box boxId={constants.yelDropTarget34BoxId}
                canReceiveOn={[3, 4]}
                canReceiveFrom={constants.dropTargetAllCanReceiveFrom}
                correspondingFeatureId={constants.yelDropTarget34FeatureId}
                groupBoxIds={constants.yelDropTargetGroupBoxIds}
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
            <Feature featureId={constants.yelDropTarget56FeatureId}
                x="100px"
                y="575px"
            />
            <Box boxId={constants.yelDropTarget56BoxId}
                canReceiveOn={[5, 6]}
                canReceiveFrom={constants.dropTargetAllCanReceiveFrom}
                correspondingFeatureId={constants.yelDropTarget56FeatureId}
                groupBoxIds={constants.yelDropTargetGroupBoxIds}
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
            <Feature featureId={constants.redDropTarget12FeatureId}
                x="418px"
                y="585px"
            />
            <Box boxId={constants.redDropTarget12BoxId}
                canReceiveOn={[1, 2]}
                canReceiveFrom={constants.dropTargetAllCanReceiveFrom}
                correspondingFeatureId={constants.redDropTarget12FeatureId}
                groupBoxIds={constants.redDropTargetGroupBoxIds}
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
            <Feature featureId={constants.redDropTarget3FeatureId}
                x="440px"
                y="628px"
            />
            <Box boxId={constants.redDropTarget3BoxId}
                canReceiveOn={[3]}
                canReceiveFrom={constants.dropTargetAllCanReceiveFrom}
                correspondingFeatureId={constants.redDropTarget3FeatureId}
                groupBoxIds={constants.redDropTargetGroupBoxIds}
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
            <Feature featureId={constants.redDropTarget4FeatureId}
                x="460px"
                y="674px"
            />
            <Box boxId={constants.redDropTarget4BoxId}
                canReceiveOn={[4]}
                canReceiveFrom={constants.dropTargetAllCanReceiveFrom}
                correspondingFeatureId={constants.redDropTarget4FeatureId}
                groupBoxIds={constants.redDropTargetGroupBoxIds}
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
            <Feature featureId={constants.redDropTarget56FeatureId}
                x="485px"
                y="725px"
            />
            <Box boxId={constants.redDropTarget56BoxId}
                canReceiveOn={[5, 6]}
                canReceiveFrom={constants.dropTargetAllCanReceiveFrom}
                correspondingFeatureId={constants.redDropTarget56FeatureId}
                groupBoxIds={constants.redDropTargetGroupBoxIds}
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
            <Outlane boxId={constants.redOutlaneBox}
                canReceiveOn={[1]}
                canReceiveFrom={constants.allFeatureIds}
                correspondingFeatureId={constants.startFeatureId}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                relevantFlipperBoxIds={constants.redFlipperGroupBoxIds}
                x="18px"
                y="815px"
                {...props}
            />
            <Outlane boxId={constants.yelOutlaneBox}
                canReceiveOn={[6]}
                canReceiveFrom={constants.allFeatureIds}
                correspondingFeatureId={constants.startFeatureId}
                ball1FeatureId={props.ball1FeatureId}
                ball2FeatureId={props.ball2FeatureId}
                setBall1FeatureId={props.setBall1FeatureId}
                setBall2FeatureId={props.setBall2FeatureId}
                relevantFlipperBoxIds={constants.yelFlipperGroupBoxIds}
                x="458px"
                y="815px"
                {...props}
            />
            <DashedBox boxId={constants.redInlaneBox}
                canReceiveOn={[2]}
                canReceiveFrom={constants.allFeatureIds}
                correspondingFeatureId={constants.redFlipper}
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
            <DashedBox boxId={constants.redFlipperBox3BoxId}
                canReceiveOn={[3]}
                canReceiveFrom={constants.allFeatureIds}
                correspondingFeatureId={constants.redFlipper}
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
            <DashedBox boxId={constants.redFlipperBox45BoxId}
                canReceiveOn={[4, 5]}
                canReceiveFrom={constants.allFeatureIds}
                correspondingFeatureId={constants.redFlipper}
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
            <DashedBox boxId={constants.redFlipperBox6BoxId}
                canReceiveOn={[6]}
                canReceiveFrom={constants.allFeatureIds}
                correspondingFeatureId={constants.redFlipper}
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
            <DashedBox boxId={constants.yelInlaneBox}
                canReceiveOn={[5]}
                canReceiveFrom={constants.allFeatureIds}
                correspondingFeatureId={constants.yelFlipper}
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
            <DashedBox boxId={constants.yelFlipperBox1BoxId}
                canReceiveOn={[1]}
                canReceiveFrom={constants.allFeatureIds}
                correspondingFeatureId={constants.yelFlipper}
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
            <DashedBox boxId={constants.yelFlipperBox23BoxId}
                canReceiveOn={[2, 3]}
                canReceiveFrom={constants.allFeatureIds}
                correspondingFeatureId={constants.yelFlipper}
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
            <DashedBox boxId={constants.yelFlipperBox4BoxId}
                canReceiveOn={[4]}
                canReceiveFrom={constants.allFeatureIds}
                correspondingFeatureId={constants.yelFlipper}
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
            <Feature featureId={constants.redFlipper}
                x="195px"
                y="970px"
            />
            <Feature featureId={constants.yelFlipper}
                x="320px" 
                y="970px"
            />
            <Feature featureId={constants.startFeatureId}
                x="450px"
                y="240px"
                height="50px"
                width="50px"
            />
            <Drain boxId={constants.drainBoxId}
                canReceiveOn={[1, 2, 3, 4, 5, 6]}
                canReceiveFrom={constants.allFeatureIds}
                correspondingFeatureId={constants.startFeatureId}
                groupBoxIds={constants.drainGroupBoxIds}
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