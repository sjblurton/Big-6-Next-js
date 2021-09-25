import { object, string, number, array, date } from "yup";

export const validationSchema = object({
	exercise: string().required("Required."),
	level: number("Numbers only.")
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
				.nullable(false)
				.required("Required.")
		),
	date: date("Must be a valid date.").required("Required.").nullable(),
});

// export const validationSchemaFirst = object({
// 	exercise: string().required("Required."),
// });

// export const validationSchemaSecond = object({
// 	level: number("Numbers only.")
// 		.required("Required.")
// 		.positive("Must be positive.")
// 		.integer("Must be a round number.")
// 		.min(0, "Min level 0.")
// 		.max(9, "Max level 9."),
// });

// export const validationSchemaThird = object({
// 	reps: array()
// 		.ensure()
// 		.nullable(true)
// 		.min(1, "Log at least one set.")
// 		.max(3, "No more that 3 sets.")

// 		.of(
// 			number("must be a number.")
// 				.integer("must be whole number.")
// 				.min(1, "Log at least one rep.")
// 				.max(1000, "I do not believe you. Max 1000 reps")
// 				.nullable(false)
// 				.required("Required.")
// 		),
// 	date: date("Must be a valid date.").required("Required.").nullable(),
// });

export const initialValues = {
	exercise: "",
	level: null,
	reps: [0],
	date: new Date(),
	comments: "",
};

export const onSubmit = async (values) => {
	console.log("Form data", values);
	console.log("Saved data", JSON.parse(JSON.stringify(values)));
};
