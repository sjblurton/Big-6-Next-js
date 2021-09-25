import React, { Children, useState } from "react";
import { Formik, Form } from "formik";
import { onSubmit, Submit } from "..";
import { Button } from "../submit/styles";

const FormikStepper = ({ children, ...props }) => {
	const childrenArray = Children.toArray(children);
	const [step, setStep] = useState(0);
	const currentChild = childrenArray[step];

	const isLastStep = () => step === childrenArray.length - 1;
	const isFirstStep = () => step === 0;
	const stepIsValid = (step, formik) => {
		if (step === 0)
			return !!formik.values.exercise && formik.errors.exercise === undefined;
		if (step === 1)
			return !!formik.values.level && formik.errors.level === undefined;
	};

	return (
		<Formik
			{...props}
			onSubmit={async (values, helpers) => {
				isLastStep() ? await onSubmit(values, helpers) : setStep(step + 1);
			}}
		>
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

					{isLastStep() ? (
						<Submit step={step} setStep={setStep} formik={formik}>
							Submit
						</Submit>
					) : (
						<Button
							disabled={!stepIsValid(step, formik)}
							type="button"
							onClick={() => setStep(step + 1)}
						>
							Next
						</Button>
					)}

					{isFirstStep() ? null : (
						<Button type="button" onClick={() => setStep(step - 1)}>
							Prev
						</Button>
					)}
				</Form>
			)}
		</Formik>
	);
};

export default FormikStepper;
