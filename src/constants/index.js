import {
	Bridge,
	Handstand,
	PullUp,
	PushUp,
	Squat,
	LegRaise,
	Rest,
} from "../../assets/mainSvg";

export const svgSelector = (name) =>
	big6.filter((item) => item.key === name)[0].value;

export const big6 = [
	{ key: "Pull Ups", value: <PullUp /> },
	{ key: "Push Ups", value: <PushUp /> },
	{ key: "Squats", value: <Squat /> },
	{ key: "Leg Raises", value: <LegRaise /> },
	{ key: "Handstands", value: <Handstand /> },
	{ key: "Bridges", value: <Bridge /> },
	{ key: "Rest", value: <Rest /> },
];
