import React, { Children, useState } from "react";
import { Formik, Form } from "formik";
import { Submit } from "..";

const FormikStepper = ({ children, ...props }) => {
	const childrenArray = Children.toArray(children);
	const [step, setStep] = useState(0);
	const currentChild = childrenArray[step];

	return (
		<Formik {...props}>
			{(formik) => (
				<Form
					style={{
						display: "flex",
						flexDirection: "column",
						height: "100vh",
						justifyContent: "space-evenly",
					}}
					formik={formik}
					autoComplete="off"
				>
					{currentChild}
					{step === 2 && <Submit formik={formik}>Submit</Submit>}
				</Form>
			)}
		</Formik>
	);
};

export default FormikStepper;
