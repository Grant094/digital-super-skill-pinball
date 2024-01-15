export const startFeatureId = "start";
export const redFlipper = "red-flipper";
export const yelFlipper = "yel-flipper";
export const flipperIds = [
    redFlipper,
    yelFlipper,
];
export const ferriswheelcar12FeatureId = "feature-ferriswheel-car-12";
export const ferriswheelcar34FeatureId = "feature-ferriswheel-car-34";
export const ferriswheelcar56FeatureId = "feature-ferriswheel-car-56";
export const ferriswheelFeatureIds = [
    ferriswheelcar12FeatureId,
    ferriswheelcar34FeatureId,
    ferriswheelcar56FeatureId,
];
export const ferriswheelcar12BoxId = "box-ferriswheel-car-12";
export const ferriswheelcar34BoxId = "box-ferriswheel-car-34";
export const ferriswheelcar56BoxId = "box-ferriswheel-car-56";
export const ferriswheelGroupBoxIds = [
    ferriswheelcar12BoxId,
    ferriswheelcar34BoxId,
    ferriswheelcar56BoxId,
];
export const ferriswheelCanReceiveFrom = [
    startFeatureId,
    yelFlipper,
];
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
export const featofstrengthCanReceiveFrom = [redFlipper];
export const bumper121st1BoxId = "box-bumper-12-1st-1";
export const bumper122nd1BoxId = "box-bumper-12-2nd-1";
export const bumper121BoxIds = [bumper121st1BoxId, bumper122nd1BoxId,];
export const bumper121st2BoxId = "box-bumper-12-1st-2";
export const bumper122nd2BoxId = "box-bumper-12-2nd-2";
export const bumper122BoxIds = [bumper121st2BoxId, bumper122nd2BoxId,];
export const bumper12BoxIds = [...bumper121BoxIds, ...bumper122BoxIds];
export const bumper341st3BoxId = "box-bumper-34-1st-3";
export const bumper342nd3BoxId = "box-bumper-34-2nd-3";
export const bumper343BoxIds = [bumper341st3BoxId, bumper342nd3BoxId,];
export const bumper341st4BoxId = "box-bumper-34-1st-4";
export const bumper342nd4BoxId = "box-bumper-34-2nd-4";
export const bumper344BoxIds = [bumper341st4BoxId, bumper342nd4BoxId,];
export const bumper34BoxIds = [...bumper343BoxIds, ...bumper344BoxIds];
export const bumper561st5BoxId = "box-bumper-56-1st-5";
export const bumper562nd5BoxId = "box-bumper-56-2nd-5";
export const bumper565BoxIds = [bumper561st5BoxId, bumper562nd5BoxId,];
export const bumper561st6BoxId = "box-bumper-56-1st-6";
export const bumper562nd6BoxId = "box-bumper-56-2nd-6";
export const bumper566BoxIds = [bumper561st6BoxId, bumper562nd6BoxId];
export const bumper56BoxIds = [...bumper565BoxIds, ...bumper566BoxIds];
export const bumperGroupBoxIds = [
    ...bumper12BoxIds,
    ...bumper34BoxIds,
    ...bumper56BoxIds,
];
export const bumper12FeatureId = "feature-bumper-12";
export const bumper34FeatureId = "feature-bumper-34";
export const bumper56FeatureId = "feature-bumper-56";
export const bumperFeatureIds = [
    bumper12FeatureId,
    bumper34FeatureId,
    bumper56FeatureId,
];
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
export const yelDropTarget12BoxId = "box-droptarget-yel-12";
export const yelDropTarget34BoxId = "box-droptarget-yel-34";
export const yelDropTarget56BoxId = "box-droptarget-yel-56";
export const yelDropTargetGroupBoxIds = [
    yelDropTarget12BoxId,
    yelDropTarget34BoxId,
    yelDropTarget56BoxId,
];
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
export const dropTargetAllCanReceiveFrom = [
    startFeatureId,
    ...ferriswheelFeatureIds,
    ...bumperFeatureIds,
    ...featofstrengthFeatureIds,
];
export const redFlipperBox3BoxId = "box-redflipperbox-3";
export const redFlipperBox45BoxId = "box-redflipperbox-45";
export const redFlipperBox6BoxId = "box-redflipperbox-6";
export const redFlipperGroupBoxIds = [
    redFlipperBox3BoxId,
    redFlipperBox45BoxId,
    redFlipperBox6BoxId,
];
export const yelFlipperBox1BoxId = "box-yelflipperbox-1";
export const yelFlipperBox23BoxId = "box-yelflipperbox-23";
export const yelFlipperBox4BoxId = "box-yelflipperbox-4";
export const yelFlipperGroupBoxIds = [
    yelFlipperBox1BoxId,
    yelFlipperBox23BoxId,
    yelFlipperBox4BoxId,
];
export const redInlaneBox = "box-redinlane-2";
export const yelInlaneBox = "box-yelinlane-5";
export const inlaneBoxIds = [
    redInlaneBox,
    yelInlaneBox,
];
export const redOutlaneBox = "box-redoutlane-1";
export const yelOutlaneBox = "box-yeloutlane-6";
export const outlaneBoxIds = [
    redOutlaneBox,
    yelOutlaneBox,
];
export const flipperGroupBoxIds = [...redFlipperGroupBoxIds, ...yelFlipperGroupBoxIds];
export const dashedBoxIds = [...flipperGroupBoxIds, ...inlaneBoxIds, ...outlaneBoxIds];
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
export const yelDropTarget12FeatureId = "feature-droptarget-yel-12";
export const yelDropTarget34FeatureId = "feature-droptarget-yel-34";
export const yelDropTarget56FeatureId = "feature-droptarget-yel-56";
export const yelDropTargetFeatureIds = [
    yelDropTarget12FeatureId,
    yelDropTarget34FeatureId,
    yelDropTarget56FeatureId,
];
export const dropTargetFeatureIds = [
    ...redDropTargetFeatureIds,
    ...yelDropTargetFeatureIds,
];
export const drainBoxId = "box-drain-123456";
export const drainGroupBoxIds = [drainBoxId];
export const allFeatureIds = [startFeatureId, ...ferriswheelFeatureIds, ...featofstrengthFeatureIds, ...bumperFeatureIds, ...flipperIds, ...dropTargetFeatureIds];
