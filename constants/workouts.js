import {
	Bridge,
	Handstand,
	PullUp,
	PushUp,
	Squat,
	LegRaise,
	Rest,
} from "../assets/mainSvg";

export const workouts = {
	"Pull Ups": <PullUp />,
	"Push Ups": <PushUp />,
	Squats: <Squat />,
	"Leg Raises": <LegRaise />,
	Handstands: <Handstand />,
	Bridges: <Bridge />,
	Rest: <Rest />,
};

export const big6 = [
	{ key: "Pull Ups", value: <PullUp /> },
	{ key: "Push Ups", value: <PushUp /> },
	{ key: "Squats", value: <Squat /> },
	{ key: "Leg Raises", value: <LegRaise /> },
	{ key: "Handstands", value: <Handstand /> },
	{ key: "Bridges", value: <Bridge /> },
];
