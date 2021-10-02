import React from "react";
import Link from "next/link";
import { Header } from "../src/components/profile";
import { BottomTabs, Button, Seo } from "../src/shared";

const Lost = () => {
	return (
		<div>
			<Seo title="404" />
			<Header title="404" />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h3>Oops, this page doesn't exist.</h3>

				<Button>Return to home page...</Button>
			</div>
			<BottomTabs />
		</div>
	);
};

export default Lost;
