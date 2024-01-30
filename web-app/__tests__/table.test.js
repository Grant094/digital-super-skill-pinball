import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Table from "../src/app/Table";

describe("Table", () => {
    it("renders the ball", () => {
        // arrange
        render(<Table />);
        // act
        const element = screen.getByAltText(/pinball1/i);
        // assert
        expect(element).toBeInTheDocument();
    });
});