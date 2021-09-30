import { ErrorMessage, Field } from "formik";
import React from "react";
import { ErrorText } from "..";
import { CustomBtn, RadioBtn, RadioButtons } from "./styles";

const ExerciseRadio = ({ name, label, options, ...restProps }) => {
	return (
		<RadioButtons {...restProps}>
			<Field id={name} name={name} {...restProps}>
				{({ field }) => {
					return options.map((option) => {
						return (
							<React.Fragment key={option.key}>
								<CustomBtn htmlFor={option.key}>
									<input
										type="radio"
										id={option.key}
										{...field}
										value={option.key}
										checked={field.value === option.key}
									/>
									<RadioBtn>{option.value}</RadioBtn>
								</CustomBtn>
							</React.Fragment>
						);
					});
				}}
			</Field>
			<ErrorMessage component={ErrorText} name={name} />
		</RadioButtons>
	);
};

export default ExerciseRadio;
