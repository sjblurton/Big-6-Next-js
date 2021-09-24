import styled from "styled-components";

export const RadioBtn = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	text-align: center;
	background-color: ${(props) => props.theme.color.bgLight};
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	transition: 100ms;
`;
export const RadioButtons = styled.div`
	width: 100%;
	margin: 0 auto;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-content: space-evenly;
	height: 80vh;
`;
export const CustomBtn = styled.label`
	& input {
		display: none;
		&:checked {
			& ~ span {
				box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.4);
				font-size: larger;
			}
		}
	}
`;
