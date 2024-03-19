import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "../src/app/Game";
import * as constants from "../src/app/constants";
import * as utilities from "../src/app/utilities";

describe("Game", () => {
    describe('when loading the game', () => {
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
        it('should render ball 1 as visible at START_BOX_ID', () => {
            //#region arrange
            render(<Game />);
            //#endregion
            //#region act
            // not applicable
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
            expect(screen.getByTitle(constants.BALL1_ID)).toBeVisible();
            //#endregion
        });
        it('should render ball 2 as hidden at DRAIN_BOX_ID', () => {
            //#region arrange
            render(<Game />);
            //#endregion
            //#region act
            // not applicable
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL2_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.BALL2_ID).style.top).toEqual(screen.getByTitle(constants.DRAIN_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL2_ID).style.left).toEqual(screen.getByTitle(constants.DRAIN_BOX_ID).style.left);
            expect(screen.getByTitle(constants.BALL2_ID)).not.toBeVisible();
            //#endregion
        });
        it('should render the alert tray as hidden', () => {
            //#region arrange
            render(<Game />);
            //#endregion
            //#region act
            // not applicable
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
        it('should render bonus indicator components with BONUS_INDICATOR_INACTIVE_BORDER_COLOR borders', async () => {
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
        it('should render the outlane bonus box as unfilled', async () => {
            //#region arrange
            render(<Game />);
            //#endregion
            //#region act
            // not applicable
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.OUTLANE_BONUS_BOX_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.OUTLANE_BONUS_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
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
    describe('when attempting to move the only ball to boxes that can receive on one of the dice values', () => {
        it('should be able to move from start to ferris wheel car 12 and fill it in on a roll of {1, 1}', async () => {
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
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.left);
            //#endregion
        });
        it('should be able to move from start to ferris wheel car 12 and fill it in on a roll of {2, 2}', async () => {
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
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.left);
            //#endregion
        });
        it('should be able to move from start to ferris wheel car 12 and fill it in on a roll of {1, 4}', async () => {
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
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.left);
            //#endregion
        });
        it('should be able to move from start to ferris wheel car 12 and fill it in on a roll of {4, 1}', async () => {
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
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.left);
            //#endregion
        });
    });
    describe('when attempting to move the only ball from start to boxes that can receive from start', () => {
        //#region ferris wheel cars
        it('should be able to move from start to ferris wheel car 12, fill the box, and award 0 points, all on a roll of {1, 2}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(0);
            //#endregion
        });
        it('should be able to move from start to ferris wheel car 34, fill the box, and award 0 points, all on a roll of {3, 4}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(0);
            //#endregion
        });
        it('should be able to move from start to ferris wheel car 56, fill the box, and award 0 points, all on a roll of {5, 6}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(0);
            //#endregion
        });
        //#endregion
        //#region bumpers
        it('should be able to move from start to bumper 12 1st 1, fill the box, and award 1 point, all on a roll of {1, 1}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to bumper 12 2nd 1, fill the box, and award 1 point, on a roll of {1, 1}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_12_2ND_1_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_2ND_1_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_2ND_1_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to bumper 12 1st 2, fill the box, and award 1 point, all on a roll of {2, 2}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to bumper 12 2nd 2, fill the box, and award 1 point, all on a roll of {2, 2}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_12_2ND_2_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_2ND_2_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_2ND_2_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to bumper 34 1st 3, fill the box, and award 1 point, all on a roll of {3, 3}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to bumper 34 2nd 3, fill the box, and award 1 point, all on a roll of {3, 3}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_34_2ND_3_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_34_2ND_3_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_34_2ND_3_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to bumper 34 1st 4, fill the box, and award 1 point, all on a roll of {4, 4}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_34_1ST_4_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_34_1ST_4_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_34_1ST_4_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to bumper 34 2nd 4, fill the box, and award 1 point, all on a roll of {4, 4}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_34_2ND_4_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_34_2ND_4_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_34_2ND_4_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to bumper 56 1st 5, fill the box, and award 1 point, all on a roll of {5, 5}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to bumper 56 2nd 5, fill the box, and award 1 point, all on a roll of {5, 5}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_56_2ND_5_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_56_2ND_5_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_56_2ND_5_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to bumper 56 1st 6, fill the box, and award 1 point, all on a roll of {6, 6}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to bumper 56 2nd 6, fill the box, and award 1 point, all on a roll of {6, 6}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_56_2ND_6_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_56_2ND_6_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_56_2ND_6_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        //#endregion
        //#region drop targets
        it('should be able to move from start to yel droptarget 12, fill the box, and award 1 point, all on a roll of {1, 1}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to yel droptarget 34, fill the box, and award 1 point, all on a roll of {3, 3}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to yel droptarget 56, fill the box, and award 1 point, all on a roll of {5, 5}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to red droptarget 12, fill the box, and award 1 point, all on a roll of {1, 1}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to red droptarget 3, fill the box, and award 1 point, all on a roll of {3, 3}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to red droptarget 4, fill the box, and award 1 point, all on a roll of {4, 4}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should be able to move from start to red droptarget 56, fill the box, and award 1 point, all on a roll of {5, 5}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        //#endregion
        //#region flippers
        it('should be able to move from start to the red inlane, fill the box, and award 2 points, all on a roll of {2, 2}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_INLANE_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_INLANE_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_INLANE_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(2);
            //#endregion
        });
        it('should be able to move from start to red flipper box 3, fill the box, and award 0 points, all on a roll of {3, 3}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(0);
            //#endregion
        });
        it('should be able to move from start to red flipper box 45, fill the box, and award 0 points, all on a roll of {4, 4}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(0);
            //#endregion
        });
        it('should be able to move from start to red flipper box 6, fill the box, and award 0 points, all on a roll of {6, 6}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(0);
            //#endregion
        });
        it('should be able to move from start to the yel inlane, fill the box, and award 2 points, all on a roll of {5, 5}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_INLANE_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_INLANE_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_INLANE_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(2);
            //#endregion
        });
        it('should be able to move from start to yel flipper box 1, fill the box, and award 0 points, all on a roll of {1, 1}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(0);
            //#endregion
        });
        it('should be able to move from start to yel flipper box 23, fill the box, and award 0 points, all on a roll of {2, 3}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(0);
            //#endregion
        });
        it('should be able to move from start to yel flipper box 4, fill the box, and award 0 points, all on a roll of {4, 4}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(0);
            //#endregion
        });
        //#endregion
        //#region outlanes and drain
        it('should be able to click on the red outlane, move the ball back to start, and award 0 points, all on a roll of {1, 1}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(0);
            //#endregion
        });
        it('should be able to click on the yel outlane, move the ball back to start, and award 0 points, all on a roll of {6, 6}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(0);
            //#endregion
        });
        it('should be able to click on the drain box, move the ball back to start, and award 0 points, all on a roll of {3, 4}', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
            expect(pointsAwarded).toEqual(0);
            //#endregion
        });
        //#endregion
    });
    describe('when attempting to move the only ball to a hammer space', () => {
        it('should be able to move from red flipper to hammer space 1, fill the box, and award 0 points, all on a roll of {1, 1}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3], // move from start to red flipper box 3
                [1, 1], // move to hammer space 1
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID));
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.left);
            expect(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(pointsAwarded).toEqual(0);
            //#endregion
        });
        it('should be able to move to each hammer space in the correct order and award the correct number of points each time', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2], // move from start to red inlane
                [1, 1], // move to hammer space 1 (+0)
                [3, 3], // move to red flipper box 3
                [2, 2], // move to hammer space 2 (+1)
                [4, 4], // move to red flipper box 45
                [3, 3], // move to hammer space 3 (+1)
                [6, 6], // move to red flipper box 6
                [4, 4], // move to hammer space 4 (+2)
                [1, 1], // move to drain box since all boxes for red flipper are filled
                [2, 2], // move from start to red inlane
                [5, 5], // move to hammer space 5 (+5)
                [3, 3], // move to red flipper box 3
                [6, 6], // move to hammer space 6 (+20)
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            let prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML)
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID));
            const pointsAwardedForHammerSpace1 = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID));
            const pointsAwardedForHammerSpace2 = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_3_BOX_ID));
            const pointsAwardedForHammerSpace3 = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_4_BOX_ID));
            const pointsAwardedForHammerSpace4 = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_5_BOX_ID));
            const pointsAwardedForHammerSpace5 = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_6_BOX_ID));
            const pointsAwardedForHammerSpace6 = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.HAMMER_SPACE_6_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.HAMMER_SPACE_6_BOX_ID).style.left);
            expect(pointsAwardedForHammerSpace1).toEqual(0);
            expect(pointsAwardedForHammerSpace2).toEqual(1);
            expect(pointsAwardedForHammerSpace3).toEqual(1);
            expect(pointsAwardedForHammerSpace4).toEqual(2);
            expect(pointsAwardedForHammerSpace5).toEqual(5);
            expect(pointsAwardedForHammerSpace6).toEqual(20);
            //#endregion
        });
        it('should have an alert and no other change when attempting to go out of sequence', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3], // move from start to red flipper box 3
                [1, 1], // move to hammer space 1
                [4, 5], // move to red flipper box 45
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual("You must fill in the hammer spaces in sequence from 1 to 6!");
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID).style.left);
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("6");
            expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("6");
            expect(pointsAwarded).toEqual(0);
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
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.INVALID_CHOICE_ALERT);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML).toEqual("0");
            //#endregion
        });
    });
    describe('when attempting to make a valid move after attempting to make an invalid move', () => {
        it('should allow the user to make the valid move, hide the alert for the previous invalid move attempt, and award the relevant points', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3], // eventually move to bumper 34 1st 3
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID)).toBeInTheDocument();
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID)).not.toBeVisible();
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID).style.left);
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("1");
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
    });
    describe('when clicking on an already filled-in box', () => {
        it('should not move the ball and should maintain score and dice values', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2], // move from start to bumper 12 1st 2 box (+1)
                [4, 4], // move to yel flipper box 4
                [2, 2], // attempt to select bumper 12 1st 2 box
                [1, 1], // final roll which should not be reached
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID));
            let prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(pointsAwarded).toEqual(0);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID).style.left);
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
                [DIE1_1ST_VALUE, DIE2_1ST_VALUE],
                // nudge die 1 (=2) down to 1
                // attempt to move to the red outlane
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
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
            expect(Number(screen.getByTitle(constants.DIE1_ID).innerHTML)).toEqual(Number(DIE1_1ST_VALUE) - 1); // was nudged
            expect(Number(screen.getByTitle(constants.DIE2_ID).innerHTML)).toEqual(Number(DIE2_1ST_VALUE));
            //#endregion
        });
    });
    describe('when attempting to make a valid move after attempting to nudge into an outlane', () => {
        it('should remove the alert', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2],
                // nudge die1 (=2) down to 1
                // attempt to move to the red outlane
                // nudge die1 (=1) up to 2
                // move to ferris wheel car 12
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
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.left);
            //#endregion
        });
    });
    describe('when validly nudging down die 1 to move the only ball', () => {
        it('should increment nudges used, award points, and not end the round when avoiding tilting', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2],
                // nudge die 1 (=2) down to 1
                // move to bumper 12 1st 1 box
                [1, 6], // final roll that avoids tilting
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DIE1_NUDGE_DN_BUTTON_ID));
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID).style.left);
            expect(screen.getByTitle(constants.NUDGES_USED_PARAGRAPH_ID).innerHTML).toEqual("Nudges Used: 1");
            expect(pointsAwarded).toEqual(1);
            expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).not.toBeVisible();
            //#endregion
        });
        it('should increment nudges used, award points, show message, and end the round when tilting', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3],
                // nudge die 1 (=3) down to 2
                // move from start to red inlane
                [6, 6], // roll that causes tilt
                [1, 1], // final roll post-tilt
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DIE1_NUDGE_DN_BUTTON_ID));
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
            expect(screen.getByTitle(constants.BALL1_ID).style.borderColor).toEqual(constants.BALL_SELECTED_BORDER_COLOR);
            expect(screen.getByTitle(constants.NUDGES_USED_PARAGRAPH_ID).innerHTML).toEqual("Nudges Used: 1");
            expect(pointsAwarded).toEqual(2);
            expect(screen.getByTitle(constants.RED_INLANE_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual("Tilted on {6, 6}!");
            expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).toBeVisible();
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("1");
            //#endregion
        });
    });
    describe('when validly nudging up die 1 to move the only ball', () => {
        it('should increment nudges used, award points, and not end the round when avoiding tilting', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2],
                // nudge die 1 (=2) up to 3
                // move from start to bumper 34 1st 3 box
                [1, 6], // final roll that avoids tilting
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DIE1_NUDGE_UP_BUTTON_ID));
            await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID).style.left);
            expect(screen.getByTitle(constants.NUDGES_USED_PARAGRAPH_ID).innerHTML).toEqual("Nudges Used: 1");
            expect(pointsAwarded).toEqual(1);
            expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).not.toBeVisible();
            //#endregion
        });
        it('should increment nudges used, award points, show message, and end the round when tilting', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2],
                // nudge die 1 (=2) up to 3
                // move from start to bumper 34 1st 3 box
                [6, 6], // roll that causes tilt
                [1, 1], // final roll post-tilt
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DIE1_NUDGE_UP_BUTTON_ID));
            await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
            expect(screen.getByTitle(constants.BALL1_ID).style.borderColor).toEqual(constants.BALL_SELECTED_BORDER_COLOR);
            expect(screen.getByTitle(constants.NUDGES_USED_PARAGRAPH_ID).innerHTML).toEqual("Nudges Used: 1");
            expect(pointsAwarded).toEqual(1);
            expect(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual("Tilted on {6, 6}!");
            expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).toBeVisible();
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("1");
            //#endregion
        });
    });
    describe('when validly nudging down die 2 to move the only ball', () => {
        it('should increment nudges used, award points, and not end the round when avoiding tilting', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2],
                // nudge die 2 (=2) down to 1
                // move from start to bumper 12 1st 1 box
                [1, 6], // final roll that avoids tilting
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DIE2_NUDGE_DN_BUTTON_ID));
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID).style.left);
            expect(screen.getByTitle(constants.NUDGES_USED_PARAGRAPH_ID).innerHTML).toEqual("Nudges Used: 1");
            expect(pointsAwarded).toEqual(1);
            expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).not.toBeVisible();
            //#endregion
        });
        it('should increment nudges used, award points, show message, and end the round when tilting', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3],
                // nudge die 2 (=3) down to 2
                // move from start to the red inlane
                [6, 6], // roll that causes tilt
                [1, 1], // final roll post-tilt
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DIE2_NUDGE_DN_BUTTON_ID));
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
            expect(screen.getByTitle(constants.BALL1_ID).style.borderColor).toEqual(constants.BALL_SELECTED_BORDER_COLOR);
            expect(screen.getByTitle(constants.NUDGES_USED_PARAGRAPH_ID).innerHTML).toEqual("Nudges Used: 1");
            expect(pointsAwarded).toEqual(2);
            expect(screen.getByTitle(constants.RED_INLANE_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual("Tilted on {6, 6}!");
            expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).toBeVisible();
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("1");
            //#endregion
        });
    });
    describe('when validly nudging up die 2 to move the only ball', () => {
        it('should increment nudges used, award points, and not end the round when avoiding tilting', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2],
                // nudge die 2 (=2) up to 3
                // move from start to bumper 34 1st 3 box
                [1, 6], // final roll that avoids tilting
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DIE2_NUDGE_UP_BUTTON_ID));
            await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID).style.left);
            expect(screen.getByTitle(constants.NUDGES_USED_PARAGRAPH_ID).innerHTML).toEqual("Nudges Used: 1");
            expect(pointsAwarded).toEqual(1);
            expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).not.toBeVisible();
            //#endregion
        });
        it('should increment nudges used, award points, show message, and end the round when tilting', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2],
                // nudge die 2 (=2) up to 3
                // move from start to bumper 34 1st 3 box
                [6, 6], // roll that causes tilt
                [1, 1], // final roll post-tilt
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DIE2_NUDGE_UP_BUTTON_ID));
            await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
            expect(screen.getByTitle(constants.BALL1_ID).style.borderColor).toEqual(constants.BALL_SELECTED_BORDER_COLOR);
            expect(screen.getByTitle(constants.NUDGES_USED_PARAGRAPH_ID).innerHTML).toEqual("Nudges Used: 1");
            expect(pointsAwarded).toEqual(1);
            expect(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual("Tilted on {6, 6}!");
            expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).toBeVisible();
            expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("1");
            //#endregion
        });
    });
    describe('when ending a round but not the game', () => {
        it('should clear a dashed box', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // move from start to yel flipper box 1
                [1, 1], // move to drain box
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            //#endregion
        });
        it('should not clear a solid-lined box', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // move from start to bumper 12 1st 1 box
                [1, 1], // move to drain box
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            //#endregion
        });
        it('should not clear a double-lined box', async () => {
            //#region arrange
            const DIE_VALUES = [
                [5, 6], // move from start to yel drop target 56
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel drop target 34
                [2, 3], // move to yel flipper box 23
                [1, 2], // move to yel drop target 12
                // select flipper pass
                [1, 6], // move to drain box
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID));
            await user.click(screen.getByTitle(constants.FLIPPER_PASS_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FLIPPER_PASS_BONUS_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            //#endregion
        });
        it('should make the indicators for rounds 1 and 2 visible in round 2 while keeping the round 3 indicator hidden', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // move from start to drain box to end round 1
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
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
                [1, 1], // move from start to drain box to end round 1
                [1, 1], // move from start to drain box to end round 2
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ROUND_1_INDICATOR_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ROUND_3_INDICATOR_ID)).toBeVisible();
            //#endregion
        });
        it('should award 2 points when using the red outlane and one red flipper box has been filled', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(2);
            //#endregion
        });
        it('should award 4 points when using the red outlane and two red flipper boxes have been filled', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(4);
            //#endregion
        });
        it('should award 6 points when using the red outlane and three red flipper boxes have been filled', async () => {
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(6);
            //#endregion
        });
        it('should award 0 points when using the red outlane after the inlane but no red flipper boxes have been filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2], // move from start to red inlane (worth 2 points)
                [1, 1], // move to red outlane
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_OUTLANE_BOX_ID));
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(2);
            //#endregion
        });
        it('should award 2 points when using the yel outlane and one yel flipper box has been filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // move from start to yel flipper box 1
                [6, 6], // move to yel outlane
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID));
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(2);
            //#endregion
        });
        it('should award 4 points when using the yel outlane and two yel flipper boxes have been filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // move from start to yel flipper box 1
                [2, 3], // move to yel flipper box 23
                [6, 6], // move to yel outlane
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID));
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(4);
            //#endregion
        });
        it('should award 6 points when using the yel outlane and three yel flipper boxes have been filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // move from start to yel flipper box 1
                [2, 3], // move to yel flipper box 23
                [4, 4], // move to yel flipper box 4
                [6, 6], // move to yel outlane
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
            const pointsAwarded = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(6);
            //#endregion
        });
        it('should award 0 points when using the yel outlane after the inlane but no yel flipper boxes have been filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [5, 5], // move from start to yel inlane (worth 2 points)
                [6, 6], // move to yel outlane
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_INLANE_BOX_ID));
            const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(0);
            //#endregion
        });
        it('should maintain gained skill shots', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
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
        it('should deactivate the flipper pass indicator if it is active', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56
                // select flipper pass bonus
                [1, 1], // move to the drain
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
            await user.click(screen.getByTitle(constants.FLIPPER_PASS_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FLIPPER_PASS_INDICATOR_ID).style.borderColor).toEqual(constants.BONUS_INDICATOR_INACTIVE_BORDER_COLOR);
            //#endregion
        });
        it('should deactivate the bumper bonus indicator if it is active', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56
                // select bumper bonus
                [1, 6], // move to drain
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
            await user.click(screen.getByTitle(constants.BUMPER_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_BONUS_INDICATOR_ID).style.borderColor).toEqual(constants.BONUS_INDICATOR_INACTIVE_BORDER_COLOR);
            //#endregion
        });
        it('should deactivate the outlane bonus indicator if it is active', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56
                // select outlane bonus
                [1, 6], // move to drain
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
            await user.click(screen.getByTitle(constants.OUTLANE_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.OUTLANE_BONUS_INDICATOR_ID).style.borderColor).toEqual(constants.BONUS_INDICATOR_INACTIVE_BORDER_COLOR);
            //#endregion
        });
        it('should award 12 points when using the red outlane and three red flipper boxes have been filled and the outlane bonus is active', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 6
                // select outlane bonus
                [1, 1], // move to red outlane
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
            await user.click(screen.getByTitle(constants.OUTLANE_BONUS_BOX_ID));
            const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.RED_OUTLANE_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(12);
            //#endregion
        });
        it('should award 12 points when using the yel outlane and three yel flipper boxes have been filled and the outlane bonus is active', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red droptarget 12
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red droptarget 3
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red droptarget 4
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red droptarget 56
                // select outlane bonus
                [1, 1], // move to yel flipper box 1
                [2, 3], // move to yel flipper box 23
                [4, 4], // move to yel flipper box 4
                [6, 6], // move to drain via yel outlane
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
            await user.click(screen.getByTitle(constants.OUTLANE_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID));
            const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(12);
            //#endregion
        });
    });
    describe('when filling all boxes in the ferris wheel group', () => {
        it('should clear all boxes in the ferris wheel group and display the skill shot alert', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
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
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [3, 4],
                // attempt to move to bumper 34 1st 3 box
                // attempt to move to bumper 34 1st 4 box
                // attempt to move to red drop target 3
                // attempt to move to red drop target 4
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
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID).style.left);
            //#endregion
        });
        it('should allow a skill shot to be gained', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                // gain skill shot 1
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
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_GAINED_BORDER_COLOR);
            //#endregion
        });
        it('should clear the alert paragraph and hide the alert tray after gaining a skill shot', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                // gain skill shot 1
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
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                // gain skill shot 1
                // attempt to gain skill shot 2
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
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                // gain skill shot 1
                [1, 1], // move to drain
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                // gain skill shot 6
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
        it('should do nothing if clicking on an already gained skill shot when otherwise validly attempting to gain a 2nd skill shot', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                // gain skill shot 1
                [1, 1], // move to drain
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                // attempt to gain already-gain skill shot 1
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
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                // gain skill shot 1
                [1, 1], // move to drain
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                // click on already-gained skill shot 1
                // gain skill shot 6
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
                [1, 1], // move from start to bumper 12 1st 1 box
                [3, 3], // move to bumper 34 1st 3 box
                [5, 5], // move to bumper 56 1st 5 box
                [1, 1], // move to bumper 12 2nd 1 box
                [3, 3], // move to bumper 34 2nd 3 box
                [5, 5], // move to bumper 56 2nd 5 box
                [2, 2], // move to bumper 12 1st 2 box
                [4, 4], // move to bumper 34 1st 4 box
                [6, 6], // move to bumper 56 1st 6 box
                [2, 2], // move to bumper 12 2nd 2 box
                [4, 4], // move to bumper 34 2nd 4 box
                [6, 6], // move to bumper 56 2nd 6 box
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
        it('should clear all boxes in the yel drop targets group', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
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
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
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
        it('should allow the user to select the flipper pass bonus', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
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
            await user.click(screen.getByTitle(constants.FLIPPER_PASS_BONUS_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FLIPPER_PASS_BONUS_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual("");
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
            expect(screen.getByTitle(constants.FLIPPER_PASS_INDICATOR_ID).style.borderColor).toEqual(constants.BONUS_INDICATOR_ACTIVE_BORDER_COLOR);
            //#endregion
        });
        it('should allow the user to select the fill 2 hammer spaces bonus', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56
                // select fill two hammer spaces bonus
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
            await user.click(screen.getByTitle(constants.FILL_TWO_HAMMER_SPACES_BONUS_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.FILL_TWO_HAMMER_SPACES_BONUS_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            //#endregion
        });
        it('should allow the user to activate multiball with ball1 via the yel multiball bonus and deselect the activating ball', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56
                // select yel multiball bonus
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
            await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL2_ID)).toBeVisible();
            expect(screen.getByTitle(constants.BALL2_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL2_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
            expect(screen.getByTitle(constants.BALL1_ID).style.borderColor).toEqual(constants.BALL_AVAILABLE_BORDER_COLOR);
            //#endregion
        });
        it('should allow the user to select 2 bonus points and be awarded those 2 bonus points', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12 (+1)
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34 (+1)
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56 (+1)
                // select yellow bonus points (+2)
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
            const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.YEL_BONUS_POINTS_BONUS_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(2);
            //#endregion
        });
        it('should allow the user to select 2 bonus points and be awarded those 2 bonus points a 2nd time', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12 (+1)
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34 (+1)
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56 (+1)
                // select yellow bonus points (+2)
                [1, 1], // move to drain
                [1, 2], // move from start to yel droptarget 12 (+1)
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34 (+1)
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56 (+1)
                // select yellow bonus points again (+2)
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
            await user.click(screen.getByTitle(constants.YEL_BONUS_POINTS_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID));
            const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.YEL_BONUS_POINTS_BONUS_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(2);
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
            //#endregion
        });
        it('should ignore all other clicks before the user chooses a yellow bonus', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56
                [2, 5], // roll after filling all yel drop targets
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
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID)); // would change the alert paragraph if not ignored
            await user.click(screen.getByTitle(constants.RED_OUTLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID).style.left);
            expect(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.RED_OUTLANE_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(utilities.alertMessageForChoosingABonus("yellow"));
            //#endregion
        });
        it('should allow the user to move after choosing a yellow bonus', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56
                [5, 5], // move to yel inlane after choosing flipper pass
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
            await user.click(screen.getByTitle(constants.FLIPPER_PASS_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_INLANE_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_INLANE_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_INLANE_BOX_ID).style.left);
            expect(screen.getByTitle(constants.YEL_INLANE_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            //#endregion
        });
        it('should not allow the user to select a red bonus', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56
                // attempt to select red bonus
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
            await user.click(screen.getByTitle(constants.BUMPER_BONUS_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(utilities.alertMessageForChoosingABonus("yellow"));
            expect(screen.getByTitle(constants.BUMPER_BONUS_INDICATOR_ID).style.borderColor).toEqual(constants.BONUS_INDICATOR_INACTIVE_BORDER_COLOR);
            //#endregion
        });
    });
    describe('when filling all boxes in the red drop targets group', () => {
        it('should clear all boxes in the red droptargets group', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red droptarget 12
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red droptarget 3
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red droptarget 4
                [6, 6], // move to red flipper box 6
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
        it('should prompt the user to select a red bonus', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56
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
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(utilities.alertMessageForChoosingABonus("red"));
            //#endregion
        });
        it('should allow the user to select the bumper bonus', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56
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
            await user.click(screen.getByTitle(constants.BUMPER_BONUS_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BUMPER_BONUS_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual("");
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
            expect(screen.getByTitle(constants.BUMPER_BONUS_INDICATOR_ID).style.borderColor).toEqual(constants.BONUS_INDICATOR_ACTIVE_BORDER_COLOR);
            //#endregion
        });
        it('should allow the user to select the outlane bonus', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56
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
            await user.click(screen.getByTitle(constants.OUTLANE_BONUS_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.OUTLANE_BONUS_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual("");
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
            expect(screen.getByTitle(constants.OUTLANE_BONUS_INDICATOR_ID).style.borderColor).toEqual(constants.BONUS_INDICATOR_ACTIVE_BORDER_COLOR);
            //#endregion
        });
        it('should allow the user to activate multiball with ball1 via the red multiball bonus and deselect the activating ball', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56
                // select red multiball bonus
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
            await user.click(screen.getByTitle(constants.RED_MULTIBALL_BONUS_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.RED_MULTIBALL_BONUS_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.BALL2_ID)).toBeVisible();
            expect(screen.getByTitle(constants.BALL2_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL2_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
            expect(screen.getByTitle(constants.BALL1_ID).style.borderColor).toEqual(constants.BALL_AVAILABLE_BORDER_COLOR);
            //#endregion
        });
        it('should allow the user to select gaining 3 bonus points and award those 3 points', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12 (+1)
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3 (+1)
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4 (+1)
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56 (+1)
                // select red bonus points (+3)
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
            const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.RED_BONUS_POINTS_BONUS_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(3);
            //#endregion
        });
        it('should allow the user to select gaining 3 bonus points and award those 3 points a 2nd time', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12 (+1)
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3 (+1)
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4 (+1)
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56 (+1)
                // select red bonus points (+3)
                [1, 1], // move to drain
                [1, 2], // move from start to red drop target 12 (+1)
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3 (+1)
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4 (+1)
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56 (+1)
                // select red bonus points again (+3)
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
            await user.click(screen.getByTitle(constants.RED_BONUS_POINTS_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID));
            const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.RED_BONUS_POINTS_BONUS_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(3);
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
            //#endregion
        });
        it('should ignore all other clicks before the user chooses a red bonus', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56
                [1, 1], // final roll which should not be used to move
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
            await user.click(screen.getByTitle(constants.YEL_INLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID)); // would change the alert text if not ignored
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID).style.left);
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(utilities.alertMessageForChoosingABonus("red"));
            expect(screen.getByTitle(constants.YEL_INLANE_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.RED_INLANE_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            //#endregion
        });
        it('should allow the user to move after choosing a red bonus', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56
                [2, 3], // move to yel flipper box 23 after choosing a red bonus
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
            await user.click(screen.getByTitle(constants.BUMPER_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID).style.left);
            expect(screen.getByTitle(constants.BUMPER_BONUS_INDICATOR_ID).style.borderColor).toEqual(constants.BONUS_INDICATOR_ACTIVE_BORDER_COLOR);
            //#endregion
        });
        it('should not allow the user to select a yellow bonus', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56
                // attempt to select flipper pass
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
            await user.click(screen.getByTitle(constants.FLIPPER_PASS_BONUS_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(utilities.alertMessageForChoosingABonus("red"));
            expect(screen.getByTitle(constants.FLIPPER_PASS_INDICATOR_ID).style.borderColor).toEqual(constants.BONUS_INDICATOR_INACTIVE_BORDER_COLOR);
            //#endregion
        });
    });
    describe('when filling all hammer space boxes', () => {
        it('should clear all hammer space boxes', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2], // move from start to red inlane
                [1, 1], // move to hammer space 1
                [3, 3], // move to red flipper box 3
                [2, 2], // move to hammer space 2
                [4, 4], // move to red flipper box 45
                [3, 3], // move to hammer space 3
                [6, 6], // move to red flipper box 6
                [4, 4], // move to hammer space 4
                [1, 1], // move to drain since all boxes for the red flipper are filled
                [2, 2], // move from start to red inlane
                [5, 5], // move to hammer space 5
                [3, 3], // move to red flipper box 3
                [6, 6], // move to hammer space 6
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
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
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
        it('should change the selected die, die 1, not show an alert, and make the used skill shot available, all after overriding a die', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
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
        it('should change the selected die, die 1, not show an alert, and make the used skill shot available, all after overriding a die', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [6, 6], // final roll on whose turn die 2 will be overridden
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
            await user.click(screen.getByTitle(constants.DIE2_ID)); // override die 2 (=6) with 1
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("1");
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
            expect(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID).style.borderColor).toEqual(constants.SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR);
            //#endregion
        });
        it('should allow the user to move with the skill shot', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
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
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID).style.left);
            //#endregion
        });
        it('should allow the user to move after nudging a skill shot', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
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
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID).style.left);
            //#endregion
        });
        it('should allow the user to deselect a skill shot if they have not overridden a die yet', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to ferris wheel car 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to ferris wheel car 56
                [6, 6], // final roll that should neither be overridden nor used to move
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
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to ferris wheel car 34
                [2, 3], // move to yel flipper box 23
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
            await user.click(screen.getByTitle(constants.SKILL_SHOT_BOX_1_ID)); // to gain skill shot 1
            await user.click(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID)); // should do nothing
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID).style.left);
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.OVERRIDE_DIE_WITH_SKILL_SHOT_ALERT);
            //#endregion
        });
    });
    describe('when the flipper pass is active', () => {
        it('should allow the user to move from the yel flipper to a hammer space', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56
                [4, 4], // move to yel flipper box 4
                [1, 1], // move to hammer space 1
                [1, 6], // final roll
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
            await user.click(screen.getByTitle(constants.FLIPPER_PASS_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.left);
            //#endregion
        });
        it('should allow the user to move from the red flipper to a ferris wheel car', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56
                [6, 6], // move to red flipper box 6
                [1, 1], // move to ferris wheel car 12
                [1, 6], // final roll
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
            await user.click(screen.getByTitle(constants.FLIPPER_PASS_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID).style.left);
            //#endregion
        });
    });
    describe('when flipper pass has been deactivated after being activated', () => {
        it('should not allow the user to move from the yel flipper to a hammer space', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56
                [1, 1], // move to drain
                [4, 4], // move from start to yel flipper box 4
                [1, 1], // attempt to move to hammer space 1
                [1, 6], // final roll
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
            await user.click(screen.getByTitle(constants.FLIPPER_PASS_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID).style.left);
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.INVALID_CHOICE_ALERT);
            //#endregion
        });
    });
    describe('when choosing to fill two hammer spaces', () => {
        it('should only fill hammer spaces 1 and 2 and award 1 additional point if no hammer spaces are filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12 (+1)
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34 (+1)
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56 (+1)
                // select fill two hammer spaces (spaces 1 + 2 = 0 + 1 = +1)
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
            const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.FILL_TWO_HAMMER_SPACES_BONUS_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_3_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_4_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_5_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_6_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should only fill hammer spaces 2 and 3 and award 2 additional points if only hammer space 1 is filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12 (+1)
                [3, 3], // move to red flipper box 3
                [1, 1], // move to hammer space 1 (+0)
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34 (+1)
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56 (+1)
                // select fill two hammer spaces (spaces 2 + 3 = 1 + 1 = +2)
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID));
            const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.FILL_TWO_HAMMER_SPACES_BONUS_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_3_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_4_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_5_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_6_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(pointsAwarded).toEqual(2);
            //#endregion
        });
        it('should only fill hammer spaces 3 and 4 and award 3 additional points if only hammer spaces 1 & 2 are filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12 (+1)
                [3, 3], // move to red flipper box 3
                [1, 1], // move to hammer space 1 (+0)
                [4, 5], // move to red flipper box 45
                [2, 2], // move to hammer space 2 (+1)
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34 (+1)
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56 (+1)
                // select fill two hammer spaces (spaces 3 + 4 = 1 + 2= +3)
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID));
            const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.FILL_TWO_HAMMER_SPACES_BONUS_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_3_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_4_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_5_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_6_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(pointsAwarded).toEqual(3);
            //#endregion
        });
        it('should only fill hammer spaces 4 and 5 and award 7 additional points if only hammer spaces 1-3 are filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12 (+1)
                [3, 3], // move to red flipper box 3
                [1, 1], // move to hammer space 1 (+0)
                [4, 5], // move to red flipper box 45
                [2, 2], // move to hammer space 2 (+1)
                [6, 6], // move to red flipper box 6
                [3, 3], // move to hammer space 3 (+1)
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34 (+1)
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56 (+1)
                // select fill two hammer spaces (spaces 4 + 5 = 2 + 5 = +7)
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_3_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID));
            const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.FILL_TWO_HAMMER_SPACES_BONUS_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_3_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_4_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_5_BOX_ID).style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_6_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(pointsAwarded).toEqual(7);
            //#endregion
        });
        it('should fill hammer spaces 5 and 6, award 25 additional points, and unfill all hammer spaces, all if only hammer spaces 1-4 are filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12 (+1)
                [3, 3], // move to red flipper box 3
                [1, 1], // move to hammer space 1 (+0)
                [4, 5], // move to red flipper box 45
                [2, 2], // move to hammer space 2 (+1)
                [6, 6], // move to red flipper box 6
                [3, 3], // move to hammer space 3 (+1)
                [2, 2], // move to red inlane (+2)
                [4, 4], // move to hammer space 4 (+2)
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34 (+1)
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56 (+1)
                // select fill two hammer spaces (spaces 5 + 6 = 5 + 20 = +25)
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_3_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_4_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID));
            const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.FILL_TWO_HAMMER_SPACES_BONUS_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_3_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_4_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_5_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(screen.getByTitle(constants.HAMMER_SPACE_6_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(pointsAwarded).toEqual(25);
            //#endregion
        });
        it('should fill hammer spaces 6 and 1, unfill other hammer spaces, and award 20 additional points, all if only hammer spaces 1-5 are filled', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12 (+1)
                [3, 3], // move to red flipper box 3
                [1, 1], // move to hammer space 1 (+0)
                [4, 5], // move to red flipper box 45
                [2, 2], // move to hammer space 2 (+1)
                [6, 6], // move to red flipper box 6
                [3, 3], // move to hammer space 3 (+1)
                [2, 2], // move to red inlane (+2)
                [4, 4], // move to hammer space 4 (+2)
                [1, 1], // move to drain
                [3, 3], // move to red flipper box 3
                [5, 5], // move to hammer space 5 (+5)
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34 (+1)
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56 (+1)
                // select fill two hammer spaces (spaces 6 + 1 = 20 + 0 = +20)
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_3_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_4_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_5_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID));
            const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.FILL_TWO_HAMMER_SPACES_BONUS_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(20);
            //#endregion
        });
    });
    describe('when activating multiball', () => {
        it('should move the drained ball, ball 1, to start even if it had entered the drain earlier in the round', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56
                // select yel multiball bonus
                [1, 2],
                // move ball 1 with die 1 (=1) to the drain via the drain box
                // move ball 2 with die 2 (=2) to red drop target 12
                [3, 3], // move ball 2 to red flipper box 3
                [3, 3], // move ball 2 to red drop target 3
                [4, 5], // move ball 2 to red flipper box 45
                [4, 4], // move ball 2 to red drop target 4
                [6, 6], // move ball 2 to red flipper box 6
                [5, 6], // move ball 2 to red drop target 56
                // select red multiball bonus
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
            await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.BALL1_ID));
            await user.click(screen.getByTitle(constants.DIE1_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_MULTIBALL_BONUS_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
            //#endregion
        });
        it('should move the drained ball, ball 2, to start even if it had entered the drain earlier in the round', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56
                // select yel multiball bonus
                [3, 2],
                // move ball 1 from yel drop target 56 with die 1 (=3) to red flipper box 3
                // move ball 2 from start with die 2 (=2) to red drop target 12
                [3, 1],
                // move ball 1 with die 1 (=3) to red drop target 3
                // move ball 2 with die 2 (=1) to the drain via the drain box
                [4, 5], // move ball 1 to red flipper box 45
                [4, 4], // move ball 1 to red drop target 4
                [6, 6], // move ball 1 to red flipper box 6
                [5, 6], // move ball 1 to red drop target 56
                // select red multiball bonus
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
            await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.BALL1_ID));
            await user.click(screen.getByTitle(constants.DIE1_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID));
            await user.click(screen.getByTitle(constants.BALL1_ID));
            await user.click(screen.getByTitle(constants.DIE1_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID));
            await user.click(screen.getByTitle(constants.RED_MULTIBALL_BONUS_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL2_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL2_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
            //#endregion
        });
    });
    describe('when multiball is active', () => {
        describe('when ball2 is clicked on', () => {
            it('should change the border color of ball2 to BALL_SELECTED_BORDER_COLOR', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL2_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.BALL2_ID).style.borderColor).toEqual(constants.BALL_SELECTED_BORDER_COLOR);
                //#endregion
            });
            describe('when ball 2 has already been moved', () => {
                it('should neither deselect ball 1 nor change border color of ball 2', async () => {
                    //#region arrange
                    const DIE_VALUES = [
                        [1, 2], // move from start to yel droptarget 12
                        [1, 1], // move to yel flipper box 1
                        [3, 4], // move to yel droptarget 34
                        [2, 3], // move to yel flipper box 23
                        [5, 6], // move to yel droptarget 56
                        // select yel multiball bonus
                        [1, 1], // final roll
                        // move ball 2 with die 1 (=1) to ferris wheel car 12
                        // attempt to select ball 2 again
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
                    await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL2_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL2_ID));
                    //#endregion
                    //#region assert
                    expect(screen.getByTitle(constants.BALL2_ID).style.borderColor).toEqual(constants.BALL_MOVED_BORDER_COLOR);
                    expect(screen.getByTitle(constants.BALL1_ID).style.borderColor).toEqual(constants.BALL_SELECTED_BORDER_COLOR);
                    //#endregion
                });
            });
        });
        describe('when ball1 is clicked on', () => {
            it('should change the border color of ball1 to BALL_SELECTED_BORDER_COLOR', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.BALL1_ID).style.borderColor).toEqual(constants.BALL_SELECTED_BORDER_COLOR);
                //#endregion
            });
            describe('when ball 1 has already been moved', () => {
                it('should neither deselect ball 2 nor change the border color of ball 1 from BALL_MOVED_BORDER_COLOR', async () => {
                    //#region arrange
                    const DIE_VALUES = [
                        [1, 2], // move from start to yel droptarget 12
                        [1, 1], // move to yel flipper box 1
                        [3, 4], // move to yel droptarget 34
                        [2, 3], // move to yel flipper box 23
                        [5, 6], // move to yel droptarget 56
                        // select yel multiball bonus
                        [3, 1], // final roll
                        // move ball 1 with die 1 (=3) to red flipper box 3
                        // attempt to select ball 1 again
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
                    await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    //#endregion
                    //#region assert
                    expect(screen.getByTitle(constants.BALL2_ID).style.borderColor).toEqual(constants.BALL_SELECTED_BORDER_COLOR);
                    expect(screen.getByTitle(constants.BALL1_ID).style.borderColor).toEqual(constants.BALL_MOVED_BORDER_COLOR);
                    //#endregion
                });
            });
        });
        describe('when die 1 is clicked on', () => {
            it('should change border color of die 1 to be DIE_SELECTED_BORDER_COLOR', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    // select die 1
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.DIE1_ID).style.borderColor).toEqual(constants.DIE_SELECTED_BORDER_COLOR);
                //#endregion
            });
            it('should do nothing if die 1 has been used this turn', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [3, 4],
                    // move ball 1 with die 1 (=3) to red flipper box 3
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.DIE1_ID).style.borderColor).toEqual(constants.DIE_USED_BORDER_COLOR);
                expect(screen.getByTitle(constants.DIE2_ID).style.borderColor).toEqual(constants.DIE_SELECTED_BORDER_COLOR);
                //#endregion
            });
        });
        describe('when die 2 is clicked on', () => {
            it('should change border color of die 2 to be DIE_SELECTED_BORDER_COLOR', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    // select die 2
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.DIE2_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.DIE2_ID).style.borderColor).toEqual(constants.DIE_SELECTED_BORDER_COLOR);
                //#endregion
            });
            it('should do nothing if die 2 has been used this turn', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [3, 4],
                    // move ball 1 with die 2 (=4) to red flipper box 45
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.DIE2_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
                await user.click(screen.getByTitle(constants.DIE2_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.DIE2_ID).style.borderColor).toEqual(constants.DIE_USED_BORDER_COLOR);
                expect(screen.getByTitle(constants.DIE1_ID).style.borderColor).toEqual(constants.DIE_SELECTED_BORDER_COLOR);
                //#endregion
            });
        });
        describe('when moving a ball', () => {
            it('should change the border color of the ball to BALL_MOVED_BORDER_COLOR', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    // select ball2
                    [1, 2], // move ball2 with die1=1 to ferris wheel car 12
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL2_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.BALL2_ID).style.borderColor).toEqual(constants.BALL_MOVED_BORDER_COLOR);
                //#endregion
            });
            it('should change the border color of the used die to DIE_USED_BORDER_COLOR', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    // select ball2
                    [1, 2], // move ball2 with die1=1 to ferris wheel car 12
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL2_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.DIE1_ID).style.borderColor).toEqual(constants.DIE_USED_BORDER_COLOR);
                //#endregion
            });
            it('should award double the points that would otherwise be awarded', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [1, 2], // move ball 2 with die 1 (=1) to bumper 12 via 1st 1 box
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL2_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
                await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
                const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore)
                //#endregion
                //#region assert
                expect(pointsAwarded).toEqual(2);
                //#endregion
            });
            it('should automatically select the non-moved ball after only one ball has been moved', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    // select ball2
                    [3, 4], // move ball2 with die1=3 to ferris wheel car 34
                    [1, 1], // final roll which should not be reached
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL2_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.BALL1_ID).style.borderColor).toEqual(constants.BALL_SELECTED_BORDER_COLOR);
                //#endregion
            });
            it('should automatically select the unused die after only one ball has been moved', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    // select ball2
                    [3, 4], // move ball 2 with die 1 (=3) to ferris wheel car 34
                    [1, 1], // final roll which should not be reached
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL2_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.DIE2_ID).style.borderColor).toEqual(constants.DIE_SELECTED_BORDER_COLOR);
                //#endregion
            });
            it('should not roll the dice after only one ball has been moved', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    // select ball2
                    [3, 4], // move ball2 to ferris wheel car 34
                    [1, 1], // final roll which should not be reached
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL2_ID));
                await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("3");
                expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("4");
                //#endregion
            });
            it('should roll the dice after both balls have been moved', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [3, 4],
                    // select ball 2, select die2=4, and move ball 2 to ferris wheel car 34
                    // move ball 1 with die1=3 to red flipper box 3
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL2_ID));
                await user.click(screen.getByTitle(constants.DIE2_ID));
                await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.DIE1_ID).innerHTML).toEqual("1");
                expect(screen.getByTitle(constants.DIE2_ID).innerHTML).toEqual("1");
                //#endregion
            });
            it('should change border colors of both dice to DIE_AVAILABLE_BORDER_COLOR after both balls have been moved', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [3, 4],
                    // select ball 2, select die2=4, and move ball 2 to ferris wheel car 34
                    // move ball 1 with die1=3 to red flipper box 3
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL2_ID));
                await user.click(screen.getByTitle(constants.DIE2_ID));
                await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.DIE1_ID).style.borderColor).toEqual(constants.DIE_AVAILABLE_BORDER_COLOR);
                expect(screen.getByTitle(constants.DIE2_ID).style.borderColor).toEqual(constants.DIE_AVAILABLE_BORDER_COLOR);
                //#endregion
            });
            it('should allow both balls to be moved after a previous turn in which both balls were moved', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [3, 4],
                    // select ball2 and move it with die2=4 to ferris wheel car 34
                    // move ball1 with die1=3 to red flipper box 3
                    [2, 6],
                    // select ball 1 and move it with die2=6 to bumper 56 via 1st 6 box
                    // move ball 2 with die1=2 to bumper 12 via 1st 2 box
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL2_ID));
                await user.click(screen.getByTitle(constants.DIE2_ID));
                await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE2_ID));
                await user.click(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID).style.top);
                expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID).style.left);
                expect(screen.getByTitle(constants.BALL2_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID).style.top);
                expect(screen.getByTitle(constants.BALL2_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID).style.left);
                //#endregion
            });
        });
        describe('when a ball is selected but neither die is selected', () => {
            it('should not move the ball and should alert the user to select a die', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [3, 4], // select ball 2 and attempt to move it without selecting either die
                    [1, 1], // final roll which should not be reached
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL2_ID));
                await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.BALL2_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
                expect(screen.getByTitle(constants.BALL2_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
                expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeVisible();
                expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.MULTIBALL_ONLY_BALL_IS_SELECTED_ALERT);
                //#endregion
            });
            it('should remove the alert once you select a die', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [3, 4],
                    // select ball 2 and attempt to move it without selecting either die
                    // select die1 (=3)
                    [1, 1], // final roll that should not be reached
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL2_ID));
                await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
                //#endregion
            });
        });
        describe('when a die is selected but neither ball is selected', () => {
            it('should not move either ball and should alert the user to select a ball', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [3, 4], // select die 1 (=3) and attempt to move either ball to red flipper box 3
                    [1, 1], // final roll which should not be reached
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID).style.top);
                expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID).style.left);
                expect(screen.getByTitle(constants.BALL2_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
                expect(screen.getByTitle(constants.BALL2_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
                expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeVisible();
                expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.MULTIBALL_ONLY_DIE_IS_SELECTED_ALERT);
                //#endregion
            });
            it('should remove the alert once a ball is selected', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [3, 4],
                    // select die 1 (=3) and attempt to move either ball to red flipper box 3
                    // select ball 1
                    [1, 1], // final roll which should not be reached
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
                //#endregion
            });
        });
        describe('when neither a ball nor a die is selected', () => {
            it('should not move either ball and should alert the user to select a ball and a die', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [3, 4], // attempt to move either ball with either die to red flipper box 3
                    [1, 1], // final roll which should not be reached
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID).style.top);
                expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID).style.left);
                expect(screen.getByTitle(constants.BALL2_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
                expect(screen.getByTitle(constants.BALL2_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
                expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeVisible();
                expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.MULTIBALL_NEITHER_BALL_NOR_DIE_SELECTED_ALERT);
                //#endregion
            });
            describe('when a die is then selected', () => {
                it('should change the alert to be about not having selected only a ball', async () => {
                    //#region arrange
                    const DIE_VALUES = [
                        [1, 2], // move from start to yel droptarget 12
                        [1, 1], // move to yel flipper box 1
                        [3, 4], // move to yel droptarget 34
                        [2, 3], // move to yel flipper box 23
                        [5, 6], // move to yel droptarget 56
                        // select yel multiball bonus
                        [3, 4],
                        // attempt to move to the red flipper box 3
                        // select die 1 (=3)
                        [1, 1], // final roll which should not be reached
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
                    await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                    await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    //#endregion
                    //#region assert
                    expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.MULTIBALL_ONLY_DIE_IS_SELECTED_ALERT);
                    //#endregion
                });
            });
            describe('when a ball is then selected', () => {
                it('should change the alert to be about not having selected a die', async () => {
                    //#region arrange
                    const DIE_VALUES = [
                        [1, 2], // move from start to yel droptarget 12
                        [1, 1], // move to yel flipper box 1
                        [3, 4], // move to yel droptarget 34
                        [2, 3], // move to yel flipper box 23
                        [5, 6], // move to yel droptarget 56
                        // select yel multiball bonus
                        [3, 4],
                        // attempt to move to the red flipper box 3
                        // select ball 1 (at yel drop target 56)
                        [1, 1], // final roll which should not be reached
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
                    await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                    await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    //#endregion
                    //#region assert
                    expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.MULTIBALL_ONLY_BALL_IS_SELECTED_ALERT);
                    //#endregion
                });
            });
            describe('when a ball and a die are each then selected', () => {
                it('should not show any alert', async () => {
                    //#region arrange
                    const DIE_VALUES = [
                        [1, 2], // move from start to yel droptarget 12
                        [1, 1], // move to yel flipper box 1
                        [3, 4], // move to yel droptarget 34
                        [2, 3], // move to yel flipper box 23
                        [5, 6], // move to yel droptarget 56
                        // select yel multiball bonus
                        [3, 4],
                        // attempt to move to the red flipper box 3
                        // select ball 1 (at yel drop target 56)
                        // select die 1 (=3)
                        [1, 1], // final roll which should not be reached
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
                    await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                    await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    //#endregion
                    //#region assert
                    expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
                    //#endregion
                });
                it('should allow the user to move the selected ball', async () => {
                    //#region arrange
                    const DIE_VALUES = [
                        [1, 2], // move from start to yel droptarget 12
                        [1, 1], // move to yel flipper box 1
                        [3, 4], // move to yel droptarget 34
                        [2, 3], // move to yel flipper box 23
                        [5, 6], // move to yel droptarget 56
                        // select yel multiball bonus
                        [3, 4],
                        // attempt to move to the red flipper box 3
                        // move ball 1 with die 1 (=3) to the red flipper box 3
                        [1, 1], // final roll that should not be reached
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
                    await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                    await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                    //#endregion
                    //#region assert
                    expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID).style.top);
                    expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID).style.left);
                    //#endregion
                });
            });
        });
        describe('when only one ball has been moved', () => {
            it('should ignore clicks on the moved ball', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [3, 4],
                    // select ball 2 and move it with die 1 (=3) to ferris wheel car 34
                    // attempt to select ball 2 again without having moved ball 1
                    [1, 1], // final roll which should not be reached
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL2_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL2_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.BALL2_ID).style.borderColor).toEqual(constants.BALL_MOVED_BORDER_COLOR);
                expect(screen.getByTitle(constants.BALL1_ID).style.borderColor).toEqual(constants.BALL_SELECTED_BORDER_COLOR);
                //#endregion
            });
        });
        describe('when moving a ball to the drain', () => {
            describe('when moving a ball to the drain with the first move', () => {
                it('should not end the round', async () => {
                    //#region arrange
                    const DIE_VALUES = [
                        [1, 2], // move from start to yel droptarget 12
                        [1, 1], // move to yel flipper box 1
                        [3, 4], // move to yel droptarget 34
                        [2, 3], // move to yel flipper box 23
                        [5, 6], // move to yel droptarget 56
                        // select yel multiball bonus
                        [3, 4],
                        // select ball 2 and move it with die 1 (=3) to the drain via the drain box
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
                    await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL2_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
                    //#endregion
                    //#region assert
                    expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).not.toBeVisible();
                    expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID).style.top);
                    expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID).style.left);
                    //#endregion
                });
            });
            describe('when moving a ball to the drain with the second move', () => {
                it('should not end the round', async () => {
                    //#region arrange
                    const DIE_VALUES = [
                        [1, 2], // move from start to yel droptarget 12
                        [1, 1], // move to yel flipper box 1
                        [3, 4], // move to yel droptarget 34
                        [2, 3], // move to yel flipper box 23
                        [5, 6], // move to yel droptarget 56
                        // select yel multiball bonus
                        [3, 4],
                        // select ball 1 and move it with die 1 (=3) to the red flipper box 3
                        // move ball 2 with die 2 (=4) to the drain via the drain box
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
                    await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                    await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
                    //#endregion
                    //#region assert
                    expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).not.toBeVisible();
                    expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID).style.top);
                    expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID).style.left);
                    //#endregion
                });
            });
            describe('when moving both balls to the drain on the same turn', () => {
                it('does end the round', async () => {
                    //#region arrange
                    const DIE_VALUES = [
                        [1, 2], // move from start to yel droptarget 12
                        [1, 1], // move to yel flipper box 1
                        [3, 4], // move to yel droptarget 34
                        [2, 3], // move to yel flipper box 23
                        [5, 6], // move to yel droptarget 56
                        // select yel multiball bonus
                        [3, 4],
                        // select ball 1 and move it with die 1 (=3) to the drain via the drain box
                        // move ball 2 with die 2 (=4) to the drain via the drain box
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
                    await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
                    await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
                    //#endregion
                    //#region assert
                    expect(screen.getByTitle(constants.ROUND_2_INDICATOR_ID)).toBeVisible();
                    expect(screen.getByTitle(constants.BALL2_ID)).toBeVisible();
                    expect(screen.getByTitle(constants.BALL2_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
                    expect(screen.getByTitle(constants.BALL2_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
                    expect(screen.getByTitle(constants.BALL1_ID)).not.toBeVisible();
                    //#endregion
                });
            });
        });
        describe('when the red multiball bonus box is unfilled and the red drop target group is filled', () => {
            describe('when the 1st ball is the one that cleared the red drop target group', () => {
                it('should ignore clicks on the red multiball bonus box', async () => {
                    //#region arrange
                    const DIE_VALUES = [
                        [1, 2], // move from start to yel droptarget 12
                        [1, 1], // move to yel flipper box 1
                        [3, 4], // move to yel droptarget 34
                        [2, 3], // move to yel flipper box 23
                        [5, 6], // move to yel droptarget 56
                        // select yel multiball bonus
                        [3, 2],
                        // move ball 1 with die 1 (=3) to red flipper box 3
                        // move ball 2 with die 2 (=2) to red drop target 12
                        [3, 4],
                        // move ball 1 with die 1 (=3) to red drop target 3
                        // move ball 2 with die 2 (=4) to yel flipper box 4
                        [4, 1],
                        // move ball 1 with die 1 (=4) to red flipper box 45
                        // move ball 2 with die 2 (=1) to ferris wheel car 12
                        [4, 1],
                        // move ball 1 with die 1 (=4) to red drop target 4
                        // move ball 2 with die 2 (=1) to bumper 12 via 1st 1 box
                        [6, 3],
                        // move ball 1 with die 1 (=6) to red flipper box 6
                        // move ball 2 with die 2 (=3) to bumper 34 via 1st 3 box
                        [5, 5],
                        // move ball 1 with die 1 (=5) to red drop target 56
                        // attempt to select red multiball bonus
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
                    await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                    await user.click(screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID));
                    await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
                    await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID));
                    await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
                    await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID));
                    await user.click(screen.getByTitle(constants.RED_MULTIBALL_BONUS_BOX_ID));
                    //#endregion
                    //#region assert
                    expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID).style.top);
                    expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID).style.left);
                    expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(utilities.alertMessageForChoosingABonus("red"));
                    //#endregion
                });
            });
            describe('when the 1st ball was moved to the drain', () => {
                it('should allow multiball to be activated again', async () => {
                    //#region arrange
                    const DIE_VALUES = [
                        [1, 2], // move from start to yel droptarget 12
                        [1, 1], // move to yel flipper box 1
                        [3, 4], // move to yel droptarget 34
                        [2, 3], // move to yel flipper box 23
                        [5, 6], // move to yel droptarget 56
                        // select yel multiball bonus
                        [3, 2],
                        // move ball 1 with die 1 (=3) to red flipper box 3
                        // move ball 2 with die 2 (=2) to red drop target 12
                        [3, 4],
                        // move ball 1 with die 1 (=3) to red drop target 3
                        // move ball 2 with die 2 (=4) to yel flipper box 4
                        [4, 1],
                        // move ball 1 with die 1 (=4) to red flipper box 45
                        // move ball 2 with die 2 (=1) to ferris wheel car 12
                        [4, 1],
                        // move ball 1 with die 1 (=4) to red drop target 4
                        // move ball 2 with die 2 (=1) to bumper 12 via 1st 1 box
                        [6, 3],
                        // move ball 1 with die 1 (=6) to red flipper box 6
                        // move ball 2 with die 2 (=3) to bumper 34 via 1st 3 box
                        [5, 5],
                        // move ball 2 with die 2 (=5) to the drain via the drain box
                        // move ball 1 with die 1 (=5) to red drop target 56
                        // select red multiball bonus
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
                    await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                    await user.click(screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID));
                    await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
                    await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID));
                    await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
                    await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL2_ID));
                    await user.click(screen.getByTitle(constants.DIE2_ID));
                    await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
                    await user.click(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID));
                    await user.click(screen.getByTitle(constants.RED_MULTIBALL_BONUS_BOX_ID));
                    //#endregion
                    //#region assert
                    expect(screen.getByTitle(constants.BALL2_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
                    expect(screen.getByTitle(constants.BALL2_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
                    //#endregion
                });
            });
            it('should allow the red points bonus to be selected and award double points', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [3, 2],
                    // move ball 1 with die 1 (=3) to red flipper box 3
                    // move ball 2 with die 2 (=2) to red drop target 12
                    [3, 4],
                    // move ball 1 with die 1 (=3) to red drop target 3
                    // move ball 2 with die 2 (=4) to yel flipper box 4
                    [4, 1],
                    // move ball 1 with die 1 (=4) to red flipper box 45
                    // move ball 2 with die 2 (=1) to ferris wheel car 12
                    [4, 1],
                    // move ball 1 with die 1 (=4) to red drop target 4
                    // move ball 2 with die 2 (=1) to bumper 12 via 1st 1 box
                    [6, 3],
                    // move ball 1 with die 1 (=6) to red flipper box 6
                    // move ball 2 with die 2 (=3) to bumper 34 via 1st 3 box
                    [5, 5],
                    // move ball 1 with die 1 (=5) to red drop target 56
                    // attempt to select red multiball bonus
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                await user.click(screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID));
                await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
                await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID));
                await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
                await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID));
                const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
                await user.click(screen.getByTitle(constants.RED_BONUS_POINTS_BONUS_BOX_ID));
                const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
                expect(pointsAwarded).toEqual(6);
                //#endregion
            });
        });
        describe('when the yellow multiball bonus box is unfilled and the yellow drop target group is filled', () => {
            describe('when the 1st ball is the one that cleared the yellow drop target group', () => {
                it('should ignore clicks on the yellow multiball bonus box', async () => {
                    //#region arrange
                    const DIE_VALUES = [
                        [1, 2], // move from start to red droptarget 12
                        [3, 3], // move to red flipper box 3
                        [3, 3], // move to red droptarget 3
                        [4, 5], // move to red flipper box 45
                        [4, 4], // move to red droptarget 4
                        [6, 6], // move to red flipper box 6
                        [5, 6], // move to red droptarget 56
                        // select red multiball bonus
                        [1, 2],
                        // move ball 1 with die 1 (=1) from red drop target 56 to yel flipper box 1
                        // move ball 2 with die 2 (=2) from start to bumper 12 via 1st 2 box
                        [1, 3],
                        // move ball 1 with die 1 (=1) from yel flipper to yel drop target 12
                        // move ball 2 with die 2 (=3) from bumper 12 to bumper 34 via 1st 3 box
                        [2, 5],
                        // move ball 1 with die 1 (=2) from yel drop target 12 to yel flipper box 23
                        // move ball 2 with die 2 (=5) from bumper 34 to bumper 56 via 1st 5 box
                        [3, 1],
                        // move ball 1 with die 1 (=3) from yel flipper to yel drop target 34
                        // move ball 2 with die 2 (=1) from bumper 56 to bumper 12 via 1st 1 box
                        [4, 4],
                        // move ball 1 with die 1 (=4) from yel drop target 34 to yel flipper box 4
                        // move ball 2 with die 2 (=4) from bumper 12 to bumper 34 via 1st 4 box
                        [5, 6],
                        // move ball 1 with die 1 (=5) from yel flipper to yel drop target 56
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
                    await user.click(screen.getByTitle(constants.RED_MULTIBALL_BONUS_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
                    await user.click(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID));
                    await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
                    await user.click(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID));
                    await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID));
                    await user.click(screen.getByTitle(constants.BUMPER_34_1ST_4_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID));
                    await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                    //#endregion
                    //#region assert
                    expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeVisible();
                    expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(utilities.alertMessageForChoosingABonus("yellow"));
                    expect(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID).style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
                    //#endregion
                });
            });
            describe('when the 1st moved ball was moved to the drain', () => {
                it('should allow multiball to be activated again', async () => {
                    //#region arrange
                    const DIE_VALUES = [
                        [1, 2], // move from start to red droptarget 12
                        [3, 3], // move to red flipper box 3
                        [3, 3], // move to red droptarget 3
                        [4, 5], // move to red flipper box 45
                        [4, 4], // move to red droptarget 4
                        [6, 6], // move to red flipper box 6
                        [5, 6], // move to red droptarget 56
                        // select red multiball bonus
                        [1, 2],
                        // move ball 1 with die 1 (=1) from red drop target 56 to yel flipper box 1
                        // move ball 2 with die 2 (=2) from start to bumper 12 via 1st 2 box
                        [1, 3],
                        // move ball 1 with die 1 (=1) from yel flipper to yel drop target 12
                        // move ball 2 with die 2 (=3) from bumper 12 to bumper 34 via 1st 3 box
                        [2, 5],
                        // move ball 1 with die 1 (=2) from yel drop target 12 to yel flipper box 23
                        // move ball 2 with die 2 (=5) from bumper 34 to bumper 56 via 1st 5 box
                        [3, 1],
                        // move ball 1 with die 1 (=3) from yel flipper to yel drop target 34
                        // move ball 2 with die 2 (=1) from bumper 56 to bumper 12 via 1st 1 box
                        [4, 4],
                        // move ball 1 with die 1 (=4) from yel drop target 34 to yel flipper box 4
                        // move ball 2 with die 2 (=4) from bumper 12 to bumper 34 via 1st 4 box
                        [5, 6],
                        // move ball 2 with die 2 (=6) from bumper 34 to the drain via the drain box
                        // move ball 1 with die 1 (=5) from yel flipper to yel drop target 56
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
                    await user.click(screen.getByTitle(constants.RED_MULTIBALL_BONUS_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
                    await user.click(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID));
                    await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
                    await user.click(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID));
                    await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL1_ID));
                    await user.click(screen.getByTitle(constants.DIE1_ID));
                    await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID));
                    await user.click(screen.getByTitle(constants.BUMPER_34_1ST_4_BOX_ID));
                    await user.click(screen.getByTitle(constants.BALL2_ID));
                    await user.click(screen.getByTitle(constants.DIE2_ID));
                    await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
                    await user.click(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID));
                    await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                    //#endregion
                    //#region assert
                    expect(screen.getByTitle(constants.BALL2_ID).style.top).toEqual(screen.getByTitle(constants.START_BOX_ID).style.top);
                    expect(screen.getByTitle(constants.BALL2_ID).style.left).toEqual(screen.getByTitle(constants.START_BOX_ID).style.left);
                    //#endregion
                });
            });
            it('should allow the yellow points bonus to be selected and award double points', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to red droptarget 12
                    [3, 3], // move to red flipper box 3
                    [3, 3], // move to red droptarget 3
                    [4, 5], // move to red flipper box 45
                    [4, 4], // move to red droptarget 4
                    [6, 6], // move to red flipper box 6
                    [5, 6], // move to red droptarget 56
                    // select red multiball bonus
                    [1, 2],
                    // move ball 1 with die 1 (=1) from red drop target 56 to yel flipper box 1
                    // move ball 2 with die 2 (=2) from start to bumper 12 via 1st 2 box
                    [1, 3],
                    // move ball 1 with die 1 (=1) from yel flipper to yel drop target 12
                    // move ball 2 with die 2 (=3) from bumper 12 to bumper 34 via 1st 3 box
                    [2, 5],
                    // move ball 1 with die 1 (=2) from yel drop target 12 to yel flipper box 23
                    // move ball 2 with die 2 (=5) from bumper 34 to bumper 56 via 1st 5 box
                    [3, 1],
                    // move ball 1 with die 1 (=3) from yel flipper to yel drop target 34
                    // move ball 2 with die 2 (=1) from bumper 56 to bumper 12 via 1st 1 box
                    [4, 4],
                    // move ball 1 with die 1 (=4) from yel drop target 34 to yel flipper box 4
                    // move ball 2 with die 2 (=4) from bumper 12 to bumper 34 via 1st 4 box
                    [5, 6],
                    // move ball 1 with die 1 (=5) from yel flipper to yel drop target 56
                    // select yel points bonus
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
                await user.click(screen.getByTitle(constants.RED_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
                await user.click(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID));
                await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
                await user.click(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID));
                await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID));
                await user.click(screen.getByTitle(constants.BUMPER_34_1ST_4_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID));
                const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
                await user.click(screen.getByTitle(constants.YEL_BONUS_POINTS_BONUS_BOX_ID));
                const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.ALERT_TRAY_ID)).not.toBeVisible();
                expect(pointsAwarded).toEqual(4);
                //#endregion
            });
        });
        describe('when moving the 1st-moved ball to the drain', () => {
            it('should still award double points for each move on this turn', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [6, 1],
                    // move ball 1 with die 1 (=6) from yel drop target 56 to drain via the yel outlane
                    // move ball 2 with die 2 (=1) from start to bumper 12 via 1st 1 box
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                const pointsBeforeEitherMove = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
                await user.click(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID));
                const pointsAfterFirstMove = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
                await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
                const pointsAfterSecondMove = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
                //#endregion
                //#region assert
                expect(pointsAfterFirstMove - pointsBeforeEitherMove).toEqual(8); // 2 boxes filled * 2 points each * 2 for multiball = 8
                expect(pointsAfterSecondMove - pointsAfterFirstMove).toEqual(2); // 1 point * 2 for multiball = 2
                //#endregion
            });
        });
        describe('when moving a ball to the yel outlane', () => {
            it('should keep the ball hidden in the outlane', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [6, 1],
                    // move ball 1 with die 1 (=6) from yel drop target 56 to yel outlane
                    // move ball 2 with die 2 (=1) from start to bumper 12 via 1st 1 box
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID).style.top);
                expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID).style.left);
                expect(screen.getByTitle(constants.BALL1_ID)).not.toBeVisible();
                //#endregion
            });
        });
        describe('when moving a ball to the red outlane', () => {
            it('should keep the ball hidden in the outlane', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
                    [5, 6], // move to yel droptarget 56
                    // select yel multiball bonus
                    [1, 1],
                    // move ball 1 with die 1 (=1) from yel drop target 56 to red outlane
                    // move ball 2 with die 2 (=1) from start to bumper 12 via 1st 1 box
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
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_OUTLANE_BOX_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.RED_OUTLANE_BOX_ID).style.top);
                expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.RED_OUTLANE_BOX_ID).style.left);
                expect(screen.getByTitle(constants.BALL1_ID)).not.toBeVisible();
                //#endregion
            });
        });
        describe('when moving a ball to a box, besides the middle drain box, which contains the other ball', () => {
            it('should not move the ball and should display the alert for this specific situation', async () => {
                //#region arrange
                const DIE_VALUES = [
                    [1, 2], // move from start to yel droptarget 12
                    [1, 1], // move to yel flipper box 1
                    [3, 4], // move to yel droptarget 34
                    [2, 3], // move to yel flipper box 23
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
                const user = userEvent.setup();
                render(<Game dieValues={DIE_VALUES} />);
                //#endregion
                //#region act
                await user.click(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID));
                await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID));
                await user.click(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID));
                await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
                await user.click(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID));
                await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID));
                await user.click(screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID));
                await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
                await user.click(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL1_ID));
                await user.click(screen.getByTitle(constants.DIE1_ID));
                await user.click(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID));
                await user.click(screen.getByTitle(constants.RED_BONUS_POINTS_BONUS_BOX_ID));
                await user.click(screen.getByTitle(constants.RED_INLANE_BOX_ID));
                await user.click(screen.getByTitle(constants.BALL2_ID));
                await user.click(screen.getByTitle(constants.DIE2_ID));
                await user.click(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID));
                //#endregion
                //#region assert
                expect(screen.getByTitle(constants.BALL2_ID).style.top).toEqual(screen.getByTitle(constants.RED_INLANE_BOX_ID).style.top);
                expect(screen.getByTitle(constants.BALL2_ID).style.left).toEqual(screen.getByTitle(constants.RED_INLANE_BOX_ID).style.left);
                expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeVisible();
                expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.ATTEMPT_TO_MOVE_BALLS_TO_SAME_LOCATION_ALERT);
                //#endregion
            });
        });
    });
    describe('after multiball is deactivated', () => {
        it('should resume auto-selecting the only remaining ball, ball1', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56
                // select yel multiball bonus
                [1, 6],
                // select ball 2 and move it with die 1 (=1) to the drain via the drain box
                // move ball 1 with die 2 (=6) to red flipper box 6
                [1, 1], // move ball 1 to hammer space 1
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
            await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.BALL2_ID));
            await user.click(screen.getByTitle(constants.DIE1_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.DIE2_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.borderColor).toEqual(constants.BALL_SELECTED_BORDER_COLOR);
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.left);
            //#endregion
        });
        it('should resume auto-selecting the only remaining ball, ball2', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56
                // select yel multiball bonus
                [1, 6],
                // select ball 1 and move it with die 1 (=1) to the drain via the drain box
                // move ball 2 with die 2 (=6) to red flipper box 6
                [1, 1], // move ball 2 to hammer space 1
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
            await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.BALL1_ID));
            await user.click(screen.getByTitle(constants.DIE1_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.DIE2_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            await user.click(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL2_ID).style.borderColor).toEqual(constants.BALL_SELECTED_BORDER_COLOR);
            expect(screen.getByTitle(constants.BALL2_ID).style.top).toEqual(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL2_ID).style.left).toEqual(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID).style.left);
            //#endregion
        });
        it('should ignore attempts by the user to select a die', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to yel droptarget 12
                [1, 1], // move to yel flipper box 1
                [3, 4], // move to yel droptarget 34
                [2, 3], // move to yel flipper box 23
                [5, 6], // move to yel droptarget 56
                // select yel multiball bonus
                [1, 6],
                // select ball 2 and move it with die 1 (=1) to the drain via the drain box
                // move ball 1 with die 2 (=6) to red flipper box 6
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
            await user.click(screen.getByTitle(constants.YEL_MULTIBALL_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.BALL2_ID));
            await user.click(screen.getByTitle(constants.DIE1_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.DIE2_ID));
            await user.click(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID));
            await user.click(screen.getByTitle(constants.DIE1_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.DIE1_ID).style.borderColor).toEqual(constants.DIE_AVAILABLE_BORDER_COLOR);
            //#endregion
        });
    });
    describe('when the bumper bonus is active', () => {
        it('should award two points when moving to a bumper', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12 (+1)
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3 (+1)
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4 (+1)
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56 (+1)
                [2, 3], // move to yel flipper box 23 after choosing the bumper bonus
                [1, 1], // move to bumper 12 via 1st 1 box (+2)
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
            await user.click(screen.getByTitle(constants.BUMPER_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(2);
            //#endregion
        });
        it('should allow the user to move counterclockwise between bumpers', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12 (+1)
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3 (+1)
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4 (+1)
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56 (+1)
                [2, 3], // move to yel flipper box 23 after choosing the bumper bonus
                [1, 1], // move to bumper 12 via 1st 1 box (+2)
                [5, 5], // move to bumper 56 via 1st 5 box (+2)
                [3, 3], // move to bumper 34 via 1st 3 box (+2)
                [2, 2], // move to bumper 12 via 1st 2 box (+2)
                [6, 6], // move to bumper 56 via 1st 6 box (+2)
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
            await user.click(screen.getByTitle(constants.BUMPER_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID).style.left);
            //#endregion
        });
    });
    describe('when the bumper bonus has been deactivated', () => {
        it('should award one point when moving to a bumper', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12 (+1)
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3 (+1)
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4 (+1)
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56 (+1)
                [2, 3], // move to drain after choosing the bumper bonus
                [1, 1], // move to bumper 12 via 1st 1 box (+1)
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
            await user.click(screen.getByTitle(constants.BUMPER_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            const prevScore = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
            const pointsAwarded = (Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML) - prevScore);
            //#endregion
            //#region assert
            expect(pointsAwarded).toEqual(1);
            //#endregion
        });
        it('should not move counterclockwise between bumpers', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 2], // move from start to red drop target 12 (+1)
                [3, 3], // move to red flipper box 3
                [3, 3], // move to red drop target 3 (+1)
                [4, 5], // move to red flipper box 45
                [4, 4], // move to red drop target 4 (+1)
                [6, 6], // move to red flipper box 6
                [5, 6], // move to red drop target 56 (+1)
                [2, 3], // move to drain after choosing the bumper bonus
                [1, 1], // move to bumper 12 via 1st 1 box (+1)
                [5, 5], // attempt to move to bumper 56 via 1st 5 box
                [1, 1], // final roll which should not be reached
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
            await user.click(screen.getByTitle(constants.BUMPER_BONUS_BOX_ID));
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID));
            await user.click(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.BALL1_ID).style.top).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID).style.top);
            expect(screen.getByTitle(constants.BALL1_ID).style.left).toEqual(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID).style.left);
            expect(screen.getByTitle(constants.ALERT_TRAY_ID)).toBeVisible();
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.INVALID_CHOICE_ALERT);
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
                [2, 2], // go to red inlane
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
            const pointsBeforeLastTurn = Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML);
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 3
            //#endregion
            //#region assert
            expect(Number(screen.getByTitle(constants.SCORE_PARAGRAPH_ID).innerHTML)).toEqual(pointsBeforeLastTurn);
            expect(screen.getByTitle(constants.NUDGES_USED_PARAGRAPH_ID).innerHTML).toEqual("Nudges Used: 1");
            //#endregion
        });
        it('should not roll the dice after ending the game', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // move from start to drain to end round 1/3
                [1, 1], // move from start to drain to end round 2/3
                [3, 3], // move from start to drain to end round 3/3
                [1, 1], // final roll which should not be used to move
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
    describe('when a game has ended', () => {
        it('should ignore a click on a dice box', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // go to drain to go from round 1 to round 2
                [1, 1], // go to drain to go from round 2 to round 3
                [1, 1], // go to drain to end the game
                [1, 1], // final roll which should not be used to move
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            //#endregion
            //#region act
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 1
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 2
            await user.click(screen.getByTitle(constants.DRAIN_BOX_ID)); // end round 3
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID));
            //#endregion
            //#region assert
            expect(screen.getByTitle(constants.ALERT_PARAGRAPH_ID).innerHTML).toEqual(constants.GAME_OVER_ALERT);
            //#endregion
        });
    });
});
