import React from "react";
import { Seo } from "../shared";
import { workouts } from "../constants/workouts";

const standards = ["Beginner", "Intermediate", "Progression"];

const Directions = () => {
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
    <>
      <Seo title={name} />
      <Header title={workout} isBackIcon={true} svg={workouts[workout]} />
      <Wrapper>
        <TextContainer>
          <button onClick={() => dispatch({ type: ACTIONS.DECREMENT_WORKOUT })}>
            back
          </button>
          <Title>{workout} </Title>
          <button onClick={() => dispatch({ type: ACTIONS.INCREMENT_WORKOUT })}>
            forward
          </button>

          <SubTitle>
            Level:
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT_LEVEL })}>
              back
            </button>
            {level}
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT_LEVEL })}>
              forward
            </button>
          </SubTitle>
          <SubTitle>{name}</SubTitle>
          {renderProgressions()}
        </TextContainer>
        <Card>
          <CardTitle>Negative</CardTitle>
          <SVGContainer>{images.negative}</SVGContainer>
          <CardText>{instructions.negative}</CardText>
        </Card>
        <Card>
          <CardTitle>Positive</CardTitle>
          <SVGContainer>{images.positive}</SVGContainer>
          <CardText>{instructions.positive}</CardText>
        </Card>
      </Wrapper>
    </>
  );
};

export default Directions;

import styled from "styled-components";
import { Header } from "../components/profile";
import useDirectionsReducer from "../src/hooks/useDirectionsReducer";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.article``;

const Title = styled.h1``;

const SubTitle = styled.h2``;

const Card = styled.div`
  background: ${(props) => props.theme.color.bgLight};
`;

const CardTitle = styled.h3``;

const SVGContainer = styled.div``;

const CardText = styled.p``;
