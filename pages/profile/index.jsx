import React, { useEffect, useState } from "react";
import { ProfileLoader } from "../../components/loading";
import { Card, Header } from "../../components/profile";
import { SmallText } from "../../components/profile/card/styles";
import { Seo } from "../../shared";
import useFirestore from "../../src/hooks/firestore";
import { withProtected } from "../../src/hooks/routes";
import BottomTabs from "../../shared/bottomNav";

const Profile = () => {
	const [latest, setLatest] = useState([]);
	const { collections, error, loading } = useFirestore();

	const latestList = () => {
		let array = [];
		const upToDate = collections.filter((value) => {
			if (!array.includes(value.workout)) {
				array.push(value.workout);
				return true;
			}
			return false;
		});
		setLatest(upToDate);
	};

	useEffect(() => {
		latestList();
	}, [collections]);

	return (
		<>
			<Seo title="Profile" />
			<Header title="Profile" />
			{loading && !error && <ProfileLoader />}
			{latest && latest.map((item) => <Card key={item.docId} workout={item} />)}
			{error && <SmallText>{error}</SmallText>}
			<BottomTabs isPage="home" />
		</>
	);
};

export default withProtected(Profile);
