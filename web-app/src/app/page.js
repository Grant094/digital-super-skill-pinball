"use client"

import React, { useState, useEffect } from "react";
import * as constants from "./constants";
import * as utilities from "./utilities";
import styles from "./page.module.css";
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
    if (round > 3) {
      alert(`Game over!`);
    }
  }, [round]);

  const resetNudgesUsed = (() => setNudgesUsed(0));
  const incNudgesUsed = (() => setNudgesUsed(nudgesUsed + 1));

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
        setRound(() => Number(round) + 1);

        //#region move-ball-to-start
        const ball = document.getElementById("ball");
        const start = document.getElementById(constants.startFeatureId);
        ball.style.left = start.style.left;
        ball.style.top = start.style.top;
        setBall1FeatureId(constants.startFeatureId);
        //#endregion
      }

      // after checking tilt status, remove any nudging from both dice
      setDie1AmountNudgedBy(0);
      setDie2AmountNudgedBy(0);
    }
  }

  function handleBall1Move(correspondingFeatureId) {
    const ball1 = document.getElementById("ball");
    const correspondingFeature = document.getElementById(correspondingFeatureId);
    ball1.style.left = correspondingFeature.style.left;
    ball1.style.top = correspondingFeature.style.top;
    setBall1FeatureId(correspondingFeatureId);
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

    handleBall1Move(constants.startFeatureId);

    rollDice();
  }

  return (
    <div>
      <Table
        die1={die1}
        die2={die2}
        rollDice={rollDice}
        score={score}
        setScore={setScore}
        round={round}
        setRound={setRound}
        ball1MoveHandler={handleBall1Move}
        ball1FeatureId={ball1FeatureId}
        setBall1FeatureId={setBall1FeatureId}
        ball2FeatureId={ball2FeatureId}
        setBall2FeatureId={setBall2FeatureId}
        die1AmountNudgedBy={die1AmountNudgedBy}
        die2AmountNudgedBy={die2AmountNudgedBy}
        nudgesUsed={nudgesUsed}
        incNudgesUsed={incNudgesUsed}
      />
      <DiceTray
        die1={die1}
        die2={die2}
        setDie1={setDie1}
        setDie2={setDie2}
        rollDice={rollDice}
        die1AmountNudgedBy={die1AmountNudgedBy}
        setDie1AmountNudgedBy={setDie1AmountNudgedBy}
        die2AmountNudgedBy={die2AmountNudgedBy}
        setDie2AmountNudgedBy={setDie2AmountNudgedBy}
        nudgesUsed={nudgesUsed}
      />
      <ScoreIndicator score={score} />
      <RestartTray onClick={handleRestart} />
    </div>
  );
}
