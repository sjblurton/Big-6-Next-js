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
import { svgSelector } from "../../../src/constants";

const routines = [
	{
		name: "New Blood",
		days: [
			[svgSelector("Push Ups"), svgSelector("Leg Raises")],
			[svgSelector("Rest")],
			[svgSelector("Rest")],
			[svgSelector("Rest")],
			[svgSelector("Pull Ups"), svgSelector("Squats")],
			[svgSelector("Rest")],
			[svgSelector("Rest")],
		],
	},
	{
		name: "Good Behavior",
		days: [
			[svgSelector("Push Ups"), svgSelector("Leg Raises")],
			[svgSelector("Rest")],
			[svgSelector("Pull Ups"), svgSelector("Squats")],
			[svgSelector("Rest")],
			[svgSelector("Handstands"), svgSelector("Bridges")],
			[svgSelector("Rest")],
			[svgSelector("Rest")],
		],
	},
	{
		name: "Veterano",
		days: [
			[svgSelector("Pull Ups")],
			[svgSelector("Bridges")],
			[svgSelector("Handstands")],
			[svgSelector("Leg Raises")],
			[svgSelector("Squats")],
			[svgSelector("Push Ups")],
			[svgSelector("Rest")],
		],
	},
	{
		name: "Solitary Confinement",
		days: [
			[svgSelector("Pull Ups"), svgSelector("Squats")],
			[svgSelector("Push Ups"), svgSelector("Leg Raises")],
			[svgSelector("Handstands"), svgSelector("Bridges")],
			[svgSelector("Pull Ups"), svgSelector("Squats")],
			[svgSelector("Push Ups"), svgSelector("Leg Raises")],
			[svgSelector("Handstands"), svgSelector("Bridges")],
			[svgSelector("Rest")],
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
