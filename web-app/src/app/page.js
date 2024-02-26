"use client"

import React, { useState } from "react";
import Game from "./Game";
import * as utilities from "./utilities";

export default function Home(props) {
    //#region state
    const [gameId, setGameId] = useState(0);
    //#endregion

    //#region vars
    const MANUAL_DIE_VALUES = [
        [1, 2], // move from start to yel droptarget 12
        [1, 1], // move to yel flipper via yel flipper box 1
        [3, 4], // move to yel droptarget 34
        [2, 3], // move to yel flipper via yel flipper box 23
        [5, 6], // move to yel droptarget 56
        // select yel multiball bonus
        [3, 2],
        // move ball 1 from yel drop target 56 with die 1 (=3) to red flipper via red flipper box 3
        // move ball 2 from start with die 2 (=2) to red drop target 12
        [3, 4],
        // move ball 1 with die 1 (=3) to red drop target 3
        // move ball 2 with die 2 (=4) to yel flipper via yel flipper box 4
        [4, 5], // move ball 1 to red flipper via red flipper box 45
        [4, 4], // move ball 1 to red drop target 4
        [6, 6], // move ball 1 to red flipper via red flipper box 6
        [5, 6], // move ball 1 to red drop target 56
        // select red multiball bonus
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
                dieValues={props.dieValues ?
                    props.dieValues :
                    (MANUAL_DIE_VALUES.length > 1) ?
                        MANUAL_DIE_VALUES :
                        null
                }
            />
        </div>
    );
}
