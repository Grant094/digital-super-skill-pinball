"use client"

import React, { useState, Fragment } from "react";
import * as constants from "./constants";
import * as utilities from "./utilities";
import Feature from "./Feature";
import Ball from "./Ball";
import Box from "./Box";
import RoundIndicator from "./RoundIndicator";
import Outlane from "./Outlane";
import DashedBox from "./DashedBox";
import SkillShotBox from "./SkillShotBox";

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
    const [drainBoxBackgroundColor, setDrainBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    //#endregion
    //#region skill shot indicator visibility
    const [skillShotIndicator1Visibility, setSkillShotBox1Visibility] = useState("hidden");
    const [skillShotIndicator2Visibility, setSkillShotBox2Visibility] = useState("hidden");
    const [skillShotIndicator3Visibility, setSkillShotBox3Visibility] = useState("hidden");
    const [skillShotIndicator4Visibility, setSkillShotBox4Visibility] = useState("hidden");
    const [skillShotIndicator5Visibility, setSkillShotBox5Visibility] = useState("hidden");
    const [skillShotIndicator6Visibility, setSkillShotBox6Visibility] = useState("hidden");
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
    //#endregion

    //#region functions
    function isBoxFilled(boxBackgroundColor) {
        return (boxBackgroundColor === constants.FILLED_BACKGROUND_COLOR);
    }

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

    function possiblyClearBoxGroup(boxGroupBoxBackgroundColors, boxBackgroundColorSetters) {
        if (shouldClearBoxGroup(boxGroupBoxBackgroundColors)) {
            clearBoxGroup(boxBackgroundColorSetters);
        }
    }

    function ferriswheelcarAction() {
        props.setAlertParagraphText('Select a Skill Shot!');

    }

    function outlaneAction(relevantFlipperBoxesBackgroundColors) {
        const relevantFlipperBoxesFilled = relevantFlipperBoxesBackgroundColors.filter((color) => color === constants.FILLED_BACKGROUND_COLOR);
        const countOfRelevantFlipperBoxesFilled = relevantFlipperBoxesFilled.length;
        props.addPoints(countOfRelevantFlipperBoxesFilled * constants.POINTS_PER_USED_FLIPPER_BOX);
    }

    //#endregion

    return (
        <div id={props.tableId} title={props.tableId}>
            <img src="/images/carniball.jpg" id="carniballTable" title="carniballTable" alt="Carniball board" />
            <Feature featureId={constants.START_FEATURE_ID}
                left={constants.START_FEATURE_LEFT}
                top={constants.START_FEATURE_TOP}
            />
            <Fragment key="skill-shot-indicators">
                <SkillShotBox indicatorId={constants.SKILL_SHOT_BOX_1_BOX_ID}
                    top="268px"
                    left="100px"
                    visibility={skillShotIndicator1Visibility}
                />
                <SkillShotBox indicatorId={constants.SKILL_SHOT_BOX_2_BOX_ID}
                    top="290px"
                    left="80px"
                    visibility={skillShotIndicator2Visibility}
                />
                <SkillShotBox indicatorId={constants.SKILL_SHOT_BOX_3_BOX_ID}
                    top="313px"
                    left="62px"
                    visibility={skillShotIndicator3Visibility}
                />
                <SkillShotBox indicatorId={constants.SKILL_SHOT_BOX_4_BOX_ID}
                    top="340px"
                    left="54px"
                    visibility={skillShotIndicator4Visibility}
                />
                <SkillShotBox indicatorId={constants.SKILL_SHOT_BOX_5_BOX_ID}
                    top="368px"
                    left="66px"
                    visibility={skillShotIndicator5Visibility}
                />
                <SkillShotBox indicatorId={constants.SKILL_SHOT_BOX_6_BOX_ID}
                    top="394px"
                    left="83px"
                    visibility={skillShotIndicator6Visibility}
                />
            </Fragment>
            <Fragment key="ferriswheel">
                <Fragment key="ferriswheelcar12">
                    <Feature featureId={constants.FERRISWHEEL_CAR_12_FEATURE_ID}
                        left="182px"
                        top="304px"
                    />
                    <Box boxId={constants.FERRISWHEEL_CAR_12_BOX_ID}
                        boxBackgroundColor={ferriswheelcar12BoxBackgroundColor}
                        isThisBoxFilled={isBoxFilled(ferriswheelcar12BoxBackgroundColor)}
                        fillBox={() => setFerriswheelcar12BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[1, 2]}
                        canReceiveFrom={constants.FERRISWHEEL_CARS_CAN_RECEIVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.FERRISWHEEL_CAR_12_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(ferriswheelBoxBackgroundColors, ferriswheelBoxBackgroundColorSetters)}
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
                        isThisBoxFilled={isBoxFilled(ferriswheelcar34BoxBackgroundColor)}
                        fillBox={() => setFerriswheelcar34BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[3, 4]}
                        canReceiveFrom={constants.FERRISWHEEL_CARS_CAN_RECEIVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.FERRISWHEEL_CAR_34_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(ferriswheelBoxBackgroundColors, ferriswheelBoxBackgroundColorSetters)}
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
                        isThisBoxFilled={isBoxFilled(ferriswheelcar56BoxBackgroundColor)}
                        fillBox={() => setFerriswheelcar56BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[5, 6]}
                        canReceiveFrom={constants.FERRISWHEEL_CARS_CAN_RECEIVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.FERRISWHEEL_CAR_56_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(ferriswheelBoxBackgroundColors, ferriswheelBoxBackgroundColorSetters)}
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
                        isThisBoxFilled={isBoxFilled(bumper121st1BoxBackgroundColor)}
                        fillBox={() => setBumper121st1BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[1]}
                        canReceiveFrom={constants.BUMPER_12_CAN_RECEIVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.BUMPER_12_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                        left="155px"
                        top="373px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_12_2ND_1_BOX_ID}
                        isThisBoxFilled={isBoxFilled(bumper122nd1BoxBackgroundColor)}
                        fillBox={() => setBumper122nd1BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[1]}
                        canReceiveFrom={constants.BUMPER_12_CAN_RECEIVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.BUMPER_12_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                        left="155px"
                        top="402px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_12_1ST_2_BOX_ID}
                        isThisBoxFilled={isBoxFilled(bumper121st2BoxBackgroundColor)}
                        fillBox={() => setBumper121st2BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[2]}
                        canReceiveFrom={constants.BUMPER_12_CAN_RECEIVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.BUMPER_12_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                        left="185px"
                        top="373px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_12_2ND_2_BOX_ID}
                        isThisBoxFilled={isBoxFilled(bumper122nd2BoxBackgroundColor)}
                        fillBox={() => setBumper122nd2BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[2]}
                        canReceiveFrom={constants.BUMPER_12_CAN_RECEIVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.BUMPER_12_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
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
                        isThisBoxFilled={isBoxFilled(bumper341st3BoxBackgroundColor)}
                        fillBox={() => setBumper341st3BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[3]}
                        canReceiveFrom={constants.BUMPER_34_CAN_RECEIVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.BUMPER_34_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                        left="288px"
                        top="373px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_34_2ND_3_BOX_ID}
                        isThisBoxFilled={isBoxFilled(bumper342nd3BoxBackgroundColor)}
                        fillBox={() => setBumper342nd3BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[3]}
                        canReceiveFrom={constants.BUMPER_34_CAN_RECEIVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.BUMPER_34_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                        left="288px"
                        top="402px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_34_1ST_4_BOX_ID}
                        isThisBoxFilled={isBoxFilled(bumper341st4BoxBackgroundColor)}
                        fillBox={() => setBumper341st4BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[4]}
                        canReceiveFrom={constants.BUMPER_34_CAN_RECEIVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.BUMPER_34_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                        left="317px"
                        top="373px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_34_2ND_4_BOX_ID}
                        isThisBoxFilled={isBoxFilled(bumper342nd4BoxBackgroundColor)}
                        fillBox={() => setBumper342nd4BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[4]}
                        canReceiveFrom={constants.BUMPER_34_CAN_RECEIVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.BUMPER_34_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
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
                        isThisBoxFilled={isBoxFilled(bumper561st5BoxBackgroundColor)}
                        fillBox={() => setBumper561st5BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[5]}
                        canReceiveFrom={constants.BUMPER_56_CAN_RECIEVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.BUMPER_56_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                        left="221px"
                        top="475px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_56_2ND_5_BOX_ID}
                        isThisBoxFilled={isBoxFilled(bumper562nd5BoxBackgroundColor)}
                        fillBox={() => setBumper562nd5BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[5]}
                        canReceiveFrom={constants.BUMPER_56_CAN_RECIEVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.BUMPER_56_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                        left="221px"
                        top="505px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_56_1ST_6_BOX_ID}
                        isThisBoxFilled={isBoxFilled(bumper561st6BoxBackgroundColor)}
                        fillBox={() => setBumper561st6BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[6]}
                        canReceiveFrom={constants.BUMPER_56_CAN_RECIEVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.BUMPER_56_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                        left="251px"
                        top="475px"
                        height="25px"
                        width="25px"
                        points="1"
                        {...props}
                    />
                    <Box boxId={constants.BUMPER_56_2ND_6_BOX_ID}
                        isThisBoxFilled={isBoxFilled(bumper562nd6BoxBackgroundColor)}
                        fillBox={() => setBumper562nd6BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[6]}
                        canReceiveFrom={constants.BUMPER_56_CAN_RECIEVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.BUMPER_56_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
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
                        isThisBoxFilled={isBoxFilled(hammerspace1BoxBackgroundColor)}
                        fillBox={() => setHammerspace1BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[1]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.HAMMER_SPACE_1_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(hammerspaceBoxBackgroundColors, hammerspaceBoxBackgroundColorSetters)}
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
                        isThisBoxFilled={isBoxFilled(hammerspace2BoxBackgroundColor)}
                        fillBox={() => setHammerspace2BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[2]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.HAMMER_SPACE_2_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(hammerspaceBoxBackgroundColors, hammerspaceBoxBackgroundColorSetters)}
                        isPrecedingHammerspaceBoxFilled={isBoxFilled(hammerspace1BoxBackgroundColor)}
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
                        isThisBoxFilled={isBoxFilled(hammerspace3BoxBackgroundColor)}
                        fillBox={() => setHammerspace3BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[3]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.HAMMER_SPACE_3_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(hammerspaceBoxBackgroundColors, hammerspaceBoxBackgroundColorSetters)}
                        isPrecedingHammerspaceBoxFilled={isBoxFilled(hammerspace2BoxBackgroundColor)}
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
                        isThisBoxFilled={isBoxFilled(hammerspace4BoxBackgroundColor)}
                        fillBox={() => setHammerspace4BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[4]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.HAMMER_SPACE_4_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(hammerspaceBoxBackgroundColors, hammerspaceBoxBackgroundColorSetters)}
                        isPrecedingHammerspaceBoxFilled={isBoxFilled(hammerspace3BoxBackgroundColor)}
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
                        isThisBoxFilled={isBoxFilled(hammerspace5BoxBackgroundColor)}
                        fillBox={() => setHammerspace5BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[5]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.HAMMER_SPACE_5_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(hammerspaceBoxBackgroundColors, hammerspaceBoxBackgroundColorSetters)}
                        isPrecedingHammerspaceBoxFilled={isBoxFilled(hammerspace4BoxBackgroundColor)}
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
                        isThisBoxFilled={isBoxFilled(hammerspace6BoxBackgroundColor)}
                        fillBox={() => setHammerspace6BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[6]}
                        canReceiveFrom={constants.HAMMER_SPACES_CAN_RECIEVE_FROM_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.HAMMER_SPACE_6_FEATURE_ID)}
                        possiblyClearBoxGroup={possiblyClearBoxGroup(hammerspaceBoxBackgroundColors, hammerspaceBoxBackgroundColorSetters)}
                        isPrecedingHammerspaceBoxFilled={isBoxFilled(hammerspace5BoxBackgroundColor)}
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
                            isThisBoxFilled={isBoxFilled(yelDroptarget12BoxBackgroundColor)}
                            fillBox={() => setYelDroptarget12BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[1, 2]}
                            canReceiveFrom={constants.YEL_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.YEL_DROPTARGET_12_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(yelDroptargetBoxBackgroundColors, yelDroptargetBoxBackgroundColorSetters)}
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
                            isThisBoxFilled={isBoxFilled(yelDroptarget34BoxBackgroundColor)}
                            fillBox={() => setYelDroptarget34BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[3, 4]}
                            canReceiveFrom={constants.YEL_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.YEL_DROPTARGET_34_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(yelDroptargetBoxBackgroundColors, yelDroptargetBoxBackgroundColorSetters)}
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
                            isThisBoxFilled={isBoxFilled(yelDroptarget56BoxBackgroundColor)}
                            fillBox={() => setYelDroptarget56BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[5, 6]}
                            canReceiveFrom={constants.YEL_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.YEL_DROPTARGET_56_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(yelDroptargetBoxBackgroundColors, yelDroptargetBoxBackgroundColorSetters)}
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
                            isThisBoxFilled={isBoxFilled(redDroptarget12BoxBackgroundColor)}
                            fillBox={() => setRedDroptarget12BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[1, 2]}
                            canReceiveFrom={constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.RED_DROPTARGET_12_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(redDroptargetBoxBackgroundColors, redDroptargetBoxBackgroundColorSetters)}
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
                            isThisBoxFilled={isBoxFilled(redDroptarget3BoxBackgroundColor)}
                            fillBox={() => setRedDroptarget3BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[3]}
                            canReceiveFrom={constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.RED_DROPTARGET_3_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(redDroptargetBoxBackgroundColors, redDroptargetBoxBackgroundColorSetters)}
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
                            isThisBoxFilled={isBoxFilled(redDroptarget4BoxBackgroundColor)}
                            fillBox={() => setRedDroptarget4BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[4]}
                            canReceiveFrom={constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.RED_DROPTARGET_4_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(redDroptargetBoxBackgroundColors, redDroptargetBoxBackgroundColorSetters)}
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
                            isThisBoxFilled={isBoxFilled(redDroptarget56BoxBackgroundColor)}
                            fillBox={() => setRedDroptarget56BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[5, 6]}
                            canReceiveFrom={constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS}
                            moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.RED_DROPTARGET_56_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(redDroptargetBoxBackgroundColors, redDroptargetBoxBackgroundColorSetters)}
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
                    isThisBoxFilled={isBoxFilled(props.redOutlaneBoxBackgroundColor)}
                    fillBox={() => props.setRedOutlaneBoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[1]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.DRAIN_FEATURE_ID)}
                    action={() => outlaneAction(props.redFlipperBoxesBackgroundColors)}
                    left="18px"
                    top="815px"
                    {...props}
                />
                <Outlane boxId={constants.YEL_OUTLANE_BOX_ID}
                    isThisBoxFilled={isBoxFilled(props.yelOutlaneBoxBackgroundColor)}
                    fillBox={() => props.setYelOutlaneBoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[6]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.DRAIN_FEATURE_ID)}
                    action={() => outlaneAction(props.yelFlipperBoxesBackgroundColors)}
                    left="458px"
                    top="815px"
                    {...props}
                />
            </Fragment>
            <Fragment key="inlanes">
                <DashedBox boxId={constants.RED_INLANE_BOX_ID}
                    isThisBoxFilled={isBoxFilled(props.redInlaneBoxBackgroundColor)}
                    fillBox={() => props.setRedInlaneBoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[2]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.RED_FLIPPER_FEATURE_ID)}
                    left="94px"
                    top="821px"
                    height="25px"
                    width="25px"
                    points="2"
                    {...props}
                />
                <DashedBox boxId={constants.YEL_INLANE_BOX_ID}
                    isThisBoxFilled={isBoxFilled(props.yelInlaneBoxBackgroundColor)}
                    fillBox={() => props.setYelInlaneBoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[5]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.YEL_FLIPPER_FEATURE_ID)}
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
                    isThisBoxFilled={isBoxFilled(props.redFlipperBox3BoxBackgroundColor)}
                    fillBox={() => props.setRedFlipperBox3BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[3]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.RED_FLIPPER_FEATURE_ID)}
                    left="215px"
                    top="840px"
                    height="35px"
                    width="40px"
                    {...props}
                />
                <DashedBox boxId={constants.RED_FLIPPER_BOX_45_BOX_ID}
                    isThisBoxFilled={isBoxFilled(props.redFlipperBox45BoxBackgroundColor)}
                    fillBox={() => props.setRedFlipperBox45BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[4, 5]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.RED_FLIPPER_FEATURE_ID)}
                    left="195px"
                    top="875px"
                    height="45px"
                    width="45px"
                    {...props}
                />
                <DashedBox boxId={constants.RED_FLIPPER_BOX_6_BOX_ID}
                    isThisBoxFilled={isBoxFilled(props.redFlipperBox6BoxBackgroundColor)}
                    fillBox={() => props.setRedFlipperBox6BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[6]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.RED_FLIPPER_FEATURE_ID)}
                    left="178px"
                    top="915px"
                    height="45px"
                    width="45px"
                    {...props}
                />
            </Fragment>
            <Fragment key="yelflipperboxes">
                <DashedBox boxId={constants.YEL_FLIPPER_BOX_1_BOX_ID}
                    isThisBoxFilled={isBoxFilled(props.yelFlipperBox1BoxBackgroundColor)}
                    fillBox={() => props.setYelFlipperBox1BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[1]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.YEL_FLIPPER_FEATURE_ID)}
                    left="285px"
                    top="840px"
                    height="40px"
                    width="40px"
                    {...props}
                />
                <DashedBox boxId={constants.YEL_FLIPPER_BOX_23_BOX_ID}
                    isThisBoxFilled={isBoxFilled(props.yelFlipperBox23BoxBackgroundColor)}
                    fillBox={() => props.setYelFlipperBox23BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[2, 3]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.YEL_FLIPPER_FEATURE_ID)}
                    left="300px"
                    top="875px"
                    height="45px"
                    width="45px"
                    {...props}
                />
                <DashedBox boxId={constants.YEL_FLIPPER_BOX_4_BOX_ID}
                    isThisBoxFilled={isBoxFilled(props.yelFlipperBox4BoxBackgroundColor)}
                    fillBox={() => props.setYelFlipperBox4BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                    canReceiveOn={[4]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.YEL_FLIPPER_FEATURE_ID)}
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
                    isThisBoxFilled={isBoxFilled(drainBoxBackgroundColor)}
                    canReceiveOn={[1, 2, 3, 4, 5, 6]}
                    canReceiveFrom={constants.ALL_FEATURE_IDS}
                    moveSelectedBallToCorrespondingFeature={() => props.moveSelectedBall(constants.DRAIN_FEATURE_ID)}
                    left="220px"
                    top="920px"
                    height="85px"
                    width="98px"
                    {...props}
                />
            </Fragment>
            <Ball ballId={constants.BALL1_ID}
                round={props.round}
                ballFeatureId={props.ball1FeatureId}
            />
            <Ball ballId={constants.BALL2_ID}
                round={props.round}
                ballFeatureId={props.ball2FeatureId}
            />
            <Fragment key="roundindicators">
                <RoundIndicator RoundIndicatorId={constants.ROUND_1_INDICATOR_ID} forRound="1" top="950px" left="414px" {...props} />
                <RoundIndicator RoundIndicatorId={constants.ROUND_2_INDICATOR_ID} forRound="2" top="950px" left="451px" {...props} />
                <RoundIndicator RoundIndicatorId={constants.ROUND_3_INDICATOR_ID} forRound="3" top="950px" left="487px" {...props} />
            </Fragment>
        </div>
    );
}