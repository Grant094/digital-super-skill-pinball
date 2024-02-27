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
        [1, 1], // move from start to drain to end round 1/3
        [1, 1], // move from start to drain to end round 2/3
        [3, 3], // move from start to drain to end round 3/3
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
