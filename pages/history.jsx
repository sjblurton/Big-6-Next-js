import React from "react";
import { Header, TimeLine } from "../src/components/profile";
import { BottomTabs, Seo } from "../src/shared";
import { withProtected, useFirestore } from "../src/hooks";

const HistoryPage = () => {
	const { collections, loading } = useFirestore();

	return (
		<>
			<Seo title="History" />
			<Header title="History" />
			<div style={{ marginBottom: "80px" }}></div>
			{!loading && collections !== null && <TimeLine days={collections} />}
			<BottomTabs isPage="clipboard" />
		</>
	);
};

export default withProtected(HistoryPage);
