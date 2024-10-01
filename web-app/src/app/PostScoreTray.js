"use client"

import React from "react";
import styles from "./postscoretray.module.css";
import * as constants from "./constants";

export default function PostScoreTray(props) {
    //#region state
    // none
    //#endregion

    //#region functions
    // none
    //#endregion

    //#region useEffect
    // none
    //#endregion

    return (
        <div id={constants.POST_SCORE_TRAY_ID}
            title={constants.POST_SCORE_TRAY_ID}
            className={styles.PostScoreTray}
            style={{
                visibility: (props.alertParagraphText === constants.GAME_OVER_ALERT ? "visible" : "hidden"),
            }}
        >
            <form action="https://super-skill-pinball-backend.onrender.com/score" method="POST">
                <label htmlFor="name">Initials:</label>
                <input
                    type="text"
                    className={styles.initialsInput}
                    name="name"
                    required
                    maxLength="3"
                    pattern="[A-Z]+"
                    title="ONLY USE CAPS!"
                ></input>

                <br />
                
                <input
                    type="text"
                    value={props.score}
                    name="score"
                    readOnly
                    style={{visibility: "hidden"}}
                ></input>

                <button type="submit" className={styles.scoreSubmitButton}>Submit</button>
            </form>
        </div>
    );
}