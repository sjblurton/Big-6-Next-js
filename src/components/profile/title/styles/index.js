import styled from "styled-components";

export const Content = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 90%;
	max-width: 600px;
	margin-inline: auto;
`;

export const TitleContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 16px;
`;

export const Title = styled.h1`
	${(props) => props.theme.text.h2}
`;

export const Subtitle = styled.h2`
	${(props) => props.theme.text.h3}
`;

export const LevelBall = styled.div`
	${(props) => props.theme.text.button}
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60px;
	height: 60px;
	right: 0;
	top: -60px;
	border-radius: 50%;
	background: ${(props) => props.theme.color.linear};
	box-shadow: 2.2px 2.2px 2.2px 2.2px rgba(14, 14, 44, 0.15);
`;
