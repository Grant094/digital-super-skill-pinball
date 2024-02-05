import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../src/app/page";
import * as constants from "../src/app/constants";

describe("Home", () => {
    describe('on page load', () => {
        it.each(constants.ALL_FEATURE_IDS)('should render %s as visible',
            (featureId) => {
                // arrange
                render(<Home />);
                // act
                const element = screen.getByTitle(featureId);
                // assert
                expect(element).toBeInTheDocument()
                expect(element).toHaveStyle("visibility: visible");
            }
        );
        it.each(constants.ALL_BOX_IDS)('should render %s as visible and unfilled',
            (boxId) => {
                // arrange
                render(<Home />);
                const element = screen.getByTitle(boxId);
                // assert
                expect(element).toBeInTheDocument();
                expect(element).toHaveStyle(`
                    visibility: visible;
                    backgroundColor: ${constants.UNFILLED_BACKGROUND_COLOR};
                `);
            }
        );
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
            const dieValues = [[DIE1_1ST_VALUE, DIE2_1ST_VALUE]];
            render(<Home dieValues={dieValues} />);
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
            const dieValues = [[DIE1_1ST_VALUE, DIE2_1ST_VALUE], [DIE1_2ND_VALUE, DIE2_2ND_VALUE]];
            const user = userEvent.setup();
            render(<Home dieValues={dieValues} />);
            // act
            await user.click(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID));
            const die1Element = screen.getByTitle(constants.DIE1_ID);
            const die2Element = screen.getByTitle(constants.DIE2_ID);
            // assert
            expect(Number(die1Element.innerHTML)).toEqual(DIE1_2ND_VALUE);
            expect(Number(die2Element.innerHTML)).toEqual(DIE2_2ND_VALUE);
        });
    });
});