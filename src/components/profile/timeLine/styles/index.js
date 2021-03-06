import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	width: 90%;
	max-width: 200px;
	margin: 24px auto;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 80px;
`;

export const DayContainer = styled.div`
	width: 100%;
	display: flex;
	margin-top: 24px;
	&:first-child {
		margin-top: 0;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-left: 16px;
`;

export const RoundButton = styled.div`
	width: 42px;
	height: 42px;
	background: ${(props) => props.theme.color.linear};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	cursor: pointer;
`;

export const InfoButton = styled(RoundButton)`
	position: fixed;
	width: 60px;
	height: 60px;
	bottom: 80px;
	right: 16px;
	cursor: pointer;
`;
