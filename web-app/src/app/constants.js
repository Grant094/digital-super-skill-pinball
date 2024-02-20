//#region start
export const START_FEATURE_ID = "start";
export const START_FEATURE_TOP = "240px";
export const START_FEATURE_LEFT = "450px";
//#endregion
//#region flippers
export const RED_FLIPPER_FEATURE_ID = "feature-red-flipper";
export const YEL_FLIPPER_FEATURE_ID = "feature-yel-flipper";
export const FLIPPER_FEATURE_IDS = [
    RED_FLIPPER_FEATURE_ID,
    YEL_FLIPPER_FEATURE_ID,
];
//#endregion
//#region ferriswheel
//#region ferriswheelFeatureIds
export const FERRISWHEEL_CAR_12_FEATURE_ID = "feature-ferriswheel-car-12";
export const FERRISWHEEL_CAR_34_FEATURE_ID = "feature-ferriswheel-car-34";
export const FERRISWHEEL_CAR_56_FEATURE_ID = "feature-ferriswheel-car-56";
export const FERRISWHEEL_FEATURE_IDS = [
    FERRISWHEEL_CAR_12_FEATURE_ID,
    FERRISWHEEL_CAR_34_FEATURE_ID,
    FERRISWHEEL_CAR_56_FEATURE_ID,
];
//#endregion
//#region ferriswheelBoxIds
export const FERRISWHEEL_CAR_12_BOX_ID = "box-ferriswheel-car-12";
export const FERRISWHEEL_CAR_34_BOX_ID = "box-ferriswheel-car-34";
export const FERRISWHEEL_CAR_56_BOX_ID = "box-ferriswheel-car-56";
export const FERRISWHEEL_GROUP_BOX_IDS = [
    FERRISWHEEL_CAR_12_BOX_ID,
    FERRISWHEEL_CAR_34_BOX_ID,
    FERRISWHEEL_CAR_56_BOX_ID,
];
//#endregion
export const FERRISWHEEL_CARS_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS = [
    START_FEATURE_ID,
    YEL_FLIPPER_FEATURE_ID,
];
//#endregion
//#region bumpers
//#region bumperFeatureIds
export const BUMPER_12_FEATURE_ID = "feature-bumper-12";
export const BUMPER_34_FEATURE_ID = "feature-bumper-34";
export const BUMPER_56_FEATURE_ID = "feature-bumper-56";
export const BUMPER_FEATURE_IDS = [
    BUMPER_12_FEATURE_ID,
    BUMPER_34_FEATURE_ID,
    BUMPER_56_FEATURE_ID,
];
//#endregion
//#region bumperBoxIds
//#region bumper12
//#region bumper121BoxIds
export const BUMPER_12_1ST_1_BOX_ID = "box-bumper-12-1st-1";
export const BUMPER_12_2ND_1_BOX_ID = "box-bumper-12-2nd-1";
export const BUMPER_12_1_BOX_IDS = [
    BUMPER_12_1ST_1_BOX_ID,
    BUMPER_12_2ND_1_BOX_ID,
];
//#endregion
//#region bumper122BoxIds
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
//#region bumper34
//#region bumper343BoxIds
export const BUMPER_34_1ST_3_BOX_ID = "box-bumper-34-1st-3";
export const BUMPER_34_2ND_3_BOX_ID = "box-bumper-34-2nd-3";
export const BUMPER_34_3_BOX_ID = [
    BUMPER_34_1ST_3_BOX_ID,
    BUMPER_34_2ND_3_BOX_ID,
];
//#endregion
//#region bumper344BoxIds
export const BUMPER_34_1ST_4_BOX_ID = "box-bumper-34-1st-4";
export const BUMPER_34_2ND_4_BOX_ID = "box-bumper-34-2nd-4";
export const BUMPER_34_4_BOX_IDS = [
    BUMPER_34_1ST_4_BOX_ID,
    BUMPER_34_2ND_4_BOX_ID,
];
//#endregion
export const BUMPER_34_BOX_IDS = [
    ...BUMPER_34_3_BOX_ID,
    ...BUMPER_34_4_BOX_IDS
];
//#endregion
//#region bumper56
//#region bumper565BoxIds
export const BUMPER_56_1ST_5_BOX_ID = "box-bumper-56-1st-5";
export const BUMPER_56_2ND_5_BOX_ID = "box-bumper-56-2nd-5";
export const BUMPER_56_5_BOX_IDS = [
    BUMPER_56_1ST_5_BOX_ID,
    BUMPER_56_2ND_5_BOX_ID,
];
//#endregion
//#region bumper566BoxIds
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
//#region bumpersCanReceiveFrom
export const BUMPERS_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS = [
    START_FEATURE_ID,
    ...FERRISWHEEL_FEATURE_IDS,
    RED_FLIPPER_FEATURE_ID,
    YEL_FLIPPER_FEATURE_ID,
];
export const BUMPER_12_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS = [
    ...BUMPERS_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS,
    BUMPER_56_FEATURE_ID,
];
export const BUMPER_34_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS = [
    ...BUMPERS_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS,
    BUMPER_12_FEATURE_ID,
];
export const BUMPER_56_DEFAULT_CAN_RECIEVE_FROM_FEATURE_IDS = [
    ...BUMPERS_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS,
    BUMPER_34_FEATURE_ID,
]
//#endregion
//#endregion
//#region hammerSpaces
//#region hammerSpaceFeatureIds
export const HAMMER_SPACE_1_FEATURE_ID = "feature-hammer-space-1";
export const HAMMER_SPACE_2_FEATURE_ID = "feature-hammer-space-2";
export const HAMMER_SPACE_3_FEATURE_ID = "feature-hammer-space-3";
export const HAMMER_SPACE_4_FEATURE_ID = "feature-hammer-space-4";
export const HAMMER_SPACE_5_FEATURE_ID = "feature-hammer-space-5";
export const HAMMER_SPACE_6_FEATURE_ID = "feature-hammer-space-6";
export const HAMMER_SPACE_FEATURE_IDS = [
    HAMMER_SPACE_1_FEATURE_ID,
    HAMMER_SPACE_2_FEATURE_ID,
    HAMMER_SPACE_3_FEATURE_ID,
    HAMMER_SPACE_4_FEATURE_ID,
    HAMMER_SPACE_5_FEATURE_ID,
    HAMMER_SPACE_6_FEATURE_ID,
];
//#endregion
//#region hammerSpaceGroupBoxIds
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
export const HAMMER_SPACES_DEFAULT_CAN_RECIEVE_FROM_FEATURE_IDS = [RED_FLIPPER_FEATURE_ID];
//#endregion
//#region droptargets
//#region yelDropTargets
//#region yelDropTargetFeatureIds
export const YEL_DROPTARGET_12_FEATURE_ID = "feature-droptarget-yel-12";
export const YEL_DROPTARGET_34_FEATURE_ID = "feature-droptarget-yel-34";
export const YEL_DROPTARGET_56_FEATURE_ID = "feature-droptarget-yel-56";
export const YEL_DROPTARGET_FEATURE_IDS = [
    YEL_DROPTARGET_12_FEATURE_ID,
    YEL_DROPTARGET_34_FEATURE_ID,
    YEL_DROPTARGET_56_FEATURE_ID,
];
//#endregion
//#region yelDropTargetBoxIds
export const YEL_DROPTARGET_12_BOX_ID = "box-droptarget-yel-12";
export const YEL_DROPTARGET_34_BOX_ID = "box-droptarget-yel-34";
export const YEL_DROPTARGET_56_BOX_ID = "box-droptarget-yel-56";
export const YEL_DROPTARGET_GROUP_BOX_IDS = [
    YEL_DROPTARGET_12_BOX_ID,
    YEL_DROPTARGET_34_BOX_ID,
    YEL_DROPTARGET_56_BOX_ID,
];
//#endregion
//#endregion
//#region redDropTargets
//#region redDropTargetFeatureIds
export const RED_DROPTARGET_12_FEATURE_ID = "feature-droptarget-red-12";
export const RED_DROPTARGET_3_FEATURE_ID = "feature-droptarget-red-3";
export const RED_DROPTARGET_4_FEATURE_ID = "feature-droptarget-red-4";
export const RED_DROPTARGET_56_FEATURE_ID = "feature-droptarget-red-56";
export const RED_DROPTARGET_FEATURE_IDS = [
    RED_DROPTARGET_12_FEATURE_ID,
    RED_DROPTARGET_3_FEATURE_ID,
    RED_DROPTARGET_4_FEATURE_ID,
    RED_DROPTARGET_56_FEATURE_ID,
];
//#endregion
//#region redDropTargetBoxIds
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
//#endregion
export const DROPTARGET_FEATURE_IDS = [
    ...RED_DROPTARGET_FEATURE_IDS,
    ...YEL_DROPTARGET_FEATURE_IDS,
];
export const DROPTARGETS_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS = [
    START_FEATURE_ID,
    ...FERRISWHEEL_FEATURE_IDS,
    ...BUMPER_FEATURE_IDS,
    ...HAMMER_SPACE_FEATURE_IDS,
];
export const YEL_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS = [
    ...DROPTARGETS_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS,
    YEL_FLIPPER_FEATURE_ID,
];
export const RED_DROPTARGETS_CAN_RECEIVE_FROM_FEATURE_IDS = [
    ...DROPTARGETS_DEFAULT_CAN_RECEIVE_FROM_FEATURE_IDS,
    RED_FLIPPER_FEATURE_ID,
]
//#endregion
//#region dashedBoxIds
//#region flipperBoxIds
//#region redFlipperBoxIds
export const RED_FLIPPER_BOX_3_BOX_ID = "box-redflipperbox-3";
export const RED_FLIPPER_BOX_45_BOX_ID = "box-redflipperbox-45";
export const RED_FLIPPER_BOX_6_BOX_ID = "box-redflipperbox-6";
export const RED_FLIPPER_GROUP_BOX_IDS = [
    RED_FLIPPER_BOX_3_BOX_ID,
    RED_FLIPPER_BOX_45_BOX_ID,
    RED_FLIPPER_BOX_6_BOX_ID,
];
//#endregion
//#region yelFlipperBoxIds
export const YEL_FLIPPER_BOX_1_BOX_ID = "box-yelflipperbox-1";
export const YEL_FLIPPER_BOX_23_BOX_ID = "box-yelflipperbox-23";
export const YEL_FLIPPER_BOX_4_BOX_ID = "box-yelflipperbox-4";
export const YEL_FLIPPER_GROUP_BOX_IDS = [
    YEL_FLIPPER_BOX_1_BOX_ID,
    YEL_FLIPPER_BOX_23_BOX_ID,
    YEL_FLIPPER_BOX_4_BOX_ID,
];
//#endregion
export const FLIPPER_GROUP_BOX_IDS = [...RED_FLIPPER_GROUP_BOX_IDS, ...YEL_FLIPPER_GROUP_BOX_IDS];
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
    ...FLIPPER_GROUP_BOX_IDS,
    ...INLANE_BOX_IDS,
    ...OUTLANE_BOX_IDS,
];
//#endregion
//#region drain
export const DRAIN_FEATURE_ID = "drain";
export const DRAIN_FEATURE_LEFT = "257px";
export const DRAIN_FEATURE_TOP = "1000px";
export const DRAIN_BOX_ID = "box-drain-123456";
export const DRAIN_GROUP_BOX_ID = [DRAIN_BOX_ID];
export const DRAIN_CORRESPONDING_BOX_IDS = [YEL_OUTLANE_BOX_ID, RED_OUTLANE_BOX_ID, DRAIN_BOX_ID];
//#endregion
//#region allFeatureIds
export const ALL_FEATURE_IDS = [
    START_FEATURE_ID,
    ...FERRISWHEEL_FEATURE_IDS,
    ...HAMMER_SPACE_FEATURE_IDS,
    ...BUMPER_FEATURE_IDS,
    ...FLIPPER_FEATURE_IDS,
    ...DROPTARGET_FEATURE_IDS
];
//#endregion
//#region allBoxIds
export const ALL_BOX_IDS = [
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
export const BUMPER_BONUS_BOX_ID = "bonus-box-bumper-bonus";
//#endregion
//#region dice
export const DIE1_ID = "die1";
export const DIE2_ID = "die2";
export const DICE_IDS = [
    DIE1_ID,
    DIE2_ID,
];
//#endregion
//#region skill shot boxes
//#region IDs
export const SKILL_SHOT_BOX_1_ID = "skill-shot-box-1";
export const SKILL_SHOT_BOX_2_ID = "skill-shot-box-2";
export const SKILL_SHOT_BOX_3_ID = "skill-shot-box-3";
export const SKILL_SHOT_BOX_4_ID = "skill-shot-box-4";
export const SKILL_SHOT_BOX_5_ID = "skill-shot-box-5";
export const SKILL_SHOT_BOX_6_ID = "skill-shot-box-6";
//#endregion
//#region border colors
export const SKILL_SHOT_BOX_AVAILABLE_BORDER_COLOR = "skyblue";
export const SKILL_SHOT_BOX_GAINED_BORDER_COLOR = "black";
export const SKILL_SHOT_BOX_SELECTED_BORDER_COLOR = "gold";
//#endregion
//#endregion
//#region roundIndicatorIds
export const ROUND_1_INDICATOR_ID = "round-1-indicator";
export const ROUND_2_INDICATOR_ID = "round-2-indicator";
export const ROUND_3_INDICATOR_ID = "round-3-indicator";
//#endregion
//#region scoreIndicator
export const SCORE_INDICATOR_ID = "score-indicator";
export const SCORE_PARAGRAPH_ID = "score";
//#endregion
//#region nudgebuttons
export const DIE1_NUDGE_UP_BUTTON_ID = "nudge-up-button-die1";
export const DIE1_NUDGE_DN_BUTTON_ID = "nudge-dn-button-die1";
export const DIE2_NUDGE_UP_BUTTON_ID = "nudge-up-button-die2";
export const DIE2_NUDGE_DN_BUTTON_ID = "nudge-dn-button-die2";
//#endregion
//#region AlertTray
export const ALERT_TRAY_ID = "alert-tray";
export const ALERT_PARAGRAPH_ID = "alert-paragraph"
export const OUTLANE_NUDGE_ALERT = "You cannot nudge into an outlane";
export const SELECT_SKILL_SHOT_ALERT = "Select a Skill Shot!";
export const OVERRIDE_DIE_WITH_SKILL_SHOT_ALERT = "Select a die to change";
export const INVALID_CHOICE_ALERT = "Invalid choice!";
//#endregion
//#region misc
export const MAX_ROUNDS = 3;
export const UNFILLED_BACKGROUND_COLOR = "transparent";
export const FILLED_BACKGROUND_COLOR = "black";
export const POINTS_PER_USED_FLIPPER_BOX = 2;
export const RESTART_BUTTON_ID = "restart-button";
export const NUDGES_USED_PARAGRAPH_ID = "nudges-used";
//#endregion