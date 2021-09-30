import React from "react";
import { Header } from "../src/components/profile";
import { Seo } from "../shared";
import { workouts } from "../constants/workouts";
import DirectionData from "../src/components/directions";
import { useRouter } from "next/router";

const Directions = () => {
	const { query } = useRouter();

	return (
		<>
			<Seo title={query.name} />
			<Header
				title={query.workout}
				isBackIcon={true}
				svg={workouts[query.workout]}
			/>
			<DirectionData />
		</>
	);
};

export default Directions;
