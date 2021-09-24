import styled from "styled-components";

export const Wrapper = styled.div`
	width: 300px;
	margin-inline: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;

	& input {
		display: inline-block;
		padding: 6px 12px;
		font-size: 1rem;
		line-height: 1.4;
		color: #333;
		background-color: #fff;
		background-image: none;
		border: 1px solid #ccc;
		border-radius: 4px;
		margin-top: 6px;
		margin-right: 6px;
	}
`;

export const Label = styled.label`
	font-weight: bold;
	margin-bottom: 5px;
	text-transform: capitalize;
`;
export const Button = styled.button`
	border: none;
	background: #f18701;
	padding: 8px 12px;
	border-radius: 50%;
	font-weight: bold;
	text-transform: uppercase;
	color: #fff;
	margin-inline: auto;
	margin-top: 6px;
	width: 32px;
	height: 32px;
`;

export const BlockContainer = styled.div`
	display: flex;
	width: 100%;
`;
export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
