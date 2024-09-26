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
            <form action="http://localhost:3001/score" method="POST">
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
                <div style={{visibility: "hidden"}}>
                    <label htmlFor="score"></label>
                    <input type="text" value={props.score} name="score" readOnly></input>
                </div>

                <button type="submit" className={styles.scoreSubmitButton}>Submit</button>
            </form>
        </div>
    );
}