import React from "react";
import { TrashIcon } from "../../../../assets/icons";
import { Progress } from "../../../shared";
import {
  Subtitle,
  TitleContainer,
  Title,
  LevelBall,
  Content,
  IconContainer,
} from "./styles";

const HeaderTitle = ({ progressions, ago, reps, goal, setOpenModal }) => {
  return (
    <Content>
      <TitleContainer>
        <Title>{progressions.name}</Title>
        <Subtitle>{ago}</Subtitle>
        <IconContainer>
          <LevelBall>
            <h3>Lv: {progressions.level}</h3>
          </LevelBall>
          <TrashIcon setOpenModal={setOpenModal} />
        </IconContainer>
      </TitleContainer>
      <Progress goal={goal} reps={reps} />
    </Content>
  );
};

export default HeaderTitle;
