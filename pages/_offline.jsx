import { useRouter } from "next/router";
import React from "react";
import { Button } from "../src/shared";

const Unavailable = () => {
	const router = useRouter();
	return (
		<div>
			<Seo title="Currently Offline" />
			<Header title="Offline" />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h3>Oops, this page isn't currently available offline.</h3>
				<Button onClick={router.push("/")}>Return to home page...</Button>
			</div>
			<BottomTabs />
		</div>
	);
};

export default Unavailable;
