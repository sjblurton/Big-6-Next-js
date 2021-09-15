import React from "react";
import { Progress } from "../../../shared";
import { Subtitle, TitleContainer, Title, LevelBall, Content } from "./styles";

const HeaderTitle = ({ progressions, ago, reps, goal }) => {
  return (
    <Content>
      <TitleContainer>
        <Title>{progressions.name}</Title>
        <Subtitle>{ago}</Subtitle>
        <LevelBall>
          <Subtitle>Lv: {progressions.level}</Subtitle>
        </LevelBall>
      </TitleContainer>
      <Progress goal={goal} reps={reps} />
    </Content>
  );
};

export default HeaderTitle;
