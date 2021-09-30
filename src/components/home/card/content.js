import {
	Bridge,
	Handstand,
	PullUp,
	PushUp,
	Squat,
	LegRaise,
} from "../../../../assets/mainSvg";

export const content = [
	{
		title: "Pull Ups",
		image: <PullUp isEven={true} />,
		description:
			"Perhaps the best and safest exercise to build a powerful upper back is the humble pull up, using these techniques getting to level 8 or 9 is within most peoples grasps. The one arm pull up is going to take dedication, commitment, and consistency turning up week in and week out.",
		level: [
			"Vertical Pulls",
			"Horizontal Pulls",
			"Jackknife Pulls",
			"Half Pull ups",
			"Full Pull ups",
			"Close Pull ups",
			"Uneven Pull ups",
			"Half One Arm Pull ups",
			"Assisted One Arm Pull ups",
			"One Arm Pull ups",
		],
	},
	{
		title: "Push Ups",
		image: <PushUp isEven={false} />,
		description:
			"The push up is the ultimate upper body exercise. It generates strength, builds muscle, develops powerful tendons and trains the upper body pressing the muscles to work in coordination with the midsection, and lower body",
		level: [
			"Wall Push Up",
			"Incline Push Up",
			"Kneeling Push Up",
			"Half Push Up",
			"Full Push Up",
			"Close Push Up",
			"Uneven Push Up",
			"Half One Arm Push Up",
			"Levered Push Up",
			"One Arm Push Up",
		],
	},
	{
		title: "Squats",
		image: <Squat isEven={true} />,
		description:
			"The real strength of an athlete lies in his hips, and legs. Not his upper body and arms. Unless we are mid-air, or seated with the legs raied off the ground, all movements of the upper limbs relay on forces transmitted through the leg. Upper body strength is important, but without a strong lower body it's is useless.",
		level: [
			"Shoulder stand Squat",
			"Jack knife Squat",
			"supported Squat",
			"Half Squat",
			"Full Squat",
			"Close Squat",
			"Uneven Squat",
			"Half One leg Squat",
			"Assisted one leg Squat",
			"One legged Squat",
		],
	},
	{
		title: "Leg Raises",
		image: <LegRaise isEven={false} />,
		description:
			"The hanging leg raise done slowly and with perfectly straight legs is beyond most people, even very agile athletes. But not to worry we will build the on it slowly over many, weeks, months, and years with progressive calisthenics.",
		level: [
			"Knee tucks",
			"Flat Knee Raises",
			"Flat bent leg Raises",
			"Flat frog Raises",
			"Flat straight leg raises",
			"hanging knee Raises",
			"hanging bent leg Raises",
			"hanging frog Raises",
			"Partial straight leg raises",
			"Hanging straight leg raises",
		],
	},
	{
		title: "Handstand Push Ups",
		image: <Handstand isEven={true} />,
		description:
			"Starting from a head stand all the way to the one arm handstand push up, there’s 10 levels of progression, the ultimut so of strength. I’m not sure how many of you will make it to the one arm handstand push up, but it will take years of work. Enjoy the journey.",
		level: [
			"Wall Headstands",
			"Crow Stands",
			"Wall handstands",
			"Half Handstand Pushups",
			"Handstand Pushups",
			"Close Handstand Pushups",
			"Uneven Handstand Pushups",
			"Half One Arm Handstand Pushups",
			"Lever Handstand Pushups",
			"One Arm Handstand Pushups",
		],
	},
	{
		title: "Bridges",
		image: <Bridge isEven={false} />,
		description:
			"To pick the one most important strength building exercise in the world, the Bridge would be it. It will stop you having back problems as you get older, and improve your performance in any strength training you choice to do.",
		level: [
			"Short Bridges",
			"Straight Stands",
			"Angled Bridges",
			"Head Bridges",
			"Half Bridges",
			"Full Bridges",
			"Wall Walking Bridges (down)",
			"Wall Walking Bridges(up)",
			"Closing Bridges",
			"Stand to Stand Bridges",
		],
	},
];
