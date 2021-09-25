import React from "react";
import { Button, Reset, Wrapper } from "./styles";

const Submit = ({ children, formik, setStep, ...restProps }) => {
	return (
		<Wrapper>
			<Button
				{...restProps}
				type="submit"
				disabled={!formik.isValid || formik.isSubmitting}
			>
				{children}
			</Button>
			<Reset onClick={() => setStep(0)} type="reset">
				Reset
			</Reset>
		</Wrapper>
	);
};

export default Submit;
