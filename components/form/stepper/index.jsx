import React, { Children, useState } from "react";
import {
  Formik,
  Form,
} from "formik";

const FormikStepper = ({ children, ...props }) => {
  const childrenArray = Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  return (
    <Formik {...props}>
      {({ values, errors }) => <Form autoComplete="off">{currentChild}</Form>}
    </Formik>
  );
};

export default FormikStepper;
