"use client"

import React, { useState } from "react";
import Game from "./Game";

export default function Home(props) {
    //#region state
    const [gameId, setGameId] = useState(0);
    const MANUAL_DIE_VALUES = [
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
