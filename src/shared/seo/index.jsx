import React from "react";
import Head from "next/head";

const Seo = ({ description, title }) => {
	const defaultDescription =
		description ||
		"Progressive calisthenics app based on the book; Convict Conditioning. Track your progress, and keep your focus as you master the Big 6 calisthenics movements!";
	const defaultTitle = "Big 6 a Convict Conditioning Workout App";
	return (
		<Head>
			<title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
			<meta httpEquiv="content-language" content="en" />
			<meta
				name="description"
				content={description ? `${description}` : defaultDescription}
			/>
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
			<meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link
				rel="icon"
				type="image/png"
				href="/iconx/icon-36x36.png"
				sizes="36x36"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/iconx/icon-48x48.png"
				sizes="48x48"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/iconx/icon-72x72.png"
				sizes="72x72"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/iconx/icon-96x96.png"
				sizes="96x96"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/iconx/icon-144x144.png"
				sizes="144x144"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/iconx/icon-192x192.png"
				sizes="192x192"
			/>
			<link
				rel="icon"
				type="image/png"
				href="/iconx/icon-512x512.png"
				sizes="512x512"
			/>
			<link rel="manifest" href="/manifest.json" />
			<link rel="shortcut icon" href="/iconx/favicon.ico" />
			<meta name="application-name" content="&nbsp;" />
			<meta name="msapplication-TileColor" content="#34425D" />
		</Head>
	);
};

export default Seo;
