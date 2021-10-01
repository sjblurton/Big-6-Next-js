import React from "react";
import { TrashIcon } from "../../../../assets/icons";
import { Progress } from "../../../shared";
import { Subtitle, TitleContainer, Title, LevelBall, Content } from "./styles";

const HeaderTitle = ({ progressions, ago, reps, goal, setOpenModal }) => {
	return (
		<Content>
			<TitleContainer>
				<Title>{progressions.name}</Title>
				<Subtitle>{ago}</Subtitle>
				<LevelBall>
					<h3>Lv: {progressions.level}</h3>
				</LevelBall>
				<TrashIcon setOpenModal={setOpenModal} />
			</TitleContainer>
			<Progress goal={goal} reps={reps} />
		</Content>
	);
};

export default HeaderTitle;
