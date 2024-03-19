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
                [1, 1], // nudge die1 to 2 then move to red flipper via red inlane (a dashed box worth 2 points)
                [1, 6], // avoid tilting and then move to drain box to end round 1
                [3, 4], // roll for the start of round 2
                [5, 5], // roll that should never be seen
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.DIE1_NUDGE_UP_BUTTON_ID));
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.RESTART_BUTTON_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.RED_INLANE_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            expect(screen.getByTitle(constants.ROUND_1_INDICATOR_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).not.toBeVisible();
            expect(screen.getByTitle(constants.ROUND_3_INDICATOR_ID)).not.toBeVisible();
            expect(screen.getByTitle(constants.NUDGES_USED_PARAGRAPH_ID).innerHTML).toEqual("Nudges Used: 0");
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
            expect(screen.getByTitle(constants.BALL1_ID)).toBeVisible();
            expect(screen.getByTitle(constants.BALL2_ID).style.top).toEqual(screen.getByTitle(constants.DRAIN_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL2_ID).style.left).toEqual(screen.getByTitle(constants.DRAIN_BOX_ID).style.left);
            expect(screen.getByTitle(constants.BALL2_ID)).not.toBeVisible();
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("1");
            //#endregion
        });
    });
});