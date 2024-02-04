import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import * as constants from "../src/app/constants";

describe("Home", () => {
    it.each(constants.ALL_FEATURE_IDS)(
        'should render %s as visible on page load',
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
    it.each(constants.ALL_BOX_IDS)(
        'should render %s as visible and unfilled on page load',
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
    it('should render BALL1_ID as visible at the Start feature', () => {
        // arrange
        render(<Home />);
        // act
        const element = screen.getByTitle(constants.BALL1_ID);
        // assert
        expect(element).toBeInTheDocument();
        expect(element).toHaveStyle(`
            visibility: visible;
            top: ${constants.START_FEATURE_TOP};
            left: ${constants.START_FEATURE_LEFT};
        `);
    });
    it('should render BALL2_ID as hidden at the Drain feature', () => {
        // arrange
        render(<Home />);
        // act
        const element = screen.getByTitle(constants.BALL2_ID);
        // assert
        expect(element).toBeInTheDocument();
        expect(element).toHaveStyle(`
            visibility: hidden;
            top: ${constants.DRAIN_FEATURE_TOP};
            left: ${constants.DRAIN_FEATURE_LEFT};
        `);
    });
});