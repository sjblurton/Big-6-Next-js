import React from "react";
import { big6 } from "../../../constants/workouts";
import {
	FormikControl,
	CONTROLS,
	initialValues,
	validationSchema,
	FormikStepper,
} from "..";

const FormikContainer = () => {
	return (
		<FormikStepper
			initialValues={initialValues}
			validationSchema={validationSchema}
		>
			<FormikControl
				control={CONTROLS.EXERCISE_RADIO}
				label="Exercise Radio"
				name="exercise"
				options={big6}
			/>
			<FormikControl
				control={CONTROLS.LEVEL_RADIO}
				label="level Radio"
				name="level"
			/>
			<div style={{ marginInline: "auto", width: "300px" }}>
				<FormikControl control={CONTROLS.ARRAY} name="reps" type="number" />
				<FormikControl control={CONTROLS.DATE} label="When?" name="date" />
				<FormikControl
					control={CONTROLS.TEXTAREA}
					name="comments"
					type="text"
					label="Comments"
				/>
			</div>
		</FormikStepper>
	);
};

export default FormikContainer;
