import { object, string, number, array, date } from "yup";
import { FirestoreService } from "../../../service/firestoreService";

export const validationSchema = object({
  exercise: string()
    .matches(/(Pull Ups|Push Ups|Squats|Leg Raises|Handstands|Bridges)/, {
      excludeEmptyString: true,
    })
    .required("Required."),
  level: number("Numbers only.")
    .nullable(true)
    .required("Required.")
    .positive("Must be positive.")
    .integer("Must be a round number.")
    .min(0, "Min level 0.")
    .max(9, "Max level 9."),
  reps: array()
    .ensure()
    .nullable(true)
    .min(1, "Log at least one set.")
    .max(3, "No more that 3 sets.")

    .of(
      number("must be a number.")
        .integer("must be whole number.")
        .min(1, "Log at least one rep.")
        .max(1000, "I do not believe you. Max 1000 reps")
        .nullable(true)
        .required("Required.")
    ),
  date: date("Must be a valid date.").required("Required.").nullable(),
});

export const initialValues = {
  exercise: "",
  level: "",
  reps: [""],
  date: new Date(),
  comments: "",
};

export const onSubmit = async (values, helpers, auth, setStep, router) => {
  helpers.setSubmitting(true);
  await FirestoreService.addDocs({ values, auth });
  helpers.setSubmitting(false);
  helpers.resetForm(initialValues);
  setStep(0);
  router.push("/profile");
};
export const EditDoc = async (values, helpers, auth, router) => {
  helpers.setSubmitting(true);
  await FirestoreService.onEdit({ values, auth });
  helpers.setSubmitting(false);
  helpers.resetForm(initialValues);
  router.push("/profile");
};
