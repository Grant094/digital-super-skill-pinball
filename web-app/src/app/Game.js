"use client"

import React, { useState, useEffect } from "react";
import * as constants from "./constants";
import * as utilities from "./utilities";
import Table from "./Table";
import DiceTray from "./DiceTray";
import ScoreIndicator from "./ScoreIndicator";
import RestartTray from "./RestartTray";

export default function Game(props) {
  let didInit = false;
  //#region state
  const [dieValuesIndex, setDieValuesIndex] = useState(props.dieValues ? 0 : null);
  const [die1, setDie1] = useState(props.dieValues ? props.dieValues[dieValuesIndex] : 0);
  const [die2, setDie2] = useState(props.dieValues ? props.dieValues[dieValuesIndex] : 0);
  const [die1AmountNudgedBy, setDie1AmountNudgedBy] = useState(0);
  const [die2AmountNudgedBy, setDie2AmountNudgedBy] = useState(0);
  const [nudgesUsed, setNudgesUsed] = useState(0);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [ball1FeatureId, setBall1FeatureId] = useState(constants.START_FEATURE_ID);
  const [ball2FeatureId, setBall2FeatureId] = useState(constants.DRAIN_FEATURE_ID);
  const [selectedBallId, setSelectedBallId] = useState(constants.BALL1_ID);
  const [gameId, setGameId] = useState(0);
  //#endregion

  //#region functions
  const incNudgesUsed = (() => setNudgesUsed(nudgesUsed + 1));
  const resetNudgesUsed = (() => setNudgesUsed(0));
  const incRound = (() => setRound(round + 1));
  const incGameId = (() => setGameId(Number(gameId) + 1));

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
    } else if (selectedBallId === constants.BALL2_ID) {
      setBall2FeatureId(correspondingFeatureId);
    }
  }

  function endRound() {
    // increment round
    incRound();

    // move ball1 to start
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

    if (utilities.calcNetNudgeAmount(die1AmountNudgedBy, die2AmountNudgedBy)) {
      // check whether player tilted and if so end the round
      if (utilities.calcNetNudgeAmount(die1AmountNudgedBy, die2AmountNudgedBy) > Math.abs(nextValueOfDie1 - nextValueOfDie2)) {
        // player tilted so they should be notified and then the round should be ended
        alert(`Tilted!`);

        endRound();
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
    //#region reset-state
    setScore(0);
    setRound(1);
    resetNudgesUsed();
    incGameId();
    //#endregion

    moveSelectedBall(constants.START_FEATURE_ID);

    rollDice();
  }

  function addPoints(pointsToAdd) {
    setScore(Number(score) + Number(pointsToAdd));
  }

  function autoSelectOnlyRemainingBall() {
    if (ball1FeatureId === constants.DRAIN_FEATURE_ID && ball2FeatureId !== constants.DRAIN_FEATURE_ID) {
      setSelectedBallId(constants.BALL2_ID);
    } else if (ball2FeatureId === constants.DRAIN_FEATURE_ID && ball1FeatureId !== constants.DRAIN_FEATURE_ID) {
      setSelectedBallId(constants.BALL1_ID);
    }
  }

  function gameOverAlert() {
    alert(`Game over!`);
  }
  //#endregion

  //#region useEffect-hooks
  // roll dice upon initialization
  useEffect(function rollDiceOnInit() {
    if (!didInit) {
      didInit = true;
      rollDice();
    }
  }, []);
  //#endregion

  return (
    <div>
      <Table tableId="table"
        key={gameId}
        die1={die1}
        die2={die2}
        rollDice={rollDice}
        score={score}
        round={round}
        addPoints={addPoints}
        ball1FeatureId={ball1FeatureId}
        ball2FeatureId={ball2FeatureId}
        die1AmountNudgedBy={die1AmountNudgedBy}
        die2AmountNudgedBy={die2AmountNudgedBy}
        nudgesUsed={nudgesUsed}
        incNudgesUsed={incNudgesUsed}
        selectedBallId={selectedBallId}
        getSelectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
        moveSelectedBall={moveSelectedBall}
        endRound={endRound}
        autoSelectOnlyRemainingBall={autoSelectOnlyRemainingBall}
        gameOverAlert={gameOverAlert}
      />
      <DiceTray dicetrayId="dice-tray"
        die1={die1}
        die2={die2}
        die1AmountNudgedBy={die1AmountNudgedBy}
        die2AmountNudgedBy={die2AmountNudgedBy}
        nudgesUsed={nudgesUsed}
        onNudge={handleNudge}
        rollDice={rollDice}
      />
      <ScoreIndicator scoreIndicatorId={constants.SCORE_INDICATOR_ID}
        scorePId={constants.SCORE_PARAGRAPH_ID}
        score={score}
      />
      <RestartTray restartrayId="restart-tray"
        restartButtonId={constants.RESTART_BUTTON_ID}
        onClick={handleRestart}
      />
    </div>
  );
}
