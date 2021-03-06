import styled from "styled-components";

export const Wrapper = styled.div`
	margin-block: 18px;
	margin-inline: auto;
	background: ${(props) => props.theme.color.bgLight};
	width: 90%;
	padding: 16px;
	max-width: 600px;
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
	border-radius: 16px;
	display: flex;
	flex-direction: column;

	& p {
		margin-bottom: 8px;
	}
	& strong {
		margin-right: 2em;
	}
`;
