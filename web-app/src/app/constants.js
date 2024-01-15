export const ferriswheelGroupBoxIds = [
    "box-ferriswheel-car-12",
    "box-ferriswheel-car-34",
    "box-ferriswheel-car-56",
];
export const ferriswheelFeatureIds = [
    "feature-ferriswheel-car-12",
    "feature-ferriswheel-car-34",
    "feature-ferriswheel-car-56",
];
export const featofstrengthFeatureIds = [
    "feature-featofstrength-1",
    "feature-featofstrength-2",
    "feature-featofstrength-3",
    "feature-featofstrength-4",
    "feature-featofstrength-5",
    "feature-featofstrength-6",
];
export const featofstrengthGroupBoxIds = [
    "box-featofstrength-1",
    "box-featofstrength-2",
    "box-featofstrength-3",
    "box-featofstrength-4",
    "box-featofstrength-5",
    "box-featofstrength-6",
];
export const bumperGroupBoxIds = [
    'box-bumper-12-1st-1',
    'box-bumper-12-2nd-1',
    'box-bumper-12-1st-2',
    'box-bumper-12-2nd-2',
    'box-bumper-34-1st-3',
    'box-bumper-34-2nd-3',
    'box-bumper-34-1st-4',
    'box-bumper-34-2nd-4',
    'box-bumper-56-1st-5',
    'box-bumper-56-2nd-5',
    'box-bumper-56-1st-6',
    'box-bumper-56-2nd-6'
];
export const bumperFeatureIds = [
    'feature-bumper-12',
    'feature-bumper-34',
    'feature-bumper-56'
];
export const yelDropTargetGroupBoxIds = [
    'box-droptarget-yel-12',
    'box-droptarget-yel-34',
    'box-droptarget-yel-56'
];
export const redDropTargetGroupBoxIds = [
    'box-droptarget-red-12',
    'box-droptarget-red-3',
    'box-droptarget-red-4',
    'box-droptarget-red-56'
];
export const redFlipperGroupBoxIds = [
    'red-flipper-box-3',
    'red-flipper-box-45',
    'red-flipper-box-6'
];
export const yelFlipperGroupBoxIds = [
    'yel-flipper-box-1',
    'yel-flipper-box-23',
    'yel-flipper-box-4'
];
export const inlaneBoxIds = [
    'red-flipper-inlane-box-2',
    'yel-flipper-inlane-box-5',
];
export const outlaneBoxIds = [
    'red-outlane-1',
    'yel-outlane-6'
];
export const flipperGroupBoxIds = [...redFlipperGroupBoxIds, ...yelFlipperGroupBoxIds];
export const dashedBoxIds = [...flipperGroupBoxIds, ...inlaneBoxIds, ...outlaneBoxIds];
export const flipperIds = [
    'red-flipper',
    'yel-flipper'
];
export const yelDropTargetFeatureIds = [
    'feature-droptarget-yel-12',
    'feature-droptarget-yel-34',
    'feature-droptarget-yel-56'
];
export const redDropTargetFeatureIds = [
    'feature-droptarget-red-12',
    'feature-droptarget-red-3',
    'feature-droptarget-red-4',
    'feature-droptarget-red-56'
];
export const allFeatureIds = [...ferriswheelFeatureIds, ...featofstrengthFeatureIds, ...bumperFeatureIds, ...flipperIds, ...yelDropTargetFeatureIds, ...redDropTargetFeatureIds, 'start'];
