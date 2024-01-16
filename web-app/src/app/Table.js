"use client"

import React, { useState, useEffect, Fragment } from "react"
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
            document.getElementById(dashedBoxId).style.backgroundColor = "transparent";
        }
    }, [props.round]);

    return (
        <div id="table">
            <img src="/images/carniball.jpg" alt="Carniball board" />
            <Feature featureId={constants.startFeatureId}
                left="450px"
                top="240px"
                height="50px"
                width="50px"
            />
            <Fragment key="ferriswheel">
                <Fragment key="ferriswheelcar12">
                    <Feature featureId={constants.ferriswheelcar12FeatureId}
                        left="182px"
                        top="304px"
                    />
                    <Box boxId={constants.ferriswheelcar12BoxId}
                        canReceiveOn={[1, 2]}
                        canReceiveFrom={constants.ferriswheelCanReceiveFrom}
                        correspondingFeatureId={constants.ferriswheelcar12FeatureId}
                        groupBoxIds={constants.ferriswheelGroupBoxIds}
                        left="160px"
                        top="246px"
                        height="48px"
                        width="65px"
                        {...props}
                    />
                </Fragment>
                <Fragment key="ferriswheelcar34">
                    <Feature featureId={constants.ferriswheelcar34FeatureId}
                        left="274px"
                        top="280px"
                    />
                    <Box boxId={constants.ferriswheelcar34BoxId}
                        canReceiveOn={[3, 4]}
                        canReceiveFrom={constants.ferriswheelCanReceiveFrom}
                        correspondingFeatureId={constants.ferriswheelcar34FeatureId}
                        groupBoxIds={constants.ferriswheelGroupBoxIds}
                        left="255px"
                        top="230px"
                        height="40px"
                        width="62px"
                        {...props}
                    />
                </Fragment>
                <Fragment key="ferriswheelcar56">
                    <Feature featureId={constants.ferriswheelcar56FeatureId}
                        left="365px"
                        top="304px"
                    />
                    <Box boxId={constants.ferriswheelcar56BoxId}
                        canReceiveOn={[5, 6]}
                        canReceiveFrom={constants.ferriswheelCanReceiveFrom}
                        correspondingFeatureId={constants.ferriswheelcar56FeatureId}
                        groupBoxIds={constants.ferriswheelGroupBoxIds}
                        left="350px"
                        top="246px"
                        height="48px"
                        width="62px"
                        {...props}
                    />
                </Fragment>
            </Fragment>
            <Fragment key="bumpers">
                <Fragment key="bumper12">
                    <Feature featureId={constants.bumper12FeatureId}
                        left="170px"
                        top="388px"
                    />
                    <Box boxId={constants.bumper121st1BoxId}
                        canReceiveOn={[1]}
                        canReceiveFrom={constants.bumper12CanReceiveFrom}
                        correspondingFeatureId={constants.bumper12FeatureId}
                        groupBoxIds={constants.bumperGroupBoxIds}
                        left="155px"
                        top="373px"
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
                        left="155px"
                        top="402px"
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
                        left="185px"
                        top="373px"
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
                        left="185px"
                        top="402px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </Fragment>
                <Fragment key="bumper34">
                    <Feature featureId={constants.bumper34FeatureId}
                        left="303px"
                        top="388px"
                    />
                    <Box boxId={constants.bumper341st3BoxId}
                        canReceiveOn={[3]}
                        canReceiveFrom={constants.bumper34CanReceiveFrom}
                        correspondingFeatureId={constants.bumper34FeatureId}
                        groupBoxIds={constants.bumperGroupBoxIds}
                        left="288px"
                        top="373px"
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
                        left="288px"
                        top="402px"
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
                        left="317px"
                        top="373px"
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
                        left="317px"
                        top="402px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </Fragment>
                <Fragment key="bumper56">
                    <Feature featureId={constants.bumper56FeatureId}
                        left="236px"
                        top="490px"
                    />
                    <Box boxId={constants.bumper561st5BoxId}
                        canReceiveOn={[5]}
                        canReceiveFrom={constants.bumper56CanReceiveFrom}
                        correspondingFeatureId={constants.bumper56FeatureId}
                        groupBoxIds={constants.bumperGroupBoxIds}
                        left="221px"
                        top="475px"
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
                        left="221px"
                        top="505px"
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
                        left="251px"
                        top="475px"
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
                        left="251px"
                        top="505px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </Fragment>
            </Fragment>
            <Fragment key="featofstrength">
                <Fragment key="featofstrength-1">
                    <Feature featureId={constants.hammerSpace1FeatureId}
                        left="376px"
                        top="535px"
                    />
                    <Box boxId={constants.hammerSpace1BoxId}
                        canReceiveOn={[1]}
                        canReceiveFrom={constants.hammerSpaceCanReceiveFrom}
                        correspondingFeatureId={constants.hammerSpace1FeatureId}
                        groupBoxIds={constants.hammerSpaceGroupBoxIds}
                        left="376px"
                        top="535px"
                        height="25px"
                        width="25px"
                        {...props}
                    />
                </Fragment>
                <Fragment key="featofstrength-2">
                    <Feature featureId={constants.hammerSpace2FeatureId}
                        left="388px"
                        top="505px"
                    />
                    <Box boxId={constants.hammerSpace2BoxId}
                        canReceiveOn={[2]}
                        canReceiveFrom={constants.hammerSpaceCanReceiveFrom}
                        correspondingFeatureId={constants.hammerSpace2FeatureId}
                        groupBoxIds={constants.hammerSpaceGroupBoxIds}
                        left="388px"
                        top="505px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </Fragment>
                <Fragment key="featofstrength-3">
                    <Feature featureId={constants.hammerSpace3FeatureId}
                        left="398px"
                        top="477px"
                    />
                    <Box boxId={constants.hammerSpace3BoxId}
                        canReceiveOn={[3]}
                        canReceiveFrom={constants.hammerSpaceCanReceiveFrom}
                        correspondingFeatureId={constants.hammerSpace3FeatureId}
                        groupBoxIds={constants.hammerSpaceGroupBoxIds}
                        left="398px"
                        top="477px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </Fragment>
                <Fragment key="featofstrength-4">
                    <Feature featureId={constants.hammerSpace4FeatureId}
                        left="409px"
                        top="448px"
                    />
                    <Box boxId={constants.hammerSpace4BoxId}
                        canReceiveOn={[4]}
                        canReceiveFrom={constants.hammerSpaceCanReceiveFrom}
                        correspondingFeatureId={constants.hammerSpace4FeatureId}
                        groupBoxIds={constants.hammerSpaceGroupBoxIds}
                        left="409px"
                        top="448px"
                        height="25px"
                        width="25px"
                        points="2"
                        {...props}
                    />
                </Fragment>
                <Fragment key="featofstrength-5">
                    <Feature featureId={constants.hammerSpace5FeatureId}
                        left="420px"
                        top="420px"
                    />
                    <Box boxId={constants.hammerSpace5BoxId}
                        canReceiveOn={[5]}
                        canReceiveFrom={constants.hammerSpaceCanReceiveFrom}
                        correspondingFeatureId={constants.hammerSpace5FeatureId}
                        groupBoxIds={constants.hammerSpaceGroupBoxIds}
                        left="420px"
                        top="420px"
                        height="25px"
                        width="25px"
                        points="5"
                        {...props}
                    />
                </Fragment>
                <Fragment key="featofstrength-6">
                    <Feature featureId={constants.hammerSpace6FeatureId}
                        left="430px"
                        top="390px"
                    />
                    <Box boxId={constants.hammerSpace6BoxId}
                        canReceiveOn={[6]}
                        canReceiveFrom={constants.hammerSpaceCanReceiveFrom}
                        correspondingFeatureId={constants.hammerSpace6FeatureId}
                        groupBoxIds={constants.hammerSpaceGroupBoxIds}
                        left="430px"
                        top="390px"
                        height="25px"
                        width="25px"
                        points="20"
                        {...props}
                    />
                </Fragment>
            </Fragment>
            <Fragment key="droptargets">
                <Fragment key="yelDropTargets">
                    <Fragment key="yelDropTarget12">
                        <Feature featureId={constants.yelDropTarget12FeatureId}
                            left="35px"
                            top="700px"
                        />
                        <Box boxId={constants.yelDropTarget12BoxId}
                            canReceiveOn={[1, 2]}
                            canReceiveFrom={constants.yelDropTargetsCanReceiveFrom}
                            correspondingFeatureId={constants.yelDropTarget12FeatureId}
                            groupBoxIds={constants.yelDropTargetGroupBoxIds}
                            left="30px"
                            top="675px"
                            height="60px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                    <Fragment key="yelDropTarget34">
                        <Feature featureId={constants.yelDropTarget34FeatureId}
                            left="65px"
                            top="630px"
                        />
                        <Box boxId={constants.yelDropTarget34BoxId}
                            canReceiveOn={[3, 4]}
                            canReceiveFrom={constants.yelDropTargetsCanReceiveFrom}
                            correspondingFeatureId={constants.yelDropTarget34FeatureId}
                            groupBoxIds={constants.yelDropTargetGroupBoxIds}
                            left="60px"
                            top="615px"
                            height="60px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                    <Fragment key="yelDropTarget56">
                        <Feature featureId={constants.yelDropTarget56FeatureId}
                            left="100px"
                            top="575px"
                        />
                        <Box boxId={constants.yelDropTarget56BoxId}
                            canReceiveOn={[5, 6]}
                            canReceiveFrom={constants.yelDropTargetsCanReceiveFrom}
                            correspondingFeatureId={constants.yelDropTarget56FeatureId}
                            groupBoxIds={constants.yelDropTargetGroupBoxIds}
                            left="95px"
                            top="560px"
                            height="60px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                </Fragment>
                <Fragment key="redDropTargets">
                    <Fragment key="redDropTarget12">
                        <Feature featureId={constants.redDropTarget12FeatureId}
                            left="418px"
                            top="585px"
                        />
                        <Box boxId={constants.redDropTarget12BoxId}
                            canReceiveOn={[1, 2]}
                            canReceiveFrom={constants.redDropTargetsCanReceiveFrom}
                            correspondingFeatureId={constants.redDropTarget12FeatureId}
                            groupBoxIds={constants.redDropTargetGroupBoxIds}
                            left="415px"
                            top="570px"
                            height="50px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                    <Fragment key="redDropTarget3">
                        <Feature featureId={constants.redDropTarget3FeatureId}
                            left="440px"
                            top="628px"
                        />
                        <Box boxId={constants.redDropTarget3BoxId}
                            canReceiveOn={[3]}
                            canReceiveFrom={constants.redDropTargetsCanReceiveFrom}
                            correspondingFeatureId={constants.redDropTarget3FeatureId}
                            groupBoxIds={constants.redDropTargetGroupBoxIds}
                            left="435px"
                            top="621px"
                            height="40px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                    <Fragment key="redDropTarget4">
                        <Feature featureId={constants.redDropTarget4FeatureId}
                            left="460px"
                            top="674px"
                        />
                        <Box boxId={constants.redDropTarget4BoxId}
                            canReceiveOn={[4]}
                            canReceiveFrom={constants.redDropTargetsCanReceiveFrom}
                            correspondingFeatureId={constants.redDropTarget4FeatureId}
                            groupBoxIds={constants.redDropTargetGroupBoxIds}
                            left="455px"
                            top="665px"
                            height="42px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                    <Fragment key="redDropTarget56">
                        <Feature featureId={constants.redDropTarget56FeatureId}
                            left="485px"
                            top="725px"
                        />
                        <Box boxId={constants.redDropTarget56BoxId}
                            canReceiveOn={[5, 6]}
                            canReceiveFrom={constants.redDropTargetsCanReceiveFrom}
                            correspondingFeatureId={constants.redDropTarget56FeatureId}
                            groupBoxIds={constants.redDropTargetGroupBoxIds}
                            left="480px"
                            top="710px"
                            height="55px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                </Fragment>
            </Fragment>
            <Fragment key="outlanes">
                <Outlane boxId={constants.redOutlaneBox}
                    canReceiveOn={[1]}
                    canReceiveFrom={constants.allFeatureIds}
                    correspondingFeatureId={constants.startFeatureId}
                    relevantFlipperBoxIds={constants.redFlipperGroupBoxIds}
                    left="18px"
                    top="815px"
                    {...props}
                />
                <Outlane boxId={constants.yelOutlaneBox}
                    canReceiveOn={[6]}
                    canReceiveFrom={constants.allFeatureIds}
                    correspondingFeatureId={constants.startFeatureId}
                    relevantFlipperBoxIds={constants.yelFlipperGroupBoxIds}
                    left="458px"
                    top="815px"
                    {...props}
                />
            </Fragment>
            <Fragment key="inlanes">
                <DashedBox boxId={constants.redInlaneBox}
                    canReceiveOn={[2]}
                    canReceiveFrom={constants.allFeatureIds}
                    correspondingFeatureId={constants.redFlipper}
                    left="94px"
                    top="821px"
                    height="25px"
                    width="25px"
                    points="2"
                    {...props}
                />
                <DashedBox boxId={constants.yelInlaneBox}
                    canReceiveOn={[5]}
                    canReceiveFrom={constants.allFeatureIds}
                    correspondingFeatureId={constants.yelFlipper}
                    left="419px"
                    top="821px"
                    height="25px"
                    width="25px"
                    points="2"
                    {...props}
                />
            </Fragment>
            <Fragment key="flippers">
                <Feature featureId={constants.redFlipper}
                    left="195px"
                    top="970px"
                />
                <Feature featureId={constants.yelFlipper}
                    left="320px"
                    top="970px"
                />
            </Fragment>
            <Fragment key="redflipperboxes">
                <DashedBox boxId={constants.redFlipperBox3BoxId}
                    canReceiveOn={[3]}
                    canReceiveFrom={constants.allFeatureIds}
                    correspondingFeatureId={constants.redFlipper}
                    left="215px"
                    top="840px"
                    height="35px"
                    width="40px"
                    {...props}
                />
                <DashedBox boxId={constants.redFlipperBox45BoxId}
                    canReceiveOn={[4, 5]}
                    canReceiveFrom={constants.allFeatureIds}
                    correspondingFeatureId={constants.redFlipper}
                    left="195px"
                    top="875px"
                    height="45px"
                    width="45px"
                    {...props}
                />
                <DashedBox boxId={constants.redFlipperBox6BoxId}
                    canReceiveOn={[6]}
                    canReceiveFrom={constants.allFeatureIds}
                    correspondingFeatureId={constants.redFlipper}
                    left="178px"
                    top="915px"
                    height="45px"
                    width="45px"
                    {...props}
                />
            </Fragment>
            <Fragment key="yelflipperboxes">
                <DashedBox boxId={constants.yelFlipperBox1BoxId}
                    canReceiveOn={[1]}
                    canReceiveFrom={constants.allFeatureIds}
                    correspondingFeatureId={constants.yelFlipper}
                    left="285px"
                    top="840px"
                    height="40px"
                    width="40px"
                    {...props}
                />
                <DashedBox boxId={constants.yelFlipperBox23BoxId}
                    canReceiveOn={[2, 3]}
                    canReceiveFrom={constants.allFeatureIds}
                    correspondingFeatureId={constants.yelFlipper}
                    left="300px"
                    top="875px"
                    height="45px"
                    width="45px"
                    {...props}
                />
                <DashedBox boxId={constants.yelFlipperBox4BoxId}
                    canReceiveOn={[4]}
                    canReceiveFrom={constants.allFeatureIds}
                    correspondingFeatureId={constants.yelFlipper}
                    left="315px"
                    top="915px"
                    height="45px"
                    width="45px"
                    {...props}
                />
            </Fragment>
            <Drain boxId={constants.drainBoxId}
                canReceiveOn={[1, 2, 3, 4, 5, 6]}
                canReceiveFrom={constants.allFeatureIds}
                correspondingFeatureId={constants.startFeatureId}
                groupBoxIds={constants.drainGroupBoxIds}
                left="220px"
                top="920px"
                height="85px"
                width="98px"
                {...props}
            />
            <Ball left="450px" top="240px" round={props.round} />
            <Fragment key="roundindicators">
                <RoundIndicator RoundIndicatorId="round-1-indicator" forRound="1" top="950px" left="414px" {...props} />
                <RoundIndicator RoundIndicatorId="round-2-indicator" forRound="2" top="950px" left="451px" {...props} />
                <RoundIndicator RoundIndicatorId="round-3-indicator" forRound="3" top="950px" left="487px" {...props} />
            </Fragment>
        </div>
    );
}