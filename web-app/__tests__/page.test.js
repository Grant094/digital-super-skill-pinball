import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import * as constants from "../src/app/constants";

describe("Home", () => {
    it.each(constants.ALL_FEATURE_IDS)(
        'all features should exist and be visible on page load',
        (featureId) => {
            // arrange
            render(<Home />);
            // assert
            const element = screen.getByTitle(featureId);
            expect(element).toBeInTheDocument()
            expect(element).toHaveStyle("visibility: visible");
        }
    );
});