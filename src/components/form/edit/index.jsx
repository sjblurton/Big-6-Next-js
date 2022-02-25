import React from "react";
import { Formik, Form } from "formik";
import { CONTROLS, FormikControl, Submit, validationSchema } from "..";
import { arrayOfExercises } from "../../../constants";
import useAuth from "../../../hooks/auth";
import { EditDoc } from "../schema";
import { useRouter } from "next/router";

const EditForm = ({ initialValues }) => {
  const auth = useAuth();
  const router = useRouter();
  const dropdownWorkouts = arrayOfExercises.map((item) => {
    return { key: item, value: item };
  });
  const dropdownLevels = [
    { key: "Level 1", value: 1 },
    { key: "Level 2", value: 2 },
    { key: "Level 3", value: 3 },
    { key: "Level 4", value: 4 },
    { key: "Level 5", value: 5 },
    { key: "Level 6", value: 6 },
    { key: "Level 7", value: 7 },
    { key: "Level 8", value: 8 },
    { key: "Level 9", value: 9 },
    { key: "Level 10", value: 10 },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, helpers) => {
        await EditDoc(values, helpers, auth, router);
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
          <FormikControl
            control="select"
            label="Exercise"
            name="exercise"
            options={dropdownWorkouts}
          />
          <FormikControl
            control="select"
            label="Level"
            name="level"
            options={dropdownLevels}
          />
          <FormikControl control={CONTROLS.ARRAY} name="reps" type="number" />
          <FormikControl control={CONTROLS.DATE} label="When?" name="date" />
          <FormikControl
            control={CONTROLS.TEXTAREA}
            name="comments"
            type="text"
            label="Comments"
          />
          <Submit formik={formik} tag="Cancel">
            Submit
          </Submit>
        </Form>
      )}
    </Formik>
  );
};

export default EditForm;
