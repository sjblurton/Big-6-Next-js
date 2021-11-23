import { useRouter } from "next/router";
import React from "react";
import { initialValues } from "..";
import { Button, Reset, Wrapper } from "./styles";

const Submit = ({ children, formik, setStep, tag, ...restProps }) => {
  const router = useRouter();
  const handleReset = () => {
    formik.resetForm(initialValues);
    if (setStep) {
      setStep(0);
    } else {
      router.push("/");
    }
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
        {tag || "Reset"}
      </Reset>
    </Wrapper>
  );
};

export default Submit;
