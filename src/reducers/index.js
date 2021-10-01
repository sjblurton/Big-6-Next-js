import { directions } from "../../data/directions";
import { big6 } from "../constants";
import { formatDistance } from "date-fns";

export const ACTIONS = {
	INCREMENT_WORKOUT: "increment-workout",
	DECREMENT_WORKOUT: "decrement-workout",
	INCREMENT_LEVEL: "increment-level",
	DECREMENT_LEVEL: "decrement-level",
	WORKOUT_DATA_TO_STATE: "workout-data-to-state",
	DAY_DATA_TO_STATE: "day-data-to-state",
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

export const workoutReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.WORKOUT_DATA_TO_STATE:
			const data = action.payload.collections?.filter(
				(item) => item.workout === state.filter
			);
			const lineChart = data.filter(
				(item, _, arr) => item.level === arr[0].level
			);
			return {
				...state,
				data: data,
				level: data[0].level,
				lineChart: lineChart,
				labels: lineChart.map((item) => item.date.toDate()).slice(0, 5),
				reps: lineChart.map((item) => item.reps).slice(0, 5),
				loading: false,
			};

		default:
			break;
	}
};

export const dayReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.DAY_DATA_TO_STATE:
			const data = action.payload.collections?.filter(
				(item) => item.docId === state.filter
			);
			const progressions = directions[data[0].workout][data[0].level - 1];
			const goal = progressions["progressions"][
				progressions["progressions"].length - 1
			].reduce((acc, x) => acc * x, 1);
			const date = new Date(data[0].date?.toDate());
			const totalReps = data[0].reps.reduce((acc, x) => acc + x, 0);
			return {
				...state,
				data: data[0],
				totalReps: totalReps,
				progressions: directions[data[0].workout][data[0].level - 1],
				goal: goal,
				ago: formatDistance(date, new Date(), {
					addSuffix: true,
				}),
			};
		default:
			break;
	}
};
