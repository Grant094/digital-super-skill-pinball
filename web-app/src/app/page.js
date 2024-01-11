'use client'

import React, { useState, useEffect } from "react";
import getRndIntegerInclusive from "./getRndIntegerInclusive";
import styles from './page.module.css'
import Table from './Table'
import DiceTray from './DiceTray';
import ScoreIndicator from "./ScoreIndicator";
import RestartTray from "./RestartTray";

export default function Home() {
  const [die1, setDie1] = useState(0);
  const [die2, setDie2] = useState(0);
  const [die1AmountNudgedBy, setDie1AmountNudgedBy] = useState(0);
  const [die2AmountNudgedBy, setDie2AmountNudgedBy] = useState(0);
  const [nudgesUsed, setNudgesUsed] = useState(0);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  const redFlipperGroupBoxIds = [
    'red-flipper-box-3',
    'red-flipper-box-45',
    'red-flipper-box-6'
  ];
  const yelFlipperGroupBoxIds = [
      'yel-flipper-box-1',
      'yel-flipper-box-23',
      'yel-flipper-box-4'
  ];
  const flipperGroupBoxIds = [...redFlipperGroupBoxIds, ...yelFlipperGroupBoxIds];

  useEffect(() => {
    if (round > 3) {
      alert(`Game over!`);
    }
  }, [round])

  function restart() {
    setScore(0);
    setRound(1);
    setNudgesUsed(0);

    // clear all boxes
    const allDivs = document.querySelectorAll("div");
    for (const div of allDivs) {
      if (div.className.includes("box") || div.className.includes("feature")) {
        div.style.backgroundColor = 'transparent';
      }
    }

    // move ball back to start
    const ball = document.getElementById('ball');
    const start = document.getElementById('start');
    ball.style.top = start.style.top;
    ball.style.left = start.style.left;

    rollDice();
  }

  function rollDice() {
    const nextValueOfDie1 = getRndIntegerInclusive(1, 6);
    const nextValueOfDie2 = getRndIntegerInclusive(1, 6);
    setDie1(nextValueOfDie1);
    setDie2(nextValueOfDie2);
    if (die1AmountNudgedBy || die2AmountNudgedBy) {
      setNudgesUsed((nudgesUsed) => nudgesUsed + 1);
      // check whether player tilted and if so end the round
      let netNudgeAmount = Math.abs(die1AmountNudgedBy + die2AmountNudgedBy); // since one of them is always zero, you can just add both of them to get the nudge amount from either die.

      if (netNudgeAmount > Math.abs(nextValueOfDie1 - nextValueOfDie2)) {
        alert(`Tilted!`);

        // TODO end the round and start another one
      }

      // after checking tilt status, remove any nudging from both dice
      setDie1AmountNudgedBy(0);
      setDie2AmountNudgedBy(0);
    }
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
      <RestartTray restartFn={restart} />
    </div>
  );
}
