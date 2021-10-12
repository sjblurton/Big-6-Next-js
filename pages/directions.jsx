import React, { useEffect, useReducer } from "react";
import { Header } from "../src/components/profile";
import { Seo } from "../src/shared";
import { big6 } from "../src/constants";
import DirectionData from "../src/components/directions";
import { useRouter } from "next/router";
import { directions } from "../data/directions";
import { directionsReducer } from "../src/reducers";

const Directions = () => {
	const router = useRouter();
	const { query } = router;
	const initialState = {
		data: directions[query.workout || "Squats"][query.level || 0],
		workout: query.workout || "Squats",
		level: query.level || 0,
	};

	const [state, dispatch] = useReducer(directionsReducer, initialState);
	const { data, workout } = state;

	useEffect(() => {
		router.push(
			`/directions?workout=${workout}&level=${state.level}&name=${data.name}`
		);
	}, [state]);

	const workoutSvg = big6.filter(
		(item) => item.key === query.workout || "Squats"
	)[0].value;

	return (
		<>
			<Seo title={data.name} />
			<Header
				reduce={[state, dispatch]}
				title={query.workout || "Squats"}
				isBackIcon={true}
				svg={workoutSvg}
			/>
			<DirectionData reduce={[state, dispatch]} />
		</>
	);
};

export default Directions;
