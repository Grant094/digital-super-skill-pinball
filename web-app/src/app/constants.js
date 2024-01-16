//#region start
export const startFeatureId = "start";
//#endregion
//#region flippers
export const redFlipper = "red-flipper";
export const yelFlipper = "yel-flipper";
export const flipperIds = [
    redFlipper,
    yelFlipper,
];
//#endregion
//#region ferriswheel
//#region ferriswheelFeatureIds
export const ferriswheelcar12FeatureId = "feature-ferriswheel-car-12";
export const ferriswheelcar34FeatureId = "feature-ferriswheel-car-34";
export const ferriswheelcar56FeatureId = "feature-ferriswheel-car-56";
export const ferriswheelFeatureIds = [
    ferriswheelcar12FeatureId,
    ferriswheelcar34FeatureId,
    ferriswheelcar56FeatureId,
];
//#endregion
//#region ferriswheelBoxIds
export const ferriswheelcar12BoxId = "box-ferriswheel-car-12";
export const ferriswheelcar34BoxId = "box-ferriswheel-car-34";
export const ferriswheelcar56BoxId = "box-ferriswheel-car-56";
export const ferriswheelGroupBoxIds = [
    ferriswheelcar12BoxId,
    ferriswheelcar34BoxId,
    ferriswheelcar56BoxId,
];
//#endregion
export const ferriswheelCanReceiveFrom = [
    startFeatureId,
    yelFlipper,
];
//#endregion
//#region bumpers
//#region bumperBoxIds
//#region bumper12
//#region bumper121BoxIds
export const bumper121st1BoxId = "box-bumper-12-1st-1";
export const bumper122nd1BoxId = "box-bumper-12-2nd-1";
export const bumper121BoxIds = [
    bumper121st1BoxId,
    bumper122nd1BoxId,
];
//#endregion
//#region bumper122BoxIds
export const bumper121st2BoxId = "box-bumper-12-1st-2";
export const bumper122nd2BoxId = "box-bumper-12-2nd-2";
export const bumper122BoxIds = [
    bumper121st2BoxId,
    bumper122nd2BoxId,
];
//#endregion
export const bumper12BoxIds = [
    ...bumper121BoxIds,
    ...bumper122BoxIds
];
//#endregion
//#region bumper34
//#region bumper343BoxIds
export const bumper341st3BoxId = "box-bumper-34-1st-3";
export const bumper342nd3BoxId = "box-bumper-34-2nd-3";
export const bumper343BoxIds = [
    bumper341st3BoxId,
    bumper342nd3BoxId,
];
//#endregion
//#region bumper344BoxIds
export const bumper341st4BoxId = "box-bumper-34-1st-4";
export const bumper342nd4BoxId = "box-bumper-34-2nd-4";
export const bumper344BoxIds = [
    bumper341st4BoxId,
    bumper342nd4BoxId,
];
//#endregion
export const bumper34BoxIds = [
    ...bumper343BoxIds,
    ...bumper344BoxIds
];
//#endregion
//#region bumper56
//#region bumper565BoxIds
export const bumper561st5BoxId = "box-bumper-56-1st-5";
export const bumper562nd5BoxId = "box-bumper-56-2nd-5";
export const bumper565BoxIds = [
    bumper561st5BoxId,
    bumper562nd5BoxId,
];
//#endregion
//#region bumper566BoxIds
export const bumper561st6BoxId = "box-bumper-56-1st-6";
export const bumper562nd6BoxId = "box-bumper-56-2nd-6";
export const bumper566BoxIds = [
    bumper561st6BoxId,
    bumper562nd6BoxId
];
//#endregion
export const bumper56BoxIds = [
    ...bumper565BoxIds,
    ...bumper566BoxIds
];
//#endregion
export const bumperGroupBoxIds = [
    ...bumper12BoxIds,
    ...bumper34BoxIds,
    ...bumper56BoxIds,
];
//#endregion
//#region bumperFeatureIds
export const bumper12FeatureId = "feature-bumper-12";
export const bumper34FeatureId = "feature-bumper-34";
export const bumper56FeatureId = "feature-bumper-56";
export const bumperFeatureIds = [
    bumper12FeatureId,
    bumper34FeatureId,
    bumper56FeatureId,
];
//#endregion
//#region bumpersCanReceiveFrom
export const bumperAllCanReceiveFrom = [
    startFeatureId,
    ...ferriswheelFeatureIds,
    redFlipper,
    yelFlipper,
];
export const bumper12CanReceiveFrom = [
    ...bumperAllCanReceiveFrom,
    bumper56FeatureId,
];
export const bumper34CanReceiveFrom = [
    ...bumperAllCanReceiveFrom,
    bumper12FeatureId,
];
export const bumper56CanReceiveFrom = [
    ...bumperAllCanReceiveFrom,
    bumper34FeatureId,
]
//#endregion
//#endregion
//#region featofstrength
//#region featofstrengthFeatureIds
export const featofstrengthSpace1FeatureId = "feature-featofstrength-1";
export const featofstrengthSpace2FeatureId = "feature-featofstrength-2";
export const featofstrengthSpace3FeatureId = "feature-featofstrength-3";
export const featofstrengthSpace4FeatureId = "feature-featofstrength-4";
export const featofstrengthSpace5FeatureId = "feature-featofstrength-5";
export const featofstrengthSpace6FeatureId = "feature-featofstrength-6";
export const featofstrengthFeatureIds = [
    featofstrengthSpace1FeatureId,
    featofstrengthSpace2FeatureId,
    featofstrengthSpace3FeatureId,
    featofstrengthSpace4FeatureId,
    featofstrengthSpace5FeatureId,
    featofstrengthSpace6FeatureId,
];
//#endregion
//#region featofstrengthBoxIds
export const featofstrengthSpace1BoxId = "box-featofstrength-1";
export const featofstrengthSpace2BoxId = "box-featofstrength-2";
export const featofstrengthSpace3BoxId = "box-featofstrength-3";
export const featofstrengthSpace4BoxId = "box-featofstrength-4";
export const featofstrengthSpace5BoxId = "box-featofstrength-5";
export const featofstrengthSpace6BoxId = "box-featofstrength-6";
export const featofstrengthGroupBoxIds = [
    featofstrengthSpace1BoxId,
    featofstrengthSpace2BoxId,
    featofstrengthSpace3BoxId,
    featofstrengthSpace4BoxId,
    featofstrengthSpace5BoxId,
    featofstrengthSpace6BoxId,
];
//#endregion
export const featofstrengthCanReceiveFrom = [redFlipper];
//#endregion
//#region droptargets
//#region yelDropTargets
//#region yelDropTargetBoxIds
export const yelDropTarget12BoxId = "box-droptarget-yel-12";
export const yelDropTarget34BoxId = "box-droptarget-yel-34";
export const yelDropTarget56BoxId = "box-droptarget-yel-56";
export const yelDropTargetGroupBoxIds = [
    yelDropTarget12BoxId,
    yelDropTarget34BoxId,
    yelDropTarget56BoxId,
];
//#endregion
//#region yelDropTargetFeatureIds
export const yelDropTarget12FeatureId = "feature-droptarget-yel-12";
export const yelDropTarget34FeatureId = "feature-droptarget-yel-34";
export const yelDropTarget56FeatureId = "feature-droptarget-yel-56";
export const yelDropTargetFeatureIds = [
    yelDropTarget12FeatureId,
    yelDropTarget34FeatureId,
    yelDropTarget56FeatureId,
];
//#endregion
//#endregion
//#region redDropTargets
//#region redDropTargetBoxIds
export const redDropTarget12BoxId = "box-droptarget-red-12";
export const redDropTarget3BoxId = "box-droptarget-red-3";
export const redDropTarget4BoxId = "box-droptarget-red-4";
export const redDropTarget56BoxId = "box-droptarget-red-56";
export const redDropTargetGroupBoxIds = [
    redDropTarget12BoxId,
    redDropTarget3BoxId,
    redDropTarget4BoxId,
    redDropTarget56BoxId,
];
//#endregion
//#region redDropTargetFeatureIds
export const redDropTarget12FeatureId = "feature-droptarget-red-12";
export const redDropTarget3FeatureId = "feature-droptarget-red-3";
export const redDropTarget4FeatureId = "feature-droptarget-red-4";
export const redDropTarget56FeatureId = "feature-droptarget-red-56";
export const redDropTargetFeatureIds = [
    redDropTarget12FeatureId,
    redDropTarget3FeatureId,
    redDropTarget4FeatureId,
    redDropTarget56FeatureId,
];
//#endregion
//#endregion
export const dropTargetFeatureIds = [
    ...redDropTargetFeatureIds,
    ...yelDropTargetFeatureIds,
];
export const allDropTargetsCanReceiveFrom = [
    startFeatureId,
    ...ferriswheelFeatureIds,
    ...bumperFeatureIds,
    ...featofstrengthFeatureIds,
];
export const yelDropTargetsCanReceiveFrom = [
    ...allDropTargetsCanReceiveFrom,
    yelFlipper,
];
export const redDropTargetsCanReceiveFrom = [
    ...allDropTargetsCanReceiveFrom,
    redFlipper,
]
//#endregion
//#region dashedBoxIds
//#region flipperBoxIds
//#region redFlipperBoxIds
export const redFlipperBox3BoxId = "box-redflipperbox-3";
export const redFlipperBox45BoxId = "box-redflipperbox-45";
export const redFlipperBox6BoxId = "box-redflipperbox-6";
export const redFlipperGroupBoxIds = [
    redFlipperBox3BoxId,
    redFlipperBox45BoxId,
    redFlipperBox6BoxId,
];
//#endregion
//#region yelFlipperBoxIds
export const yelFlipperBox1BoxId = "box-yelflipperbox-1";
export const yelFlipperBox23BoxId = "box-yelflipperbox-23";
export const yelFlipperBox4BoxId = "box-yelflipperbox-4";
export const yelFlipperGroupBoxIds = [
    yelFlipperBox1BoxId,
    yelFlipperBox23BoxId,
    yelFlipperBox4BoxId,
];
//#endregion
export const flipperGroupBoxIds = [...redFlipperGroupBoxIds, ...yelFlipperGroupBoxIds];
//#endregion
//#region inlanes
export const redInlaneBox = "box-redinlane-2";
export const yelInlaneBox = "box-yelinlane-5";
export const inlaneBoxIds = [
    redInlaneBox,
    yelInlaneBox,
];
//#endregion
//#region outlanes
export const redOutlaneBox = "box-redoutlane-1";
export const yelOutlaneBox = "box-yeloutlane-6";
export const outlaneBoxIds = [
    redOutlaneBox,
    yelOutlaneBox,
];
//#endregion
export const dashedBoxIds = [
    ...flipperGroupBoxIds,
    ...inlaneBoxIds,
    ...outlaneBoxIds,
];
//#endregion
//#region drain
export const drainBoxId = "box-drain-123456";
export const drainGroupBoxIds = [drainBoxId];
//#endregion
//#region allFeatureIds
export const allFeatureIds = [
    startFeatureId,
    ...ferriswheelFeatureIds,
    ...featofstrengthFeatureIds,
    ...bumperFeatureIds,
    ...flipperIds,
    ...dropTargetFeatureIds
];
//#endregion
