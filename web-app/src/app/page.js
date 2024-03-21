"use client"

import React, { useState } from "react";
import Game from "./Game";

export default function Home(props) {
    //#region state
    const [gameId, setGameId] = useState(0);
    const MANUAL_DIE_VALUES = [
        [1, 2], // move from start to yel drop target 12
        [1, 1], // move to yel flipper box 1
        [3, 4], // move to yel drop target 34
        [2, 3], // move to yel flipper box 23
        [5, 6], // move to yel drop target 56
        // select yel multiball bonus
        [5, 5],
        [3, 3],
        [1, 1], // final roll
    ];
    //#endregion

    //#region functions
    const incGameId = (() => setGameId(gameId + 1));
    //#endregion

    //#region useEffect
    // none
    //#endregion

    return (
        <div>
            <Game
                key={gameId}
                incGameId={incGameId}
                dieValues={props.dieValues ?
                    props.dieValues :
                    (MANUAL_DIE_VALUES.length > 1) ?
                        MANUAL_DIE_VALUES :
                        undefined
                }
            />
        </div>
    );
}
