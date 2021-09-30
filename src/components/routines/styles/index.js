import styled from "styled-components";

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	margin-bottom: 80px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: clamp(200px, 80%, 300px);
	margin-inline: auto;
`;

export const Button = styled.button`
	height: 32px;
	background: none;
	border: none;
	& svg {
		width: 100%;
		height: 100%;
	}
`;

export const Title = styled.h2`
	display: flex;
	align-items: center;
	${(props) => props.theme.text.h3}
	text-align: center;
`;
export const DayContainer = styled.div`
	display: flex;
	width: clamp(200px, 80%, 360px);
	margin-inline: auto;
	justify-content: space-between;
	background-color: ${(props) => props.theme.color.bgLight};
	margin-block: 8px;
	border-radius: 8px;
	padding: 8px 16px;
	align-content: center;
	background-image: url("/dayContainerBg.svg");
	background-repeat: no-repeat;
`;
export const SVGContainer = styled.div`
	height: auto;
	width: auto;
	max-width: 80px;
	max-height: 80px;
	& svg {
		width: 100%;
		height: auto;
		max-height: 80px;
	}
`;
