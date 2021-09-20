import React from "react";
import { Field } from "formik";
import { object, string, number, array, date } from "yup";
import { big6, workouts } from "../../../constants/workouts";
import {
  CustomBtn,
  Label,
  LevelRadioBtn,
  RadioBtn,
  RadioButtons,
  Title,
  Wrapper,
} from "../styles";
import { FormikStepper } from "../";

const ExerciseForm = () => {
  return (
    <Wrapper>
      <Title>Select Exercise to Log</Title>
      <FormikStepper
        validationSchema={object({
          exercise: string().required("Required"),
          level: number()
            .required("Required")
            .positive()
            .integer()
            .min(0)
            .max(9),
          reps: array()
            .min(1)
            .max(3)
            .ensure()
            .of(number().required().positive().integer().min(1)),
          date: date(),
        })}
        initialValues={{
          exercise: "",
          level: null,
          reps: [],
          date: new Date(),
          comments: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        <div>
          <RadioButtons role="group" ariaLabelledBy="exercise-radio-group">
            {big6.map((item, i) => (
              <CustomBtn key={i}>
                <Field type="radio" name="exercise" value={item} />
                <RadioBtn>{workouts[item]}</RadioBtn>
              </CustomBtn>
            ))}
          </RadioButtons>
        </div>
        <div>
          <RadioButtons role="group" ariaLabelledBy="level-radio-group">
            {new Array(10).fill(0).map((item, i) => (
              <CustomBtn key={i}>
                <Field type="radio" name="level" value={i} />
                <LevelRadioBtn>Level: {i + 1}</LevelRadioBtn>
              </CustomBtn>
            ))}
          </RadioButtons>
        </div>
        <div>
          <Label name="reps[0]">Set 1</Label>
          <Field name="reps[0]" type="number" value="" label="reps[0]" />
          <Label name="reps[1]">Set 2</Label>
          <Field name="reps[1]" type="number" value="" label="reps[1]" />
          <Label name="reps[2]">Set 3</Label>
          <Field name="reps[2]" type="number" value="" label="reps[2]" />
          <Label name="comments">Comments</Label>
          <Field name="comments" as="textarea" value="" label="comments" />

          <button type="submit">Submit</button>
        </div>
      </FormikStepper>
    </Wrapper>
  );
};

export default ExerciseForm;
