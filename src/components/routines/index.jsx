import React, { useState } from "react";
import { EastIcon, WestIcon } from "../../../assets/icons";
import {
	Button,
	ButtonWrapper,
	DayContainer,
	SVGContainer,
	Title,
	Wrapper,
} from "./styles";
import { workouts } from "../../../constants/workouts";

const routines = [
	{
		name: "New Blood",
		days: [
			[workouts["Push Ups"], workouts["Leg Raises"]],
			[workouts["Rest"]],
			[workouts["Rest"]],
			[workouts["Rest"]],
			[workouts["Pull Ups"], workouts["Squats"]],
			[workouts["Rest"]],
			[workouts["Rest"]],
		],
	},
	{
		name: "Good Behavior",
		days: [
			[workouts["Push Ups"], workouts["Leg Raises"]],
			[workouts["Rest"]],
			[workouts["Pull Ups"], workouts["Squats"]],
			[workouts["Rest"]],
			[workouts["Handstands"], workouts["Bridges"]],
			[workouts["Rest"]],
			[workouts["Rest"]],
		],
	},
	{
		name: "Veterano",
		days: [
			[workouts["Pull Ups"]],
			[workouts["Bridges"]],
			[workouts["Handstands"]],
			[workouts["Leg Raises"]],
			[workouts["Squats"]],
			[workouts["Push Ups"]],
			[workouts["Rest"]],
		],
	},
	{
		name: "Solitary Confinement",
		days: [
			[workouts["Pull Ups"], workouts["Squats"]],
			[workouts["Push Ups"], workouts["Leg Raises"]],
			[workouts["Handstands"], workouts["Bridges"]],
			[workouts["Pull Ups"], workouts["Squats"]],
			[workouts["Push Ups"], workouts["Leg Raises"]],
			[workouts["Handstands"], workouts["Bridges"]],
			[workouts["Rest"]],
		],
	},
];

const Routines = () => {
	const [routine, setRoutine] = useState(0);

	const handleClick = (e) => {
		if (e === "back" && routine > 0) setRoutine(routine - 1);
		if (e === "back" && routine === 0) setRoutine(routines.length - 1);
		if (e === "forward" && routine < routines.length - 1)
			setRoutine(routine + 1);
		if (e === "forward" && routine === routines.length - 1) setRoutine(0);
	};

	return (
		<Wrapper>
			<ButtonWrapper>
				<Button onClick={() => handleClick("back")}>
					<EastIcon />
				</Button>
				<Title>{routines[routine].name}</Title>
				<Button onClick={() => handleClick("forward")}>
					<WestIcon />
				</Button>
			</ButtonWrapper>
			{routines[routine].days.map((day, i) => (
				<DayContainer key={i}>
					<Title>Day {i + 1}: </Title>
					{day.map((svg, j) => (
						<SVGContainer key={j}>{svg}</SVGContainer>
					))}
				</DayContainer>
			))}
		</Wrapper>
	);
};

export default Routines;
