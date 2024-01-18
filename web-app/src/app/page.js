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
  const [ball2FeatureId, setBall2FeatureId] = useState("");
  //#endregion

  useEffect(() => {
    if (utilities.isGameOver(round)) {
      alert(`Game over!`);
    }
  }, [round]);

  //useEffect(() => {rollDice()},[]); defined below since rollDice() must be defined before it

  const resetNudgesUsed = (() => setNudgesUsed(0));
  const incNudgesUsed = (() => setNudgesUsed(nudgesUsed + 1));
  const incRound = (() => setRound(round + 1));

  function moveBall1(correspondingFeatureId) {
    const ball1 = document.getElementById(constants.ball1Id);
    const correspondingFeature = document.getElementById(correspondingFeatureId);
    ball1.style.left = correspondingFeature.style.left;
    ball1.style.top = correspondingFeature.style.top;
    setBall1FeatureId(correspondingFeatureId);
  }

  function rollDice() {
    const nextValueOfDie1 = utilities.getRndIntegerInclusive(1, 6);
    const nextValueOfDie2 = utilities.getRndIntegerInclusive(1, 6);
    setDie1(nextValueOfDie1);
    setDie2(nextValueOfDie2);
    if (utilities.calcNetNudgeAmount(die1AmountNudgedBy, die2AmountNudgedBy)) {
      // check whether player tilted and if so end the round
      if (utilities.calcNetNudgeAmount(die1AmountNudgedBy, die2AmountNudgedBy) > Math.abs(nextValueOfDie1 - nextValueOfDie2)) {
        alert(`Tilted!`);

        // end the round and start another one
        // // clear flipper boxes
        for (const flipperBoxId of constants.flipperGroupBoxIds) {
          document.getElementById(flipperBoxId).style.backgroundColor = "transparent";
        }

        // // increment round
        incRound();

        // move ball1 to start
        moveBall1(constants.startFeatureId);
      }

      // after checking tilt status, remove any nudging from both dice
      setDie1AmountNudgedBy(0);
      setDie2AmountNudgedBy(0);
    }
  }

  // defined here since rollDice() must be defined first
  useEffect(() => {
    rollDice();
  },[]);

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

    moveBall1(constants.startFeatureId);

    rollDice();
  }

  function addPoints(pointsToAdd) {
    setScore(Number(score) + Number(pointsToAdd));
  }

  return (
    <div>
      <Table tableId="table"
        die1={die1}
        die2={die2}
        rollDice={rollDice}
        score={score}
        round={round}
        moveBall1={moveBall1}
        addPoints={addPoints}
        ball1FeatureId={ball1FeatureId}
        ball2FeatureId={ball2FeatureId}
        die1AmountNudgedBy={die1AmountNudgedBy}
        die2AmountNudgedBy={die2AmountNudgedBy}
        nudgesUsed={nudgesUsed}
        incNudgesUsed={incNudgesUsed}
        incRound={incRound}
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
