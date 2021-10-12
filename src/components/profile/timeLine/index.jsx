import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRightIcon, InfoIcon } from "../../../../assets/icons";
import { formatDistance } from "date-fns";
import { directions } from "../../../../data/directions";
import {
	DayContainer,
	InfoButton,
	RoundButton,
	TextContainer,
	Wrapper,
} from "./styles";

const TimeLine = ({ days }) => {
	const router = useRouter();
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

						<p>
							{router.route === "/history" &&
								`${directions[workout][level - 1].name}`}
							{`Lv ${level}, ${reps.reduce((acc, num) => acc + num, 0)} reps`}
						</p>
					</TextContainer>
				</DayContainer>
			);
		});
	};

	return (
		<Wrapper>
			{renderDays()}
			{router.route !== "/history" && (
				<InfoButton
					onClick={() =>
						router.push(
							`/directions?workout=${days[0].workout}&level=${
								days[0].level - 1
							}&name=${directions[days[0].workout][days[0].level - 1].name}`
						)
					}
				>
					<InfoIcon />
				</InfoButton>
			)}
		</Wrapper>
	);
};

export default TimeLine;
