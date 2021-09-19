import { useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import { directions } from "../../data/directions";

export const ACTIONS = {
  INCREMENT_WORKOUT: "increment-workout",
  DECREMENT_WORKOUT: "decrement-workout",
  INCREMENT_LEVEL: "increment-level",
  DECREMENT_LEVEL: "decrement-level",
};

const reducer = (state, action) => {
  let level = state.level;
  let workout = state.workout;
  let index = big6.indexOf(workout);
  switch (action.type) {
    case ACTIONS.INCREMENT_LEVEL:
      state.level !== 9 ? level++ : (level = 0);
      return {
        ...state,
        data: directions[workout][level],
        level: level,
      };

    case ACTIONS.DECREMENT_LEVEL:
      level = state.level;
      workout = state.workout;
      state.level !== 0 ? level-- : (level = 9);
      return {
        ...state,
        data: directions[workout][level],
        level: level,
      };

    case ACTIONS.DECREMENT_WORKOUT:
      level = state.level;
      workout = state.workout;
      index === 0 ? (index = big6.length - 1) : index--;
      workout = big6[index];
      return {
        ...state,
        data: directions[workout][level],
        level: level,
        workout: workout,
      };

    case ACTIONS.INCREMENT_WORKOUT:
      level = state.level;
      workout = state.workout;
      index = big6.indexOf(workout);
      index === big6.length - 1 ? (index = 0) : index++;
      workout = big6[index];
      return {
        ...state,
        data: directions[workout][level],
        level: level,
        workout: workout,
      };

    default:
      return state;
  }
};

const big6 = [
  "Pull Ups",
  "Push Ups",
  "Squats",
  "Leg Raises",
  "Handstands",
  "Bridges",
];

const useDirectionsReducer = () => {
  const { query } = useRouter();
  const router = useRouter();
  const initialState = {
    data: directions[query.workout][query.level],
    workout: query.workout,
    level: query.level,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    router.push(
      `/directions?workout=${state.workout}&level=${state.level}&name=${state.data.name}`
    );
  }, [state]);

  return [state, dispatch];
};

export default useDirectionsReducer;
