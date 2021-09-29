import styled from "styled-components";

export const Wrapper = styled.div`
	position: fixed;
	inset: 0;
	background: #000000b3;
	z-index: 98;
	cursor: pointer;
`;

export const Menu = styled.div`
	position: fixed;
	z-index: 99;
	right: 16px;
	top: 90px;
	width: 200px;
	height: fit-content;
	background-color: ${(props) => props.theme.color.accent};
	color: black;
	border-radius: 8px;
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	& ul {
		list-style-type: none;
		padding: 16px;
		height: 100%;

		& li {
			${(props) => props.theme.text.button}
			cursor: pointer;
			padding: 16px 8px;
			&:last-of-type {
				position: relative;
				margin-top: 16px;
				&:before {
					content: "";
					position: absolute;
					top: 0;
					height: 3px;
					width: 90%;
					background-color: #ccc;
				}
			}
		}
	}
`;
