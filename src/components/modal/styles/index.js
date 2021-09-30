import styled from "styled-components";

export const Wrapper = styled.div`
	position: fixed;
	inset: 0;
	background: #000000b3;
	z-index: 120;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Modal = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 8px;
	z-index: 121;
	width: clamp(260px, 95%, 320px);
	height: clamp(240px, 30%, 300px);
	background-color: ${(props) => props.theme.color.accent};
	color: black;
	border-radius: 8px;
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
	${(props) => props.theme.text.body}
	& ul {
		list-style: none;
		margin-block: 6px;
		& li {
			margin-block: 4px;
		}
	}
`;
export const Title = styled.h3`
	${(props) => props.theme.text.h3}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;
export const Button = styled.button`
	${(props) => props.theme.text.button}
	padding: 8px 16px;
	background: ${(props) => props.theme.color.orange};
	color: ${(props) => props.theme.color.white};
	border-radius: 8px;
	cursor: pointer;
	&:last-of-type {
		background: ${(props) => props.theme.color.error};
	}
`;
