import React from "react";
import { EditIcon, TrashIcon } from "../../../../assets/icons";
import { Progress } from "../../../shared";
import {
  Subtitle,
  TitleContainer,
  Title,
  LevelBall,
  Content,
  IconContainer,
} from "./styles";
import { useRouter } from "next/router";

const HeaderTitle = ({ progressions, ago, reps, goal, setOpenModal }) => {
  const router = useRouter();
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
          <EditIcon docId={router.query.day} />
        </IconContainer>
      </TitleContainer>
      <Progress goal={goal} reps={reps} />
    </Content>
  );
};

export default HeaderTitle;
