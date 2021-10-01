import React from "react";
import { Header } from "../src/components/profile";
import Routines from "../src/components/routines";
import { BottomTabs, Seo } from "../src/shared";

const RoutinesPage = () => {
	return (
		<>
			<Seo title="Routines" />
			<Header title="Routines" />
			<Routines />
			<BottomTabs isPage="calender" />
		</>
	);
};

export default RoutinesPage;
