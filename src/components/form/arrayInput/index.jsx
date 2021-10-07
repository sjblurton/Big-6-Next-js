import { ErrorMessage, Field, FieldArray } from "formik";
import React from "react";
import { ErrorText } from "..";
import { BlockContainer, Button, Container, Label, Wrapper } from "./styles";

const ArrayInput = ({ name, type, ...restProps }) => {
	return (
		<Wrapper {...restProps}>
			<Label>Reps</Label>
			<FieldArray name={name}>
				{(fieldArrayProps) => {
					const { push, remove, form } = fieldArrayProps;
					const { values } = form;
					const { reps } = values;
					return (
						<Container>
							{reps.map((rep, index) => (
								<BlockContainer key={index}>
									<Field
										type={type}
										name={`${name}[${index}]`}
										placeholder={`Set ${index + 1}`}
									/>
									{index > 0 && (
										<Button type="button" onClick={() => remove(index)}>
											-
										</Button>
									)}
								</BlockContainer>
							))}
							{reps.length < 3 && (
								<Button type="button" onClick={() => push("")}>
									+
								</Button>
							)}
							<ErrorMessage left={true} component={ErrorText} name={name} />
						</Container>
					);
				}}
			</FieldArray>
		</Wrapper>
	);
};

export default ArrayInput;
