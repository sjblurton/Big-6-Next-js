import React, { useReducer } from "react";
import { Seo } from "../shared";
import { useRouter } from "next/router";
import { directions } from "../data/directions";
import { workouts } from "../constants/workouts";
import Select from "react-select";


const ACTIONS = {
  UPDATE_WORKOUT: "update-workout",
  UPDATE_LEVEL: "update-level",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    // case ACTIONS.UPDATE_WORKOUT:
    //   return {
    //     ...state,
    //     data: directions[action.payload.workout][state.level],
    //     workout: action.payload.workout,
    //   };
    // case ACTIONS.UPDATE_LEVEL:
    //   return {
    //     ...state,
    //     data: directions[state.workout][action.payload.level],
    //     level: action.payload.level,
    //   };
    default:
      return state;
  }
};
const workoutOptions = [
  { value: "Push Ups", label: "Push Ups" },
  { value: "Pull Ups", label: "Pull Ups" },
  { value: "Handstand Push Ups", label: "Handstand Push Ups" },
  { value: "Squats", label: "Squats" },
  { value: "Leg Raises", label: "Leg Raises" },
  { value: "Bridges", label: "Bridges" },
];
const levelOptions = [
  { value: "0", label: "1" },
  { value: "1", label: "2" },
  { value: "2", label: "3" },
  { value: "3", label: "4" },
  { value: "4", label: "5" },
  { value: "5", label: "6" },
  { value: "6", label: "7" },
  { value: "7", label: "8" },
  { value: "8", label: "9" },
  { value: "9", label: "10" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 60,
  }),
  container: (provided, state) => ({
    ...provided,
    width: 60,
    display: "inline-block",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

const standards = ["Beginner", "Intermediate", "Progression"];

const Directions = () => {
  const { query } = useRouter();
  const initialState = {
    data: directions[query.workout][query.level],
    workout: query.workout,
    level: query.level,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, workout } = state;
  const { name, level, directions: instructions, progressions, video } = data;

  const renderProgressions = () => {
    return progressions.map((progress, i) => {
      return (
        <p key={i}>
          {standards[i]} Standard: {progress[0]} set of {progress[1]}
        </p>
      );
    });
  };

  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <Seo title={name} />
      <Header title={workout} isBackIcon={true} svg={workouts[workout]} />
      <Wrapper>
        <TextContainer>
          <Title>{workout} </Title>
          <SubTitle>
            Level:
            <span style={{ width: "20px" }}>
              <Select
                styles={customStyles}
                value={level}
                onChange={handleChange}
                options={levelOptions}
              />
            </span>
            {level}
          </SubTitle>
          <SubTitle>{name}</SubTitle>
          {renderProgressions()}
        </TextContainer>
      </Wrapper>
    </>
  );
};

export default Directions;

import styled from "styled-components";
import { Header } from "../components/profile";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.article``;

const Title = styled.h1``;

const SubTitle = styled.h2``;
