import React from "react";
import ContentLoader from "react-content-loader";
import { Wrapper } from "../styles";

const HeroLoader = (props) => (
  <Wrapper>
    <ContentLoader
      speed={2}
      width={350}
      height={689}
      viewBox="0 0 350 689"
      backgroundColor="#2B3953"
      foregroundColor="#34425D"
      uniqueKey="my-random-value"
      {...props}
    >
      <path d="M 0 0 h 207 v 57 H 0 z M 0 75 h 350 v 51 H 0 z M 0 158 h 307 v 35 H 0 z M 0 207 h 227 v 35 H 0 z M 0 266 h 325 v 16 H 0 z M 0 288 h 325 v 16 H 0 z M 0 310 h 325 v 16 H 0 z M 0 332 h 325 v 16 H 0 z M 0 354 h 325 v 16 H 0 z M 0 376 h 325 v 16 H 0 z M 0 398 h 325 v 16 H 0 z M 0 420 h 325 v 16 H 0 z M 0 442 h 176 v 16 H 0 z M 4 472 h 84 v 16 H 4 z M 4 500 h 84 v 16 H 4 z M 4 528 h 147 v 16 H 4 v -16 z M 4 556 h 84 v 16 H 4 z M 4 584 h 84 v 16 H 4 z M 4 612 h 84 v 16 H 4 z M 0 644 h 207 v 45 H 0 z" />
    </ContentLoader>
  </Wrapper>
);

export default HeroLoader;
