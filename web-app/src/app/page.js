"use client"

import React, { useState, useEffect } from "react";
import * as constants from "./constants";
import * as utilities from "./utilities";
import Table from "./Table";
import DiceTray from "./DiceTray";
import ScoreIndicator from "./ScoreIndicator";
import RestartTray from "./RestartTray";

export default function Home() {
  //#region state
  const [die1, setDie1] = useState(0);
  const [die2, setDie2] = useState(0);
  const [die1AmountNudgedBy, setDie1AmountNudgedBy] = useState(0);
  const [die2AmountNudgedBy, setDie2AmountNudgedBy] = useState(0);
  const [nudgesUsed, setNudgesUsed] = useState(0);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [ball1FeatureId, setBall1FeatureId] = useState(constants.startFeatureId);
  const [ball2FeatureId, setBall2FeatureId] = useState(constants.drainFeatureId);
  const [selectedBallId, setSelectedBallId] = useState(constants.ball1Id);
  //#endregion

  //#region functions
  const incNudgesUsed = (() => setNudgesUsed(nudgesUsed + 1));
  const resetNudgesUsed = (() => setNudgesUsed(0));
  const incRound = (() => setRound(round + 1));

  function getSelectedBallFeatureId(selectedBallId) {
    if (selectedBallId === constants.ball1Id) {
      return ball1FeatureId;
    } else if (selectedBallId === constants.ball2Id) {
      return ball2FeatureId;
    } else {
      return null;
    }
  }

  function setRelevantBallFeatureId(correspondingFeatureId) {
    if (selectedBallId === constants.ball1Id) {
      setBall1FeatureId(correspondingFeatureId);
    } else if (selectedBallId === constants.ball2Id) {
      setBall2FeatureId(correspondingFeatureId);
    }
  }

  function moveSelectedBall(correspondingFeatureId) {
    const ballElement = document.getElementById(selectedBallId);
    const correspondingFeatureElement = document.getElementById(correspondingFeatureId);
    ballElement.style.left = correspondingFeatureElement.style.left;
    ballElement.style.top = correspondingFeatureElement.style.top;
    setRelevantBallFeatureId(correspondingFeatureId);
  }

  function endRound() {
    // increment round
    incRound();

    // move ball1 to start
    setSelectedBallId(constants.ball1Id);
    moveSelectedBall(constants.startFeatureId);
  }

  function rollDice() {
    const nextValueOfDie1 = utilities.getRndIntegerInclusive(1, 6);
    const nextValueOfDie2 = utilities.getRndIntegerInclusive(1, 6);
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
    //#endregion

    //#region clear-all-boxes
    const allDivs = document.querySelectorAll("div");
    for (const div of allDivs) {
      if (div.className.includes("box")) {
        div.style.backgroundColor = "transparent";
      }
    }
    //#endregion

    moveSelectedBall(constants.startFeatureId);

    rollDice();
  }

  function addPoints(pointsToAdd) {
    setScore(Number(score) + Number(pointsToAdd));
  }
  //#endregion

  //#region useEffect-hooks
  // roll dice upon mounting
  useEffect(() => {
    rollDice();
  },[]);
  
  useEffect(() => {
    // end the round whenever neither ball is assigned to a feature
    if (utilities.isRoundOver(ball1FeatureId, ball2FeatureId)) {
      endRound();
    }

    // if there is only one ball not in the drain, make that ball the selected ball
    if (ball1FeatureId === constants.drainFeatureId && ball2FeatureId !== constants.drainFeatureId) {
      setSelectedBallId(constants.ball2Id);
    } else if (ball2FeatureId === constants.drainFeatureId && ball1FeatureId !== constants.drainFeatureId) {
      setSelectedBallId(constants.ball1Id);
    }
  }, [ball1FeatureId, ball2FeatureId]);

  useEffect(() => {
    if (utilities.isGameOver(round)) {
      alert(`Game over!`);
    }
  }, [round]);
  //#endregion
  
  return (
    <div>
      <Table tableId="table"
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
        selectedBallFeatureId={() => getSelectedBallFeatureId(selectedBallId)}
        moveSelectedBall={moveSelectedBall}
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
      <ScoreIndicator scoreIndicatorId="score-indicator"
        scorePId="score"
        score={score}
      />
      <RestartTray restartrayId="restart-tray"
        restartButtonId="restart-button"
        onClick={handleRestart}
      />
    </div>
  );
}
