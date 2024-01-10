'use client'

import React, { useState } from "react";
import getRndIntegerInclusive from "./getRndIntegerInclusive";
import styles from './page.module.css'
import Table from './Table'
import DiceTray from './DiceTray';

export default function Home() {
  const [die1, setDie1] = useState(0);
  const [die2, setDie2] = useState(0);
  const [isDie1Nudged, setIsDie1Nudged] = useState(false);
  const [isDie2Nudged, setIsDie2Nudged] = useState(false);

  function rollDice() {
    setDie1(getRndIntegerInclusive(1, 6));
    setDie2(getRndIntegerInclusive(1, 6));
  }

  return (
    <div>
      <Table
        die1={die1}
        die2={die2}
        rollDice={rollDice}
      />
      <DiceTray
        die1={die1}
        die2={die2}
        setDie1={setDie1}
        setDie2={setDie2}
        rollDice={rollDice}
        isDie1Nudged={isDie1Nudged}
        setIsDie1Nudged={setIsDie1Nudged}
        isDie2Nudged={isDie2Nudged}
        setIsDie2Nudged={setIsDie2Nudged}
      />
    </div>
  );
}
