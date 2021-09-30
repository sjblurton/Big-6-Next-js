import styled from "styled-components";

export const Wrapper = styled.article`
	background: ${(props) => props.theme.color.bgLight};
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
	border-radius: 16px;
	width: 335px;
	height: 110px;
	margin: 0 auto 16px auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 8px;
	cursor: pointer;
	&:last-of-type {
		margin-bottom: 80px;
	}
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
	width: 80px;
	height: 80px;
	& svg {
		width: 100%;
		height: 100%;
	}
`;
