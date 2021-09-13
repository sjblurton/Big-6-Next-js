import React from "react";
import ContentLoader from "react-content-loader";
import { Wrapper } from "../styles";

const ProfileLoader = (props) => (
  <Wrapper>
    <ContentLoader
      speed={2}
      width={406}
      height={697}
      viewBox="0 0 406 697"
      backgroundColor="#2B3953"
      foregroundColor="#34425D"
      {...props}
    >
      <circle cx="314" cy="204" r="70" />
      <path d="M 30 163 h 95 v 25 H 30 z M 30 203 h 80 v 14 H 30 z M 30 232 h 103 v 14 H 30 z M 149 163 h 80 v 80 h -80 z" />
      <circle cx="314" cy="368" r="70" />
      <path d="M 30 327 h 95 v 25 H 30 z M 30 367 h 80 v 14 H 30 z M 30 396 h 103 v 14 H 30 z M 149 327 h 80 v 80 h -80 z" />
      <circle cx="314" cy="532" r="70" />
      <path d="M 30 491 h 95 v 25 H 30 z M 30 531 h 80 v 14 H 30 z M 30 560 h 103 v 14 H 30 z M 149 491 h 80 v 80 h -80 z M 30 0 h 100 v 100 H 30 z M 177 33 h 125 v 35 H 177 z" />
      <circle cx="366" cy="39" r="6" />
      <circle cx="366" cy="54" r="6" />
      <circle cx="366" cy="69" r="6" />
      <circle cx="204" cy="667" r="30" />
      <path d="M 34 642 h 50 v 50 H 34 z M 104 642 h 50 v 50 h -50 z M 254 642 h 50 v 50 h -50 z M 324 642 h 50 v 50 h -50 z" />
      <path d="M 0 112 h 406" />
    </ContentLoader>
  </Wrapper>
);

export default ProfileLoader;
