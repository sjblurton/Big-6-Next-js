import React from "react";
import { Wrapper } from "./styles";

const Comments = ({ data }) => {
  let sets = [];
  if (Array.isArray(data.reps)) {
    sets = data.reps.map((set, i) => (
      <p key={i}>
        <strong>Set {i + 1}:</strong> {set} reps
      </p>
    ));
  }
  return (
    <Wrapper>
      {sets.length > 0 && sets.map((item) => item)}
      {data.comments && (
        <p>
          <strong>Comments: </strong>
          <br />
          <br />
          {data.comments}
        </p>
      )}
    </Wrapper>
  );
};

export default Comments;
