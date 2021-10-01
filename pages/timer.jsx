import React from "react";
import { Header } from "../src/components/profile";
import Timer from "../src/components/timer";
import { BottomTabs, Seo } from "../src/shared";

const TimerPage = () => {
	return (
		<>
			<Header title="Timer" />
			<Seo title="Timer" />
			<Timer />
			<BottomTabs isPage="watch" />
		</>
	);
};

export default TimerPage;
