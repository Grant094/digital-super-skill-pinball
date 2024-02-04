import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import * as constants from "../src/app/constants";

describe("Home", () => {
    it.each(constants.ALL_FEATURE_IDS)(
        '%s should exist and be visible on page load',
        (featureId) => {
            // arrange
            render(<Home />);
            // assert
            const element = screen.getByTitle(featureId);
            expect(element).toBeInTheDocument()
            expect(element).toHaveStyle("visibility: visible");
        }
    );
    it.each(constants.ALL_BOX_IDS)(
        '%s should exist, be visible, and be unfilled',
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
});