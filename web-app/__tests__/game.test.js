import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "../src/app/Game";
import * as constants from "../src/app/constants";
import * as utilities from "../src/app/utilities";

describe("Game", () => {
    describe('when the game loads', () => {
        it('should render all features as visible', () => {
            //#region arrange
            render(<Game />);
            //#endregion
            //#region act
            // not applicable
            //#endregion
            //#region assert
            for (const featureId of constants.ALL_FEATURE_IDS) {
                expect(screen.getByTitle(featureId)).toBeInTheDocument();
                expect(screen.getByTitle(featureId)).toBeVisible();

            }
            //#endregion
        });
        it('should render all boxes as visible and unfilled', () => {
            //#region arrange
            render(<Game />);
            //#endregion
            //#region act
            // not applicable
            //#endregion
            //#region assert
            for (const boxId of constants.ALL_BOX_IDS) {
                expect(screen.getByTitle(boxId)).toBeInTheDocument();
                expect(screen.getByTitle(boxId).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
                expect(screen.getByTitle(boxId)).toBeVisible();

            }
            //#endregion
        });
        it('should render ball 1 as visible at the Start feature', () => {
            //#region arrange
            render(<Game />);
            //#endregion
            //#region act
            // not applicable
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.BALL1_ID)).toBeVisible();
            //#endregion
        });
        it('should render ball 2 as hidden at the Drain feature', () => {
            //#region arrange
            render(<Game />);
            //#endregion
            //#region act
            // not applicable
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL2_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.BALL2_ID).style.top).toEqual(screen.getByTitle(constants.DRAIN_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL2_ID).style.left).toEqual(screen.getByTitle(constants.DRAIN_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.BALL2_ID)).not.toBeVisible();
            //#endregion
        });
        it('should render the alert tray as hidden', () => {
            //#region arrange
            render(<Game />);
            //#endregion
            //#region act - not applicable
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
            //#endregion
        });
        it('should render skill shot boxes with SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR borders', () => {
            //#region arrange
            render(<Game />);
            //#endregion
            //#region act
            // not applicable
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_2_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_3_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_4_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_5_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_6_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_2_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_3_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_4_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_5_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_6_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);
            //#endregion
        });
        it('should render bonus indicator components with transparent borders', async () => {
            //#region arrange
            render(<Game />);
            //#endregion
            //#region act
            // not applicable
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FLIPPER_PASS_INDICATOR_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.FLIPPER_PASS_INDICATOR_ID).style.borderColor).toEqual(constants.BONUS_INDICATOR_INACTIVE_BORDER_COLOR);
            expect(screen.getByTitle(constants.OUTLANE_BONUS_INDICATOR_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.OUTLANE_BONUS_INDICATOR_ID).style.borderColor).toEqual(constants.BONUS_INDICATOR_INACTIVE_BORDER_COLOR);
            expect(screen.getByTitle(constants.BUMPER_BONUS_INDICATOR_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.BUMPER_BONUS_INDICATOR_ID).style.borderColor).toEqual(constants.BONUS_INDICATOR_INACTIVE_BORDER_COLOR);
            //#endregion
        });
        it('should render the flipper pass bonus box unfilled', async () => {
            //#region arrange
            render(<Game />);
            //#endregion
            //#region act
            // not applicable
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FLIPPER_PASS_BONUS_BOX_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.FLIPPER_PASS_BONUS_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            //#endregion
        });
    });
    describe('when receiving specific dice rolls as a prop', () => {
        it('should display the 1st dice values passed via props', async () => {
            //#region arrange
            const DIE1_1ST_VALUE = 1;
            const DIE2_1ST_VALUE = 2;
            const DIE_VALUES = [
                [DIE1_1ST_VALUE, DIE2_1ST_VALUE]
            ];
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            // not applicable
            //#endregion
            //#region assert
            expect(Number(screen.getByTitle(constants.DIE1_ID).innerHTML)).toEqual(DIE1_1ST_VALUE);
            expect(Number(screen.getByTitle(constants.DIE2_ID).innerHTML)).toEqual(DIE2_1ST_VALUE);
            //#endregion
        });
        it('should display the 2nd dice values passed via props after the only ball is moved', async () => {
            //#region arrange
            const DIE1_2ND_VALUE = 5;
            const DIE2_2ND_VALUE = 6;
            const DIE_VALUES = [
                [1, 2],
                [DIE1_2ND_VALUE, DIE2_2ND_VALUE],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            //#endregion
            //#region assert
            expect(Number(screen.getByTitle(constants.DIE1_ID).innerHTML)).toEqual(DIE1_2ND_VALUE);
            expect(Number(screen.getByTitle(constants.DIE2_ID).innerHTML)).toEqual(DIE2_2ND_VALUE);
            //#endregion
        });
    });
    describe('when attempting to move the only ball via boxes that can receive on either die value', () => {
        it('should be able to go from start to ferris wheel car 12 and fill it in on roll {1, 1}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID).style.left);
            //#endregion
        });
        it('should be able to go from start to ferris wheel car 12 and fill it in on roll {2, 2}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2],
                [2, 2],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID).style.left);
            //#endregion
        });
        it('should be able to go from start to ferris wheel car 12 and fill it in on roll {1, 4}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 4],
                [2, 2],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID).style.left);
            //#endregion
        });
        it('should be able to go from start to ferris wheel car 12 and fill it in on roll {4, 1}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [4, 1],
                [2, 2],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID).style.left);
            //#endregion
        });
    });
    describe('when attempting to move the only ball from start via boxes that can receive from start', () => {
        //#region ferriswheelcars
        it('should be able to move from start to ferris wheel car 12, fill the box, and maintain score, all on a roll of {1, 2}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2],
                [1, 6],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
        it('should be able to move from start to ferris wheel car 34, fill the box, and maintain score, all on a roll of {3, 4}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 4],
                [1, 6],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_34_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_34_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
        it('should be able to move from start to ferris wheel car 56, fill the box, and maintain score, on a roll of {5, 6}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [5, 6],
                [1, 6],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_56_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_56_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
        //#endregion
        //#region bumpers
        it('should be able to move from start to bumper 12 via the 1st 1 box, fill the box, and add 1 to the score, all on a roll of {1, 1}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to bumper 12 via the 2nd 1 box, fill the box, and add 1 to the score, on a roll of {1, 1}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_12_2ND_1_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_12_2ND_1_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to bumper 12 via the 1st 2 box, fill the box, and add 1 to the score, all on a roll of {2, 2}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to bumper 12 via the 2nd 2 box, fill the box, and add 1 to the score, all on a roll of {2, 2}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_12_2ND_2_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_12_2ND_2_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to bumper 34 via the 1st 3 box, fill the box, and add 1 to the score, all on a roll of {3, 3}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_34_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_34_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to bumper 34 via the 2nd 3 box, fill the box, and add 1 to the score, all on a roll of {3, 3}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_34_2ND_3_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_34_2ND_3_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_34_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_34_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to bumper 34 via the 1st 4 box, fill the box, and add 1 to the score, all on a roll of {4, 4}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [4, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_34_1ST_4_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_34_1ST_4_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_34_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_34_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to bumper 34 via the 2nd 4 box, fill the box, and add 1 to the score, all on a roll of {4, 4}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [4, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_34_2ND_4_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_34_2ND_4_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_34_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_34_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to bumper 56 via the 1st 5 box, fill the box, and add 1 to the score, all on a roll of {5, 5}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [5, 5],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_56_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_56_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to bumper 56 via the 2nd 5 box, fill the box, and add 1 to the score, all on a roll of {5, 5}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [5, 5],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_56_2ND_5_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_56_2ND_5_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_56_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_56_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to bumper 56 via the 1st 6 box, fill the box, and add 1 to the score, all on a roll of {6, 6}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [6, 6],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_56_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_56_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to bumper 56 via the 2nd 6 box, fill the box, and add 1 to the score, all on a roll of {6, 6}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [6, 6],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_56_2ND_6_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_56_2ND_6_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_56_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_56_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        //#endregion
        //#region droptargets
        it('should be able to move from start to yel droptarget 12, fill the box, and add 1 to the score, all on a roll of {1, 1}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_12_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_12_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to yel droptarget 34, fill the box, and add 1 to the score, all on a roll of {3, 3}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_34_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_34_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to yel droptarget 56, fill the box, and add 1 to the score, all on a roll of {5, 5}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [5, 5],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_56_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_56_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to red droptarget 12, fill the box, and add 1 to the score, all on a roll of {1, 1}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_DROPTARGET_12_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_DROPTARGET_12_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to red droptarget 3, fill the box, and add 1 to the score, all on a roll of {3, 3}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_DROPTARGET_3_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_DROPTARGET_3_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to red droptarget 4, fill the box, and add 1 to the score, all on a roll of {4, 4}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [4, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_DROPTARGET_4_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_DROPTARGET_4_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        it('should be able to move from start to red droptarget 56, fill the box, and add 1 to the score, all on a roll of {5, 5}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [5, 5],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_DROPTARGET_56_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_DROPTARGET_56_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
        //#endregion
        //#region flippers
        it('should be able to move from start to red flipper via the red inlane, fill the box, and add 2 to the score, all on a roll of {2, 2}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_INLANE_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_FLIPPER_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_FLIPPER_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("2");
            //#endregion
        });
        it('should be able to move from start to red flipper via red flipper box 3, fill the box, and maintain score, all on a roll of {3, 3}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_FLIPPER_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_FLIPPER_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
        it('should be able to move from start to red flipper via red flipper box 45, fill the box, and maintain score, all on a roll of {4, 4}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [4, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_FLIPPER_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_FLIPPER_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
        it('should be able to move from start to red flipper via red flipper box 6, fill the box, and maintain score, all on a roll of {6, 6}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [6, 6],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_FLIPPER_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_FLIPPER_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
        it('should be able to move from start to yel flipper via the yel inlane, fill the box, and add 2 to the score, all on a roll of {5, 5}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [5, 5],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_INLANE_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_INLANE_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_FLIPPER_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_FLIPPER_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("2");
            //#endregion
        });
        it('should be able to move from start to yel flipper via yel flipper box 1, fill the box, and maintain score, all on a roll of {1, 1}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_FLIPPER_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_FLIPPER_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
        it('should be able to move from start to yel flipper via yel flipper box 23, fill the box, and maintain score, all on a roll of {2, 3}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_FLIPPER_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_FLIPPER_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
        it('should be able to move from start to yel flipper via yel flipper box 4, fill the box, and maintain score, all on a roll of {4, 4}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [4, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_FLIPPER_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_FLIPPER_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
        //#endregion
        //#region drain
        it('should be able to move from start to start via the red outlane, fill the box, and maintain score, all on a roll of {1, 1}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_OUTLANE_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
        it('should be able to move from start to start via the yel outlane, fill the box, and maintain score, all on a roll of {6, 6}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [6, 6],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
        it('should be able to move from start to start via drain, fill the box, and maintain score, all on a roll of {3, 4}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
        //#endregion
    });
    describe('when attempting to move the only ball to a hammer space', () => {
        it('should be able to move from red flipper to hammer space 1, fill the box, and maintain score, all on a roll of {1, 1}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3], // from start to red flipper via red flipper box 3
                [1, 1], // to hammer space 1
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.HAMMER_SPACE_1_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.HAMMER_SPACE_1_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
        it('should be able to move to each hammer space in the correct order and have the correct score afterwards', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2], // from start to red flipper via red inlane
                [1, 1], // to hammer space 1
                [3, 3], // to red flipper via red flipper box 3
                [2, 2], // to hammer space 2
                [4, 4], // to red flipper via red flipper box 45
                [3, 3], // to hammer space 3
                [6, 6], // to red flipper via red flipper box 6
                [4, 4], // to hammer space 4
                [1, 1], // to drain via drain box since all boxes for red flipper are filled
                [2, 2], // from start to red flipper via red inlane
                [5, 5], // to hammer space 5
                [3, 3], // to red flipper via red flipper box 3
                [6, 6], // to hammer space 6
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_3_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_4_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_5_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_6_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.HAMMER_SPACE_6_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.HAMMER_SPACE_6_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("33"); // each hammerspace (20 + 5 + 2 + 1 + 1 = 29) + red inlane * 2 (2 * 2 = 4) = 33
            //#endregion
        });
        it('should have an alert and no other change when attempting to go out of sequence', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3], // from start to red flipper via red flipper box 3
                [1, 1], // to hammer space 1
                [4, 5], // to red flipper via red flipper box 45
                [6, 6], // attempt to move to hammer space 6 out of sequence
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_6_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual("You must fill in the hammer spaces in sequence from 1 to 6!");
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_FLIPPER_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_FLIPPER_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("6");
            expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("6");
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
    });
    describe('when attempting to make an invalid move to an unfilled space', () => {
        it('should have an alert in the alert tray but change nothing else', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // attempt to move from start to bumper 56 1st 5
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual("Invalid choice!");
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
        it('should allow the user to make a valid move after the invalid one and hide the alert while making the valid move', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3], // eventually move to bumper 34 via 1st 3 box
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID)).not.toBeVisible();
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_34_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_34_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            //#endregion
        });
    });
    describe('when clicking on an already filled-in box', () => {
        it('should do nothing and maintain state', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2], // move from start to bumper 12 via 1st 2 box (worth 1 point)
                [4, 4], // move to yel flipper via yel flipper box 4
                [2, 2], // attempt to select bumper 12 1st 2 box
                [1, 1], // final roll which should not be reached
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_FLIPPER_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_FLIPPER_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("2");
            expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("2");
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
            //#endregion
        });
    });
    describe('when attempting to nudge the only ball into an outlane', () => {
        it('should alert the player that they cannot nudge into the red outlane, not move the ball, and not roll the dice', async () => {
            //#region arrange
            const DIE1_1ST_VALUE = 2;
            const DIE2_1ST_VALUE = 5;
            const DIE_VALUES = [
                [DIE1_1ST_VALUE, DIE2_1ST_VALUE], // nudge 2 to 1 and click on red outlane
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DIE1_NUDGE_DN_BUTTON_ID))
            await user.click(screen.getByTitle(constants.RED_OUTLANE_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.OUTLANE_NUDGE_ALERT);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_FEATURE_ID).style.left);
            expect(Number(screen.getByTitle(constants.DIE1_ID).innerHTML)).toEqual(Number(DIE1_1ST_VALUE) - 1); // was nudged
            expect(Number(screen.getByTitle(constants.DIE2_ID).innerHTML)).toEqual(Number(DIE2_1ST_VALUE));
            //#endregion
        });
        it('should remove the alert after the player makes a valid move', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2], // nudge die1 by -1 to 1
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DIE1_NUDGE_DN_BUTTON_ID));
            await user.click(screen.getByTitle(constants.RED_OUTLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.DIE1_NUDGE_UP_BUTTON_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual("");
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID).style.left);
            //#endregion
        });
    });
    describe('when validly nudging the only ball to move the only ball', () => {
        it('should increment nudges used, award points, and not trigger round end when avoiding tilting', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2], // will nudge -1 to move to bumper 12 via 1st 1 box
                [1, 6], // final roll that avoids tilting
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DIE1_NUDGE_DN_BUTTON_ID)); // nudge die1 from 2 to 1
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.NUDGES_USED_PARAGRAPH_ID).innerHTML).toEqual("Nudges Used: 1");
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).not.toBeVisible();
            //#endregion
        });
        it('should increment nudges used, award points, show message, and resolve round end when tilting', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3], // will nudge -1 to move from start to red flipper via red inlane
                [6, 6], // roll that causes tilt
                [1, 1], // final roll post-tilt
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DIE1_NUDGE_DN_BUTTON_ID)); // nudge die1 from 2 to 1
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.NUDGES_USED_PARAGRAPH_ID).innerHTML).toEqual("Nudges Used: 1");
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("2");
            expect(screen.getByTitle(constants.RED_INLANE_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual("Tilted on {6, 6}!");
            expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).toBeVisible();
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("1");
            //#endregion
        });
    });
    describe('when ending a round but not the game', () => {
        it('should clear a dashed box but not clear a solid box at the end of the round', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // from start to bumper 12 via its 1st 1 box
                [1, 1], // to yel flipper box 1
                [1, 1], // to drain box
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            //#endregion
        });
        it('should make the relevant round indicators visible in round 2 while keeping the round 3 indicator hidden', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // from start to start via drain box to start round 2
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // to start round 2
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ROUND_1_INDICATOR_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ROUND_3_INDICATOR_ID)).not.toBeVisible();
            //#endregion
        });
        it('should make all round indicators visible at the start of round 3', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // from start to drain box to start round 2
                [1, 1], // from start to drain box to start round 3
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // to start round 2
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // to start round 3
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ROUND_1_INDICATOR_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ROUND_3_INDICATOR_ID)).toBeVisible();
            //#endregion
        });
        it('should add 2 points when using the red outlane and one red flipper box has been filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3], // move from start to red flipper box 3
                [1, 1], // move to red outlane
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_OUTLANE_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("2");
            //#endregion
        });
        it('should add 4 points when using the red outlane and two red flipper boxes have been filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3], // move from start to red flipper box 3
                [4, 5], // move to red flipper box 45
                [1, 1], // move to red outlane
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_OUTLANE_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("4");
            //#endregion
        });
        it('should add 6 points when using the red outlane and three red flipper boxes have been filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3], // move from start to red flipper box 3
                [4, 5], // move to red flipper box 45
                [6, 6], // move to red flipper box 6
                [1, 1], // move to red outlane
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_OUTLANE_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("6");
            //#endregion
        });
        it('should add 0 points when using the red outlane after the inlane but no red flipper boxes have been filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2], // move from start to red flipper via red inlane (worth 2 points)
                [1, 1], // move to red outlane
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_OUTLANE_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("2"); // inlane was worth 2 points
            //#endregion
        });
        it('should add 2 points when using the yel outlane and one yel flipper box has been filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // move from start to yel flipper via yel flipper box 1
                [6, 6], // move to drain via yel outlane
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("2");
            //#endregion
        });
        it('should add 4 points when using the yel outlane and two yel flipper boxes have been filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // move from start to yel flipper via yel flipper box 1
                [2, 3], // move to yel flipper via yel flipper box 23
                [6, 6], // move to drain via yel outlane
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("4");
            //#endregion
        });
        it('should add 6 points when using the yel outlane and three yel flipper boxes have been filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // move from start to yel flipper via yel flipper box 1
                [2, 3], // move to yel flipper via yel flipper box 23
                [4, 4], // move to yel flipper via yel flipper box 4
                [6, 6], // move to drain via yel outlane
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("6");
            //#endregion
        });
        it('should add 0 points when using the yel outlane after the inlane but no yel flipper boxes have been filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [5, 5], // move from start to yel flipper via yel inlane (worth 2 points)
                [6, 6], // move to drain via yel outlane
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_INLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("2"); // 2 points from using yel inlane but no additional points from using outlane
            //#endregion
        });
        it('should maintain gained skill shots', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [1, 1], // move to drain
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_GAINED_BORDER_COLOR);
            //#endregion
        });
    });
    describe('when filling all boxes in the ferris wheel group', () => {
        it('should clear all boxes in the ferris wheel group and display the skill shot alert', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.SELECT_SKILL_SHOT_ALERT);
            //#endregion
        });
        it('should ignore clicks while the skill shot alert appears', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [3, 4], // attempt to click on boxes that can receive on this
                [1, 1], // final roll that should never be reached
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_34_1ST_4_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.SELECT_SKILL_SHOT_ALERT);
            expect(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BUMPER_34_1ST_4_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_56_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_56_FEATURE_ID).style.left);
            //#endregion
        });
        it('should allow a skill shot to be gained', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [1, 1], // final roll that should never be reached
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_GAINED_BORDER_COLOR);
            //#endregion
        });
        it('should clear the alert paragraph and hide the alert tray after gaining a skill shot', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [1, 1], // final roll that should never be reached
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual("");
            //#endregion
        });
        it('should not allow a user to gain a 2nd skill shot after filling all ferris wheel cars only once', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [1, 1], // final roll 
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_2_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_GAINED_BORDER_COLOR);
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_2_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);
            //#endregion
        });
        it('should allow gaining a 2nd skill shot if the ferris wheel cars have been filled a 2nd time', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [1, 1], // move to drain
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_6_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_GAINED_BORDER_COLOR);
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_6_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_GAINED_BORDER_COLOR);
            //#endregion
        });
        it('should do nothing if clicking on an already gained skill shot when gaining a 2nd skill shot is allowed', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [1, 1], // move to drain
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.SELECT_SKILL_SHOT_ALERT);
            //#endregion
        });
        it('should allow gaining a 2nd skill shot even after clicking on an already gained skill shot', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [1, 1], // move to drain
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_6_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_GAINED_BORDER_COLOR);
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_6_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_GAINED_BORDER_COLOR);
            //#endregion
        });
    });
    describe('when filling all boxes in the bumper group', () => {
        it('should clear all boxes in the bumper group', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // move from start to 1st 1
                [3, 3],
                [5, 5],
                [1, 1], // 2nd round of odd boxes
                [3, 3],
                [5, 5],
                [2, 2], // 1st round of even boxes
                [4, 4],
                [6, 6],
                [2, 2], // 2nd round of even boxes
                [4, 4],
                [6, 6],
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_12_2ND_1_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_34_2ND_3_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_56_2ND_5_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_34_1ST_4_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_12_2ND_2_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_34_2ND_4_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_56_2ND_6_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BUMPER_12_2ND_1_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BUMPER_12_2ND_2_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BUMPER_34_2ND_3_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BUMPER_34_1ST_4_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BUMPER_34_2ND_4_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BUMPER_56_2ND_5_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BUMPER_56_2ND_6_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            //#endregion
        });
    });
    describe('when filling all boxes in the yel drop targets group', () => {
        it('should clear all boxes in the yel droptargets group', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to yel droptarget 56
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            //#endregion
        });
        it('should alert the user to select a yellow bonus', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to yel droptarget 56
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(utilities.alertMessageForChoosingABonus("yellow"));
            //#endregion
        });
    });
    describe('when filling all boxes in the red drop targets group', () => {
        it('should clear all boxes in the red droptargets group', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red droptarget 12
                [3, 3], // move to red flipper via red flipper box 3
                [3, 3], // move to red droptarget 3
                [4, 5], // move to red flipper via red flipper box 45
                [4, 4], // move to red droptarget 4
                [6, 6], // move to red flipper via red flipper box 6
                [5, 6], // move to red droptarget 56
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            //#endregion
        });
    });
    describe('when filling all hammer space boxes', () => {
        it('should clear all hammer space boxes', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2], // from start to red flipper via red inlane
                [1, 1], // to hammer space 1
                [3, 3], // to red flipper via red flipper box 3
                [2, 2], // to hammer space 2
                [4, 4], // to red flipper via red flipper box 45
                [3, 3], // to hammer space 3
                [6, 6], // to red flipper via red flipper box 6
                [4, 4], // to hammer space 4
                [1, 1], // to drain via drain box since all boxes for the red flipper are filled
                [2, 2], // from start to red flipper via red inlane
                [5, 5], // to hammer space 5
                [3, 3], // to red flipper via red flipper box 3
                [6, 6], // to hammer space 6
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_3_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_4_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_5_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_6_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_3_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_4_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_5_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_6_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            //#endregion
        });
    });
    describe('when attempting to select and/or use a skill shot', () => {
        it('should change to the selected border color and show selected skill shot alert', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_SELECTED_BORDER_COLOR);
            //#endregion
        });
        it('should change the die, not show an alert, and make the used skill shot available, all after overriding a die', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [6, 6], // final roll on whose turn die1 will be overridden
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID)); // choose to gain skill shot 1
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID)); // select to use skill shot 1
            await user.click(screen.getByTitle(constants.DIE1_ID)); // override die1 ({6}) with 1
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);
            //#endregion
        });
        it('should allow the user to move with the skill shot', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [6, 6], // override die1 to 1 and move to bumper 12 via 1st 1 box
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID));
            await user.click(screen.getByTitle(constants.DIE1_ID));
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_FEATURE_ID).style.left);
            //#endregion
        });
        it('should allow the user to move after nudging a skill shot', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [6, 6], // override die1 to 1 and move to bumper 12 via 1st 1 box
                [1, 6], // avoid tilt on final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID));
            await user.click(screen.getByTitle(constants.DIE1_ID));
            await user.click(screen.getByTitle(constants.DIE1_NUDGE_UP_BUTTON_ID)); // nudge die1 from 1 to 2
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_FEATURE_ID).style.left);
            //#endregion
        });
        it('should allow the user to deselect a skill shot if they have not overridden a die yet', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [6, 6], // final roll that should not be overridden or used to move
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID)); // to gain skill shot 1
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID)); // to select skill shot 1
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID)); // to deselect skill shot 1
            await user.click(screen.getByTitle(constants.DIE1_ID)); // should do nothing
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_GAINED_BORDER_COLOR);
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("6");
            //#endregion
        });
        it('should neither move the ball nor change the alert text if clicking on a dice box while a skill shot is selected', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper via yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper via yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [6, 6], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID));
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID)); // to gain skill shot 1
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID)); // to select skill shot 1
            await user.click(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID)); // should do nothing
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_56_FEATURE_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_56_FEATURE_ID).style.left);
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.OVERRIDE_DIE_WITH_SKILL_SHOT_ALERT);
            //#endregion
        });
    });
    describe('when ending the game', () => {
        it('should display the game over message in the alert tray', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // go to drain to go from round 1 to round 2
                [1, 1], // go to drain to go from round 2 to round 3
                [1, 1], // go to drain to end the game
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 1
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 2
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 3
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeInTheDocument()
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID)).toBeInTheDocument()
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual("Game over!");
            //#endregion
        });
        it('should hide both balls', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // go to drain to go from round 1 to round 2
                [1, 1], // go to drain to go from round 2 to round 3
                [1, 1], // go to drain to end the game
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 1
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 2
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 3
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.BALL1_ID)).not.toBeVisible();
            expect(screen.getByTitle(constants.BALL2_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.BALL2_ID)).not.toBeVisible();
            //#endregion
        });
        it('should keep boxes filled in', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // go to drain to go from round 1 to round 2
                [1, 1], // go to drain to go from round 2 to round 3
                [1, 1], // go from start to ferris wheel car 12
                [2, 2], // go to red flipper via red inlane
                [1, 1], // go to drain to end the game
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 1
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 2
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 3
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.RED_INLANE_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            //#endregion
        });
        it('should maintain score and nudges used', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // go to drain to go from round 1 to round 2
                [1, 1], // go to drain to go from round 2 to round 3
                [2, 2], // nudge up 1 to 3 and move from start to bumper 34 via 1st 3 (worth 1 point)
                [1, 6], // avoid tilt and then go to drain to end the game
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 1
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 2
            await user.click(screen.getByTitle(constants.DIE1_NUDGE_UP_BUTTON_ID)); // nudge die1 from 2 to 3
            await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 3
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.NUDGES_USED_PARAGRAPH_ID).innerHTML).toEqual("Nudges Used: 1");
            //#endregion
        });
        it('should not roll the dice after ending the game', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // move from start to drain to end round 1/3
                [1, 1], // move from start to drain to end round 2/3
                [3, 3], // move from start to drain to end round 3/3
                [1, 1], // final roll which should not be reached
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("3");
            expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("3");
            //#endregion
        });
    });
});
