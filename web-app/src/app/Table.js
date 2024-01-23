"use client"

import React, { useState, useEffect, Fragment } from "react";
import * as constants from "./constants";
import * as utilities from "./utilities";
import Feature from "./Feature";
import Ball from "./Ball";
import Box from "./Box";
import RoundIndicator from "./RoundIndicator";
import Outlane from "./Outlane";
import DashedBox from "./DashedBox";

export default function Table(props) {
    //#region state
    //#region box-background-colors
    const [ferriswheelcar12BoxBackgroundColor, setFerriswheelcar12BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [ferriswheelcar34BoxBackgroundColor, setFerriswheelcar34BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [ferriswheelcar56BoxBackgroundColor, setFerriswheelcar56BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper121st1BoxBackgroundColor, setBumper121st1BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper122nd1BoxBackgroundColor, setBumper122nd1BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper121st2BoxBackgroundColor, setBumper121st2BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper122nd2BoxBackgroundColor, setBumper122nd2BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper341st3BoxBackgroundColor, setBumper341st3BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper342nd3BoxBackgroundColor, setBumper342nd3BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper341st4BoxBackgroundColor, setBumper341st4BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper342nd4BoxBackgroundColor, setBumper342nd4BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper561st5BoxBackgroundColor, setBumper561st5BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper562nd5BoxBackgroundColor, setBumper562nd5BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper561st6BoxBackgroundColor, setBumper561st6BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumper562nd6BoxBackgroundColor, setBumper562nd6BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace1BoxBackgroundColor, setHammerspace1BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace2BoxBackgroundColor, setHammerspace2BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace3BoxBackgroundColor, setHammerspace3BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace4BoxBackgroundColor, setHammerspace4BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace5BoxBackgroundColor, setHammerspace5BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace6BoxBackgroundColor, setHammerspace6BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelDroptarget12BoxBackgroundColor, setYelDroptarget12BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelDroptarget34BoxBackgroundColor, setYelDroptarget34BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelDroptarget56BoxBackgroundColor, setYelDroptarget56BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redDroptarget12BoxBackgroundColor, setRedDroptarget12BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redDroptarget3BoxBackgroundColor, setRedDroptarget3BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redDroptarget4BoxBackgroundColor, setRedDroptarget4BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redDroptarget56BoxBackgroundColor, setRedDroptarget56BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redOutlaneBoxBackgroundColor, setRedOutlaneBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelOutlaneBoxBackgroundColor, setYelOutlaneBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redInlaneBoxBackgroundColor, setRedInlaneBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelInlaneBoxBackgroundColor, setYelInlaneBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redFlipperBox3BoxBackgroundColor, setRedFlipperBox3BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redFlipperBox45BoxBackgroundColor, setRedFlipperBox45BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redFlipperBox6BoxBackgroundColor, setRedFlipperBox6BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelFlipperBox1BoxBackgroundColor, setYelFlipperBox1BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelFlipperBox23BoxBackgroundColor, setYelFlipperBox23BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelFlipperBox4BoxBackgroundColor, setYelFlipperBox4BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [drainBoxBackgroundColor, setDrainBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    //#endregion
    //#endregion
    //#region boxBackgroundColorArrays
    //#region ferriswheelBoxBackgroundColorArrays
    const ferriswheelBoxBackgroundColors = [
        ferriswheelcar12BoxBackgroundColor,
        ferriswheelcar34BoxBackgroundColor,
        ferriswheelcar56BoxBackgroundColor,
    ];
    const ferriswheelBoxBackgroundColorSetters = [
        setFerriswheelcar12BoxBackgroundColor,
        setFerriswheelcar34BoxBackgroundColor,
        setFerriswheelcar56BoxBackgroundColor,
    ];
    //#endregion
    //#region bumperBoxBackgroundColorArrays
    const bumperBoxBackgroundColors = [
        bumper121st1BoxBackgroundColor,
        bumper122nd1BoxBackgroundColor,
        bumper121st2BoxBackgroundColor,
        bumper122nd2BoxBackgroundColor,
        bumper341st3BoxBackgroundColor,
        bumper342nd3BoxBackgroundColor,
        bumper341st4BoxBackgroundColor,
        bumper342nd4BoxBackgroundColor,
        bumper561st5BoxBackgroundColor,
        bumper562nd5BoxBackgroundColor,
        bumper561st6BoxBackgroundColor,
        bumper562nd6BoxBackgroundColor,
    ];
    const bumperBoxBackgroundColorSetters = [
        setBumper121st1BoxBackgroundColor,
        setBumper122nd1BoxBackgroundColor,
        setBumper121st2BoxBackgroundColor,
        setBumper122nd2BoxBackgroundColor,
        setBumper341st3BoxBackgroundColor,
        setBumper342nd3BoxBackgroundColor,
        setBumper341st4BoxBackgroundColor,
        setBumper342nd4BoxBackgroundColor,
        setBumper561st5BoxBackgroundColor,
        setBumper562nd5BoxBackgroundColor,
        setBumper561st6BoxBackgroundColor,
        setBumper562nd6BoxBackgroundColor,
    ];
    //#endregion
    //#region hammerspaceBoxBackgroundColorArrays
    const hammerspaceBoxBackgroundColors = [
        hammerspace1BoxBackgroundColor,
        hammerspace2BoxBackgroundColor,
        hammerspace3BoxBackgroundColor,
        hammerspace4BoxBackgroundColor,
        hammerspace5BoxBackgroundColor,
        hammerspace6BoxBackgroundColor,
    ];
    const hammerspaceBoxBackgroundColorSetters = [
        setHammerspace1BoxBackgroundColor,
        setHammerspace2BoxBackgroundColor,
        setHammerspace3BoxBackgroundColor,
        setHammerspace4BoxBackgroundColor,
        setHammerspace5BoxBackgroundColor,
        setHammerspace6BoxBackgroundColor,
    ];
    //#endregion
    //#region yelDroptargetBoxBackgroundColorArrays
    const yelDroptargetBoxBackgroundColors = [
        yelDroptarget12BoxBackgroundColor,
        yelDroptarget34BoxBackgroundColor,
        yelDroptarget56BoxBackgroundColor,
    ];
    const yelDroptargetBoxBackgroundColorSetters = [
        setYelDroptarget12BoxBackgroundColor,
        setYelDroptarget34BoxBackgroundColor,
        setYelDroptarget56BoxBackgroundColor,
    ];
    //#endregion
    //#region redDroptargetBoxBackgroundColorArrays
    const redDroptargetBoxBackgroundColors = [
        redDroptarget12BoxBackgroundColor,
        redDroptarget3BoxBackgroundColor,
        redDroptarget4BoxBackgroundColor,
        redDroptarget56BoxBackgroundColor,
    ];
    const redDroptargetBoxBackgroundColorSetters = [
        setRedDroptarget12BoxBackgroundColor,
        setRedDroptarget3BoxBackgroundColor,
        setRedDroptarget4BoxBackgroundColor,
        setRedDroptarget56BoxBackgroundColor,
    ];
    //#endregion
    //#region miscBoxBackgroundColorArrays
    const dashedBoxesBackgroundColorSetters = [
        setRedOutlaneBoxBackgroundColor,
        setYelOutlaneBoxBackgroundColor,
        setRedInlaneBoxBackgroundColor,
        setYelInlaneBoxBackgroundColor,
        setRedFlipperBox3BoxBackgroundColor,
        setRedFlipperBox45BoxBackgroundColor,
        setRedFlipperBox6BoxBackgroundColor,
        setYelFlipperBox1BoxBackgroundColor,
        setYelFlipperBox23BoxBackgroundColor,
        setYelFlipperBox4BoxBackgroundColor,
    ];
    const redFlipperBoxesBackgroundColors = [
        redFlipperBox3BoxBackgroundColor,
        redFlipperBox45BoxBackgroundColor,
        redFlipperBox6BoxBackgroundColor,
    ];
    const yelFlipperBoxesBackgroundColors = [
        yelFlipperBox1BoxBackgroundColor,
        yelFlipperBox23BoxBackgroundColor,
        yelFlipperBox4BoxBackgroundColor,
    ];
    //#endregion
    //#endregion

    //#region functions
    function clearBoxGroup(boxBackgroundColorSetters) {
        for (const setter of boxBackgroundColorSetters) {
            setter(constants.UNFILLED_BACKGROUND_COLOR);
        }
    }

    // if all boxes in a group are filled in, they should be cleared
    function shouldClearBoxGroup(boxGroupBoxBackgroundColors) {
        const filledBoxes = boxGroupBoxBackgroundColors.filter((color) => color === constants.FILLED_BACKGROUND_COLOR);
        const countOfFilledBoxesInThisGroup = filledBoxes.length;
        const countOfAllBoxesInThisGroup = boxGroupBoxBackgroundColors.length
        return (countOfFilledBoxesInThisGroup === countOfAllBoxesInThisGroup);
    }
    //#endregion

    //#region useEffect
    useEffect(function possiblyClearFerriswheelcars() {
        if (shouldClearBoxGroup(ferriswheelBoxBackgroundColors)) {
            clearBoxGroup(ferriswheelBoxBackgroundColorSetters);
        }
    }, [...ferriswheelBoxBackgroundColors]);

    useEffect(function clearDashedBoxes() {
        for (const dashedBoxId of constants.DASHED_BOX_IDS) {
            document.getElementById(dashedBoxId).style.backgroundColor = "transparent";
        }
    }, [props.round]);
    //#endregion

    return (
        <div id={props.tableId}>
            <img src="/images/carniball.jpg" alt="Carniball board" />
            <Feature featureId={constants.START_FEATURE_ID}
                left={constants.START_LEFT}
                top={constants.START_TOP}
            />
            <Fragment key="ferriswheel">
                <Fragment key="ferriswheelcar12">
                    <Feature featureId={constants.FERRISWHEEL_CAR_12_FEATURE_ID}
                        left="182px"
                        top="304px"
                    />
                    <Box boxId={constants.FERRISWHEEL_CAR_12_BOX_ID}
                        boxBackgroundColor={ferriswheelcar12BoxBackgroundColor}
                        fillBox={() => setFerriswheelcar12BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[1, 2]}
                        canReceiveFrom={constants.FERRISWHEEL_CARS_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.FERRISWHEEL_CAR_12_FEATURE_ID}
                        left="160px"
                        top="246px"
                        height="48px"
                        width="65px"
                        {...props}
                    />
                </Fragment>
                <Fragment key="ferriswheelcar34">
                    <Feature featureId={constants.FERRISWHEEL_CAR_34_FEATURE_ID}
                        left="274px"
                        top="280px"
                    />
                    <Box boxId={constants.FERRISWHEEL_CAR_34_BOX_ID}
                        boxBackgroundColor={ferriswheelcar34BoxBackgroundColor}
                        fillBox={() => setFerriswheelcar34BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[3, 4]}
                        canReceiveFrom={constants.FERRISWHEEL_CARS_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.FERRISWHEEL_CAR_34_FEATURE_ID}
                        left="255px"
                        top="230px"
                        height="40px"
                        width="62px"
                        {...props}
                    />
                </Fragment>
                <Fragment key="ferriswheelcar56">
                    <Feature featureId={constants.FERRISWHEEL_CAR_56_FEATURE_ID}
                        left="365px"
                        top="304px"
                    />
                    <Box boxId={constants.FERRISWHEEL_CAR_56_BOX_ID}
                        boxBackgroundColor={ferriswheelcar56BoxBackgroundColor}
                        fillBox={() => setFerriswheelcar56BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[5, 6]}
                        canReceiveFrom={constants.FERRISWHEEL_CARS_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.FERRISWHEEL_CAR_56_FEATURE_ID}
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
                    <Feature featureId={constants.BUMPER_12_FEATURE_ID}
                        left="170px"
                        top="388px"
                    />
                    <Box boxId={constants.BUMPER_12_1ST_1_BOX_ID}
                        boxBackgroundColor={bumper121st1BoxBackgroundColor}
                        fillBox={() => setBumper121st1BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[1]}
                        canReceiveFrom={constants.BUMPER_12_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_12_FEATURE_ID}
                        left="155px"
                        top="373px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_12_2ND_1_BOX_ID}
                        boxBackgroundColor={bumper122nd1BoxBackgroundColor}
                        fillBox={() => setBumper122nd1BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[1]}
                        canReceiveFrom={constants.BUMPER_12_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_12_FEATURE_ID}
                        left="155px"
                        top="402px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_12_1ST_2_BOX_ID}
                        boxBackgroundColor={bumper121st2BoxBackgroundColor}
                        fillBox={() => setBumper121st2BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[2]}
                        canReceiveFrom={constants.BUMPER_12_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_12_FEATURE_ID}
                        left="185px"
                        top="373px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_12_2ND_2_BOX_ID}
                        boxBackgroundColor={bumper122nd2BoxBackgroundColor}
                        fillBox={() => setBumper122nd2BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[2]}
                        canReceiveFrom={constants.BUMPER_12_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_12_FEATURE_ID}
                        left="185px"
                        top="402px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </Fragment>
                <Fragment key="bumper34">
                    <Feature featureId={constants.BUMPER_34_FEATURE_ID}
                        left="303px"
                        top="388px"
                    />
                    <Box boxId={constants.BUMPER_34_1ST_3_BOX_ID}
                        boxBackgroundColor={bumper341st3BoxBackgroundColor}
                        fillBox={() => setBumper341st3BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[3]}
                        canReceiveFrom={constants.BUMPER_34_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_34_FEATURE_ID}
                        left="288px"
                        top="373px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_34_2ND_3_BOX_ID}
                        boxBackgroundColor={bumper342nd3BoxBackgroundColor}
                        fillBox={() => setBumper342nd3BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[3]}
                        canReceiveFrom={constants.BUMPER_34_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_34_FEATURE_ID}
                        left="288px"
                        top="402px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_34_1ST_4_BOX_ID}
                        boxBackgroundColor={bumper341st4BoxBackgroundColor}
                        fillBox={() => setBumper341st4BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[4]}
                        canReceiveFrom={constants.BUMPER_34_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_34_FEATURE_ID}
                        left="317px"
                        top="373px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_34_2ND_4_BOX_ID}
                        boxBackgroundColor={bumper342nd4BoxBackgroundColor}
                        fillBox={() => setBumper342nd4BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[4]}
                        canReceiveFrom={constants.BUMPER_34_CAN_RECEIVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_34_FEATURE_ID}
                        left="317px"
                        top="402px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </Fragment>
                <Fragment key="bumper56">
                    <Feature featureId={constants.BUMPER_56_FEATURE_ID}
                        left="236px"
                        top="490px"
                    />
                    <Box boxId={constants.BUMPER_56_1ST_5_BOX_ID}
                        boxBackgroundColor={bumper561st5BoxBackgroundColor}
                        fillBox={() => setBumper561st5BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[5]}
                        canReceiveFrom={constants.BUMPER_56_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_56_FEATURE_ID}
                        left="221px"
                        top="475px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_56_2ND_5_BOX_ID}
                        boxBackgroundColor={bumper562nd5BoxBackgroundColor}
                        fillBox={() => setBumper562nd5BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[5]}
                        canReceiveFrom={constants.BUMPER_56_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_56_FEATURE_ID}
                        left="221px"
                        top="505px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_56_1ST_6_BOX_ID}
                        boxBackgroundColor={bumper561st6BoxBackgroundColor}
                        fillBox={() => setBumper561st6BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[6]}
                        canReceiveFrom={constants.BUMPER_56_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_56_FEATURE_ID}
                        left="251px"
                        top="475px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_56_2ND_6_BOX_ID}
                        boxBackgroundColor={bumper562nd6BoxBackgroundColor}
                        fillBox={() => setBumper562nd6BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[6]}
                        canReceiveFrom={constants.BUMPER_56_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.BUMPER_56_FEATURE_ID}
                        left="251px"
                        top="505px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </Fragment>
            </Fragment>
            <Fragment key="hammerspaces">
                <Fragment key="hammerspace-1">
                    <Feature featureId={constants.HAMMER_SPACE_1_FEATURE_ID}
                        left="376px"
                        top="535px"
                    />
                    <Box boxId={constants.HAMMER_SPACE_1_BOX_ID}
                        boxBackgroundColor={hammerspace1BoxBackgroundColor}
                        fillBox={() => setHammerspace1BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[1]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.HAMMER_SPACE_1_FEATURE_ID}
                        left="376px"
                        top="535px"
                        height="25px"
                        width="25px"
                        {...props}
                    />
                </Fragment>
                <Fragment key="hammerspace-2">
                    <Feature featureId={constants.HAMMER_SPACE_2_FEATURE_ID}
                        left="388px"
                        top="505px"
                    />
                    <Box boxId={constants.HAMMER_SPACE_2_BOX_ID}
                        boxBackgroundColor={hammerspace2BoxBackgroundColor}
                        fillBox={() => setHammerspace2BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[2]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.HAMMER_SPACE_2_FEATURE_ID}
                        left="388px"
                        top="505px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </Fragment>
                <Fragment key="hammerspace-3">
                    <Feature featureId={constants.HAMMER_SPACE_3_FEATURE_ID}
                        left="398px"
                        top="477px"
                    />
                    <Box boxId={constants.HAMMER_SPACE_3_BOX_ID}
                        boxBackgroundColor={hammerspace3BoxBackgroundColor}
                        fillBox={() => setHammerspace3BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[3]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.HAMMER_SPACE_3_FEATURE_ID}
                        left="398px"
                        top="477px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                </Fragment>
                <Fragment key="hammerspace-4">
                    <Feature featureId={constants.HAMMER_SPACE_4_FEATURE_ID}
                        left="409px"
                        top="448px"
                    />
                    <Box boxId={constants.HAMMER_SPACE_4_BOX_ID}
                        boxBackgroundColor={hammerspace4BoxBackgroundColor}
                        fillBox={() => setHammerspace4BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[4]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.HAMMER_SPACE_4_FEATURE_ID}
                        left="409px"
                        top="448px"
                        height="25px"
                        width="25px"
                        points="2"
                        {...props}
                    />
                </Fragment>
                <Fragment key="hammerspace-5">
                    <Feature featureId={constants.HAMMER_SPACE_5_FEATURE_ID}
                        left="420px"
                        top="420px"
                    />
                    <Box boxId={constants.HAMMER_SPACE_5_BOX_ID}
                        boxBackgroundColor={hammerspace5BoxBackgroundColor}
                        fillBox={() => setHammerspace5BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[5]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.HAMMER_SPACE_5_FEATURE_ID}
                        left="420px"
                        top="420px"
                        height="25px"
                        width="25px"
                        points="5"
                        {...props}
                    />
                </Fragment>
                <Fragment key="hammerspace-6">
                    <Feature featureId={constants.HAMMER_SPACE_6_FEATURE_ID}
                        left="430px"
                        top="390px"
                    />
                    <Box boxId={constants.HAMMER_SPACE_6_BOX_ID}
                        boxBackgroundColor={hammerspace6BoxBackgroundColor}
                        fillBox={() => setHammerspace6BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[6]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        correspondingFeatureId={constants.HAMMER_SPACE_6_FEATURE_ID}
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
                        <Feature featureId={constants.YEL_DROPTARGET_12_FEATURE_ID}
                            left="35px"
                            top="700px"
                        />
                        <Box boxId={constants.YEL_DROPTARGET_12_BOX_ID}
                            boxBackgroundColor={yelDroptarget12BoxBackgroundColor}
                            fillBox={() => setYelDroptarget12BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[1, 2]}
                            canReceiveFrom={constants.YEL_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            correspondingFeatureId={constants.YEL_DROPTARGET_12_FEATURE_ID}
                            left="30px"
                            top="675px"
                            height="60px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                    <Fragment key="yelDropTarget34">
                        <Feature featureId={constants.YEL_DROPTARGET_34_FEATURE_ID}
                            left="65px"
                            top="630px"
                        />
                        <Box boxId={constants.YEL_DROPTARGET_34_BOX_ID}
                            boxBackgroundColor={yelDroptarget34BoxBackgroundColor}
                            fillBox={() => setYelDroptarget34BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[3, 4]}
                            canReceiveFrom={constants.YEL_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            correspondingFeatureId={constants.YEL_DROPTARGET_34_FEATURE_ID}
                            left="60px"
                            top="615px"
                            height="60px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                    <Fragment key="yelDropTarget56">
                        <Feature featureId={constants.YEL_DROPTARGET_56_FEATURE_ID}
                            left="100px"
                            top="575px"
                        />
                        <Box boxId={constants.YEL_DROPTARGET_56_BOX_ID}
                            boxBackgroundColor={yelDroptarget56BoxBackgroundColor}
                            fillBox={() => setYelDroptarget56BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[5, 6]}
                            canReceiveFrom={constants.YEL_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            correspondingFeatureId={constants.YEL_DROPTARGET_56_FEATURE_ID}
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
                        <Feature featureId={constants.RED_DROPTARGET_12_FEATURE_ID}
                            left="418px"
                            top="585px"
                        />
                        <Box boxId={constants.RED_DROPTARGET_12_BOX_ID}
                            boxBackgroundColor={redDroptarget12BoxBackgroundColor}
                            fillBox={() => setRedDroptarget12BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[1, 2]}
                            canReceiveFrom={constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            correspondingFeatureId={constants.RED_DROPTARGET_12_FEATURE_ID}
                            left="415px"
                            top="570px"
                            height="50px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                    <Fragment key="redDropTarget3">
                        <Feature featureId={constants.RED_DROPTARGET_3_FEATURE_ID}
                            left="440px"
                            top="628px"
                        />
                        <Box boxId={constants.RED_DROPTARGET_3_BOX_ID}
                            boxBackgroundColor={redDroptarget3BoxBackgroundColor}
                            fillBox={() => setRedDroptarget3BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[3]}
                            canReceiveFrom={constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            correspondingFeatureId={constants.RED_DROPTARGET_3_FEATURE_ID}
                            left="435px"
                            top="621px"
                            height="40px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                    <Fragment key="redDropTarget4">
                        <Feature featureId={constants.RED_DROPTARGET_4_FEATURE_ID}
                            left="460px"
                            top="674px"
                        />
                        <Box boxId={constants.RED_DROPTARGET_4_BOX_ID}
                            boxBackgroundColor={redDroptarget4BoxBackgroundColor}
                            fillBox={() => setRedDroptarget4BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[4]}
                            canReceiveFrom={constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            correspondingFeatureId={constants.RED_DROPTARGET_4_FEATURE_ID}
                            left="455px"
                            top="665px"
                            height="42px"
                            width="35px"
                            points="1"
                            {...props}
                        />
                    </Fragment>
                    <Fragment key="redDropTarget56">
                        <Feature featureId={constants.RED_DROPTARGET_56_FEATURE_ID}
                            left="485px"
                            top="725px"
                        />
                        <Box boxId={constants.RED_DROPTARGET_56_BOX_ID}
                            boxBackgroundColor={redDroptarget56BoxBackgroundColor}
                            fillBox={() => setRedDroptarget56BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[5, 6]}
                            canReceiveFrom={constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            correspondingFeatureId={constants.RED_DROPTARGET_56_FEATURE_ID}
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
                <Outlane boxId={constants.RED_OUTLANE_BOX_ID}
                    boxBackgroundColor={redOutlaneBoxBackgroundColor}
                    fillBox={() => setRedOutlaneBoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[1]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.DRAIN_FEATURE_ID}
                    relevantFlipperBoxIds={constants.RED_FLIPPER_GROUP_BOX_IDS}
                    left="18px"
                    top="815px"
                    {...props}
                />
                <Outlane boxId={constants.YEL_OUTLANE_BOX_ID}
                    boxBackgroundColor={yelOutlaneBoxBackgroundColor}
                    fillBox={() => setYelOutlaneBoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[6]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.DRAIN_FEATURE_ID}
                    relevantFlipperBoxIds={constants.YEL_FLIPPER_GROUP_BOX_IDS}
                    left="458px"
                    top="815px"
                    {...props}
                />
            </Fragment>
            <Fragment key="inlanes">
                <DashedBox boxId={constants.RED_INLANE_BOX_ID}
                    boxBackgroundColor={redInlaneBoxBackgroundColor}
                    fillBox={() => setRedInlaneBoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[2]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.RED_FLIPPER_FEATURE_ID}
                    left="94px"
                    top="821px"
                    height="25px"
                    width="25px"
                    points="2"
                    {...props}
                />
                <DashedBox boxId={constants.YEL_INLANE_BOX_ID}
                    boxBackgroundColor={yelInlaneBoxBackgroundColor}
                    fillBox={() => setYelInlaneBoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[5]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.YEL_FLIPPER_FEATURE_ID}
                    left="419px"
                    top="821px"
                    height="25px"
                    width="25px"
                    points="2"
                    {...props}
                />
            </Fragment>
            <Fragment key="flippers">
                <Feature featureId={constants.RED_FLIPPER_FEATURE_ID}
                    left="195px"
                    top="970px"
                />
                <Feature featureId={constants.YEL_FLIPPER_FEATURE_ID}
                    left="320px"
                    top="970px"
                />
            </Fragment>
            <Fragment key="redflipperboxes">
                <DashedBox boxId={constants.RED_FLIPPER_BOX_3_BOX_ID}
                    boxBackgroundColor={redFlipperBox3BoxBackgroundColor}
                    fillBox={() => setRedFlipperBox3BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[3]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.RED_FLIPPER_FEATURE_ID}
                    left="215px"
                    top="840px"
                    height="35px"
                    width="40px"
                    {...props}
                />
                <DashedBox boxId={constants.RED_FLIPPER_BOX_45_BOX_ID}
                    boxBackgroundColor={redFlipperBox45BoxBackgroundColor}
                    fillBox={() => setRedFlipperBox45BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[4, 5]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.RED_FLIPPER_FEATURE_ID}
                    left="195px"
                    top="875px"
                    height="45px"
                    width="45px"
                    {...props}
                />
                <DashedBox boxId={constants.RED_FLIPPER_BOX_6_BOX_ID}
                    boxBackgroundColor={redFlipperBox6BoxBackgroundColor}
                    fillBox={() => setRedFlipperBox6BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[6]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.RED_FLIPPER_FEATURE_ID}
                    left="178px"
                    top="915px"
                    height="45px"
                    width="45px"
                    {...props}
                />
            </Fragment>
            <Fragment key="yelflipperboxes">
                <DashedBox boxId={constants.YEL_FLIPPER_BOX_1_BOX_ID}
                    boxBackgroundColor={yelFlipperBox1BoxBackgroundColor}
                    fillBox={() => setYelFlipperBox1BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[1]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.YEL_FLIPPER_FEATURE_ID}
                    left="285px"
                    top="840px"
                    height="40px"
                    width="40px"
                    {...props}
                />
                <DashedBox boxId={constants.YEL_FLIPPER_BOX_23_BOX_ID}
                    boxBackgroundColor={yelFlipperBox23BoxBackgroundColor}
                    fillBox={() => setYelFlipperBox23BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[2, 3]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.YEL_FLIPPER_FEATURE_ID}
                    left="300px"
                    top="875px"
                    height="45px"
                    width="45px"
                    {...props}
                />
                <DashedBox boxId={constants.YEL_FLIPPER_BOX_4_BOX_ID}
                    boxBackgroundColor={yelFlipperBox4BoxBackgroundColor}
                    fillBox={() => setYelFlipperBox4BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[4]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.YEL_FLIPPER_FEATURE_ID}
                    left="315px"
                    top="915px"
                    height="45px"
                    width="45px"
                    {...props}
                />
            </Fragment>
            <Fragment key="drain">
                <Feature featureId={constants.DRAIN_FEATURE_ID}
                    left={constants.DRAIN_FEATURE_LEFT}
                    top={constants.DRAIN_FEATURE_TOP}
                />
                <Box boxId={constants.DRAIN_BOX_ID}
                    boxBackgroundColor={drainBoxBackgroundColor}
                    fillBox={() => setDrainBoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[1, 2, 3, 4, 5, 6]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    correspondingFeatureId={constants.DRAIN_FEATURE_ID}
                    left="220px"
                    top="920px"
                    height="85px"
                    width="98px"
                    {...props}
                />
            </Fragment>
            <Ball ballId={constants.BALL1_ID}
                left={constants.START_LEFT}
                top={constants.START_TOP}
                round={props.round}
                ballFeatureId={props.ball1FeatureId}
            />
            <Ball ballId={constants.BALL2_ID}
                left={constants.DRAIN_FEATURE_LEFT}
                top={constants.DRAIN_FEATURE_TOP}
                round={props.round}
                ballFeatureId={props.ball2FeatureId}
            />
            <Fragment key="roundindicators">
                <RoundIndicator RoundIndicatorId="round-1-indicator" forRound="1" top="950px" left="414px" {...props} />
                <RoundIndicator RoundIndicatorId="round-2-indicator" forRound="2" top="950px" left="451px" {...props} />
                <RoundIndicator RoundIndicatorId="round-3-indicator" forRound="3" top="950px" left="487px" {...props} />
            </Fragment>
        </div>
    );
}