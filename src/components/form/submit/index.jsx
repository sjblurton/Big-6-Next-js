import React from "react";
import { initialValues } from "..";
import { Button, Reset, Wrapper } from "./styles";

const Submit = ({ children, formik, setStep, ...restProps }) => {
	const handleReset = () => {
		formik.resetForm(initialValues);
		setStep(0);
	};
	return (
		<Wrapper>
			<Button
				{...restProps}
				type="submit"
				disabled={!formik.isValid || formik.isSubmitting}
			>
				{children}
			</Button>
			<Reset onClick={handleReset} type="reset">
				Reset
			</Reset>
		</Wrapper>
	);
};

export default Submit;
