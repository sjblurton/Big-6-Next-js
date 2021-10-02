import React from "react";
import { useAuth } from "../../../../hooks";
import { useRouter } from "next/router";
import { Wrapper, Menu } from "./styles";

const Dropdown = ({ setMenuOpen }) => {
	const router = useRouter();
	const { logout, user } = useAuth();
	const handleLogout = () => {
		setMenuOpen(false);
		logout();
		router.push("/");
	};

	const stopBubble = (e) => {
		e.stopPropagation();
	};
	return (
		<Wrapper onClick={() => setMenuOpen(false)} name="wrapper">
			<Menu onClick={stopBubble}>
				<ul>
					{!user && <li onClick={() => router.push("/")}>Home</li>}
					{user && (
						<>
							<li onClick={() => router.push("/profile")}>Profile</li>
							<li onClick={() => router.push("/history")}>History</li>
							<li onClick={() => router.push("/routines")}>Routine</li>
						</>
					)}
					<li onClick={() => router.push("/timer")}>Timer</li>
					{user && <li onClick={handleLogout}>Logout</li>}
					{!user && <li onClick={() => router.push("/")}>Log in</li>}
				</ul>
			</Menu>
		</Wrapper>
	);
};

export default Dropdown;
