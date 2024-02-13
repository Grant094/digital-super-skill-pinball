import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as constants from "../src/app/constants";
import Home from "../src/app/page";

describe('Home', () => {
    describe('when restarting the game by clicking the restart button', () => {
        it('should reset boxes, the score, the round indicators, the count of nudges used, and the balls', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // move from start to ferris wheel car 12 (a solid box)
                [1, 1], // nudge die1 to 2 then move to red flipper via red inlane (a dashed box) (worth 2 points)
                [1, 6], // avoid tilting and then move to drain via drain box to start round 2
                [1, 1], // roll after restarting the game
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
            const ferriswheelcar12BoxElement = screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID);
            const redInlaneBoxElement = screen.getByTitle(constants.RED_INLANE_BOX_ID);
            const drainBoxElement = screen.getByTitle(constants.DRAIN_BOX_ID);
            const restartButtonElement = screen.getByTitle(constants.RESTART_BUTTON_ID);
            const die1NudgeUpButtonElement = screen.getByTitle(constants.DIE1_NUDGE_UP_BUTTON_ID);
            //#endregion
            //#region act
            await user.click(ferriswheelcar12BoxElement);
            await user.click(die1NudgeUpButtonElement);
            await user.click(redInlaneBoxElement);
            await user.click(drainBoxElement);
            await user.click(restartButtonElement);
            // cannot put below in "arrange" since elements get erased upon restart
            const round1IndicatorElement = screen.getByTitle(constants.ROUND_1_INDICATOR_ID);
            const round2IndicatorElement = screen.getByTitle(constants.ROUND_2_INDICATOR_ID);
            const round3IndicatorElement = screen.getByTitle(constants.ROUND_3_INDICATOR_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const ball2Element = screen.getByTitle(constants.BALL2_ID);
            const startFeatureElement = screen.getByTitle(constants.START_FEATURE_ID);
            const drainFeatureElement = screen.getByTitle(constants.DRAIN_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            const nudgesUsedParagraphElement = screen.getByTitle(constants.NUDGES_USED_PARAGRAPH_ID);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.RED_INLANE_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(scoreParagraphElement.innerHTML).toEqual("0");
            expect(round1IndicatorElement).toBeVisible();
            expect(round2IndicatorElement).not.toBeVisible();
            expect(round3IndicatorElement).not.toBeVisible();
            expect(nudgesUsedParagraphElement.innerHTML).toEqual("Nudges Used: 0");
            expect(ball1Element.style.top).toEqual(startFeatureElement.style.top);
            expect(ball1Element.style.left).toEqual(startFeatureElement.style.left);
            expect(ball1Element).toBeVisible();
            expect(ball2Element.style.top).toEqual(drainFeatureElement.style.top);
            expect(ball2Element.style.left).toEqual(drainFeatureElement.style.left);
            expect(ball2Element).not.toBeVisible();
            //#endregion
        });
    });
});