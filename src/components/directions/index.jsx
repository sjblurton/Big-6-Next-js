import React, { useEffect, useReducer } from "react";
import { EastIcon, WestIcon } from "../../../assets/icons";
import { ACTIONS, directionsReducer } from "../../reducers/directionsReducer";
import { directions } from "../../../data/directions";
import Card from "./card";
import {
	Wrapper,
	TextContainer,
	Title,
	SubTitle,
	Button,
	ButtonWrapper,
	ProgressionText,
} from "./styles";
import { useRouter } from "next/router";

const standards = ["Beginner", "Intermediate", "Progression"];

const DirectionData = () => {
	const router = useRouter();
	const { query } = router;
	const initialState = {
		data: directions[query.workout][query.level],
		workout: query.workout,
		level: query.level,
	};

	const [state, dispatch] = useReducer(directionsReducer, initialState);

	const { data, workout } = state;

	const {
		name,
		directions: instructions,
		progressions,
		video,
		images,
		level,
	} = data;

	useEffect(() => {
		router.push(
			`/directions?workout=${state.workout}&level=${state.level}&name=${state.data.name}`
		);
	}, [state]);

	const renderProgressions = () => {
		return progressions.map((progress, i) => {
			return (
				<p key={i}>
					{standards[i]} Standard: {progress[0]} set of {progress[1]}
				</p>
			);
		});
	};
	return (
		<Wrapper>
			<TextContainer>
				<Title>{name}</Title>
				<ButtonWrapper>
					<Button onClick={() => dispatch({ type: ACTIONS.DECREMENT_WORKOUT })}>
						<EastIcon />
					</Button>
					<SubTitle>{workout}</SubTitle>
					<Button onClick={() => dispatch({ type: ACTIONS.INCREMENT_WORKOUT })}>
						<WestIcon />
					</Button>
				</ButtonWrapper>
				<ButtonWrapper>
					<SubTitle>Level:</SubTitle>
					<Button onClick={() => dispatch({ type: ACTIONS.DECREMENT_LEVEL })}>
						<EastIcon />
					</Button>
					<SubTitle>{level}</SubTitle>
					<Button onClick={() => dispatch({ type: ACTIONS.INCREMENT_LEVEL })}>
						<WestIcon />
					</Button>
				</ButtonWrapper>
				<ProgressionText>{renderProgressions()}</ProgressionText>
			</TextContainer>
			<Card
				title="Positive"
				instruction={instructions.positive}
				image={images.positive}
			/>
			<Card
				title="Negative"
				instruction={instructions.negative}
				image={images.negative}
			/>
		</Wrapper>
	);
};

export default DirectionData;
