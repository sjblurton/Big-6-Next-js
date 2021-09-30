import { directions } from "../../data/directions";
import { big6 } from "../../constants/workouts";

export const ACTIONS = {
	INCREMENT_WORKOUT: "increment-workout",
	DECREMENT_WORKOUT: "decrement-workout",
	INCREMENT_LEVEL: "increment-level",
	DECREMENT_LEVEL: "decrement-level",
};

export const directionsReducer = (state, action) => {
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
