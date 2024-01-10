'use client'

import React, { useState } from "react";
import getRndIntegerInclusive from "./getRndIntegerInclusive";
import styles from './page.module.css'
import Table from './Table'
import DiceTray from './DiceTray';
import ScoreIndicator from "./ScoreIndicator";

export default function Home() {
  const [die1, setDie1] = useState(0);
  const [die2, setDie2] = useState(0);
  const [die1AmountNudgedBy, setDie1AmountNudgedBy] = useState(0);
  const [die2AmountNudgedBy, setDie2AmountNudgedBy] = useState(0);
  const [nudgesUsed, setNudgesUsed] = useState(0);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  function rollDice() {
    setDie1(getRndIntegerInclusive(1, 6));
    setDie2(getRndIntegerInclusive(1, 6));
    if (die1AmountNudgedBy || die2AmountNudgedBy) {
      setNudgesUsed((nudgesUsed) => nudgesUsed + 1);
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
    </div>
  );
}
