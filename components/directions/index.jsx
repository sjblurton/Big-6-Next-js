import React from "react";
import { EastIcon, WestIcon } from "../../assets/icons";
import useDirectionsReducer, {
  ACTIONS,
} from "../../src/hooks/useDirectionsReducer";
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

const standards = ["Beginner", "Intermediate", "Progression"];

const DirectionData = () => {
  const [state, dispatch] = useDirectionsReducer();
  const { data, workout } = state;
  const {
    name,
    directions: instructions,
    progressions,
    video,
    images,
    level,
  } = data;
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
