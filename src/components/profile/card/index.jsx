import React from "react";
import { directions } from "../../../../data/directions";
import { formatDistance } from "date-fns";
import { Progress } from "../../../shared";
import { svgSelector } from "../../../constants";
import Link from "next/link";
import {
	SmallText,
	SvgContainer,
	TextContainer,
	Title,
	Wrapper,
} from "./styles";

const Card = ({ workout }) => {
	const { workout: title, date, level, reps } = workout;
	const dateDone = new Date(date.toDate());
	const ago = formatDistance(dateDone, new Date(), { addSuffix: true });
	const totalReps = reps.reduce((acc, num) => acc + num, 0);
	const data = directions[title][level - 1].progressions;
	const goalReps = data[data.length - 1].reduce((acc, num) => acc * num, 1);
	const href = `/profile/${title}`;
	return (
		<Link href={href} passHref>
			<Wrapper>
				<TextContainer>
					<Title>{title}</Title>
					<SmallText>Level: {level}</SmallText>
					<SmallText>{ago}</SmallText>
				</TextContainer>
				<SvgContainer>{svgSelector(title)}</SvgContainer>
				<Progress goal={goalReps} reps={totalReps} />
			</Wrapper>
		</Link>
	);
};

export default Card;
