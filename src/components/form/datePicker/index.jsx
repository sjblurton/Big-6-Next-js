import { ErrorMessage, Field } from "formik";
import React from "react";
import DateView from "react-datepicker";
import { ErrorText } from "..";
import { Label, Wrapper } from "./styles";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ label, name, ...restProps }) => {
	return (
		<Wrapper>
			<Label htmlFor={name}>{label}</Label>
			<Field name={name}>
				{({ form, field }) => {
					const { setFieldValue } = form;
					const { value } = field;
					return (
						<DateView
							id={name}
							{...field}
							{...restProps}
							selected={value}
							onChange={(val) => setFieldValue(name, val)}
						/>
					);
				}}
			</Field>
			<ErrorMessage component={ErrorText} name={name} />
		</Wrapper>
	);
};

export default DatePicker;
