import styled from "styled-components";

export const FormHeader = styled.div`
	position: relative;
	width: 100%;
	margin-inline: auto;
	display: flex;
	justify-content: space-between;
	&:before,
	&:after {
		content: "";
		position: absolute;
		width: 50%;
		height: 12px;
		background: ${(props) => props.theme.color.bgLight};
		top: 50%;
		transform: translateY(-50%);
		z-index: -1;
		border-radius: 50%;
	}
	&:after {
		background: ${(props) =>
			props.step > 1 ? props.theme.color.bgLight : "#8c8c8c"};

		right: 0;
	}
`;
export const StepIndicator = styled.div`
	background: ${(props) =>
		props.active ? props.theme.color.bgLight : "#8c8c8c"};
	width: 95px;
	height: 95px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: capitalize;
`;
