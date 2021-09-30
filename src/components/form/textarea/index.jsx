import { ErrorMessage, Field } from "formik";
import React from "react";
import { ErrorText } from "..";
import { Label, Wrapper } from "./styles";

const Textarea = ({ name, label, type, ...restProps }) => {
	return (
		<Wrapper {...restProps}>
			<Label htmlFor={name}>{label}</Label>
			<Field as="textarea" type={type} id={name} name={name}></Field>
			<ErrorMessage component={ErrorText} name={name} />
		</Wrapper>
	);
};

export default Textarea;
