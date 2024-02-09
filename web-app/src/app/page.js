"use client"

import React, { useState, useEffect } from "react";
import Game from "./Game";

export default function Home(props) {
  //#region state
  const [gameId, setGameId] = useState(0);
  //#endregion

  //#region vars
  const MANUAL_DIE_VALUES = [
    [1, 1], // final roll
  ];
  //#endregion

  //#region functions
  const incGameId = (() => setGameId(gameId + 1));
  //#endregion

  return (
    <div>
      <Game 
        key={gameId}
        incGameId={incGameId}
        dieValues={props.dieValues?
            props.dieValues:
            (MANUAL_DIE_VALUES.length > 1)?
                MANUAL_DIE_VALUES:
                null
        }
      />
    </div>
  );
}
