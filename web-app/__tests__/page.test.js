import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import * as constants from "../src/app/constants";

describe("Table", () => {
    it("renders ball 1", () => {
        // arrange
        render(<Home />);
        // act
        const element = screen.getByAltText(constants.BALL1_ID);
        // assert
        expect(element).toBeInTheDocument();
    });
    it("renders everything correctly on page load", () => {
        // arrange
        render(<Home />);
        // act
        const ball2Element = screen.getByTitle(constants.BALL2_ID);
        // assert
        expect(screen.getByTitle(constants.BALL1_ID)).toBeInTheDocument();
        expect(ball2Element).toBeInTheDocument();
        expect(ball2Element).toHaveStyle("visibility: hidden");
    });
});