import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../src/app/page";
import * as constants from "../src/app/constants";

describe("Home", () => {
    describe('on page load', () => {
        it('should render all features as visible', () => {
            // arrange
            render(<Home />);
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
            render(<Home />);
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
        it('should render ball1 as visible at the Start feature', () => {
            // arrange
            render(<Home />);
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
        it('should render ball2 as hidden at the Drain feature', () => {
            // arrange
            render(<Home />);
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
    describe('inputting specific dice rolls', () => {
        it('should display the 1st dice values passed via props', async () => {
            // arrange
            const DIE1_1ST_VALUE = 1;
            const DIE2_1ST_VALUE = 2;
            const DIE_VALUES = [
                [DIE1_1ST_VALUE, DIE2_1ST_VALUE]
            ];
            render(<Home dieValues={DIE_VALUES} />);
            // act
            const die1Element = screen.getByTitle(constants.DIE1_ID);
            const die2Element = screen.getByTitle(constants.DIE2_ID);
            // assert
            expect(Number(die1Element.innerHTML)).toEqual(DIE1_1ST_VALUE);
            expect(Number(die2Element.innerHTML)).toEqual(DIE2_1ST_VALUE);
        });
        it('should display the 2nd dice values passed via props after the ball is moved', async () => {
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
            render(<Home dieValues={DIE_VALUES} />);
            // act
            const die1Element = screen.getByTitle(constants.DIE1_ID);
            const die2Element = screen.getByTitle(constants.DIE2_ID);
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            // assert
            expect(Number(die1Element.innerHTML)).toEqual(DIE1_2ND_VALUE);
            expect(Number(die2Element.innerHTML)).toEqual(DIE2_2ND_VALUE);
        });
    });
    describe('moving if either die matches what the selected box can take', () => {
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
            render(<Home dieValues={DIE_VALUES} />);
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
            render(<Home dieValues={DIE_VALUES} />);
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
            render(<Home dieValues={DIE_VALUES} />);
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
            render(<Home dieValues={DIE_VALUES} />);
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
    describe('moving from start to features that can receive from start on the table', () => {
        //#region ferriswheelcars
        it('should be able to move from start to ferriswheelcar12, fill the box, and maintain score, all on a roll of {1, 2}', async () => {
            // arrange
            const DIE_VALUES = [
                [1, 2],
                [1, 6],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to ferriswheelcar34, fill the box, and maintain score, all on a roll of {3, 4}', async () => {
            // arrange
            const DIE_VALUES = [
                [3, 4],
                [1, 6],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to ferriswheelcar56, fill the box, and maintain score, on a roll of {5, 6}', async () => {
            // arrange
            const DIE_VALUES = [
                [5, 6],
                [1, 6],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to bumper12 via the 1st1 box, fill the box, and add 1 to the score, all on a roll of {1, 1}', async () => {
            // arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to bumper12 via the 2nd1 box, fill the box, and add 1 to the score, on a roll of {1, 1}', async () => {
            // arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to bumper12 via the 1st2 box, fill the box, and add 1 to the score, all on a roll of {2, 2}', async () => {
            // arrange
            const DIE_VALUES = [
                [2, 2],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to bumper12 via the 2nd2 box, fill the box, and add 1 to the score, all on a roll of {2, 2}', async () => {
            // arrange
            const DIE_VALUES = [
                [2, 2],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to bumper34 via the 1st3 box, fill the box, and add 1 to the score, all on a roll of {3, 3}', async () => {
            // arrange
            const DIE_VALUES = [
                [3, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to bumper34 via the 2nd3 box, fill the box, and add 1 to the score, all on a roll of {3, 3}', async () => {
            // arrange
            const DIE_VALUES = [
                [3, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to bumper34 via the 1st4 box, fill the box, and add 1 to the score, all on a roll of {4, 4}', async () => {
            // arrange
            const DIE_VALUES = [
                [4, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to bumper34 via the 2nd4 box, fill the box, and add 1 to the score, all on a roll of {4, 4}', async () => {
            // arrange
            const DIE_VALUES = [
                [4, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to bumper56 via the 1st5 box, fill the box, and add 1 to the score, all on a roll of {5, 5}', async () => {
            // arrange
            const DIE_VALUES = [
                [5, 5],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to bumper56 via the 2nd5 box, fill the box, and add 1 to the score, all on a roll of {5, 5}', async () => {
            // arrange
            const DIE_VALUES = [
                [5, 5],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to bumper56 via the 1st6 box, fill the box, and add 1 to the score, all on a roll of {6, 6}', async () => {
            // arrange
            const DIE_VALUES = [
                [6, 6],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to bumper56 via the 2nd6 box, fill the box, and add 1 to the score, all on a roll of {6, 6}', async () => {
            // arrange
            const DIE_VALUES = [
                [6, 6],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to droptarget-yel-12, fill the box, and add 1 to the score, all on a roll of {1, 1}', async () => {
            // arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to droptarget-yel-34, fill the box, and add 1 to the score, all on a roll of {3, 3}', async () => {
            // arrange
            const DIE_VALUES = [
                [3, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to droptarget-yel-56, fill the box, and add 1 to the score, all on a roll of {5, 5}', async () => {
            // arrange
            const DIE_VALUES = [
                [5, 5],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to droptarget-red-12, fill the box, and add 1 to the score, all on a roll of {1, 1}', async () => {
            // arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to droptarget-red-3, fill the box, and add 1 to the score, all on a roll of {3, 3}', async () => {
            // arrange
            const DIE_VALUES = [
                [3, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to droptarget-red-4, fill the box, and add 1 to the score, all on a roll of {4, 4}', async () => {
            // arrange
            const DIE_VALUES = [
                [4, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to droptarget-red-56, fill the box, and add 1 to the score, all on a roll of {5, 5}', async () => {
            // arrange
            const DIE_VALUES = [
                [5, 5],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to redflipper via redinlane, fill the box, and add 2 to the score, all on a roll of {2, 2}', async () => {
            // arrange
            const DIE_VALUES = [
                [2, 2],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to redflipper via redflipperbox3, fill the box, and maintain score, all on a roll of {3, 3}', async () => {
            // arrange
            const DIE_VALUES = [
                [3, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to redflipper via redflipperbox45, fill the box, and maintain score, all on a roll of {4, 4}', async () => {
            // arrange
            const DIE_VALUES = [
                [4, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to redflipper via redflipperbox6, fill the box, and maintain score, all on a roll of {6, 6}', async () => {
            // arrange
            const DIE_VALUES = [
                [6, 6],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to yelflipper via yelinlane, fill the box, and add 2 to the score, all on a roll of {5, 5}', async () => {
            // arrange
            const DIE_VALUES = [
                [5, 5],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to yelflipper via yelflipperbox1, fill the box, and maintain score, all on a roll of {1, 1}', async () => {
            // arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to yelflipper via yelflipperbox23, fill the box, and maintain score, all on a roll of {2, 3}', async () => {
            // arrange
            const DIE_VALUES = [
                [2, 3],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to yelflipper via yelflipperbox4, fill the box, and maintain score, all on a roll of {4, 4}', async () => {
            // arrange
            const DIE_VALUES = [
                [4, 4],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to start via redoutlane, fill the box, and maintain score, all on a roll of {1, 1}', async () => {
            // arrange
            const DIE_VALUES = [
                [1, 1],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move from start to start via yeloutlane, fill the box, and maintain score, all on a roll of {6, 6}', async () => {
            // arrange
            const DIE_VALUES = [
                [6, 6],
                [1, 1],
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
            render(<Home dieValues={DIE_VALUES} />);
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
    describe('moving to hammer spaces in the correct order', () => {
        it('should be able to move from redflipper to hammerspace1, fill the box, and maintain score, all on a roll of {1, 1}', async () => {
            //#region arrange
            const DIE_VALUES = [
                [3, 3], // from start to redflipper via redinlane
                [1, 1], // to hammerspace1
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
        it('should be able to move to each hammerspace in the correct order and have the correct score afterwards', async () => {
            //#region arrange
            const DIE_VALUES = [
                [2, 2], // from start to redflipper via redinlane
                [1, 1], // to hammerspace1
                [3, 3], // to redflipper via redflipperbox3
                [2, 2], // to hammerspace2
                [4, 4], // to redflipper via redflipperbox45
                [3, 3], // to hammerspace3
                [6, 6], // to redflipper via redflipperbox6
                [4, 4], // to hammerspace4
                [1, 1], // to drain via drainbox since all boxes for the redflipper are filled
                [2, 2], // from start to redflipper via redinlane
                [5, 5], // to hammerspace5
                [3, 3], // to redflipper via redflipperbox3
                [6, 6], // to hammerspace6
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
    describe('ending a round (but not the game)', () => {
        it('should clear a dashed box but not clear a solid box at the end of the round', async () => {
            //#region arrange
            const DIE_VALUES = [
                [1, 1], // from start to bumper121st1box
                [1, 1], // to yelflipperbox1
                [1, 1], // to drain box
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
                [1, 1], // from start to drain box to start round 2
                [1, 1], // final roll
            ];
            const user = userEvent.setup();
            render(<Home dieValues={DIE_VALUES} />);
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
            render(<Home dieValues={DIE_VALUES} />);
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
    });
});