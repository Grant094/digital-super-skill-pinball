export const SELECTED_BORDER_COLOR = "gold";
//#region start
export const START_BOX_TOP = "240px";
export const START_BOX_LEFT = "450px";
export const START_BOX_ID = "box-start";
//#endregion
//#region dashed box ids
//#region flipper box ids
//#region red flipper box ids
export const RED_FLIPPER_BOX_3_BOX_ID = "box-redflipperbox-3";
export const RED_FLIPPER_BOX_45_BOX_ID = "box-redflipperbox-45";
export const RED_FLIPPER_BOX_6_BOX_ID = "box-redflipperbox-6";
export const RED_FLIPPER_BOX_IDS = [
    RED_FLIPPER_BOX_3_BOX_ID,
    RED_FLIPPER_BOX_45_BOX_ID,
    RED_FLIPPER_BOX_6_BOX_ID,
];
//#endregion
//#region yel flipper box ids
export const YEL_FLIPPER_BOX_1_BOX_ID = "box-yelflipperbox-1";
export const YEL_FLIPPER_BOX_23_BOX_ID = "box-yelflipperbox-23";
export const YEL_FLIPPER_BOX_4_BOX_ID = "box-yelflipperbox-4";
export const YEL_FLIPPER_BOX_IDS = [
    YEL_FLIPPER_BOX_1_BOX_ID,
    YEL_FLIPPER_BOX_23_BOX_ID,
    YEL_FLIPPER_BOX_4_BOX_ID,
];
//#endregion
export const FLIPPER_BOX_IDS = [...RED_FLIPPER_BOX_IDS, ...YEL_FLIPPER_BOX_IDS];
//#endregion
//#region inlanes
export const RED_INLANE_BOX_ID = "box-redinlane-2";
export const YEL_INLANE_BOX_ID = "box-yelinlane-5";
export const INLANE_BOX_IDS = [
    RED_INLANE_BOX_ID,
    YEL_INLANE_BOX_ID,
];
//#endregion
//#region outlanes
export const RED_OUTLANE_BOX_ID = "box-redoutlane-1";
export const YEL_OUTLANE_BOX_ID = "box-yeloutlane-6";
export const OUTLANE_BOX_IDS = [
    RED_OUTLANE_BOX_ID,
    YEL_OUTLANE_BOX_ID,
];
//#endregion
export const DASHED_BOX_IDS = [
    ...FLIPPER_BOX_IDS,
    ...INLANE_BOX_IDS,
    ...OUTLANE_BOX_IDS,
];
//#endregion
//#region ferris wheel
//#region ferris wheel box ids
export const FERRISWHEEL_CAR_12_BOX_ID = "box-ferriswheel-car-12";
export const FERRISWHEEL_CAR_34_BOX_ID = "box-ferriswheel-car-34";
export const FERRISWHEEL_CAR_56_BOX_ID = "box-ferriswheel-car-56";
export const FERRISWHEEL_GROUP_BOX_IDS = [
    FERRISWHEEL_CAR_12_BOX_ID,
    FERRISWHEEL_CAR_34_BOX_ID,
    FERRISWHEEL_CAR_56_BOX_ID,
];
//#endregion
export const FERRISWHEEL_CARS_DEFAULT_CAN_RECEIVE_FROM = [
    START_BOX_ID,
    ...YEL_FLIPPER_BOX_IDS,
    YEL_INLANE_BOX_ID,
];
//#endregion
//#region bumpers
//#region bumper box ids
//#region bumper 12
//#region bumper 12 1 Box ids
export const BUMPER_12_1ST_1_BOX_ID = "box-bumper-12-1st-1";
export const BUMPER_12_2ND_1_BOX_ID = "box-bumper-12-2nd-1";
export const BUMPER_12_1_BOX_IDS = [
    BUMPER_12_1ST_1_BOX_ID,
    BUMPER_12_2ND_1_BOX_ID,
];
//#endregion
//#region bumper 12 2 box ids
export const BUMPER_12_1ST_2_BOX_ID = "box-bumper-12-1st-2";
export const BUMPER_12_2ND_2_BOX_ID = "box-bumper-12-2nd-2";
export const BUMPER_12_2_BOX_IDS = [
    BUMPER_12_1ST_2_BOX_ID,
    BUMPER_12_2ND_2_BOX_ID,
];
//#endregion
export const BUMPER_12_BOX_IDS = [
    ...BUMPER_12_1_BOX_IDS,
    ...BUMPER_12_2_BOX_IDS
];
//#endregion
//#region bumper 34
//#region bumper 34 3 box ids
export const BUMPER_34_1ST_3_BOX_ID = "box-bumper-34-1st-3";
export const BUMPER_34_2ND_3_BOX_ID = "box-bumper-34-2nd-3";
export const BUMPER_34_3_BOX_IDS = [
    BUMPER_34_1ST_3_BOX_ID,
    BUMPER_34_2ND_3_BOX_ID,
];
//#endregion
//#region bumper 34 4 box ids
export const BUMPER_34_1ST_4_BOX_ID = "box-bumper-34-1st-4";
export const BUMPER_34_2ND_4_BOX_ID = "box-bumper-34-2nd-4";
export const BUMPER_34_4_BOX_IDS = [
    BUMPER_34_1ST_4_BOX_ID,
    BUMPER_34_2ND_4_BOX_ID,
];
//#endregion
export const BUMPER_34_BOX_IDS = [
    ...BUMPER_34_3_BOX_IDS,
    ...BUMPER_34_4_BOX_IDS
];
//#endregion
//#region bumper 56
//#region bumper 56 5 box ids
export const BUMPER_56_1ST_5_BOX_ID = "box-bumper-56-1st-5";
export const BUMPER_56_2ND_5_BOX_ID = "box-bumper-56-2nd-5";
export const BUMPER_56_5_BOX_IDS = [
    BUMPER_56_1ST_5_BOX_ID,
    BUMPER_56_2ND_5_BOX_ID,
];
//#endregion
//#region bumper 56 6 box ids
export const BUMPER_56_1ST_6_BOX_ID = "box-bumper-56-1st-6";
export const BUMPER_56_2ND_6_BOX_ID = "box-bumper-56-2nd-6";
export const BUMPER_56_6_BOX_IDS = [
    BUMPER_56_1ST_6_BOX_ID,
    BUMPER_56_2ND_6_BOX_ID
];
//#endregion
export const BUMPER_56_BOX_IDS = [
    ...BUMPER_56_5_BOX_IDS,
    ...BUMPER_56_6_BOX_IDS
];
//#endregion
export const BUMPER_GROUP_BOX_IDS = [
    ...BUMPER_12_BOX_IDS,
    ...BUMPER_34_BOX_IDS,
    ...BUMPER_56_BOX_IDS,
];
//#endregion
//#region bumpers can receive from
export const BUMPERS_DEFAULT_CAN_RECEIVE_FROM = [
    START_BOX_ID,
    ...FERRISWHEEL_GROUP_BOX_IDS,
    ...RED_FLIPPER_BOX_IDS,
    RED_INLANE_BOX_ID,
    ...YEL_FLIPPER_BOX_IDS,
    YEL_INLANE_BOX_ID,
];
export const BUMPER_12_DEFAULT_CAN_RECEIVE_FROM = [
    ...BUMPERS_DEFAULT_CAN_RECEIVE_FROM,
    ...BUMPER_56_BOX_IDS,
];
export const BUMPER_34_DEFAULT_CAN_RECEIVE_FROM = [
    ...BUMPERS_DEFAULT_CAN_RECEIVE_FROM,
    ...BUMPER_12_BOX_IDS,
];
export const BUMPER_56_DEFAULT_CAN_RECEIVE_FROM = [
    ...BUMPERS_DEFAULT_CAN_RECEIVE_FROM,
    ...BUMPER_34_BOX_IDS,
]
//#endregion
//#endregion
//#region hammer spaces
//#region hammer space box ids
export const HAMMER_SPACE_1_BOX_ID = "box-hammer-space-1";
export const HAMMER_SPACE_2_BOX_ID = "box-hammer-space-2";
export const HAMMER_SPACE_3_BOX_ID = "box-hammer-space-3";
export const HAMMER_SPACE_4_BOX_ID = "box-hammer-space-4";
export const HAMMER_SPACE_5_BOX_ID = "box-hammer-space-5";
export const HAMMER_SPACE_6_BOX_ID = "box-hammer-space-6";
export const HAMMER_SPACE_GROUP_BOX_IDS = [
    HAMMER_SPACE_1_BOX_ID,
    HAMMER_SPACE_2_BOX_ID,
    HAMMER_SPACE_3_BOX_ID,
    HAMMER_SPACE_4_BOX_ID,
    HAMMER_SPACE_5_BOX_ID,
    HAMMER_SPACE_6_BOX_ID,
];
//#endregion
export const HAMMER_SPACES_DEFAULT_CAN_RECEIVE_FROM = [
    ...RED_FLIPPER_BOX_IDS,
    RED_INLANE_BOX_ID,
];
//#endregion
//#region drop targets
//#region yel drop target box ids
export const YEL_DROPTARGET_12_BOX_ID = "box-droptarget-yel-12";
export const YEL_DROPTARGET_34_BOX_ID = "box-droptarget-yel-34";
export const YEL_DROPTARGET_56_BOX_ID = "box-droptarget-yel-56";
export const YEL_DROPTARGET_GROUP_BOX_IDS = [
    YEL_DROPTARGET_12_BOX_ID,
    YEL_DROPTARGET_34_BOX_ID,
    YEL_DROPTARGET_56_BOX_ID,
];
//#endregion
//#region red drop target box ids
export const RED_DROPTARGET_12_BOX_ID = "box-droptarget-red-12";
export const RED_DROPTARGET_3_BOX_ID = "box-droptarget-red-3";
export const RED_DROPTARGET_4_BOX_ID = "box-droptarget-red-4";
export const RED_DROPTARGET_56_BOX_ID = "box-droptarget-red-56";
export const RED_DROPTARGET_GROUP_BOX_IDS = [
    RED_DROPTARGET_12_BOX_ID,
    RED_DROPTARGET_3_BOX_ID,
    RED_DROPTARGET_4_BOX_ID,
    RED_DROPTARGET_56_BOX_ID,
];
//#endregion
//#region drop targets can receive from
export const DROPTARGETS_DEFAULT_CAN_RECEIVE_FROM = [
    START_BOX_ID,
    ...FERRISWHEEL_GROUP_BOX_IDS,
    ...BUMPER_GROUP_BOX_IDS,
    ...HAMMER_SPACE_GROUP_BOX_IDS,
];
export const YEL_DROPTARGETS_CAN_RECEIVE_FROM = [
    ...DROPTARGETS_DEFAULT_CAN_RECEIVE_FROM,
    ...YEL_FLIPPER_BOX_IDS,
    YEL_INLANE_BOX_ID,
];
export const RED_DROPTARGETS_CAN_RECEIVE_FROM = [
    ...DROPTARGETS_DEFAULT_CAN_RECEIVE_FROM,
    ...RED_FLIPPER_BOX_IDS,
    RED_INLANE_BOX_ID,
]
//#endregion
//#endregion
//#region drain
export const DRAIN_BOX_ID = "box-drain-123456";
export const DRAIN_BOX_LEFT = "220px";
export const DRAIN_BOX_TOP = "920px";
export const DRAIN_GROUP_BOX_ID = [DRAIN_BOX_ID];
export const DRAIN_CORRESPONDING_BOX_IDS = [YEL_OUTLANE_BOX_ID, RED_OUTLANE_BOX_ID, DRAIN_BOX_ID];
//#endregion
//#region all box ids
export const ALL_BOX_IDS = [
    START_BOX_ID,
    ...FERRISWHEEL_GROUP_BOX_IDS,
    ...BUMPER_GROUP_BOX_IDS,
    ...HAMMER_SPACE_GROUP_BOX_IDS,
    ...YEL_DROPTARGET_GROUP_BOX_IDS,
    ...RED_DROPTARGET_GROUP_BOX_IDS,
    ...DASHED_BOX_IDS,
    ...DRAIN_GROUP_BOX_ID,
];
//#endregion
//#region balls
export const BALL1_ID = "ball1"
export const BALL2_ID = "ball2"
export const BALL_IDS = [
    BALL1_ID,
    BALL2_ID,
];
export const BALL_AVAILABLE_BORDER_COLOR = "green";
export const BALL_SELECTED_BORDER_COLOR = SELECTED_BORDER_COLOR;
export const BALL_MOVED_BORDER_COLOR = "red";
//#endregion
//#region bonus indicators
//#region bonus indicator ids
export const FLIPPER_PASS_INDICATOR_ID = "indicator-flipper-pass";
export const OUTLANE_BONUS_INDICATOR_ID = "indicator-outlane-bonus";
export const BUMPER_BONUS_INDICATOR_ID = "indicator-bumper-bonus";
//#endregion
//#region bonus indicator border colors
export const BONUS_INDICATOR_INACTIVE_BORDER_COLOR = "transparent";
export const BONUS_INDICATOR_ACTIVE_BORDER_COLOR = "black";
//#endregion
//#endregion
//#region bonus boxes
export const FLIPPER_PASS_BONUS_BOX_ID = "bonus-box-flipper-pass";
export const FILL_TWO_HAMMER_SPACES_BONUS_BOX_ID = "bonus-fill-two-hammer-spaces";
export const YEL_MULTIBALL_BONUS_BOX_ID = "bonus-multiball-yel";
export const YEL_BONUS_POINTS_BONUS_BOX_ID = "bonus-points-yel";
export const BUMPER_BONUS_BOX_ID = "bonus-box-bumper-bonus";
export const OUTLANE_BONUS_BOX_ID = "bonus-box-outlane-bonus";
export const RED_MULTIBALL_BONUS_BOX_ID = "bonus-multiball-red";
export const RED_BONUS_POINTS_BONUS_BOX_ID = "bonus-points-red";
//#endregion
//#region dice
export const DIE1_ID = "die1";
export const DIE2_ID = "die2";
export const DICE_IDS = [
    DIE1_ID,
    DIE2_ID,
];
export const DIE_SELECTED_BORDER_COLOR = SELECTED_BORDER_COLOR;
export const DIE_AVAILABLE_BORDER_COLOR = "blue";
export const DIE_USED_BORDER_COLOR = "red";
//#endregion
//#region skill shot boxes
//#region skill shot box ids
export const SKILL_SHOT_BOX_1_ID = "skill-shot-box-1";
export const SKILL_SHOT_BOX_2_ID = "skill-shot-box-2";
export const SKILL_SHOT_BOX_3_ID = "skill-shot-box-3";
export const SKILL_SHOT_BOX_4_ID = "skill-shot-box-4";
export const SKILL_SHOT_BOX_5_ID = "skill-shot-box-5";
export const SKILL_SHOT_BOX_6_ID = "skill-shot-box-6";
//#endregion
//#region skill shot box border colors
export const SKILL_SHOT_BOX_UNCIRCLED_BORDER_COLOR = "transparent";
export const SKILL_SHOT_BOX_CIRCLED_BORDER_COLOR = "black";
export const SKILL_SHOT_BOX_SELECTED_BORDER_COLOR = SELECTED_BORDER_COLOR;
//#endregion
//#endregion
//#region round indicator ids
export const ROUND_1_INDICATOR_ID = "round-1-indicator";
export const ROUND_2_INDICATOR_ID = "round-2-indicator";
export const ROUND_3_INDICATOR_ID = "round-3-indicator";
//#endregion
//#region score indicator
export const SCORE_INDICATOR_ID = "score-indicator";
export const SCORE_PARAGRAPH_ID = "score";
//#endregion
//#region nudge button ids
export const DIE1_NUDGE_UP_BUTTON_ID = "nudge-up-button-die1";
export const DIE1_NUDGE_DN_BUTTON_ID = "nudge-dn-button-die1";
export const DIE2_NUDGE_UP_BUTTON_ID = "nudge-up-button-die2";
export const DIE2_NUDGE_DN_BUTTON_ID = "nudge-dn-button-die2";
//#endregion
//#region alert tray
export const ALERT_TRAY_ID = "alert-tray";
export const ALERT_PARAGRAPH_ID = "alert-paragraph"
export const OUTLANE_NUDGE_ALERT = "You cannot nudge into an outlane";
export const SELECT_SKILL_SHOT_ALERT = "Select a Skill Shot!";
export const OVERRIDE_DIE_WITH_SKILL_SHOT_ALERT = "Select a die to change";
export const MULTIBALL_ONLY_BALL_IS_SELECTED_ALERT = "Select a die to use";
export const MULTIBALL_ONLY_DIE_IS_SELECTED_ALERT = "Select a ball to move";
export const MULTIBALL_NEITHER_BALL_NOR_DIE_SELECTED_ALERT = "Select a ball and a die";
export const INVALID_CHOICE_ALERT = "Invalid choice!";
export const ATTEMPT_TO_MOVE_BALLS_TO_SAME_LOCATION_ALERT = "Balls cannot be on the same space";
export const GAME_OVER_ALERT = "Game over!";
export const HAMMER_SPACE_SEQUENCE_ALERT = "You must fill in the hammer spaces in sequence from 1 to 6!";
//#endregion
//#region misc
export const MAX_ROUNDS = 3;
export const UNFILLED_BACKGROUND_COLOR = "transparent";
export const FILLED_BACKGROUND_COLOR = "black";
export const POINTS_PER_USED_FLIPPER_BOX = 2;
export const RESTART_BUTTON_ID = "restart-button";
export const NUDGES_USED_PARAGRAPH_ID = "nudges-used";
//#endregion