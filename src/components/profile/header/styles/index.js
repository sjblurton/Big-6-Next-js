import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	background: ${(props) => props.theme.color.bgLight};
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding: 8px 0;
	margin-bottom: 16px;
`;
export const Title = styled.h1`
	${(props) => props.theme.text.h2}
	z-index: 2;
	align-self: ${(props) => (props?.isBackIcon ? "flex-start" : "center")};
	margin-top: 8px;
`;
export const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: auto;
	height: 100%;
	justify-content: space-evenly;
	align-items: center;
	& svg {
		&:first-of-type {
			width: auto;
			height: 40px;
			margin-bottom: 8px;
		}
		&:last-of-type {
			width: 60px;
			height: 60px;
		}
	}
`;
export const WorkoutSvg = styled.div`
	position: absolute;
	width: 80px;
	height: 80px;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	margin-bottom: 8px;

	& svg {
		max-width: 80px;
		max-height: 80px;
	}
`;
export const Icon = styled.div`
	width: 100%;
	cursor: pointer;
`;
