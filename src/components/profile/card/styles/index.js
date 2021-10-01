import styled from "styled-components";

export const Wrapper = styled.article`
	position: relative;
	background: ${(props) => props.theme.color.bgLight};
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
	border-radius: 16px;
	width: clamp(280px, 100%, 335px);
	height: 110px;
	margin: 0 auto 16px auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px;
	cursor: pointer;
`;

export const Title = styled.h3`
	${(props) => props.theme.text.h3}
`;

export const SmallText = styled.p`
	${(props) => props.theme.text.small}
	color: ${(props) => props.theme.color.accent}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 90%;
`;

export const SvgContainer = styled.div`
	position: absolute;
	width: 80px;
	height: 80px;
	left: 50%;
	transform: translateX(-50%);
	& svg {
		width: 100%;
		height: 100%;
	}
`;
