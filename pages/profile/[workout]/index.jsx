import React, { useEffect, useReducer } from "react";
import { svgSelector } from "../../../src/constants";
import { useRouter } from "next/router";
import { withProtected, useFirestore } from "../../../src/hooks";
import { Seo } from "../../../src/shared";
import { LineChart, Header, TimeLine } from "../../../src/components/profile";
import BottomTabs from "../../../src/shared/bottomNav";
import { ACTIONS, workoutReducer } from "../../../src/reducers";
import { SmallText } from "../../../src/components/profile/card/styles";

const Workout = () => {
	const { collections, error, loading } = useFirestore();
	const router = useRouter();
	const { workout } = router.query;
	const initialState = {
		data: [],
		filter: workout,
		level: 1,
		lineChart: [],
		labels: [],
		reps: [],
	};
	const [state, dispatch] = useReducer(workoutReducer, initialState);
	const { data, level, labels, reps } = state;

	useEffect(() => {
		if (collections !== null && !loading) {
			dispatch({
				type: ACTIONS.WORKOUT_DATA_TO_STATE,
				payload: { collections },
			});
		}
	}, [collections]);

	return (
		<>
			<Seo title={workout} />
			<Header title={workout} isBackIcon={true} svg={svgSelector(workout)} />
			{!loading && <LineChart repsArray={{ labels, reps, lastLevel: level }} />}
			{!loading && <TimeLine days={data} />}
			{error && <SmallText>{error}</SmallText>}
			<BottomTabs />
		</>
	);
};
export default withProtected(Workout);
