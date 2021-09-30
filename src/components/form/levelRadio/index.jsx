import { ErrorMessage, Field } from "formik";
import React from "react";
import { ErrorText } from "..";
import { CustomBtn, RadioBtn, RadioButtons } from "./styles";

const LevelRadio = ({ name, label, ...restProps }) => {
	const levels = [
		{ key: "level 1", value: "0" },
		{ key: "level 2", value: "1" },
		{ key: "level 3", value: "2" },
		{ key: "level 4", value: "3" },
		{ key: "level 5", value: "4" },
		{ key: "level 6", value: "5" },
		{ key: "level 7", value: "6" },
		{ key: "level 8", value: "7" },
		{ key: "level 9", value: "8" },
		{ key: "level 10", value: "9" },
	];
	return (
		<RadioButtons {...restProps}>
			<Field id={name} name={name} {...restProps}>
				{({ field }) => {
					return levels.map((level) => {
						return (
							<React.Fragment key={level.key}>
								<CustomBtn htmlFor={level.value}>
									<input
										type="radio"
										id={level.value}
										{...field}
										value={level.value}
										checked={field.value === level.value}
									/>
									<RadioBtn>{level.key}</RadioBtn>
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

export default LevelRadio;
