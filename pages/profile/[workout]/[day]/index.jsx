import React, { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";
import { withProtected, useFirestore } from "../../../../src/hooks";
import { directions } from "../../../../data/directions";
import { formatDistance } from "date-fns";
import { BottomTabs, Seo } from "../../../../shared";
import { Timestamp } from "firebase/firestore";
import { workouts } from "../../../../constants/workouts";
import {
	BarChart,
	Comments,
	Header,
	HeaderTitle,
} from "../../../../src/components/profile";
import DeleteModal from "../../../../src/components/modal";

const ACTIONS = {
	DAY_DATA_TO_STATE: "day-data-to-state",
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.DAY_DATA_TO_STATE:
			const data = action.payload.collections.filter(
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
			return state;
	}
};

const Day = () => {
	const [openModal, setOpenModal] = useState(false);
	const { collections } = useFirestore();
	const router = useRouter();
	const { day } = router.query;
	const initialState = {
		data: {},
		progressions: {},
		filter: day,
		date: new Date(Timestamp.now().toDate()),
		ago: "",
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	const { data, progressions, ago, goal, totalReps } = state;

	useEffect(() => {
		dispatch({
			type: ACTIONS.DAY_DATA_TO_STATE,
			payload: { collections },
		});
	}, [collections]);

	return (
		<>
			<Seo
				title={`${data.workout}, Level: ${data.level}, for ${data.reps?.reduce(
					(acc, reps) => acc + reps,
					0
				)} reps`}
			/>
			<Header
				title={data.workout}
				isBackIcon={true}
				svg={workouts[data.workout]}
			/>
			{openModal && <DeleteModal data={data} setOpenModal={setOpenModal} />}
			<HeaderTitle
				progressions={progressions}
				ago={ago}
				reps={totalReps}
				goal={goal}
				setOpenModal={setOpenModal}
			/>
			<BarChart reps={data.reps} level={data.level} />
			<Comments data={data} />
			<BottomTabs />
		</>
	);
};

export default withProtected(Day);
