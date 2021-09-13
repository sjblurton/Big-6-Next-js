import React from "react";
import Link from "next/link";
import { ArrowRightIcon, InfoIcon } from "../../../assets/icons";
import { formatDistance } from "date-fns";
import {
  DayContainer,
  InfoButton,
  Line,
  RoundButton,
  TextContainer,
  Wrapper,
} from "./styles";

const TimeLine = ({ days }) => {
  const renderDays = () => {
    return days.map((day) => {
      const { date, level, reps, docId, workout } = day;
      const dateDone = new Date(date.toDate());
      const ago = formatDistance(dateDone, new Date(), { addSuffix: true });
      const href = `/profile/${workout}/${docId}`;
      return (
        <DayContainer key={docId}>
          <Link href={href} passHref>
            <RoundButton>
              <ArrowRightIcon />
            </RoundButton>
          </Link>
          <TextContainer>
            <p>{`${ago},`}</p>
            <p>{`Lv ${level}, ${reps.reduce(
              (acc, num) => acc + num,
              0
            )} reps`}</p>
          </TextContainer>
        </DayContainer>
      );
    });
  };

  return (
    <Wrapper>
      {renderDays()}
      <Line />
      <InfoButton>
        <InfoIcon />
      </InfoButton>
    </Wrapper>
  );
};

export default TimeLine;
