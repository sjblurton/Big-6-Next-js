import React, { Children, useState } from "react";
import { Formik, Form } from "formik";
import { onSubmit, Submit } from "..";
import Link from "next/link";
import { Button, Reset } from "../submit/styles";
import { FormHeader, StepIndicator } from "./styles";
import useAuth from "../../../hooks/auth";
import { useRouter } from "next/router";

const FormikStepper = ({ children, ...props }) => {
	const router = useRouter();
	const auth = useAuth();
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
				isLastStep()
					? await onSubmit(values, helpers, auth, setStep, router)
					: setStep(step + 1);
			}}
		>
			{(formik) => (
				<Form
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						minHeight: "100vh",
						width: "100%",
						maxWidth: "320px",
						marginInline: "auto",
						marginBlock: "12px",
					}}
					formik={formik}
					autoComplete="off"
				>
					<FormHeader step={step}>
						<StepIndicator active={true}>
							<p>{formik.values.exercise || "exercise"}</p>
						</StepIndicator>
						<StepIndicator active={step > 0}>
							<p>
								Level:{" "}
								{!!formik.values.level ? Number(formik.values.level) + 1 : "?"}
							</p>
						</StepIndicator>
						<StepIndicator active={step > 1}>
							<p>Reps</p>
						</StepIndicator>
					</FormHeader>
					{currentChild}
					<div>
						{isLastStep() ? (
							<Submit step={step} setStep={setStep} formik={formik}>
								Submit
							</Submit>
						) : (
							<>
								<Button
									disabled={!stepIsValid(step, formik)}
									type="button"
									onClick={() => setStep(step + 1)}
								>
									Next
								</Button>
								<Link href="/profile">
									<Reset type="reset">Cancel</Reset>
								</Link>
							</>
						)}

						{isFirstStep() ? null : (
							<Button type="button" onClick={() => setStep(step - 1)}>
								Prev
							</Button>
						)}
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default FormikStepper;
