import React from "react";
import { Header } from "../src/components/profile";
import { Seo } from "../src/shared";
import { big6 } from "../src/constants";
import DirectionData from "../src/components/directions";
import { useRouter } from "next/router";

const Directions = () => {
	const { query } = useRouter();
	const workoutSvg = big6.filter((item) => item.key === query.workout)[0].value;

	return (
		<>
			<Seo title={query.name} />
			<Header title={query.workout} isBackIcon={true} svg={workoutSvg} />
			<DirectionData />
		</>
	);
};

export default Directions;
