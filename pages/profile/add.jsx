import React from "react";
import { Seo } from "../../src/shared";
import { FormikContainer } from "../../src/components/form";
import { withProtected } from "../../src/hooks";

const Add = () => {
	return (
		<div>
			<Seo title="Log a Exercise" />
			<FormikContainer />
		</div>
	);
};

export default withProtected(Add);
