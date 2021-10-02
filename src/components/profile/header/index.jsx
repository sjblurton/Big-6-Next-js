import React, { useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeftIcon, DotsMenu } from "../../../../assets/icons";
import LogoSvg from "../../../../assets/logos/logo";
import { IconContainer, Title, Wrapper, WorkoutSvg, Icon } from "./styles";
import Dropdown from "./menu";
import { ACTIONS } from "../../../reducers";

const Header = ({ reduce, title, isBackIcon, svg }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const router = useRouter();
	const [state, dispatch] = reduce;
	const handleBack = () => {
		router.back();
		dispatch({ type: ACTIONS.UPDATE_STATE_FROM_ROUTE, payload: router });
	};

	return (
		<Wrapper>
			{menuOpen && <Dropdown setMenuOpen={setMenuOpen} />}
			{isBackIcon && (
				<IconContainer>
					<Icon onClick={handleBack}>
						<ArrowLeftIcon />
					</Icon>
					<Icon onClick={() => router.push("/")}>
						<LogoSvg />
					</Icon>
				</IconContainer>
			)}
			{!isBackIcon && <LogoSvg />}
			<Title isBackIcon={isBackIcon}>{title}</Title>
			{svg && <WorkoutSvg>{svg}</WorkoutSvg>}
			<DotsMenu setMenuOpen={setMenuOpen} />
		</Wrapper>
	);
};

export default Header;
