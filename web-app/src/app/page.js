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
        [1, 2], // move from start to red drop target 12 (+1)
        [3, 3], // move to red flipper via red flipper box 3
        [3, 3], // move to red drop target 3 (+1)
        [4, 5], // move to red flipper via red flipper box 45
        [4, 4], // move to red drop target 4 (+1)
        [6, 6], // move to red flipper via red flipper box 6
        [5, 6], // move to red drop target 56 (+1)
        [2, 3], // move to drain via drain box after choosing the bumper bonus
        [1, 1], // move to bumper 12 via 1st 1 box (+1)
        [5, 5], // attempt to move to bumper 56 via 1st 5 box
        [1, 1], // final roll which should not be reached
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
