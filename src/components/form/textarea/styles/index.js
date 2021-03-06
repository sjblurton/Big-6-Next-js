import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 280px;
	max-width: 300px;
	margin-inline: auto;

	& textarea {
		display: block;
		padding: 6px 12px;
		font-size: 1rem;
		line-height: 1.4;
		color: #333;
		background-color: #fff;
		background-image: none;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
	& input + label {
		font-weight: bold;
		display: inline-flex;
		margin-right: 20px;
	}
`;

export const Label = styled.label`
	font-weight: bold;
	display: flex;
	margin-bottom: 5px;
	text-transform: capitalize;
`;
