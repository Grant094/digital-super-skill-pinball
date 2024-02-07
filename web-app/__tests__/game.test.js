import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "../src/app/Game";
import * as constants from "../src/app/constants";

describe("Game", () => {
    describe('when the game loads', () => {
        it('should render all features as visible', () => {
            // arrange
            render(<Game />);
            for (const featureId of constants.ALL_FEATURE_IDS) {
                // act
                const element = screen.getByTitle(featureId);
                // assert
                expect(element).toBeInTheDocument();
                expect(element).toHaveStyle("visibility: visible");
            }
        });
        it('should render all boxes as visible and unfilled', () => {
            // arrange
            render(<Game />);
            for (const boxId of constants.ALL_BOX_IDS) {
                // act
                const element = screen.getByTitle(boxId);
                // assert
                expect(element).toBeInTheDocument();
                expect(element).toHaveStyle(`
                    visibility: visible;
                    backgroundColor: ${constants.UNFILLED_BACKGROUND_COLOR};
                `);
            }
        });
        it('should render ball 1 as visible at the Start feature', () => {
            // arrange
            render(<Game />);
            // act
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const startFeatureElement = screen.getByTitle(constants.START_FEATURE_ID);
            // assert
            expect(ball1Element).toBeInTheDocument();
            expect(ball1Element).toHaveStyle(`
                visibility: visible;
                top: ${startFeatureElement.style.top};
                left: ${startFeatureElement.style.left};
            `);
        });
        it('should render ball 2 as hidden at the Drain feature', () => {
            // arrange
            render(<Game />);
            // act
            const ball2Element = screen.getByTitle(constants.BALL2_ID);
            const drainFeatureElement = screen.getByTitle(constants.DRAIN_FEATURE_ID);
            // assert
            expect(ball2Element).toBeInTheDocument();
            expect(ball2Element).toHaveStyle(`
                visibility: hidden;
                top: ${drainFeatureElement.style.top};
                left: ${drainFeatureElement.style.left};
            `);
        });
    });
    describe('when receiving specific dice rolls as a prop', () => {
        it('should display the 1st dice values passed via props', async () => {
            // arrange
            const DIE1_1ST_VALUE = 1;
            const DIE2_1ST_VALUE = 2;
            const DIE_VALUES = [
                [DIE1_1ST_VALUE, DIE2_1ST_VALUE]
            ];
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const die1Element = screen.getByTitle(constants.DIE1_ID);
            const die2Element = screen.getByTitle(constants.DIE2_ID);
            // assert
            expect(Number(die1Element.innerHTML)).toEqual(DIE1_1ST_VALUE);
            expect(Number(die2Element.innerHTML)).toEqual(DIE2_1ST_VALUE);
        });
        it('should display the 2nd dice values passed via props after the only ball is moved', async () => {
            // arrange
            const DIE1_1ST_VALUE = 1;
            const DIE2_1ST_VALUE = 2;
            const DIE1_2ND_VALUE = 5;
            const DIE2_2ND_VALUE = 6;
            const DIE_VALUES = [
                [DIE1_1ST_VALUE, DIE2_1ST_VALUE],
                [DIE1_2ND_VALUE, DIE2_2ND_VALUE],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const die1Element = screen.getByTitle(constants.DIE1_ID);
            const die2Element = screen.getByTitle(constants.DIE2_ID);
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            // assert
            expect(Number(die1Element.innerHTML)).toEqual(DIE1_2ND_VALUE);
            expect(Number(die2Element.innerHTML)).toEqual(DIE2_2ND_VALUE);
        });
    });
    describe('when attempting to move the only ball via boxes that can receive on either die value', () => {
        it('should be able to go from start to ferris wheel car 12 and fill it in on roll {1, 1}', async () => {
            // arrange
            const DIE1_1ST_VALUE = 1;
            const DIE2_1ST_VALUE = 1;
            const DIE1_2ND_VALUE = 1;
            const DIE2_2ND_VALUE = 1;
            const DIE_VALUES = [
                [DIE1_1ST_VALUE, DIE2_1ST_VALUE],
                [DIE1_2ND_VALUE, DIE2_2ND_VALUE],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const ferriswheelcar12BoxElement = screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const ferriswheelcar12FeatureElement = screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID);
            await user.click(ferriswheelcar12BoxElement);
            // assert
            expect(ferriswheelcar12BoxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(ferriswheelcar12FeatureElement.style.top);
            expect(ball1Element.style.left).toEqual(ferriswheelcar12FeatureElement.style.left);
        });
        it('should be able to go from start to ferris wheel car 12 and fill it in on roll {2, 2}', async () => {
            // arrange
            const DIE1_1ST_VALUE = 2;
            const DIE2_1ST_VALUE = 2;
            const DIE1_2ND_VALUE = 2;
            const DIE2_2ND_VALUE = 2;
            const DIE_VALUES = [
                [DIE1_1ST_VALUE, DIE2_1ST_VALUE],
                [DIE1_2ND_VALUE, DIE2_2ND_VALUE],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const ferriswheelcar12BoxElement = screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const ferriswheelcar12FeatureElement = screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID);
            await user.click(ferriswheelcar12BoxElement);
            // assert
            expect(ferriswheelcar12BoxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(ferriswheelcar12FeatureElement.style.top);
            expect(ball1Element.style.left).toEqual(ferriswheelcar12FeatureElement.style.left);
        });
        it('should be able to go from start to ferris wheel car 12 and fill it in on roll {1, 4}', async () => {
            // arrange
            const DIE1_1ST_VALUE = 1;
            const DIE2_1ST_VALUE = 4;
            const DIE1_2ND_VALUE = 2;
            const DIE2_2ND_VALUE = 2;
            const DIE_VALUES = [
                [DIE1_1ST_VALUE, DIE2_1ST_VALUE],
                [DIE1_2ND_VALUE, DIE2_2ND_VALUE],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const ferriswheelcar12BoxElement = screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const ferriswheelcar12FeatureElement = screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID);
            await user.click(ferriswheelcar12BoxElement);
            // assert
            expect(ferriswheelcar12BoxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(ferriswheelcar12FeatureElement.style.top);
            expect(ball1Element.style.left).toEqual(ferriswheelcar12FeatureElement.style.left);
        });
        it('should be able to go from start to ferris wheel car 12 and fill it in on roll {4, 1}', async () => {
            // arrange
            const DIE1_1ST_VALUE = 4;
            const DIE2_1ST_VALUE = 1;
            const DIE1_2ND_VALUE = 2;
            const DIE2_2ND_VALUE = 2;
            const DIE_VALUES = [
                [DIE1_1ST_VALUE, DIE2_1ST_VALUE],
                [DIE1_2ND_VALUE, DIE2_2ND_VALUE],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const ferriswheelcar12BoxElement = screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const ferriswheelcar12FeatureElement = screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID);
            await user.click(ferriswheelcar12BoxElement);
            // assert
            expect(ferriswheelcar12BoxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(ferriswheelcar12FeatureElement.style.top);
            expect(ball1Element.style.left).toEqual(ferriswheelcar12FeatureElement.style.left);
        });
    });
    describe('when attempting to move the only ball from start via boxes that can receive from start', () => {
        //#region ferriswheelcars
        it('should be able to move from start to ferris wheel car 12, fill the box, and maintain score, all on a roll of {1, 2}', async () => {
            // arrange
            const DIE_VALUES = [
                [1, 2],
                [1, 6],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("0");
        });
        it('should be able to move from start to ferris wheel car 34, fill the box, and maintain score, all on a roll of {3, 4}', async () => {
            // arrange
            const DIE_VALUES = [
                [3, 4],
                [1, 6],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.FERRISWHEEL_CAR_34_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("0");
        });
        it('should be able to move from start to ferris wheel car 56, fill the box, and maintain score, on a roll of {5, 6}', async () => {
            // arrange
            const DIE_VALUES = [
                [5, 6],
                [1, 6],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.FERRISWHEEL_CAR_56_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("0");
        });
        //#endregion
        //#region bumpers
        it('should be able to move from start to bumper 12 via the 1st 1 box, fill the box, and add 1 to the score, all on a roll of {1, 1}', async () => {
            // arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.BUMPER_12_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to bumper 12 via the 2nd 1 box, fill the box, and add 1 to the score, on a roll of {1, 1}', async () => {
            // arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.BUMPER_12_2ND_1_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.BUMPER_12_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to bumper 12 via the 1st 2 box, fill the box, and add 1 to the score, all on a roll of {2, 2}', async () => {
            // arrange
            const DIE_VALUES = [
                [2, 2],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.BUMPER_12_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to bumper 12 via the 2nd 2 box, fill the box, and add 1 to the score, all on a roll of {2, 2}', async () => {
            // arrange
            const DIE_VALUES = [
                [2, 2],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.BUMPER_12_2ND_2_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.BUMPER_12_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to bumper 34 via the 1st 3 box, fill the box, and add 1 to the score, all on a roll of {3, 3}', async () => {
            // arrange
            const DIE_VALUES = [
                [3, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.BUMPER_34_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to bumper 34 via the 2nd 3 box, fill the box, and add 1 to the score, all on a roll of {3, 3}', async () => {
            // arrange
            const DIE_VALUES = [
                [3, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.BUMPER_34_2ND_3_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.BUMPER_34_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to bumper 34 via the 1st 4 box, fill the box, and add 1 to the score, all on a roll of {4, 4}', async () => {
            // arrange
            const DIE_VALUES = [
                [4, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.BUMPER_34_1ST_4_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.BUMPER_34_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to bumper 34 via the 2nd 4 box, fill the box, and add 1 to the score, all on a roll of {4, 4}', async () => {
            // arrange
            const DIE_VALUES = [
                [4, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.BUMPER_34_2ND_4_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.BUMPER_34_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to bumper 56 via the 1st 5 box, fill the box, and add 1 to the score, all on a roll of {5, 5}', async () => {
            // arrange
            const DIE_VALUES = [
                [5, 5],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.BUMPER_56_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to bumper 56 via the 2nd 5 box, fill the box, and add 1 to the score, all on a roll of {5, 5}', async () => {
            // arrange
            const DIE_VALUES = [
                [5, 5],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.BUMPER_56_2ND_5_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.BUMPER_56_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to bumper 56 via the 1st 6 box, fill the box, and add 1 to the score, all on a roll of {6, 6}', async () => {
            // arrange
            const DIE_VALUES = [
                [6, 6],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.BUMPER_56_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to bumper 56 via the 2nd 6 box, fill the box, and add 1 to the score, all on a roll of {6, 6}', async () => {
            // arrange
            const DIE_VALUES = [
                [6, 6],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.BUMPER_56_2ND_6_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.BUMPER_56_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        //#endregion
        //#region droptargets
        it('should be able to move from start to yel droptarget 12, fill the box, and add 1 to the score, all on a roll of {1, 1}', async () => {
            // arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.YEL_DROPTARGET_12_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to yel droptarget 34, fill the box, and add 1 to the score, all on a roll of {3, 3}', async () => {
            // arrange
            const DIE_VALUES = [
                [3, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.YEL_DROPTARGET_34_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to yel droptarget 56, fill the box, and add 1 to the score, all on a roll of {5, 5}', async () => {
            // arrange
            const DIE_VALUES = [
                [5, 5],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.YEL_DROPTARGET_56_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to red droptarget 12, fill the box, and add 1 to the score, all on a roll of {1, 1}', async () => {
            // arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.RED_DROPTARGET_12_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to red droptarget 3, fill the box, and add 1 to the score, all on a roll of {3, 3}', async () => {
            // arrange
            const DIE_VALUES = [
                [3, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.RED_DROPTARGET_3_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to red droptarget 4, fill the box, and add 1 to the score, all on a roll of {4, 4}', async () => {
            // arrange
            const DIE_VALUES = [
                [4, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.RED_DROPTARGET_4_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        it('should be able to move from start to red droptarget 56, fill the box, and add 1 to the score, all on a roll of {5, 5}', async () => {
            // arrange
            const DIE_VALUES = [
                [5, 5],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.RED_DROPTARGET_56_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("1");
        });
        //#endregion
        //#region flippers
        it('should be able to move from start to red flipper via the red inlane, fill the box, and add 2 to the score, all on a roll of {2, 2}', async () => {
            // arrange
            const DIE_VALUES = [
                [2, 2],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.RED_INLANE_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.RED_FLIPPER_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("2");
        });
        it('should be able to move from start to red flipper via red flipper box 3, fill the box, and maintain score, all on a roll of {3, 3}', async () => {
            // arrange
            const DIE_VALUES = [
                [3, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.RED_FLIPPER_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("0");
        });
        it('should be able to move from start to red flipper via red flipper box 45, fill the box, and maintain score, all on a roll of {4, 4}', async () => {
            // arrange
            const DIE_VALUES = [
                [4, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.RED_FLIPPER_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("0");
        });
        it('should be able to move from start to red flipper via red flipper box 6, fill the box, and maintain score, all on a roll of {6, 6}', async () => {
            // arrange
            const DIE_VALUES = [
                [6, 6],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.RED_FLIPPER_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("0");
        });
        it('should be able to move from start to yel flipper via the yel inlane, fill the box, and add 2 to the score, all on a roll of {5, 5}', async () => {
            // arrange
            const DIE_VALUES = [
                [5, 5],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.YEL_INLANE_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.YEL_FLIPPER_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("2");
        });
        it('should be able to move from start to yel flipper via yel flipper box 1, fill the box, and maintain score, all on a roll of {1, 1}', async () => {
            // arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.YEL_FLIPPER_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("0");
        });
        it('should be able to move from start to yel flipper via yel flipper box 23, fill the box, and maintain score, all on a roll of {2, 3}', async () => {
            // arrange
            const DIE_VALUES = [
                [2, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.YEL_FLIPPER_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("0");
        });
        it('should be able to move from start to yel flipper via yel flipper box 4, fill the box, and maintain score, all on a roll of {4, 4}', async () => {
            // arrange
            const DIE_VALUES = [
                [4, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.YEL_FLIPPER_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(boxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("0");
        });
        //#endregion
        //#region drain
        it('should be able to move from start to start via the red outlane, fill the box, and maintain score, all on a roll of {1, 1}', async () => {
            // arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.RED_OUTLANE_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.START_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("0");
        });
        it('should be able to move from start to start via the yel outlane, fill the box, and maintain score, all on a roll of {6, 6}', async () => {
            // arrange
            const DIE_VALUES = [
                [6, 6],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.YEL_OUTLANE_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.START_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("0");
        });
        it('should be able to move from start to start via drain, fill the box, and maintain score, all on a roll of {3, 4}', async () => {
            // arrange
            const DIE_VALUES = [
                [3, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            // act
            const boxElement = screen.getByTitle(constants.DRAIN_BOX_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const featureElement = screen.getByTitle(constants.START_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            await user.click(boxElement);
            // assert
            expect(ball1Element.style.top).toEqual(featureElement.style.top);
            expect(ball1Element.style.left).toEqual(featureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("0");
        });
        //#endregion
    });
    describe('when attempting to move the only ball to a hammer space', () => {
        it('should be able to move from red flipper to hammer space 1, fill the box, and maintain score, all on a roll of {1, 1}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3], // from start to red flipper via red inlane
                [1, 1], // to hammer space 1
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Game dieValues={DIE_VALUES} />);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const redFlipperBox3BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID);
            const hammerspace1BoxElement = screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID);
            const hammerspace1FeatureElement = screen.getByTitle(constants.HAMMER_SPACE_1_FEATURE_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            //#endregion
            //#region act
            await user.click(redFlipperBox3BoxElement);
            await user.click(hammerspace1BoxElement);
            //#endregion
            //#region assert
            expect(ball1Element.style.top).toEqual(hammerspace1FeatureElement.style.top);
            expect(ball1Element.style.left).toEqual(hammerspace1FeatureElement.style.left);
            expect(hammerspace1BoxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(redFlipperBox3BoxElement).toHaveStyle(`backgroundColor: ${constants.FILLED_BACKGROUND_COLOR}`);
            expect(scoreParagraphElement.innerHTML).toEqual("0");
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
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const redInlaneBoxElement = screen.getByTitle(constants.RED_INLANE_BOX_ID);
            const redFlipperBox3BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID);
            const redFlipperBox45BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID);
            const redFlipperBox6BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID);
            const hammerspace1BoxElement = screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID);
            const hammerspace2BoxElement = screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID);
            const hammerspace3BoxElement = screen.getByTitle(constants.HAMMER_SPACE_3_BOX_ID);
            const hammerspace4BoxElement = screen.getByTitle(constants.HAMMER_SPACE_4_BOX_ID);
            const hammerspace5BoxElement = screen.getByTitle(constants.HAMMER_SPACE_5_BOX_ID);
            const hammerspace6BoxElement = screen.getByTitle(constants.HAMMER_SPACE_6_BOX_ID);
            const hammerspace6FeatureElement = screen.getByTitle(constants.HAMMER_SPACE_6_FEATURE_ID);
            const drainBoxElement = screen.getByTitle(constants.DRAIN_BOX_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            //#endregion
            //#region act
            await user.click(redInlaneBoxElement);
            await user.click(hammerspace1BoxElement);
            await user.click(redFlipperBox3BoxElement);
            await user.click(hammerspace2BoxElement);
            await user.click(redFlipperBox45BoxElement);
            await user.click(hammerspace3BoxElement);
            await user.click(redFlipperBox6BoxElement);
            await user.click(hammerspace4BoxElement);
            await user.click(drainBoxElement);
            await user.click(redInlaneBoxElement);
            await user.click(hammerspace5BoxElement);
            await user.click(redFlipperBox3BoxElement);
            await user.click(hammerspace6BoxElement);
            //#endregion
            // assert
            expect(ball1Element.style.top).toEqual(hammerspace6FeatureElement.style.top);
            expect(ball1Element.style.left).toEqual(hammerspace6FeatureElement.style.left);
            expect(scoreParagraphElement.innerHTML).toEqual("33"); // each hammerspace (20 + 5 + 2 + 1 + 1 = 29) + red inlane * 2 (2 * 2 = 4) = 33
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
            const bumper121st1BoxElement = screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID);
            const yelFlipperBox1BoxElement = screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID);
            const drainBoxElement = screen.getByTitle(constants.DRAIN_BOX_ID);
            //#endregion
            //#region act
            await user.click(bumper121st1BoxElement);
            await user.click(yelFlipperBox1BoxElement);
            await user.click(drainBoxElement);
            //#endregion
            //#region assert
            expect(bumper121st1BoxElement.style.backgroundColor).toEqual(constants.FILLED_BACKGROUND_COLOR);
            expect(yelFlipperBox1BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
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
            const drainBoxElement = screen.getByTitle(constants.DRAIN_BOX_ID);
            const round1IndicatorElement = screen.getByTitle(constants.ROUND_1_INDICATOR_ID);
            const round2IndicatorElement = screen.getByTitle(constants.ROUND_2_INDICATOR_ID);
            const round3IndicatorElement = screen.getByTitle(constants.ROUND_3_INDICATOR_ID);
            //#endregion
            //#region act
            await user.click(drainBoxElement); // to start round 2
            //#endregion
            //#region assert
            expect(round1IndicatorElement.style.visibility).toEqual("visible");
            expect(round2IndicatorElement.style.visibility).toEqual("visible");
            expect(round3IndicatorElement.style.visibility).toEqual("hidden");
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
            const drainBoxElement = screen.getByTitle(constants.DRAIN_BOX_ID);
            const round1IndicatorElement = screen.getByTitle(constants.ROUND_1_INDICATOR_ID);
            const round2IndicatorElement = screen.getByTitle(constants.ROUND_2_INDICATOR_ID);
            const round3IndicatorElement = screen.getByTitle(constants.ROUND_3_INDICATOR_ID);
            //#endregion
            //#region act
            await user.click(drainBoxElement); // to start round 2
            await user.click(drainBoxElement); // to start round 3
            //#endregion
            //#region assert
            expect(round1IndicatorElement.style.visibility).toEqual("visible");
            expect(round2IndicatorElement.style.visibility).toEqual("visible");
            expect(round3IndicatorElement.style.visibility).toEqual("visible");
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
            const redFlipperBox3BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID);
            const redOutlaneElement = screen.getByTitle(constants.RED_OUTLANE_BOX_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            //#endregion
            //#region act
            await user.click(redFlipperBox3BoxElement);
            await user.click(redOutlaneElement);
            //#endregion
            //#region assert
            expect(scoreParagraphElement.innerHTML).toEqual("2");
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
            const redFlipperBox3BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID);
            const redFlipperBox45BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID);
            const redOutlaneElement = screen.getByTitle(constants.RED_OUTLANE_BOX_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            //#endregion
            //#region act
            await user.click(redFlipperBox3BoxElement);
            await user.click(redFlipperBox45BoxElement);
            await user.click(redOutlaneElement);
            //#endregion
            //#region assert
            expect(scoreParagraphElement.innerHTML).toEqual("4");
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
            const redFlipperBox3BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID);
            const redFlipperBox45BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID);
            const redFlipperBox6BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID);
            const redOutlaneElement = screen.getByTitle(constants.RED_OUTLANE_BOX_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            //#endregion
            //#region act
            await user.click(redFlipperBox3BoxElement);
            await user.click(redFlipperBox45BoxElement);
            await user.click(redFlipperBox6BoxElement);
            await user.click(redOutlaneElement);
            //#endregion
            //#region assert
            expect(scoreParagraphElement.innerHTML).toEqual("6");
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
            const redInlaneBoxElement = screen.getByTitle(constants.RED_INLANE_BOX_ID);
            const redOutlaneElement = screen.getByTitle(constants.RED_OUTLANE_BOX_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            //#endregion
            //#region act
            await user.click(redInlaneBoxElement);
            await user.click(redOutlaneElement);
            //#endregion
            //#region assert
            expect(scoreParagraphElement.innerHTML).toEqual("2"); // inlane was worth 2 points
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
            const yelFlipperBox1BoxElement = screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID);
            const yelOutlaneBoxElement = screen.getByTitle(constants.YEL_OUTLANE_BOX_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            //#endregion
            //#region act
            await user.click(yelFlipperBox1BoxElement);
            await user.click(yelOutlaneBoxElement);
            //#endregion
            //#region assert
            expect(scoreParagraphElement.innerHTML).toEqual("2");
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
            const yelFlipperBox1BoxElement = screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID);
            const yelFlipperBox23BoxElement = screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID);
            const yelOutlaneBoxElement = screen.getByTitle(constants.YEL_OUTLANE_BOX_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            //#endregion
            //#region act
            await user.click(yelFlipperBox1BoxElement);
            await user.click(yelFlipperBox23BoxElement);
            await user.click(yelOutlaneBoxElement);
            //#endregion
            //#region assert
            expect(scoreParagraphElement.innerHTML).toEqual("4");
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
            const yelFlipperBox1BoxElement = screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID);
            const yelFlipperBox23BoxElement = screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID);
            const yelFlipperBox4BoxElement = screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID);
            const yelOutlaneBoxElement = screen.getByTitle(constants.YEL_OUTLANE_BOX_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            //#endregion
            //#region act
            await user.click(yelFlipperBox1BoxElement);
            await user.click(yelFlipperBox23BoxElement);
            await user.click(yelFlipperBox4BoxElement);
            await user.click(yelOutlaneBoxElement);
            //#endregion
            //#region assert
            expect(scoreParagraphElement.innerHTML).toEqual("6");
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
            const yelInlaneBoxElement = screen.getByTitle(constants.YEL_INLANE_BOX_ID);
            const yelOutlaneBoxElement = screen.getByTitle(constants.YEL_OUTLANE_BOX_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            //#endregion
            //#region act
            await user.click(yelInlaneBoxElement);
            await user.click(yelOutlaneBoxElement);
            //#endregion
            //#region assert
            expect(scoreParagraphElement.innerHTML).toEqual("2"); // 2 points from using yel inlane but no additional points from using outlane
            //#endregion
        });
    });
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
            render(<Game dieValues={DIE_VALUES} />);
            const ferriswheelcar12BoxElement = screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID);
            const redInlaneBoxElement = screen.getByTitle(constants.RED_INLANE_BOX_ID);
            const drainBoxElement = screen.getByTitle(constants.DRAIN_BOX_ID);
            const restartButtonElement = screen.getByTitle(constants.RESTART_BUTTON_ID);
            const scoreParagraphElement = screen.getByTitle(constants.SCORE_PARAGRAPH_ID);
            const die1NudgeUpButtonElement = screen.getByTitle(constants.DIE1_NUDGE_UP_BUTTON_ID);
            const nudgesUsedParagraphElement = screen.getByTitle("nudgesUsed");
            const round1IndicatorElement = screen.getByTitle(constants.ROUND_1_INDICATOR_ID);
            const round2IndicatorElement = screen.getByTitle(constants.ROUND_2_INDICATOR_ID);
            const round3IndicatorElement = screen.getByTitle(constants.ROUND_3_INDICATOR_ID);
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const ball2Element = screen.getByTitle(constants.BALL2_ID);
            const startFeatureElement = screen.getByTitle(constants.START_FEATURE_ID);
            const drainFeatureElement = screen.getByTitle(constants.DRAIN_FEATURE_ID);
            //#endregion
            //#region act
            await user.click(ferriswheelcar12BoxElement);
            await user.click(die1NudgeUpButtonElement);
            await user.click(redInlaneBoxElement);
            await user.click(drainBoxElement);
            await user.click(restartButtonElement);
            //#endregion
            //#region assert
            expect(ferriswheelcar12BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(redInlaneBoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(scoreParagraphElement.innerHTML).toEqual("0");
            expect(round1IndicatorElement.style.visibility).toEqual("visible");
            expect(round2IndicatorElement.style.visibility).toEqual("hidden");
            expect(round3IndicatorElement.style.visibility).toEqual("hidden");
            expect(nudgesUsedParagraphElement.innerHTML).toEqual("Nudges Used: 0");
            expect(ball1Element.style.top).toEqual(startFeatureElement.style.top);
            expect(ball1Element.style.left).toEqual(startFeatureElement.style.left);
            expect(ball1Element.style.visibility).toEqual("visible");
            expect(ball2Element.style.top).toEqual(drainFeatureElement.style.top);
            expect(ball2Element.style.left).toEqual(drainFeatureElement.style.left);
            expect(ball2Element.style.visibility).toEqual("hidden");
            //#endregion
        });
    });
    describe('when filling all boxes in a group', () => {
        it('should clear all boxes in the ferris wheel group', async () => {
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
            const ferriswheelcar12BoxElement = screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID);
            const yelFlipperBox1BoxElement = screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID);
            const ferriswheelcar34BoxElement = screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID);
            const yelFlipperBox23BoxElement = screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID);
            const ferriswheelcar56BoxElement = screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID);
            //#endregion
            //#region act
            await user.click(ferriswheelcar12BoxElement);
            await user.click(yelFlipperBox1BoxElement);
            await user.click(ferriswheelcar34BoxElement);
            await user.click(yelFlipperBox23BoxElement);
            await user.click(ferriswheelcar56BoxElement);
            //#endregion
            //#region assert
            expect(ferriswheelcar12BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(ferriswheelcar34BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(ferriswheelcar56BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            //#endregion
        });
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
            const bumper121st1BoxElement = screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID);
            const bumper122nd1BoxElement = screen.getByTitle(constants.BUMPER_12_2ND_1_BOX_ID);
            const bumper121st2BoxElement = screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID);
            const bumper122nd2BoxElement = screen.getByTitle(constants.BUMPER_12_2ND_2_BOX_ID);
            const bumper341st3BoxElement = screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID);
            const bumper342nd3BoxElement = screen.getByTitle(constants.BUMPER_34_2ND_3_BOX_ID);
            const bumper341st4BoxElement = screen.getByTitle(constants.BUMPER_34_1ST_4_BOX_ID);
            const bumper342nd4BoxElement = screen.getByTitle(constants.BUMPER_34_2ND_4_BOX_ID);
            const bumper561st5BoxElement = screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID);
            const bumper562nd5BoxElement = screen.getByTitle(constants.BUMPER_56_2ND_5_BOX_ID);
            const bumper561st6BoxElement = screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID);
            const bumper562nd6BoxElement = screen.getByTitle(constants.BUMPER_56_2ND_6_BOX_ID);
            //#endregion
            //#region act
            await user.click(bumper121st1BoxElement);
            await user.click(bumper341st3BoxElement);
            await user.click(bumper561st5BoxElement);
            await user.click(bumper122nd1BoxElement);
            await user.click(bumper342nd3BoxElement);
            await user.click(bumper562nd5BoxElement);
            await user.click(bumper121st2BoxElement);
            await user.click(bumper341st4BoxElement);
            await user.click(bumper561st6BoxElement);
            await user.click(bumper122nd2BoxElement);
            await user.click(bumper342nd4BoxElement);
            await user.click(bumper562nd6BoxElement);
            //#endregion
            //#region assert
            expect(bumper121st1BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(bumper122nd1BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(bumper121st2BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(bumper122nd2BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(bumper341st3BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(bumper342nd3BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(bumper341st4BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(bumper342nd4BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(bumper561st5BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(bumper562nd5BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(bumper561st6BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(bumper562nd6BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            //#endregion
        });
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
            const yelDroptarget12BoxElement = screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID);
            const yelDroptarget34BoxElement = screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID);
            const yelDroptarget56BoxElement = screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID);
            const yelFlipperBox1BoxElement = screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID);
            const yelFlipperBox23BoxElement = screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID);
            //#endregion
            //#region act
            await user.click(yelDroptarget12BoxElement);
            await user.click(yelFlipperBox1BoxElement);
            await user.click(yelDroptarget34BoxElement);
            await user.click(yelFlipperBox23BoxElement);
            await user.click(yelDroptarget56BoxElement);
            //#endregion
            //#region assert
            expect(yelDroptarget12BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(yelDroptarget34BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(yelDroptarget56BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            //#endregion
        });
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
            const redDroptarget12BoxElement = screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID);
            const redDroptarget3BoxElement = screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID);
            const redDroptarget4BoxElement = screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID);
            const redDroptarget56BoxElement = screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID);
            const redFlipperBox3BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID);
            const redFlipperBox45BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID);
            const redFlipperBox6BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID);
            //#endregion
            //#region act
            await user.click(redDroptarget12BoxElement);
            await user.click(redFlipperBox3BoxElement);
            await user.click(redDroptarget3BoxElement);
            await user.click(redFlipperBox45BoxElement);
            await user.click(redDroptarget4BoxElement);
            await user.click(redFlipperBox6BoxElement);
            await user.click(redDroptarget56BoxElement);
            //#endregion
            //#region assert
            expect(redDroptarget12BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(redDroptarget3BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(redDroptarget4BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(redDroptarget56BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            //#endregion
        });
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
            const redInlaneBoxElement = screen.getByTitle(constants.RED_INLANE_BOX_ID);
            const redFlipperBox3BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID);
            const redFlipperBox45BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID);
            const redFlipperBox6BoxElement = screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID);
            const hammerspace1BoxElement = screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID);
            const hammerspace2BoxElement = screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID);
            const hammerspace3BoxElement = screen.getByTitle(constants.HAMMER_SPACE_3_BOX_ID);
            const hammerspace4BoxElement = screen.getByTitle(constants.HAMMER_SPACE_4_BOX_ID);
            const hammerspace5BoxElement = screen.getByTitle(constants.HAMMER_SPACE_5_BOX_ID);
            const hammerspace6BoxElement = screen.getByTitle(constants.HAMMER_SPACE_6_BOX_ID);
            const drainBoxElement = screen.getByTitle(constants.DRAIN_BOX_ID);
            //#endregion
            //#region act
            await user.click(redInlaneBoxElement);
            await user.click(hammerspace1BoxElement);
            await user.click(redFlipperBox3BoxElement);
            await user.click(hammerspace2BoxElement);
            await user.click(redFlipperBox45BoxElement);
            await user.click(hammerspace3BoxElement);
            await user.click(redFlipperBox6BoxElement);
            await user.click(hammerspace4BoxElement);
            await user.click(drainBoxElement);
            await user.click(redInlaneBoxElement);
            await user.click(hammerspace5BoxElement);
            await user.click(redFlipperBox3BoxElement);
            await user.click(hammerspace6BoxElement);
            //#endregion
            //#region assert
            expect(hammerspace1BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(hammerspace2BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(hammerspace3BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(hammerspace4BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(hammerspace5BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            expect(hammerspace6BoxElement.style.backgroundColor).toEqual(constants.UNFILLED_BACKGROUND_COLOR);
            //#endregion
        });
    });
});