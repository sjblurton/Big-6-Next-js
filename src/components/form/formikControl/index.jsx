import React from "react";
import {
	Textarea,
	LevelRadio,
	ExerciseRadio,
	DatePicker,
	ArrayInput,
} from "..";

export const CONTROLS = {
	INPUT: "input",
	TEXTAREA: "textarea",
	EXERCISE_RADIO: "exercise-radio",
	LEVEL_RADIO: "level-radio",
	RADIO: "radio",
	DATE: "date",
	ARRAY: "array",
};

const FormikControl = ({ control, ...restProps }) => {
	switch (control) {
		case CONTROLS.TEXTAREA:
			return <Textarea {...restProps} />;
		case CONTROLS.EXERCISE_RADIO:
			return <ExerciseRadio {...restProps} />;

		case CONTROLS.LEVEL_RADIO:
			return <LevelRadio {...restProps} />;

		case CONTROLS.DATE:
			return <DatePicker {...restProps} />;

		case CONTROLS.ARRAY:
			return <ArrayInput {...restProps} />;

		default:
			return null;
	}
};

export default FormikControl;
