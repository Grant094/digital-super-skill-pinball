//#region start
export const startFeatureId = "start";
export const startTop = "240px";
export const startLeft = "450px";
//#endregion
//#region flippers
export const redFlipperFeatureId = "feature-red-flipper";
export const yelFlipperFeatureId = "feature-yel-flipper";
export const flipperFeatureIds = [
    redFlipperFeatureId,
    yelFlipperFeatureId,
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
export const ferriswheelcarsCanReceiveFromFeatureIds = [
    startFeatureId,
    yelFlipperFeatureId,
];
//#endregion
//#region bumpers
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
//#region bumpersCanReceiveFrom
export const bumpersCanReceiveFromFeatureIds = [
    startFeatureId,
    ...ferriswheelFeatureIds,
    redFlipperFeatureId,
    yelFlipperFeatureId,
];
export const bumper12CanReceiveFromFeatureIds = [
    ...bumpersCanReceiveFromFeatureIds,
    bumper56FeatureId,
];
export const bumper34CanReceiveFromFeatureIds = [
    ...bumpersCanReceiveFromFeatureIds,
    bumper12FeatureId,
];
export const bumper56CanReceiveFromFeatureIds = [
    ...bumpersCanReceiveFromFeatureIds,
    bumper34FeatureId,
]
//#endregion
//#endregion
//#region hammerSpaces
//#region hammerSpaceFeatureIds
export const hammerSpace1FeatureId = "feature-hammer-space-1";
export const hammerSpace2FeatureId = "feature-hammer-space-2";
export const hammerSpace3FeatureId = "feature-hammer-space-3";
export const hammerSpace4FeatureId = "feature-hammer-space-4";
export const hammerSpace5FeatureId = "feature-hammer-space-5";
export const hammerSpace6FeatureId = "feature-hammer-space-6";
export const hammerSpaceFeatureIds = [
    hammerSpace1FeatureId,
    hammerSpace2FeatureId,
    hammerSpace3FeatureId,
    hammerSpace4FeatureId,
    hammerSpace5FeatureId,
    hammerSpace6FeatureId,
];
//#endregion
//#region hammerSpaceGroupBoxIds
export const hammerSpace1BoxId = "box-hammer-space-1";
export const hammerSpace2BoxId = "box-hammer-space-2";
export const hammerSpace3BoxId = "box-hammer-space-3";
export const hammerSpace4BoxId = "box-hammer-space-4";
export const hammerSpace5BoxId = "box-hammer-space-5";
export const hammerSpace6BoxId = "box-hammer-space-6";
export const hammerSpaceGroupBoxIds = [
    hammerSpace1BoxId,
    hammerSpace2BoxId,
    hammerSpace3BoxId,
    hammerSpace4BoxId,
    hammerSpace5BoxId,
    hammerSpace6BoxId,
];
//#endregion
export const hammerSpacesCanReceiveFromFeatureIds = [redFlipperFeatureId];
//#endregion
//#region droptargets
//#region yelDropTargets
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
//#endregion
//#region redDropTargets
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
//#endregion
export const dropTargetFeatureIds = [
    ...redDropTargetFeatureIds,
    ...yelDropTargetFeatureIds,
];
export const dropTargetsCanReceiveFromFeatureIds = [
    startFeatureId,
    ...ferriswheelFeatureIds,
    ...bumperFeatureIds,
    ...hammerSpaceFeatureIds,
];
export const yelDropTargetsCanReceiveFromFeatureIds = [
    ...dropTargetsCanReceiveFromFeatureIds,
    yelFlipperFeatureId,
];
export const redDropTargetsCanReceiveFromFeatureIds = [
    ...dropTargetsCanReceiveFromFeatureIds,
    redFlipperFeatureId,
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
export const redInlaneBoxId = "box-redinlane-2";
export const yelInlaneBoxId = "box-yelinlane-5";
export const inlaneBoxIds = [
    redInlaneBoxId,
    yelInlaneBoxId,
];
//#endregion
//#region outlanes
export const redOutlaneBoxId = "box-redoutlane-1";
export const yelOutlaneBoxId = "box-yeloutlane-6";
export const outlaneBoxIds = [
    redOutlaneBoxId,
    yelOutlaneBoxId,
];
//#endregion
export const dashedBoxIds = [
    ...flipperGroupBoxIds,
    ...inlaneBoxIds,
    ...outlaneBoxIds,
];
//#endregion
//#region drain
export const drainFeatureId = "drain";
export const drainFeatureLeft = "257px";
export const drainFeatureTop = "1000px";
export const drainBoxId = "box-drain-123456";
export const drainGroupBoxIds = [drainBoxId];
//#endregion
//#region allFeatureIds
export const allFeatureIds = [
    startFeatureId,
    ...ferriswheelFeatureIds,
    ...hammerSpaceFeatureIds,
    ...bumperFeatureIds,
    ...flipperFeatureIds,
    ...dropTargetFeatureIds
];
//#endregion
//#region balls
export const ball1Id = "ball1"
export const ball2Id = "ball2"
export const ballIds = [
    ball1Id,
    ball2Id,
];
//#endregion
export const MAX_ROUNDS = 3;