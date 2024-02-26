"use client"

import React, { useState, useEffect, Fragment } from "react";
import * as constants from "./constants";
import * as utilities from "./utilities";
import DiceTray from "./DiceTray";
import ScoreIndicator from "./ScoreIndicator";
import RestartTray from "./RestartTray";
import AlertTray from "./AlertTray";
import Box from "./Box";
import Feature from "./Feature";
import DashedBox from "./DashedBox";
import Outlane from "./Outlane";
import Ball from "./Ball";
import RoundIndicator from "./RoundIndicator";
import SkillShotBox from "./SkillShotBox";
import BonusIndicator from "./BonusIndicator";
import BonusBox from "./BonusBox";

export default function Game(props) {
    let didInit = false;
    //#region state
    //#region misc game state
    const [dieValuesIndex, setDieValuesIndex] = useState(props.dieValues ? 0 : null);
    const [die1, setDie1] = useState(props.dieValues ? props.dieValues[dieValuesIndex] : 0);
    const [die2, setDie2] = useState(props.dieValues ? props.dieValues[dieValuesIndex] : 0);
    const [die1AmountNudgedBy, setDie1AmountNudgedBy] = useState(0);
    const [die2AmountNudgedBy, setDie2AmountNudgedBy] = useState(0);
    const [selectedDieId, setSelectedDieId] = useState(null);
    const [wasDie1UsedThisTurn, setWasDie1UsedThisTurn] = useState(false);
    const [wasDie2UsedThisTurn, setWasDie2UsedThisTurn] = useState(false);
    const [nudgesUsed, setNudgesUsed] = useState(0);
    const [score, setScore] = useState(0);
    const [round, setRound] = useState(1);
    const [ball1FeatureId, setBall1FeatureId] = useState(constants.START_FEATURE_ID);
    const [ball2FeatureId, setBall2FeatureId] = useState(constants.DRAIN_FEATURE_ID);
    const [wasBall1MovedThisTurn, setWasBall1MovedThisTurn] = useState(false);
    const [wasBall2MovedThisTurn, setWasBall2MovedThisTurn] = useState(false);
    const [selectedBallId, setSelectedBallId] = useState(constants.BALL1_ID);
    const [alertParagraphText, setAlertParagraphText] = useState("");
    const unselectedBall = (
        selectedBallId === constants.BALL1_ID ? constants.BALL2_ID :
            selectedBallId === constants.BALL2_ID ? constants.BALL1_ID : null
    );
    //#endregion
    //#region dice box background colors
    //#region dashed box background colors
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
    //#endregion
    //#region ferris wheel car box background colors
    const [ferriswheelcar12BoxBackgroundColor, setFerriswheelcar12BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [ferriswheelcar34BoxBackgroundColor, setFerriswheelcar34BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [ferriswheelcar56BoxBackgroundColor, setFerriswheelcar56BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    //#endregion
    //#region bumper box background colors
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
    //#endregion
    //#region hammer space box background colors
    const [hammerspace1BoxBackgroundColor, setHammerspace1BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace2BoxBackgroundColor, setHammerspace2BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace3BoxBackgroundColor, setHammerspace3BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace4BoxBackgroundColor, setHammerspace4BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace5BoxBackgroundColor, setHammerspace5BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [hammerspace6BoxBackgroundColor, setHammerspace6BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    //#endregion
    //#region drop target box background colors
    const [yelDroptarget12BoxBackgroundColor, setYelDroptarget12BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelDroptarget34BoxBackgroundColor, setYelDroptarget34BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelDroptarget56BoxBackgroundColor, setYelDroptarget56BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redDroptarget12BoxBackgroundColor, setRedDroptarget12BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redDroptarget3BoxBackgroundColor, setRedDroptarget3BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redDroptarget4BoxBackgroundColor, setRedDroptarget4BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redDroptarget56BoxBackgroundColor, setRedDroptarget56BoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    //#endregion
    const [drainBoxBackgroundColor, setDrainBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    //#endregion
    //#region skill shot box border colors
    const [skillShotBox1BorderColor, setSkillShotBox1BorderColor] = useState(constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);
    const [skillShotBox2BorderColor, setSkillShotBox2BorderColor] = useState(constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);
    const [skillShotBox3BorderColor, setSkillShotBox3BorderColor] = useState(constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);
    const [skillShotBox4BorderColor, setSkillShotBox4BorderColor] = useState(constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);
    const [skillShotBox5BorderColor, setSkillShotBox5BorderColor] = useState(constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);
    const [skillShotBox6BorderColor, setSkillShotBox6BorderColor] = useState(constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);
    //#endregion
    //#region bonus indicator border colors
    const [flipperPassIndicatorBorderColor, setFlipperPassIndicatorBorderColor] = useState(constants.BONUS_INDICATOR_INACTIVE_BORDER_COLOR);
    const [outlaneBonusIndicatorBorderColor, setOutlaneBonusIndicatorBorderColor] = useState(constants.BONUS_INDICATOR_INACTIVE_BORDER_COLOR);
    const [bumperBonusIndicatorBorderColor, setBumperBonusIndicatorBorderColor] = useState(constants.BONUS_INDICATOR_INACTIVE_BORDER_COLOR);
    //#endregion
    //#endregion
    //#region bonus box background colors
    const [flipperPassBonusBoxBackgroundColor, setFlipperPassBonusBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [fillTwoHammerSpacesBonusBoxBackgroundColor, setFillTwoHammerSpacesBonusBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [yelMultiballBonusBoxBackgroundColor, setYelMultiballBonusBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [bumperBonusBoxBackgroundColor, setBumperBonusBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [outlaneBonusBoxBackgroundColor, setOutlaneBonusBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    const [redMultiballBonusBoxBackgroundColor, setRedMultiballBonusBoxBackgroundColor] = useState(constants.UNFILLED_BACKGROUND_COLOR);
    //#endregion

    //#region box background arrays
    //#region dashed boxes background color arrays
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
    //#region skill shot box border color arrays
    const skillShotBoxBorderColors = [
        skillShotBox1BorderColor,
        skillShotBox2BorderColor,
        skillShotBox3BorderColor,
        skillShotBox4BorderColor,
        skillShotBox5BorderColor,
        skillShotBox6BorderColor,
    ];
    const skillShotBoxBorderColorSetters = [
        setSkillShotBox1BorderColor,
        setSkillShotBox2BorderColor,
        setSkillShotBox3BorderColor,
        setSkillShotBox4BorderColor,
        setSkillShotBox5BorderColor,
        setSkillShotBox6BorderColor,
    ];
    //#endregion

    //#region functions
    const incNudgesUsed = (() => setNudgesUsed(nudgesUsed + 1));
    const incRound = (() => setRound(round + 1));

    function handleBallClick(ballId) {
        if (ballId === constants.BALL1_ID && !wasBall1MovedThisTurn) {
            setSelectedBallId(constants.BALL1_ID);
        } else if (ballId === constants.BALL2_ID && !wasBall2MovedThisTurn) {
            setSelectedBallId(constants.BALL2_ID);
        }

        if (alertParagraphText === constants.MULTIBALL_ONLY_DIE_IS_SELECTED_ALERT) {
            setAlertParagraphText("");
        } else if (alertParagraphText === constants.MULTIBALL_NEITHER_BALL_NOR_DIE_SELECTED_ALERT) {
            setAlertParagraphText(constants.MULTIBALL_ONLY_BALL_IS_SELECTED_ALERT);
        }
    }

    function getSelectedBallFeatureId(selectedBallId) {
        if (selectedBallId === constants.BALL1_ID) {
            return ball1FeatureId;
        } else if (selectedBallId === constants.BALL2_ID) {
            return ball2FeatureId;
        } else {
            return null;
        }
    }

    function moveSelectedBall(correspondingFeatureId) {
        if (selectedBallId === constants.BALL1_ID) {
            setBall1FeatureId(correspondingFeatureId);
            setWasBall1MovedThisTurn(true);
        } else if (selectedBallId === constants.BALL2_ID) {
            setBall2FeatureId(correspondingFeatureId);
            setWasBall2MovedThisTurn(true);
        }
    }

    function deselectMovedBall() {
        setSelectedBallId(null);
    }

    function clearDashedBoxes() {
        for (const setter of dashedBoxesBackgroundColorSetters) {
            setter(constants.UNFILLED_BACKGROUND_COLOR);
        }
    }

    function shouldClearBoxGroup(boxGroupBoxBackgroundColors) {
        const filledBoxes = boxGroupBoxBackgroundColors.filter((color) => color === constants.FILLED_BACKGROUND_COLOR);
        const countOfFilledBoxesInThisGroup = filledBoxes.length;
        const countOfAllBoxesInThisGroup = boxGroupBoxBackgroundColors.length
        return (countOfFilledBoxesInThisGroup === countOfAllBoxesInThisGroup);
    }

    function isBoxFilled(boxBackgroundColor) {
        return (boxBackgroundColor === constants.FILLED_BACKGROUND_COLOR);
    }

    function clearBoxGroup(boxBackgroundColorSetters) {
        for (const setter of boxBackgroundColorSetters) {
            setter(constants.UNFILLED_BACKGROUND_COLOR);
        }
    }

    function shouldClearBoxGroup(boxGroupBoxBackgroundColors) {
        const filledBoxes = boxGroupBoxBackgroundColors.filter((color) => color === constants.FILLED_BACKGROUND_COLOR);
        const countOfFilledBoxesInThisGroup = filledBoxes.length;
        const countOfAllBoxesInThisGroup = boxGroupBoxBackgroundColors.length
        return (countOfFilledBoxesInThisGroup === countOfAllBoxesInThisGroup);
    }

    function possiblyClearBoxGroup(boxGroupBoxBackgroundColors, boxBackgroundColorSetters, action = null) {
        if (shouldClearBoxGroup(boxGroupBoxBackgroundColors)) {
            clearBoxGroup(boxBackgroundColorSetters);
        }

        if (action) {
            action();
        }
    }

    function outlaneAction(relevantFlipperBoxesBackgroundColors) {
        const relevantFlipperBoxesFilled = relevantFlipperBoxesBackgroundColors.filter((color) => color === constants.FILLED_BACKGROUND_COLOR);
        const countOfRelevantFlipperBoxesFilled = relevantFlipperBoxesFilled.length;
        const bonusMultiplier = (outlaneBonusIndicatorBorderColor === constants.BONUS_INDICATOR_ACTIVE_BORDER_COLOR) ? 2 : 1;
        addPoints(countOfRelevantFlipperBoxesFilled * constants.POINTS_PER_USED_FLIPPER_BOX * bonusMultiplier);
    }

    function ferriswheelcarClearGroupAction() {
        if (shouldClearBoxGroup(ferriswheelBoxBackgroundColors)) {
            setAlertParagraphText(constants.SELECT_SKILL_SHOT_ALERT);
        }
    }

    function handleSkillShotBoxClick(skillShotBoxBorderColor, skillShotBoxBorderColorSetter) {
        if (
            alertParagraphText === constants.SELECT_SKILL_SHOT_ALERT &&
            skillShotBoxBorderColor === constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR
        ) {
            skillShotBoxBorderColorSetter(constants.SKILL_SHOT_BOX_GAINED_BORDER_COLOR);
            setAlertParagraphText("");
        } else if (
            alertParagraphText !== constants.SELECT_SKILL_SHOT_ALERT &&
            skillShotBoxBorderColor === constants.SKILL_SHOT_BOX_GAINED_BORDER_COLOR
        ) {
            skillShotBoxBorderColorSetter(constants.SKILL_SHOT_BOX_SELECTED_BORDER_COLOR);
            setAlertParagraphText(constants.OVERRIDE_DIE_WITH_SKILL_SHOT_ALERT);
        } else if (
            skillShotBoxBorderColor === constants.SKILL_SHOT_BOX_SELECTED_BORDER_COLOR
        ) {
            skillShotBoxBorderColorSetter(constants.SKILL_SHOT_BOX_GAINED_BORDER_COLOR);
            setAlertParagraphText("");
        }
    }

    function isAnySkillShotBoxSelected() {
        return (skillShotBoxBorderColors.filter((color) => color === constants.SKILL_SHOT_BOX_SELECTED_BORDER_COLOR).length);
    }

    function handleDieClick(dieId) {
        if (isAnySkillShotBoxSelected()) {
            const indexOfSelectedSkillShotBox = skillShotBoxBorderColors.indexOf(constants.SKILL_SHOT_BOX_SELECTED_BORDER_COLOR);
            if (dieId === constants.DIE1_ID) {
                setDie1(indexOfSelectedSkillShotBox + 1);
            } else if (dieId === constants.DIE2_ID) {
                setDie2(indexOfSelectedSkillShotBox + 1);
            }

            skillShotBoxBorderColorSetters[indexOfSelectedSkillShotBox](constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);

            setAlertParagraphText("");
        } else if (
            (ball1FeatureId !== constants.DRAIN_FEATURE_ID || wasBall1MovedThisTurn) &&
            (ball2FeatureId !== constants.DRAIN_FEATURE_ID || wasBall2MovedThisTurn)
        ) {
            if (dieId === constants.DIE1_ID && !wasDie1UsedThisTurn) {
                setSelectedDieId(constants.DIE1_ID);
            } else if (dieId === constants.DIE2_ID && !wasDie2UsedThisTurn) {
                setSelectedDieId(constants.DIE2_ID);
            }

            if (alertParagraphText === constants.MULTIBALL_ONLY_BALL_IS_SELECTED_ALERT) {
                setAlertParagraphText("");
            } else if (alertParagraphText === constants.MULTIBALL_NEITHER_BALL_NOR_DIE_SELECTED_ALERT) {
                setAlertParagraphText(constants.MULTIBALL_ONLY_DIE_IS_SELECTED_ALERT);
            }
        }
    }

    function hasTilted(nextValueOfDie1, nextValueOfDie2) {
        return utilities.calcNetNudgeAmount(die1AmountNudgedBy, die2AmountNudgedBy) > Math.abs(nextValueOfDie1 - nextValueOfDie2);
    }

    function tilt(nextValueOfDie1, nextValueOfDie2) {
        setAlertParagraphText(`Tilted on {${nextValueOfDie1}, ${nextValueOfDie2}}!`);
        endRound();

        const postTiltValueOfDie1 = props.dieValues ? props.dieValues[dieValuesIndex + 1][0] : utilities.getRndIntegerInclusive(1, 6);
        const postTiltValueOfDie2 = props.dieValues ? props.dieValues[dieValuesIndex + 1][1] : utilities.getRndIntegerInclusive(1, 6);
        setDie1(postTiltValueOfDie1);
        setDie2(postTiltValueOfDie2);
        if (props.dieValues) {
            setDieValuesIndex(() => dieValuesIndex + 1);
        }
    }

    function clearActiveBonuses() {
        setFlipperPassIndicatorBorderColor(constants.BONUS_INDICATOR_INACTIVE_BORDER_COLOR);
        setBumperBonusIndicatorBorderColor(constants.BONUS_INDICATOR_INACTIVE_BORDER_COLOR);
    }

    function endRound() {
        incRound();

        clearDashedBoxes();

        clearActiveBonuses();

        setSelectedBallId(constants.BALL1_ID);
        moveSelectedBall(constants.START_FEATURE_ID);
    }

    function rollDice() {
        if (props.dieValues) {
            setDieValuesIndex(() => dieValuesIndex + 1);
        }
        const nextValueOfDie1 = props.dieValues ? props.dieValues[dieValuesIndex][0] : utilities.getRndIntegerInclusive(1, 6);
        const nextValueOfDie2 = props.dieValues ? props.dieValues[dieValuesIndex][1] : utilities.getRndIntegerInclusive(1, 6);
        setDie1(nextValueOfDie1);
        setDie2(nextValueOfDie2);

        setWasBall1MovedThisTurn(false);
        setWasBall2MovedThisTurn(false);

        setWasDie1UsedThisTurn(false);
        setWasDie2UsedThisTurn(false);

        if (utilities.calcNetNudgeAmount(die1AmountNudgedBy, die2AmountNudgedBy)) {
            if (hasTilted(nextValueOfDie1, nextValueOfDie2)) {
                tilt(nextValueOfDie1, nextValueOfDie2);
            }

            // after checking tilt status, remove any nudging from both dice
            setDie1AmountNudgedBy(0);
            setDie2AmountNudgedBy(0);
        }
    }

    function handleNudge(dieId, symbol) {
        if (dieId === "1") {
            if (symbol === "+") {
                setDie1(Number(die1) + 1);
                setDie1AmountNudgedBy(Number(die1AmountNudgedBy) + 1);
            } else {
                setDie1(Number(die1) - 1);
                setDie1AmountNudgedBy(Number(die1AmountNudgedBy) - 1);
            }
        } else {
            if (symbol === "+") {
                setDie2(Number(die2) + 1);
                setDie2AmountNudgedBy(Number(die2AmountNudgedBy) + 1);
            } else {
                setDie2(Number(die2) - 1);
                setDie2AmountNudgedBy(Number(die2AmountNudgedBy) - 1);
            }
        }
    }

    function handleRestart() {
        props.incGameId();
    }

    function addPoints(pointsToAdd) {
        const multiballMulitplier = (
            (
                (ball1FeatureId !== constants.DRAIN_FEATURE_ID || (ball1FeatureId === constants.DRAIN_FEATURE_ID && wasBall1MovedThisTurn)) &&
                (ball2FeatureId !== constants.DRAIN_FEATURE_ID || (ball2FeatureId === constants.DRAIN_FEATURE_ID && wasBall2MovedThisTurn))
            ) ? 2 : 1
        )
        setScore(Number(score) + (Number(pointsToAdd) * Number(multiballMulitplier)));
    }

    function possiblyAutoSelectBall(doesThisSendSelectedBallToDrain = false) {
        if (doesThisSendSelectedBallToDrain) {
            if (selectedBallId === constants.BALL1_ID) {
                setSelectedBallId(constants.BALL2_ID);
            } else if (selectedBallId === constants.BALL2_ID) {
                setSelectedBallId(constants.BALL1_ID);
            }
        }

        if (ball1FeatureId === constants.DRAIN_FEATURE_ID && ball2FeatureId !== constants.DRAIN_FEATURE_ID) {
            setSelectedBallId(constants.BALL2_ID);
        } else if (ball2FeatureId === constants.DRAIN_FEATURE_ID && ball1FeatureId !== constants.DRAIN_FEATURE_ID) {
            setSelectedBallId(constants.BALL1_ID);
        } else if (unselectedBall === constants.BALL2_ID && !wasBall2MovedThisTurn) {
            setSelectedBallId(constants.BALL2_ID);
        } else if (unselectedBall === constants.BALL1_ID && !wasBall1MovedThisTurn) {
            setSelectedBallId(constants.BALL1_ID);
        }
    }

    function gameOverAlert() {
        setAlertParagraphText('Game over!');
    }

    function dropTargetGroupAction(color, relevantFlipperBoxesBackgroundColors) {
        if (shouldClearBoxGroup(relevantFlipperBoxesBackgroundColors)) {
            setAlertParagraphText(utilities.alertMessageForChoosingABonus(color));
        }
    }

    function yelDropTargetGroupAction() {
        dropTargetGroupAction("yellow", yelDroptargetBoxBackgroundColors);
    }

    function redDropTargetGroupAction() {
        dropTargetGroupAction("red", redDroptargetBoxBackgroundColors);
    }

    function fillTwoHammerSpaces() {
        if (hammerspace1BoxBackgroundColor === constants.UNFILLED_BACKGROUND_COLOR) {
            setHammerspace1BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR);
            setHammerspace2BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR);
            addPoints(1); // hammer space 1 (+0) + hammer space 2 (+1) = +1
        } else if (hammerspace2BoxBackgroundColor === constants.UNFILLED_BACKGROUND_COLOR) {
            setHammerspace2BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR);
            setHammerspace3BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR);
            addPoints(2); // hammer space 2 (+1) + hammer space 3 (+1) = +2
        } else if (hammerspace3BoxBackgroundColor === constants.UNFILLED_BACKGROUND_COLOR) {
            setHammerspace3BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR);
            setHammerspace4BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR);
            addPoints(3); // hammer space 3 (+1) + hammer space 4 (+2) = +3
        } else if (hammerspace4BoxBackgroundColor === constants.UNFILLED_BACKGROUND_COLOR) {
            setHammerspace4BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR);
            setHammerspace5BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR);
            addPoints(7); // hammer space 4 (+2) + hammer space 5 (+5) = +7
        } else if (hammerspace5BoxBackgroundColor === constants.UNFILLED_BACKGROUND_COLOR) {
            setHammerspace5BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR);
            setHammerspace6BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR);
            addPoints(25); // hammer space 5 (+5) + hammer space 6 (+20) = +25
            for (const setter of hammerspaceBoxBackgroundColorSetters) {
                setter(constants.UNFILLED_BACKGROUND_COLOR);
            }
        } else if (hammerspace6BoxBackgroundColor === constants.UNFILLED_BACKGROUND_COLOR) {
            setHammerspace6BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR);
            addPoints(20); // hammer space 6 = +20
            for (const setter of hammerspaceBoxBackgroundColorSetters) {
                setter(constants.UNFILLED_BACKGROUND_COLOR);
            }
            setHammerspace1BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR);
            // hammer space 1 = +0, so no addPoints() statement
        }
    }

    function activateMultiball() {
        if (ball1FeatureId === constants.DRAIN_FEATURE_ID) {
            setBall1FeatureId(constants.START_FEATURE_ID);
        } else if (ball2FeatureId === constants.DRAIN_FEATURE_ID) {
            setBall2FeatureId(constants.START_FEATURE_ID);
        }

        setSelectedBallId(null);
    }

    function handleBonusBoxClick(color, bonusBoxBackgroundColorSetter = undefined, bonusIndicatorBorderColorSetter = undefined, bonusAction = undefined, willActivateMultiball = false) {
        if (alertParagraphText === utilities.alertMessageForChoosingABonus(color)) {
            if (ball1FeatureId !== constants.DRAIN_FEATURE_ID && ball2FeatureId !== constants.DRAIN_FEATURE_ID && willActivateMultiball) {
                // do nothing
            } else {
                if (bonusBoxBackgroundColorSetter) {
                    bonusBoxBackgroundColorSetter(constants.FILLED_BACKGROUND_COLOR);
                }

                if (bonusIndicatorBorderColorSetter) {
                    bonusIndicatorBorderColorSetter(constants.BONUS_INDICATOR_ACTIVE_BORDER_COLOR);
                }

                if (bonusAction) {
                    bonusAction();
                }

                setAlertParagraphText("");
            }
        }
    }

    function possiblyReceiveFromEitherFlipper(defaultCanReceiveFrom) {
        return (
            (flipperPassIndicatorBorderColor === constants.BONUS_INDICATOR_ACTIVE_BORDER_COLOR) ?
                defaultCanReceiveFrom.concat([constants.RED_FLIPPER_FEATURE_ID, constants.YEL_FLIPPER_FEATURE_ID]) :
                defaultCanReceiveFrom
        );
    }

    function valueOfBumpers() {
        return ((bumperBonusIndicatorBorderColor === constants.BONUS_INDICATOR_ACTIVE_BORDER_COLOR) ? "2" : "1");
    }

    function possiblyReceiveFromEitherOtherBumper(defaultCanReceiveFrom, clockwiseBumperFeatureId) {
        return (
            (bumperBonusIndicatorBorderColor === constants.BONUS_INDICATOR_ACTIVE_BORDER_COLOR) ?
                defaultCanReceiveFrom.concat([clockwiseBumperFeatureId]) :
                defaultCanReceiveFrom
        );
    }

    function ballBorderColor(ballId) {
        if (
            (ballId === constants.BALL1_ID && wasBall1MovedThisTurn) ||
            (ballId === constants.BALL2_ID && wasBall2MovedThisTurn)
        ) {
            return constants.BALL_MOVED_BORDER_COLOR;
        } else {
            return (ballId === selectedBallId ? constants.BALL_SELECTED_BORDER_COLOR : constants.BALL_AVAILABLE_BORDER_COLOR);
        }
    }
    //#endregion

    //#region useEffect
    useEffect(function init() {
        if (!didInit) {
            didInit = true;
            rollDice();
        }
    }, []);
    //#endregion

    return (
        <div>
            <Fragment key="table">
                <img src="/images/carniball.jpg" id="carniballTable" title="carniballTable" alt="Carniball board" />
                <Feature featureId={constants.START_FEATURE_ID}
                    left={constants.START_FEATURE_LEFT}
                    top={constants.START_FEATURE_TOP}
                />
                <Fragment key="skill-shot-boxes">
                    <SkillShotBox skillShotBoxId={constants.SKILL_SHOT_BOX_1_ID}
                        top="268px"
                        left="100px"
                        borderColor={skillShotBox1BorderColor}
                        handleClick={() => handleSkillShotBoxClick(skillShotBox1BorderColor, setSkillShotBox1BorderColor)}
                    />
                    <SkillShotBox skillShotBoxId={constants.SKILL_SHOT_BOX_2_ID}
                        top="290px"
                        left="80px"
                        borderColor={skillShotBox2BorderColor}
                        handleClick={() => handleSkillShotBoxClick(skillShotBox2BorderColor, setSkillShotBox2BorderColor)}
                    />
                    <SkillShotBox skillShotBoxId={constants.SKILL_SHOT_BOX_3_ID}
                        top="313px"
                        left="62px"
                        borderColor={skillShotBox3BorderColor}
                        handleClick={() => handleSkillShotBoxClick(skillShotBox3BorderColor, setSkillShotBox3BorderColor)}
                    />
                    <SkillShotBox skillShotBoxId={constants.SKILL_SHOT_BOX_4_ID}
                        top="340px"
                        left="54px"
                        borderColor={skillShotBox4BorderColor}
                        handleClick={() => handleSkillShotBoxClick(skillShotBox4BorderColor, setSkillShotBox4BorderColor)}
                    />
                    <SkillShotBox skillShotBoxId={constants.SKILL_SHOT_BOX_5_ID}
                        top="368px"
                        left="66px"
                        borderColor={skillShotBox5BorderColor}
                        handleClick={() => handleSkillShotBoxClick(skillShotBox5BorderColor, setSkillShotBox5BorderColor)}
                    />
                    <SkillShotBox skillShotBoxId={constants.SKILL_SHOT_BOX_6_ID}
                        top="394px"
                        left="83px"
                        borderColor={skillShotBox6BorderColor}
                        handleClick={() => handleSkillShotBoxClick(skillShotBox6BorderColor, setSkillShotBox6BorderColor)}
                    />
                </Fragment>
                <Fragment key="ferriswheel">
                    <Fragment key="ferriswheelcar12">
                        <Feature featureId={constants.FERRISWHEEL_CAR_12_FEATURE_ID}
                            left="182px"
                            top="304px"
                        />
                        <Box boxId={constants.FERRISWHEEL_CAR_12_BOX_ID}
                            isThisBoxFilled={isBoxFilled(ferriswheelcar12BoxBackgroundColor)}
                            fillBox={() => setFerriswheelcar12BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[1, 2]}
                            canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.FERRISWHEEL_CARS_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS)}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.FERRISWHEEL_CAR_12_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(ferriswheelBoxBackgroundColors, ferriswheelBoxBackgroundColorSetters, ferriswheelcarClearGroupAction)}
                            left="160px"
                            top="246px"
                            height="48px"
                            width="65px"
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
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
                            canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.FERRISWHEEL_CARS_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS)}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.FERRISWHEEL_CAR_34_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(ferriswheelBoxBackgroundColors, ferriswheelBoxBackgroundColorSetters, ferriswheelcarClearGroupAction)}
                            left="255px"
                            top="230px"
                            height="40px"
                            width="62px"
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
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
                            canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.FERRISWHEEL_CARS_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS)}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.FERRISWHEEL_CAR_56_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(ferriswheelBoxBackgroundColors, ferriswheelBoxBackgroundColorSetters, ferriswheelcarClearGroupAction)}
                            left="350px"
                            top="246px"
                            height="48px"
                            width="62px"
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
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
                            canReceiveFrom={possiblyReceiveFromEitherOtherBumper(
                                possiblyReceiveFromEitherFlipper(constants.BUMPER_12_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS),
                                constants.BUMPER_34_FEATURE_ID
                            )}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.BUMPER_12_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                            left="155px"
                            top="373px"
                            height="25px"
                            width="25px"
                            points={valueOfBumpers()}
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
                        />
                        <Box boxId={constants.BUMPER_12_2ND_1_BOX_ID}
                            isThisBoxFilled={isBoxFilled(bumper122nd1BoxBackgroundColor)}
                            fillBox={() => setBumper122nd1BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[1]}
                            canReceiveFrom={possiblyReceiveFromEitherOtherBumper(
                                possiblyReceiveFromEitherFlipper(constants.BUMPER_12_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS),
                                constants.BUMPER_34_FEATURE_ID
                            )}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.BUMPER_12_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                            left="155px"
                            top="402px"
                            height="25px"
                            width="25px"
                            points={valueOfBumpers()}
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
                        />
                        <Box boxId={constants.BUMPER_12_1ST_2_BOX_ID}
                            isThisBoxFilled={isBoxFilled(bumper121st2BoxBackgroundColor)}
                            fillBox={() => setBumper121st2BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[2]}
                            canReceiveFrom={possiblyReceiveFromEitherOtherBumper(
                                possiblyReceiveFromEitherFlipper(constants.BUMPER_12_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS),
                                constants.BUMPER_34_FEATURE_ID
                            )}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.BUMPER_12_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                            left="185px"
                            top="373px"
                            height="25px"
                            width="25px"
                            points={valueOfBumpers()}
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
                        />
                        <Box boxId={constants.BUMPER_12_2ND_2_BOX_ID}
                            isThisBoxFilled={isBoxFilled(bumper122nd2BoxBackgroundColor)}
                            fillBox={() => setBumper122nd2BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[2]}
                            canReceiveFrom={possiblyReceiveFromEitherOtherBumper(
                                possiblyReceiveFromEitherFlipper(constants.BUMPER_12_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS),
                                constants.BUMPER_34_FEATURE_ID
                            )}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.BUMPER_12_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                            left="185px"
                            top="402px"
                            height="25px"
                            width="25px"
                            points={valueOfBumpers()}
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
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
                            canReceiveFrom={possiblyReceiveFromEitherOtherBumper(
                                possiblyReceiveFromEitherFlipper(constants.BUMPER_34_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS),
                                constants.BUMPER_56_FEATURE_ID
                            )}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.BUMPER_34_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                            left="288px"
                            top="373px"
                            height="25px"
                            width="25px"
                            points={valueOfBumpers()}
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
                        />
                        <Box boxId={constants.BUMPER_34_2ND_3_BOX_ID}
                            isThisBoxFilled={isBoxFilled(bumper342nd3BoxBackgroundColor)}
                            fillBox={() => setBumper342nd3BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[3]}
                            canReceiveFrom={possiblyReceiveFromEitherOtherBumper(
                                possiblyReceiveFromEitherFlipper(constants.BUMPER_34_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS),
                                constants.BUMPER_56_FEATURE_ID
                            )}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.BUMPER_34_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                            left="288px"
                            top="402px"
                            height="25px"
                            width="25px"
                            points={valueOfBumpers()}
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
                        />
                        <Box boxId={constants.BUMPER_34_1ST_4_BOX_ID}
                            isThisBoxFilled={isBoxFilled(bumper341st4BoxBackgroundColor)}
                            fillBox={() => setBumper341st4BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[4]}
                            canReceiveFrom={possiblyReceiveFromEitherOtherBumper(
                                possiblyReceiveFromEitherFlipper(constants.BUMPER_34_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS),
                                constants.BUMPER_56_FEATURE_ID
                            )}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.BUMPER_34_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                            left="317px"
                            top="373px"
                            height="25px"
                            width="25px"
                            points={valueOfBumpers()}
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
                        />
                        <Box boxId={constants.BUMPER_34_2ND_4_BOX_ID}
                            isThisBoxFilled={isBoxFilled(bumper342nd4BoxBackgroundColor)}
                            fillBox={() => setBumper342nd4BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[4]}
                            canReceiveFrom={possiblyReceiveFromEitherOtherBumper(
                                possiblyReceiveFromEitherFlipper(constants.BUMPER_34_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS),
                                constants.BUMPER_56_FEATURE_ID
                            )}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.BUMPER_34_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                            left="317px"
                            top="402px"
                            height="25px"
                            width="25px"
                            points={valueOfBumpers()}
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
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
                            canReceiveFrom={possiblyReceiveFromEitherOtherBumper(
                                possiblyReceiveFromEitherFlipper(constants.BUMPER_56_DEFAULT_CAN_RECIEVE_FROM_FEATURE_IDS),
                                constants.BUMPER_12_FEATURE_ID
                            )}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.BUMPER_56_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                            left="221px"
                            top="475px"
                            height="25px"
                            width="25px"
                            points={valueOfBumpers()}
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
                        />
                        <Box boxId={constants.BUMPER_56_2ND_5_BOX_ID}
                            isThisBoxFilled={isBoxFilled(bumper562nd5BoxBackgroundColor)}
                            fillBox={() => setBumper562nd5BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[5]}
                            canReceiveFrom={possiblyReceiveFromEitherOtherBumper(
                                possiblyReceiveFromEitherFlipper(constants.BUMPER_56_DEFAULT_CAN_RECIEVE_FROM_FEATURE_IDS),
                                constants.BUMPER_12_FEATURE_ID
                            )}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.BUMPER_56_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                            left="221px"
                            top="505px"
                            height="25px"
                            width="25px"
                            points={valueOfBumpers()}
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
                        />
                        <Box boxId={constants.BUMPER_56_1ST_6_BOX_ID}
                            isThisBoxFilled={isBoxFilled(bumper561st6BoxBackgroundColor)}
                            fillBox={() => setBumper561st6BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[6]}
                            canReceiveFrom={possiblyReceiveFromEitherOtherBumper(
                                possiblyReceiveFromEitherFlipper(constants.BUMPER_56_DEFAULT_CAN_RECIEVE_FROM_FEATURE_IDS),
                                constants.BUMPER_12_FEATURE_ID
                            )}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.BUMPER_56_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                            left="251px"
                            top="475px"
                            height="25px"
                            width="25px"
                            points={valueOfBumpers()}
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
                        />
                        <Box boxId={constants.BUMPER_56_2ND_6_BOX_ID}
                            isThisBoxFilled={isBoxFilled(bumper562nd6BoxBackgroundColor)}
                            fillBox={() => setBumper562nd6BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                            canReceiveOn={[6]}
                            canReceiveFrom={possiblyReceiveFromEitherOtherBumper(
                                possiblyReceiveFromEitherFlipper(constants.BUMPER_56_DEFAULT_CAN_RECIEVE_FROM_FEATURE_IDS),
                                constants.BUMPER_12_FEATURE_ID
                            )}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.BUMPER_56_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(bumperBoxBackgroundColors, bumperBoxBackgroundColorSetters)}
                            left="251px"
                            top="505px"
                            height="25px"
                            width="25px"
                            points={valueOfBumpers()}
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
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
                            canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.HAMMER_SPACES_DEFAULT_CAN_RECIEVE_FROM_FEATURE_IDS)}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.HAMMER_SPACE_1_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(hammerspaceBoxBackgroundColors, hammerspaceBoxBackgroundColorSetters)}
                            left="376px"
                            top="535px"
                            height="25px"
                            width="25px"
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
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
                            canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.HAMMER_SPACES_DEFAULT_CAN_RECIEVE_FROM_FEATURE_IDS)}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.HAMMER_SPACE_2_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(hammerspaceBoxBackgroundColors, hammerspaceBoxBackgroundColorSetters)}
                            isPrecedingHammerspaceBoxFilled={isBoxFilled(hammerspace1BoxBackgroundColor)}
                            left="388px"
                            top="505px"
                            height="25px"
                            width="25px"
                            points="1"
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
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
                            canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.HAMMER_SPACES_DEFAULT_CAN_RECIEVE_FROM_FEATURE_IDS)}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.HAMMER_SPACE_3_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(hammerspaceBoxBackgroundColors, hammerspaceBoxBackgroundColorSetters)}
                            isPrecedingHammerspaceBoxFilled={isBoxFilled(hammerspace2BoxBackgroundColor)}
                            left="398px"
                            top="477px"
                            height="25px"
                            width="25px"
                            points="1"
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
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
                            canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.HAMMER_SPACES_DEFAULT_CAN_RECIEVE_FROM_FEATURE_IDS)}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.HAMMER_SPACE_4_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(hammerspaceBoxBackgroundColors, hammerspaceBoxBackgroundColorSetters)}
                            isPrecedingHammerspaceBoxFilled={isBoxFilled(hammerspace3BoxBackgroundColor)}
                            left="409px"
                            top="448px"
                            height="25px"
                            width="25px"
                            points="2"
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
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
                            canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.HAMMER_SPACES_DEFAULT_CAN_RECIEVE_FROM_FEATURE_IDS)}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.HAMMER_SPACE_5_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(hammerspaceBoxBackgroundColors, hammerspaceBoxBackgroundColorSetters)}
                            isPrecedingHammerspaceBoxFilled={isBoxFilled(hammerspace4BoxBackgroundColor)}
                            left="420px"
                            top="420px"
                            height="25px"
                            width="25px"
                            points="5"
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
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
                            canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.HAMMER_SPACES_DEFAULT_CAN_RECIEVE_FROM_FEATURE_IDS)}
                            moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.HAMMER_SPACE_6_FEATURE_ID)}
                            possiblyClearBoxGroup={possiblyClearBoxGroup(hammerspaceBoxBackgroundColors, hammerspaceBoxBackgroundColorSetters)}
                            isPrecedingHammerspaceBoxFilled={isBoxFilled(hammerspace5BoxBackgroundColor)}
                            left="430px"
                            top="390px"
                            height="25px"
                            width="25px"
                            points="20"
                            die1={die1}
                            die2={die2}
                            rollDice={rollDice}
                            round={round}
                            addPoints={addPoints}
                            selectedDieId={selectedDieId}
                            setSelectedDieId={setSelectedDieId}
                            wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                            wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                            setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                            setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                            ball1FeatureId={ball1FeatureId}
                            ball2FeatureId={ball2FeatureId}
                            die1AmountNudgedBy={die1AmountNudgedBy}
                            die2AmountNudgedBy={die2AmountNudgedBy}
                            incNudgesUsed={incNudgesUsed}
                            getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                            endRound={endRound}
                            deselectMovedBall={deselectMovedBall}
                            possiblyAutoSelectBall={possiblyAutoSelectBall}
                            gameOverAlert={gameOverAlert}
                            selectedBallId={selectedBallId}
                            wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                            wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                            alertParagraphText={alertParagraphText}
                            setAlertParagraphText={setAlertParagraphText}
                        />
                    </Fragment>
                </Fragment>
                <Fragment key="bonus-indicators">
                    <BonusIndicator bonusIndicatorId={constants.FLIPPER_PASS_INDICATOR_ID}
                        top="574px"
                        left="183px"
                        borderColor={flipperPassIndicatorBorderColor}
                    />
                    <BonusIndicator bonusIndicatorId={constants.OUTLANE_BONUS_INDICATOR_ID}
                        top="574px"
                        left="243px"
                        borderColor={outlaneBonusIndicatorBorderColor}
                    />
                    <BonusIndicator bonusIndicatorId={constants.BUMPER_BONUS_INDICATOR_ID}
                        top="574px"
                        left="301px"
                        borderColor={bumperBonusIndicatorBorderColor}
                    />
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
                                canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.YEL_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS)}
                                moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.YEL_DROPTARGET_12_FEATURE_ID)}
                                possiblyClearBoxGroup={possiblyClearBoxGroup(yelDroptargetBoxBackgroundColors, yelDroptargetBoxBackgroundColorSetters, yelDropTargetGroupAction)}
                                left="30px"
                                top="675px"
                                height="60px"
                                width="35px"
                                points="1"
                                die1={die1}
                                die2={die2}
                                rollDice={rollDice}
                                round={round}
                                addPoints={addPoints}
                                selectedDieId={selectedDieId}
                                setSelectedDieId={setSelectedDieId}
                                wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                                wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                                setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                                setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                                ball1FeatureId={ball1FeatureId}
                                ball2FeatureId={ball2FeatureId}
                                die1AmountNudgedBy={die1AmountNudgedBy}
                                die2AmountNudgedBy={die2AmountNudgedBy}
                                incNudgesUsed={incNudgesUsed}
                                getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                                endRound={endRound}
                                deselectMovedBall={deselectMovedBall}
                                possiblyAutoSelectBall={possiblyAutoSelectBall}
                                gameOverAlert={gameOverAlert}
                                selectedBallId={selectedBallId}
                                wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                                wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                                alertParagraphText={alertParagraphText}
                                setAlertParagraphText={setAlertParagraphText}
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
                                canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.YEL_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS)}
                                moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.YEL_DROPTARGET_34_FEATURE_ID)}
                                possiblyClearBoxGroup={possiblyClearBoxGroup(yelDroptargetBoxBackgroundColors, yelDroptargetBoxBackgroundColorSetters, yelDropTargetGroupAction)}
                                left="60px"
                                top="615px"
                                height="60px"
                                width="35px"
                                points="1"
                                die1={die1}
                                die2={die2}
                                rollDice={rollDice}
                                round={round}
                                addPoints={addPoints}
                                selectedDieId={selectedDieId}
                                setSelectedDieId={setSelectedDieId}
                                wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                                wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                                setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                                setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                                ball1FeatureId={ball1FeatureId}
                                ball2FeatureId={ball2FeatureId}
                                die1AmountNudgedBy={die1AmountNudgedBy}
                                die2AmountNudgedBy={die2AmountNudgedBy}
                                incNudgesUsed={incNudgesUsed}
                                getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                                endRound={endRound}
                                deselectMovedBall={deselectMovedBall}
                                possiblyAutoSelectBall={possiblyAutoSelectBall}
                                gameOverAlert={gameOverAlert}
                                selectedBallId={selectedBallId}
                                wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                                wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                                alertParagraphText={alertParagraphText}
                                setAlertParagraphText={setAlertParagraphText}
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
                                canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.YEL_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS)}
                                moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.YEL_DROPTARGET_56_FEATURE_ID)}
                                possiblyClearBoxGroup={possiblyClearBoxGroup(yelDroptargetBoxBackgroundColors, yelDroptargetBoxBackgroundColorSetters, yelDropTargetGroupAction)}
                                left="95px"
                                top="560px"
                                height="60px"
                                width="35px"
                                points="1"
                                die1={die1}
                                die2={die2}
                                rollDice={rollDice}
                                round={round}
                                addPoints={addPoints}
                                selectedDieId={selectedDieId}
                                setSelectedDieId={setSelectedDieId}
                                wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                                wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                                setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                                setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                                ball1FeatureId={ball1FeatureId}
                                ball2FeatureId={ball2FeatureId}
                                die1AmountNudgedBy={die1AmountNudgedBy}
                                die2AmountNudgedBy={die2AmountNudgedBy}
                                incNudgesUsed={incNudgesUsed}
                                getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                                endRound={endRound}
                                deselectMovedBall={deselectMovedBall}
                                possiblyAutoSelectBall={possiblyAutoSelectBall}
                                gameOverAlert={gameOverAlert}
                                selectedBallId={selectedBallId}
                                wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                                wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                                alertParagraphText={alertParagraphText}
                                setAlertParagraphText={setAlertParagraphText}
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
                                canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS)}
                                moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.RED_DROPTARGET_12_FEATURE_ID)}
                                possiblyClearBoxGroup={possiblyClearBoxGroup(redDroptargetBoxBackgroundColors, redDroptargetBoxBackgroundColorSetters, redDropTargetGroupAction)}
                                left="415px"
                                top="570px"
                                height="50px"
                                width="35px"
                                points="1"
                                die1={die1}
                                die2={die2}
                                rollDice={rollDice}
                                round={round}
                                addPoints={addPoints}
                                selectedDieId={selectedDieId}
                                setSelectedDieId={setSelectedDieId}
                                wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                                wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                                setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                                setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                                ball1FeatureId={ball1FeatureId}
                                ball2FeatureId={ball2FeatureId}
                                die1AmountNudgedBy={die1AmountNudgedBy}
                                die2AmountNudgedBy={die2AmountNudgedBy}
                                incNudgesUsed={incNudgesUsed}
                                getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                                endRound={endRound}
                                deselectMovedBall={deselectMovedBall}
                                possiblyAutoSelectBall={possiblyAutoSelectBall}
                                gameOverAlert={gameOverAlert}
                                selectedBallId={selectedBallId}
                                wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                                wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                                alertParagraphText={alertParagraphText}
                                setAlertParagraphText={setAlertParagraphText}
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
                                canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS)}
                                moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.RED_DROPTARGET_3_FEATURE_ID)}
                                possiblyClearBoxGroup={possiblyClearBoxGroup(redDroptargetBoxBackgroundColors, redDroptargetBoxBackgroundColorSetters, redDropTargetGroupAction)}
                                left="435px"
                                top="621px"
                                height="40px"
                                width="35px"
                                points="1"
                                die1={die1}
                                die2={die2}
                                rollDice={rollDice}
                                round={round}
                                addPoints={addPoints}
                                selectedDieId={selectedDieId}
                                setSelectedDieId={setSelectedDieId}
                                wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                                wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                                setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                                setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                                ball1FeatureId={ball1FeatureId}
                                ball2FeatureId={ball2FeatureId}
                                die1AmountNudgedBy={die1AmountNudgedBy}
                                die2AmountNudgedBy={die2AmountNudgedBy}
                                incNudgesUsed={incNudgesUsed}
                                getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                                endRound={endRound}
                                deselectMovedBall={deselectMovedBall}
                                possiblyAutoSelectBall={possiblyAutoSelectBall}
                                gameOverAlert={gameOverAlert}
                                selectedBallId={selectedBallId}
                                wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                                wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                                alertParagraphText={alertParagraphText}
                                setAlertParagraphText={setAlertParagraphText}
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
                                canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS)}
                                moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.RED_DROPTARGET_4_FEATURE_ID)}
                                possiblyClearBoxGroup={possiblyClearBoxGroup(redDroptargetBoxBackgroundColors, redDroptargetBoxBackgroundColorSetters, redDropTargetGroupAction)}
                                left="455px"
                                top="665px"
                                height="42px"
                                width="35px"
                                points="1"
                                die1={die1}
                                die2={die2}
                                rollDice={rollDice}
                                round={round}
                                addPoints={addPoints}
                                selectedDieId={selectedDieId}
                                setSelectedDieId={setSelectedDieId}
                                wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                                wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                                setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                                setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                                ball1FeatureId={ball1FeatureId}
                                ball2FeatureId={ball2FeatureId}
                                die1AmountNudgedBy={die1AmountNudgedBy}
                                die2AmountNudgedBy={die2AmountNudgedBy}
                                incNudgesUsed={incNudgesUsed}
                                getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                                endRound={endRound}
                                deselectMovedBall={deselectMovedBall}
                                possiblyAutoSelectBall={possiblyAutoSelectBall}
                                gameOverAlert={gameOverAlert}
                                selectedBallId={selectedBallId}
                                wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                                wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                                alertParagraphText={alertParagraphText}
                                setAlertParagraphText={setAlertParagraphText}
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
                                canReceiveFrom={possiblyReceiveFromEitherFlipper(constants.RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS)}
                                moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.RED_DROPTARGET_56_FEATURE_ID)}
                                possiblyClearBoxGroup={possiblyClearBoxGroup(redDroptargetBoxBackgroundColors, redDroptargetBoxBackgroundColorSetters, redDropTargetGroupAction)}
                                left="480px"
                                top="710px"
                                height="55px"
                                width="35px"
                                points="1"
                                die1={die1}
                                die2={die2}
                                rollDice={rollDice}
                                round={round}
                                addPoints={addPoints}
                                selectedDieId={selectedDieId}
                                setSelectedDieId={setSelectedDieId}
                                wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                                wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                                setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                                setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                                ball1FeatureId={ball1FeatureId}
                                ball2FeatureId={ball2FeatureId}
                                die1AmountNudgedBy={die1AmountNudgedBy}
                                die2AmountNudgedBy={die2AmountNudgedBy}
                                incNudgesUsed={incNudgesUsed}
                                getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                                endRound={endRound}
                                deselectMovedBall={deselectMovedBall}
                                possiblyAutoSelectBall={possiblyAutoSelectBall}
                                gameOverAlert={gameOverAlert}
                                selectedBallId={selectedBallId}
                                wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                                wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                                alertParagraphText={alertParagraphText}
                                setAlertParagraphText={setAlertParagraphText}
                            />
                        </Fragment>
                    </Fragment>
                </Fragment>
                <Fragment key="droptarget-bonus-boxes">
                    <Fragment key="yel-droptarget-bonus-boxes">
                        <BonusBox bonusBoxId={constants.FLIPPER_PASS_BONUS_BOX_ID}
                            top="620px"
                            left="164px"
                            handleClick={() => handleBonusBoxClick("yellow", setFlipperPassBonusBoxBackgroundColor, setFlipperPassIndicatorBorderColor)}
                            backgroundColor={flipperPassBonusBoxBackgroundColor}
                        />
                        <BonusBox bonusBoxId={constants.FILL_TWO_HAMMER_SPACES_BONUS_BOX_ID}
                            top="660px"
                            left="143px"
                            handleClick={() => handleBonusBoxClick("yellow", setFillTwoHammerSpacesBonusBoxBackgroundColor, undefined, fillTwoHammerSpaces)}
                            backgroundColor={fillTwoHammerSpacesBonusBoxBackgroundColor}
                        />
                        <BonusBox bonusBoxId={constants.YEL_MULTIBALL_BONUS_BOX_ID}
                            top="713px"
                            left="112px"
                            handleClick={() => handleBonusBoxClick("yellow", setYelMultiballBonusBoxBackgroundColor, undefined, activateMultiball, true)}
                            backgroundColor={yelMultiballBonusBoxBackgroundColor}
                        />
                        <BonusBox bonusBoxId={constants.YEL_BONUS_POINTS_BONUS_BOX_ID}
                            top="754px"
                            left="82px"
                            handleClick={() => handleBonusBoxClick("yellow", undefined, undefined, () => addPoints(2))}
                            backgroundColor="transparent"
                        />
                    </Fragment>
                    <Fragment key="red-droptarget-bonus-boxes">
                        <BonusBox bonusBoxId={constants.BUMPER_BONUS_BOX_ID}
                            top="616px"
                            left="346px"
                            handleClick={() => handleBonusBoxClick("red", setBumperBonusBoxBackgroundColor, setBumperBonusIndicatorBorderColor)}
                            backgroundColor={bumperBonusBoxBackgroundColor}
                        />
                        <BonusBox bonusBoxId={constants.OUTLANE_BONUS_BOX_ID}
                            top="673px"
                            left="372px"
                            handleClick={() => handleBonusBoxClick("red", setOutlaneBonusBoxBackgroundColor, setOutlaneBonusIndicatorBorderColor)}
                            backgroundColor={outlaneBonusBoxBackgroundColor}
                        />
                        <BonusBox bonusBoxId={constants.RED_MULTIBALL_BONUS_BOX_ID}
                            top="721px"
                            left="395px"
                            handleClick={() => handleBonusBoxClick("red", setRedMultiballBonusBoxBackgroundColor, undefined, activateMultiball, true)}
                            backgroundColor={redMultiballBonusBoxBackgroundColor}
                        />
                        <BonusBox bonusBoxId={constants.RED_BONUS_POINTS_BONUS_BOX_ID}
                            top="762px"
                            left="418px"
                            handleClick={() => handleBonusBoxClick("red", undefined, undefined, () => addPoints(3))}
                            backgroundColor="transparent"
                        />
                    </Fragment>
                </Fragment>
                <Fragment key="outlanes">
                    <Outlane boxId={constants.RED_OUTLANE_BOX_ID}
                        isThisBoxFilled={isBoxFilled(redOutlaneBoxBackgroundColor)}
                        fillBox={() => setRedOutlaneBoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[1]}
                        canReceiveFrom={constants.ALL_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.DRAIN_FEATURE_ID)}
                        action={() => outlaneAction(redFlipperBoxesBackgroundColors)}
                        left="18px"
                        top="815px"
                        die1={die1}
                        die2={die2}
                        rollDice={rollDice}
                        round={round}
                        addPoints={addPoints}
                        selectedDieId={selectedDieId}
                        setSelectedDieId={setSelectedDieId}
                        wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                        wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                        setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                        setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                        ball1FeatureId={ball1FeatureId}
                        ball2FeatureId={ball2FeatureId}
                        die1AmountNudgedBy={die1AmountNudgedBy}
                        die2AmountNudgedBy={die2AmountNudgedBy}
                        incNudgesUsed={incNudgesUsed}
                        getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                        endRound={endRound}
                        deselectMovedBall={deselectMovedBall}
                        possiblyAutoSelectBall={possiblyAutoSelectBall}
                        gameOverAlert={gameOverAlert}
                        selectedBallId={selectedBallId}
                        wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                        wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                        alertParagraphText={alertParagraphText}
                        setAlertParagraphText={setAlertParagraphText}
                    />
                    <Outlane boxId={constants.YEL_OUTLANE_BOX_ID}
                        isThisBoxFilled={isBoxFilled(yelOutlaneBoxBackgroundColor)}
                        fillBox={() => setYelOutlaneBoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[6]}
                        canReceiveFrom={constants.ALL_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.DRAIN_FEATURE_ID)}
                        action={() => outlaneAction(yelFlipperBoxesBackgroundColors)}
                        left="458px"
                        top="815px"
                        die1={die1}
                        die2={die2}
                        rollDice={rollDice}
                        round={round}
                        addPoints={addPoints}
                        selectedDieId={selectedDieId}
                        setSelectedDieId={setSelectedDieId}
                        wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                        wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                        setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                        setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                        ball1FeatureId={ball1FeatureId}
                        ball2FeatureId={ball2FeatureId}
                        die1AmountNudgedBy={die1AmountNudgedBy}
                        die2AmountNudgedBy={die2AmountNudgedBy}
                        incNudgesUsed={incNudgesUsed}
                        getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                        endRound={endRound}
                        deselectMovedBall={deselectMovedBall}
                        possiblyAutoSelectBall={possiblyAutoSelectBall}
                        gameOverAlert={gameOverAlert}
                        selectedBallId={selectedBallId}
                        wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                        wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                        alertParagraphText={alertParagraphText}
                        setAlertParagraphText={setAlertParagraphText}
                    />
                </Fragment>
                <Fragment key="inlanes">
                    <DashedBox boxId={constants.RED_INLANE_BOX_ID}
                        isThisBoxFilled={isBoxFilled(redInlaneBoxBackgroundColor)}
                        fillBox={() => setRedInlaneBoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[2]}
                        canReceiveFrom={constants.ALL_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.RED_FLIPPER_FEATURE_ID)}
                        left="94px"
                        top="821px"
                        height="25px"
                        width="25px"
                        points="2"
                        die1={die1}
                        die2={die2}
                        rollDice={rollDice}
                        round={round}
                        addPoints={addPoints}
                        selectedDieId={selectedDieId}
                        setSelectedDieId={setSelectedDieId}
                        wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                        wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                        setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                        setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                        ball1FeatureId={ball1FeatureId}
                        ball2FeatureId={ball2FeatureId}
                        die1AmountNudgedBy={die1AmountNudgedBy}
                        die2AmountNudgedBy={die2AmountNudgedBy}
                        incNudgesUsed={incNudgesUsed}
                        getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                        endRound={endRound}
                        deselectMovedBall={deselectMovedBall}
                        possiblyAutoSelectBall={possiblyAutoSelectBall}
                        gameOverAlert={gameOverAlert}
                        selectedBallId={selectedBallId}
                        wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                        wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                        alertParagraphText={alertParagraphText}
                        setAlertParagraphText={setAlertParagraphText}
                    />
                    <DashedBox boxId={constants.YEL_INLANE_BOX_ID}
                        isThisBoxFilled={isBoxFilled(yelInlaneBoxBackgroundColor)}
                        fillBox={() => setYelInlaneBoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[5]}
                        canReceiveFrom={constants.ALL_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.YEL_FLIPPER_FEATURE_ID)}
                        left="419px"
                        top="821px"
                        height="25px"
                        width="25px"
                        points="2"
                        die1={die1}
                        die2={die2}
                        rollDice={rollDice}
                        round={round}
                        addPoints={addPoints}
                        selectedDieId={selectedDieId}
                        setSelectedDieId={setSelectedDieId}
                        wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                        wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                        setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                        setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                        ball1FeatureId={ball1FeatureId}
                        ball2FeatureId={ball2FeatureId}
                        die1AmountNudgedBy={die1AmountNudgedBy}
                        die2AmountNudgedBy={die2AmountNudgedBy}
                        incNudgesUsed={incNudgesUsed}
                        getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                        endRound={endRound}
                        deselectMovedBall={deselectMovedBall}
                        possiblyAutoSelectBall={possiblyAutoSelectBall}
                        gameOverAlert={gameOverAlert}
                        selectedBallId={selectedBallId}
                        wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                        wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                        alertParagraphText={alertParagraphText}
                        setAlertParagraphText={setAlertParagraphText}
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
                        isThisBoxFilled={isBoxFilled(redFlipperBox3BoxBackgroundColor)}
                        fillBox={() => setRedFlipperBox3BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[3]}
                        canReceiveFrom={constants.ALL_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.RED_FLIPPER_FEATURE_ID)}
                        left="215px"
                        top="840px"
                        height="35px"
                        width="40px"
                        die1={die1}
                        die2={die2}
                        rollDice={rollDice}
                        round={round}
                        addPoints={addPoints}
                        selectedDieId={selectedDieId}
                        setSelectedDieId={setSelectedDieId}
                        wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                        wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                        setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                        setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                        ball1FeatureId={ball1FeatureId}
                        ball2FeatureId={ball2FeatureId}
                        die1AmountNudgedBy={die1AmountNudgedBy}
                        die2AmountNudgedBy={die2AmountNudgedBy}
                        incNudgesUsed={incNudgesUsed}
                        getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                        endRound={endRound}
                        deselectMovedBall={deselectMovedBall}
                        possiblyAutoSelectBall={possiblyAutoSelectBall}
                        gameOverAlert={gameOverAlert}
                        selectedBallId={selectedBallId}
                        wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                        wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                        alertParagraphText={alertParagraphText}
                        setAlertParagraphText={setAlertParagraphText}
                    />
                    <DashedBox boxId={constants.RED_FLIPPER_BOX_45_BOX_ID}
                        isThisBoxFilled={isBoxFilled(redFlipperBox45BoxBackgroundColor)}
                        fillBox={() => setRedFlipperBox45BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[4, 5]}
                        canReceiveFrom={constants.ALL_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.RED_FLIPPER_FEATURE_ID)}
                        left="195px"
                        top="875px"
                        height="45px"
                        width="45px"
                        die1={die1}
                        die2={die2}
                        rollDice={rollDice}
                        round={round}
                        addPoints={addPoints}
                        selectedDieId={selectedDieId}
                        setSelectedDieId={setSelectedDieId}
                        wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                        wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                        setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                        setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                        ball1FeatureId={ball1FeatureId}
                        ball2FeatureId={ball2FeatureId}
                        die1AmountNudgedBy={die1AmountNudgedBy}
                        die2AmountNudgedBy={die2AmountNudgedBy}
                        incNudgesUsed={incNudgesUsed}
                        getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                        endRound={endRound}
                        deselectMovedBall={deselectMovedBall}
                        possiblyAutoSelectBall={possiblyAutoSelectBall}
                        gameOverAlert={gameOverAlert}
                        selectedBallId={selectedBallId}
                        wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                        wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                        alertParagraphText={alertParagraphText}
                        setAlertParagraphText={setAlertParagraphText}
                    />
                    <DashedBox boxId={constants.RED_FLIPPER_BOX_6_BOX_ID}
                        isThisBoxFilled={isBoxFilled(redFlipperBox6BoxBackgroundColor)}
                        fillBox={() => setRedFlipperBox6BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[6]}
                        canReceiveFrom={constants.ALL_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.RED_FLIPPER_FEATURE_ID)}
                        left="178px"
                        top="915px"
                        height="45px"
                        width="45px"
                        die1={die1}
                        die2={die2}
                        rollDice={rollDice}
                        round={round}
                        addPoints={addPoints}
                        selectedDieId={selectedDieId}
                        setSelectedDieId={setSelectedDieId}
                        wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                        wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                        setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                        setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                        ball1FeatureId={ball1FeatureId}
                        ball2FeatureId={ball2FeatureId}
                        die1AmountNudgedBy={die1AmountNudgedBy}
                        die2AmountNudgedBy={die2AmountNudgedBy}
                        incNudgesUsed={incNudgesUsed}
                        getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                        endRound={endRound}
                        deselectMovedBall={deselectMovedBall}
                        possiblyAutoSelectBall={possiblyAutoSelectBall}
                        gameOverAlert={gameOverAlert}
                        selectedBallId={selectedBallId}
                        wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                        wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                        alertParagraphText={alertParagraphText}
                        setAlertParagraphText={setAlertParagraphText}
                    />
                </Fragment>
                <Fragment key="yelflipperboxes">
                    <DashedBox boxId={constants.YEL_FLIPPER_BOX_1_BOX_ID}
                        isThisBoxFilled={isBoxFilled(yelFlipperBox1BoxBackgroundColor)}
                        fillBox={() => setYelFlipperBox1BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[1]}
                        canReceiveFrom={constants.ALL_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.YEL_FLIPPER_FEATURE_ID)}
                        left="285px"
                        top="840px"
                        height="40px"
                        width="40px"
                        die1={die1}
                        die2={die2}
                        rollDice={rollDice}
                        round={round}
                        addPoints={addPoints}
                        selectedDieId={selectedDieId}
                        setSelectedDieId={setSelectedDieId}
                        wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                        wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                        setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                        setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                        ball1FeatureId={ball1FeatureId}
                        ball2FeatureId={ball2FeatureId}
                        die1AmountNudgedBy={die1AmountNudgedBy}
                        die2AmountNudgedBy={die2AmountNudgedBy}
                        incNudgesUsed={incNudgesUsed}
                        getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                        endRound={endRound}
                        deselectMovedBall={deselectMovedBall}
                        possiblyAutoSelectBall={possiblyAutoSelectBall}
                        gameOverAlert={gameOverAlert}
                        selectedBallId={selectedBallId}
                        wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                        wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                        alertParagraphText={alertParagraphText}
                        setAlertParagraphText={setAlertParagraphText}
                    />
                    <DashedBox boxId={constants.YEL_FLIPPER_BOX_23_BOX_ID}
                        isThisBoxFilled={isBoxFilled(yelFlipperBox23BoxBackgroundColor)}
                        fillBox={() => setYelFlipperBox23BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[2, 3]}
                        canReceiveFrom={constants.ALL_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.YEL_FLIPPER_FEATURE_ID)}
                        left="300px"
                        top="875px"
                        height="45px"
                        width="45px"
                        die1={die1}
                        die2={die2}
                        rollDice={rollDice}
                        round={round}
                        addPoints={addPoints}
                        selectedDieId={selectedDieId}
                        setSelectedDieId={setSelectedDieId}
                        wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                        wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                        setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                        setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                        ball1FeatureId={ball1FeatureId}
                        ball2FeatureId={ball2FeatureId}
                        die1AmountNudgedBy={die1AmountNudgedBy}
                        die2AmountNudgedBy={die2AmountNudgedBy}
                        incNudgesUsed={incNudgesUsed}
                        getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                        endRound={endRound}
                        deselectMovedBall={deselectMovedBall}
                        possiblyAutoSelectBall={possiblyAutoSelectBall}
                        gameOverAlert={gameOverAlert}
                        selectedBallId={selectedBallId}
                        wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                        wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                        alertParagraphText={alertParagraphText}
                        setAlertParagraphText={setAlertParagraphText}
                    />
                    <DashedBox boxId={constants.YEL_FLIPPER_BOX_4_BOX_ID}
                        isThisBoxFilled={isBoxFilled(yelFlipperBox4BoxBackgroundColor)}
                        fillBox={() => setYelFlipperBox4BoxBackgroundColor(constants.FILLED_BACKGROUND_COLOR)}
                        canReceiveOn={[4]}
                        canReceiveFrom={constants.ALL_FEATURE_IDS}
                        moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.YEL_FLIPPER_FEATURE_ID)}
                        left="315px"
                        top="915px"
                        height="45px"
                        width="45px"
                        die1={die1}
                        die2={die2}
                        rollDice={rollDice}
                        round={round}
                        addPoints={addPoints}
                        selectedDieId={selectedDieId}
                        setSelectedDieId={setSelectedDieId}
                        wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                        wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                        setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                        setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                        ball1FeatureId={ball1FeatureId}
                        ball2FeatureId={ball2FeatureId}
                        die1AmountNudgedBy={die1AmountNudgedBy}
                        die2AmountNudgedBy={die2AmountNudgedBy}
                        incNudgesUsed={incNudgesUsed}
                        getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                        endRound={endRound}
                        deselectMovedBall={deselectMovedBall}
                        possiblyAutoSelectBall={possiblyAutoSelectBall}
                        gameOverAlert={gameOverAlert}
                        selectedBallId={selectedBallId}
                        wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                        wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                        alertParagraphText={alertParagraphText}
                        setAlertParagraphText={setAlertParagraphText}
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
                        moveSelectedBallToCorrespondingFeature={() => moveSelectedBall(constants.DRAIN_FEATURE_ID)}
                        left="220px"
                        top="920px"
                        height="85px"
                        width="98px"
                        die1={die1}
                        die2={die2}
                        rollDice={rollDice}
                        round={round}
                        addPoints={addPoints}
                        selectedDieId={selectedDieId}
                        setSelectedDieId={setSelectedDieId}
                        wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                        wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                        setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                        setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                        ball1FeatureId={ball1FeatureId}
                        ball2FeatureId={ball2FeatureId}
                        die1AmountNudgedBy={die1AmountNudgedBy}
                        die2AmountNudgedBy={die2AmountNudgedBy}
                        incNudgesUsed={incNudgesUsed}
                        getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                        endRound={endRound}
                        deselectMovedBall={deselectMovedBall}
                        possiblyAutoSelectBall={possiblyAutoSelectBall}
                        gameOverAlert={gameOverAlert}
                        selectedBallId={selectedBallId}
                        wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                        wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                        alertParagraphText={alertParagraphText}
                        setAlertParagraphText={setAlertParagraphText}
                    />
                </Fragment>
                <Ball ballId={constants.BALL1_ID}
                    handleClick={() => handleBallClick(constants.BALL1_ID)}
                    round={round}
                    ballFeatureId={ball1FeatureId}
                    die1={die1}
                    die2={die2}
                    rollDice={rollDice}
                    addPoints={addPoints}
                    selectedDieId={selectedDieId}
                    setSelectedDieId={setSelectedDieId}
                    wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                    wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                    setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                    setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                    ball1FeatureId={ball1FeatureId}
                    ball2FeatureId={ball2FeatureId}
                    die1AmountNudgedBy={die1AmountNudgedBy}
                    die2AmountNudgedBy={die2AmountNudgedBy}
                    incNudgesUsed={incNudgesUsed}
                    borderColor={ballBorderColor(constants.BALL1_ID)}
                    getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                    endRound={endRound}
                    deselectMovedBall={deselectMovedBall}
                    possiblyAutoSelectBall={possiblyAutoSelectBall}
                    gameOverAlert={gameOverAlert}
                    selectedBallId={selectedBallId}
                    wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                    wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                    alertParagraphText={alertParagraphText}
                    setAlertParagraphText={setAlertParagraphText}
                />
                <Ball ballId={constants.BALL2_ID}
                    handleClick={() => handleBallClick(constants.BALL2_ID)}
                    round={round}
                    ballFeatureId={ball2FeatureId}
                    die1={die1}
                    die2={die2}
                    rollDice={rollDice}
                    addPoints={addPoints}
                    selectedDieId={selectedDieId}
                    setSelectedDieId={setSelectedDieId}
                    wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                    wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                    setWasDie1UsedThisTurn={setWasDie1UsedThisTurn}
                    setWasDie2UsedThisTurn={setWasDie2UsedThisTurn}
                    ball1FeatureId={ball1FeatureId}
                    ball2FeatureId={ball2FeatureId}
                    die1AmountNudgedBy={die1AmountNudgedBy}
                    die2AmountNudgedBy={die2AmountNudgedBy}
                    incNudgesUsed={incNudgesUsed}
                    borderColor={ballBorderColor(constants.BALL2_ID)}
                    getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
                    endRound={endRound}
                    deselectMovedBall={deselectMovedBall}
                    possiblyAutoSelectBall={possiblyAutoSelectBall}
                    gameOverAlert={gameOverAlert}
                    selectedBallId={selectedBallId}
                    wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                    wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                    alertParagraphText={alertParagraphText}
                    setAlertParagraphText={setAlertParagraphText}
                />
                <Fragment key="roundindicators">
                    <RoundIndicator RoundIndicatorId={constants.ROUND_1_INDICATOR_ID}
                        forRound="1"
                        top="950px"
                        left="414px"
                        round={round}
                    />
                    <RoundIndicator RoundIndicatorId={constants.ROUND_2_INDICATOR_ID}
                        forRound="2"
                        top="950px"
                        left="451px"
                        round={round}
                    />
                    <RoundIndicator RoundIndicatorId={constants.ROUND_3_INDICATOR_ID}
                        forRound="3"
                        top="950px"
                        left="487px"
                        round={round}
                    />
                </Fragment>
            </Fragment>
            <DiceTray dicetrayId="dice-tray"
                die1={die1}
                die2={die2}
                handleDie1Click={() => handleDieClick(constants.DIE1_ID)}
                handleDie2Click={() => handleDieClick(constants.DIE2_ID)}
                selectedDieId={selectedDieId}
                setSelectedDieId={setSelectedDieId}
                wasDie1UsedThisTurn={wasDie1UsedThisTurn}
                wasDie2UsedThisTurn={wasDie2UsedThisTurn}
                die1AmountNudgedBy={die1AmountNudgedBy}
                die2AmountNudgedBy={die2AmountNudgedBy}
                nudgesUsed={nudgesUsed}
                handleNudge={handleNudge}
                rollDice={rollDice}
            />
            <ScoreIndicator scoreIndicatorId={constants.SCORE_INDICATOR_ID}
                scorePId={constants.SCORE_PARAGRAPH_ID}
                score={score}
            />
            <RestartTray restartTrayId="restart-tray"
                restartButtonId={constants.RESTART_BUTTON_ID}
                handleRestart={handleRestart}
            />
            <AlertTray alertTrayId={constants.ALERT_TRAY_ID}
                paragraphId={constants.ALERT_PARAGRAPH_ID}
                selectedBallId={selectedBallId}
                wasBall1MovedThisTurn={wasBall1MovedThisTurn}
                wasBall2MovedThisTurn={wasBall2MovedThisTurn}
                alertParagraphText={alertParagraphText}
            />
        </div>
    );
}
