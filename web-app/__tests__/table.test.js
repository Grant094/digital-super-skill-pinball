import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Table from "../src/app/Table";
import * as constants from "../src/app/constants";

describe("Table", () => {
    it("renders ball 1", () => {
        // arrange
        render(<Table />);
        // act
        const element = screen.getByAltText(constants.BALL1_ID);
        // assert
        expect(element).toBeInTheDocument();
    });
    it("does not render ball 3", () => {
        // arrange
        render(<Table />);
        // act
        const element = screen.queryByAltText(/ball3/i);
        // assert
        expect(element).toBeNull();
    });
});