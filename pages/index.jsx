import { Card, Hero } from "../src/components/home";
import { Seo } from "../src/shared";
import { withPublic } from "../src/hooks";
import { content } from "../src/components/home/card/content";

const Home = ({ auth }) => {
	return (
		<>
			<Seo title="Join" />
			<Wrapper>
				<Hero auth={auth} data={content} />
				{content.map((workout, i) => (
					<Card key={i} data={workout} />
				))}
			</Wrapper>
		</>
	);
};
export default withPublic(Home);

import styled from "styled-components";

const Wrapper = styled.main`
	margin-bottom: 16px;
`;
