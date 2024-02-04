import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import * as constants from "../src/app/constants";

describe("Table", () => {
    it("renders everything correctly on page load", () => {
        // arrange
        render(<Home />);
        // act
        const ball2Element = screen.getByTitle(constants.BALL2_ID);
        // assert
        expect(screen.getByTitle(constants.BALL1_ID)).toBeInTheDocument();
        expect(ball2Element).toBeInTheDocument();
        expect(ball2Element).toHaveStyle("visibility: hidden");
        expect(screen.getByTitle(constants.START_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.RED_FLIPPER_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.YEL_FLIPPER_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.FERRISWHEEL_CAR_12_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.FERRISWHEEL_CAR_34_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.FERRISWHEEL_CAR_56_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.FERRISWHEEL_CAR_12_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.FERRISWHEEL_CAR_34_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.FERRISWHEEL_CAR_56_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.BUMPER_12_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.BUMPER_34_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.BUMPER_56_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.BUMPER_12_1ST_1_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.BUMPER_12_2ND_1_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.BUMPER_12_1ST_2_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.BUMPER_12_2ND_2_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.BUMPER_34_1ST_3_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.BUMPER_34_2ND_3_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.BUMPER_34_1ST_4_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.BUMPER_34_2ND_4_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.BUMPER_56_1ST_5_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.BUMPER_56_2ND_5_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.BUMPER_56_1ST_6_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.BUMPER_56_2ND_6_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.HAMMER_SPACE_1_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.HAMMER_SPACE_2_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.HAMMER_SPACE_3_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.HAMMER_SPACE_4_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.HAMMER_SPACE_5_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.HAMMER_SPACE_6_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.HAMMER_SPACE_1_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.HAMMER_SPACE_2_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.HAMMER_SPACE_3_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.HAMMER_SPACE_4_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.HAMMER_SPACE_5_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.HAMMER_SPACE_6_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.YEL_DROPTARGET_12_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.YEL_DROPTARGET_34_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.YEL_DROPTARGET_56_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.YEL_DROPTARGET_12_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.YEL_DROPTARGET_34_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.YEL_DROPTARGET_56_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.RED_DROPTARGET_12_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.RED_DROPTARGET_3_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.RED_DROPTARGET_4_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.RED_DROPTARGET_56_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.RED_DROPTARGET_12_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.RED_DROPTARGET_3_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.RED_DROPTARGET_4_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.RED_DROPTARGET_56_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.RED_FLIPPER_BOX_3_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.RED_FLIPPER_BOX_45_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.RED_FLIPPER_BOX_6_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.YEL_FLIPPER_BOX_1_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.YEL_FLIPPER_BOX_23_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.YEL_FLIPPER_BOX_4_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.RED_INLANE_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.YEL_INLANE_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.RED_OUTLANE_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.YEL_OUTLANE_BOX_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.DRAIN_FEATURE_ID)).toBeInTheDocument();
        expect(screen.getByTitle(constants.DRAIN_BOX_ID)).toBeInTheDocument()
    });
});