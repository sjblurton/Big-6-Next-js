import { useRouter } from "next/router";
import React from "react";
import { HeroLoader, ProfileLoader } from "../components/loading";
import useAuth from "./auth";

export function withPublic(Component) {
	return function WithPublic(props) {
		const auth = useAuth();
		const router = useRouter();

		if (auth.user) {
			router.replace("/profile");
			return <ProfileLoader />;
		}
		return <Component auth={auth} {...props} />;
	};
}

export const withProtected = (Component) => {
	return function WithProtected(props) {
		const auth = useAuth();
		const router = useRouter();

		if (!auth.user) {
			router.replace("/");
			return <HeroLoader />;
		}
		return <Component {...props} />;
	};
};
