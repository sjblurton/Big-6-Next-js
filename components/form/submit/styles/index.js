import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-inline: auto;
`;
export const Button = styled.button`
	border: none;
	background: #f18701;
	width: 100%;
	display: block;
	padding-block: 8px;
	border-radius: 8px;
	font-weight: bold;
	text-transform: uppercase;
	color: #fff;
	margin-inline: auto;
	margin-block: 8px;
	&:disabled {
		border: 1px solid #999999;
		background-color: #cccccc;
		color: #666666;
	}
`;
export const Reset = styled(Button)`
	background-color: #ea2b2b;
`;
