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
        [3, 1],
        // move ball 1 with die 1 (=3) from yel drop target 56 to red flipper box 3
        // move ball 2 with die 2 (=1) from start to red drop target 12
        [3, 4],
        // move ball 1 with die 1 (=3) from red flipper box 3 to red drop target 3
        // move ball 2 with die 2 (=4) from red drop target 12 to red flipper box 45
        [6, 4],
        // move ball 1 with die 1 (=6) from red drop target 3 to red flipper box 6
        // move ball 2 with die 2 (=4) from red flipper box 45 to red drop target 4
        [6, 2],
        // move ball 1 with die 1 (=6) from red flipper box 6 to red drop target 56
        // select red points bonus
        // move ball 2 with die 2 (=2) from red drop target 4 to red inlane
        [5, 5],
        // attempt to move ball 2 with die 2 (=5) from red inlane to red drop target 56
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
