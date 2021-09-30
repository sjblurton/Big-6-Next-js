import React from "react";

const ErrorText = ({ children, ...restProps }) => {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

export default ErrorText;

import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	color: #d8000c;
	background-color: #ffd2d2;
	padding: 8px;
	border-radius: 8px;
	margin-top: 10px;

	&:before {
		content: "";
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 10px solid #ffd2d2;
		position: absolute;
		top: -10px;
	}
`;
