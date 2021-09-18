import * as Images from "../assets/instructions";

export const directions = {
  "Pull Ups": [
    {
      level: 1,
      name: "Vertical Pull up",
      progressions: [
        [1, 10],
        [2, 20],
        [3, 40],
      ],
      directions: {
        positive:
          "Stand close to the wall, tips of the toes should be 10cm to 20cm away.",

        negative: "slowly lower yourself until elbows are straight.",
      },
      images: {
        positive: Images.PullUps[0][0],
        negative: Images.PullUps[0][1],
      },
      video: "https://youtu.be/F8kIJMeqCMs",
    },
    {
      level: 2,
      name: "Horizontal Pull up",
      progressions: [
        [1, 10],
        [2, 20],
        [3, 30],
      ],
      directions: {
        positive: "Keep your body tense, and locked straight.",

        negative: "Smoothly pull yourself up up to the bar.",
      },
      images: {
        positive: Images.PullUps[1][0],
        negative: Images.PullUps[1][1],
      },
      video: "https://youtu.be/YN0vvoqssfw",
    },
    {
      level: 3,
      name: "Jackknife Pull up",
      progressions: [
        [1, 10],
        [2, 15],
        [3, 20],
      ],
      directions: {
        positive:
          "When working with the bar keep your shoulders good and tight",

        negative:
          "Smoothly pull yourself up, using your straightened legs to assist you.",
      },
      images: {
        positive: Images.PullUps[2][0],
        negative: Images.PullUps[2][1],
      },
      video: "https://youtu.be/58ss6OF4fmQ",
    },
    {
      level: 4,
      name: "Half Pull up",
      progressions: [
        [1, 8],
        [2, 11],
        [2, 15],
      ],
      directions: {
        positive: "Your upper arms should be parallel to the the floor.",
        negative: "Allow your elbows to travel forwards if it right for you.",
      },
      images: {
        negative: Images.PullUps[3][1],
        positive: Images.PullUps[3][0],
      },
      video: "https://youtu.be/vsRRJGHhKnA",
    },
    {
      level: 5,
      name: "Full Pull up",
      progressions: [
        [1, 5],
        [2, 8],
        [2, 10],
      ],
      directions: {
        positive:
          "Retain a very slight bend in the elbows to take the stress off the arm joints.",

        negative:
          "Bend at the elbows and shoulders until your chin passes over the bar.",
      },
      images: {
        positive: Images.PullUps[4][0],
        negative: Images.PullUps[4][1],
      },
      video: "https://youtu.be/fCHcb4MB1FM",
    },
    {
      level: 6,
      name: "Close Pull up",
      progressions: [
        [1, 5],
        [2, 8],
        [2, 10],
      ],
      directions: {
        positive:
          "Your hands should be next to each other, 4cm apart from the thumbs.",

        negative: "Try to minimize leg movement during the set",
      },
      images: {
        positive: Images.PullUps[5][0],
        negative: Images.PullUps[5][1],
      },
      video: "https://youtu.be/Om_3c0jozTc",
    },
    {
      level: 7,
      name: "Uneven Pull up",
      progressions: [
        [1, 5],
        [2, 7],
        [2, 9],
      ],
      directions: {
        positive:
          "A side-on or underhand grip will be more comfortable, than the overhand version.",

        negative:
          "Bend at the elbows and shoulders to smoothly pull your chin up over the bar.",
      },
      images: {
        positive: Images.PullUps[6][0],
        negative: Images.PullUps[6][1],
      },
      video: "https://youtu.be/fCHcb4MB1FM",
    },
    {
      level: 8,
      name: "Half One Arm Pull up",
      progressions: [
        [1, 4],
        [2, 6],
        [2, 8],
      ],
      directions: {
        positive:
          "The elbow should be at a right angle, with your upper arm parallel to the ground.",

        negative: "Smoothly pull your chin over the bar.",
      },
      images: {
        positive: Images.PullUps[7][0],
        negative: Images.PullUps[7][1],
      },
      video: "https://youtu.be/ve0EIQdRLag",
    },
    {
      level: 9,
      name: "assisted One-Leg Pull up",
      progressions: [
        [1, 3],
        [2, 5],
        [2, 7],
      ],
      directions: {
        positive:
          "With your opposite hand, grab the towel as low as possible-around eye level.",

        negative:
          "Release the towel, and continue pulling yourself up with just one arm until your chin is over the bar.",
      },
      images: {
        negative: Images.PullUps[8][1],
        positive: Images.PullUps[8][0],
      },
      video: "https://youtu.be/W8DBEewoDmY",
    },
    {
      level: 10,
      name: "On Arm Pull up",
      progressions: [
        [1, 1],
        [2, 3],
        [2, 6],
      ],
      directions: {
        positive:
          "Your working arm should be virtually straight, with just a little kink in it to take the stress off the joints.",

        negative:
          "Bend at the elbow, and shoulder to pull your body up with as little momentum as possible.",
      },
      images: {
        positive: Images.PullUps[9][0],
        negative: Images.PullUps[9][1],
      },
      video: "https://youtu.be/2tHTY6ZKzkc",
    },
  ],
  Handstands: [
    {
      level: 1,
      name: "Wall Headstand",
      progressions: [
        [1, 30],
        [1, 60],
        [1, 120],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.Handstands[0][0],
        negative: Images.Handstands[0][1],
      },
      video: "https://youtu.be/tYX-9RQyiJA",
    },
    {
      level: 2,
      name: "Crow Stand",
      progressions: [
        [1, 10],
        [1, 30],
        [1, 60],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.Handstands[1][0],
        negative: Images.Handstands[1][1],
      },
      video: "https://youtu.be/oLGMF0yilWQ",
    },
    {
      level: 3,
      name: "Wall Handstand",
      progressions: [
        [1, 10],
        [1, 30],
        [1, 60],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.Handstands[2][0],
        negative: Images.Handstands[2][1],
      },
      video: "https://youtu.be/gI4vnrDAxEQ",
    },
    {
      level: 4,
      name: "Half Handstand Push Ups",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 20],
      ],
      directions: {
        positive: "",
        negative: "",
      },
      images: {
        positive: Images.Handstands[3][0],
        negative: Images.Handstands[3][1],
      },
      video: "https://youtu.be/a9WJRuue0YA",
    },
    {
      level: 5,
      name: "Handstand Push Ups",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 15],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.Handstands[4][0],
        negative: Images.Handstands[4][1],
      },
      video: "https://youtu.be/S27I9QGHtzo",
    },
    {
      level: 6,
      name: "Close Handstand",
      progressions: [
        [1, 5],
        [2, 9],
        [2, 12],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.Handstands[5][0],
        negative: Images.Handstands[5][1],
      },
      video: "https://youtu.be/vWv3P2-zvRQ",
    },
    {
      level: 7,
      name: "Uneven Handstand Push Ups",
      progressions: [
        [1, 5],
        [2, 8],
        [2, 10],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.Handstands[6][0],
        negative: Images.Handstands[6][1],
      },
      video: "https://youtu.be/bzuf-4law2k",
    },
    {
      level: 8,
      name: "Half One Arm Handstand Push Ups",
      progressions: [
        [1, 4],
        [2, 6],
        [2, 8],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.Handstands[7][0],
        negative: Images.Handstands[7][1],
      },
      video: "",
    },
    {
      level: 9,
      name: "Levered Handstand Push Ups",
      progressions: [
        [1, 3],
        [2, 4],
        [2, 6],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.Handstands[8][0],
        negative: Images.Handstands[8][1],
      },
      video: "https://youtu.be/3IJMlCWovF8",
    },
    {
      level: 10,
      name: "One Arm Handstand Push Ups",
      progressions: [
        [1, 1],
        [2, 2],
        [1, 5],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.Handstands[9][0],
        negative: Images.Handstands[9][1],
      },
      video: "https://youtu.be/hYnmRO37SRQ",
    },
  ],
  "Push Ups": [
    {
      level: 1,
      name: "Wall Push Up",
      progressions: [
        [1, 10],
        [2, 25],
        [3, 50],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.PushUps[0][0],
        negative: Images.PushUps[0][1],
      },
      video: "https://youtu.be/N5C9NUHZ20U",
    },
    {
      level: 2,
      name: "Incline Push Up",
      progressions: [
        [1, 10],
        [2, 20],
        [3, 40],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.PushUps[1][0],
        negative: Images.PushUps[1][1],
      },
      video: "https://youtu.be/Gv8y_prZBZY",
    },
    {
      level: 3,
      name: "Kneeling Push Up",
      progressions: [
        [1, 10],
        [2, 15],
        [3, 30],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.PushUps[2][0],
        negative: Images.PushUps[2][1],
      },
      video: "https://youtu.be/NyzxeqY6CR8",
    },
    {
      level: 4,
      name: "Half Push Up",
      progressions: [
        [1, 8],
        [2, 12],
        [2, 25],
      ],
      directions: {
        positive: "",
        negative: "",
      },
      images: {
        positive: Images.PushUps[3][0],
        negative: Images.PushUps[3][1],
      },
      video: "https://youtu.be/bGuUODcwnHA",
    },
    {
      level: 5,
      name: "Full Push Up",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 20],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.PushUps[4][0],
        negative: Images.PushUps[4][1],
      },
      video: "https://youtu.be/1QJICN6udbs",
    },
    {
      level: 6,
      name: "Close Push Up",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 20],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.PushUps[5][0],
        negative: Images.PushUps[5][1],
      },
      video: "https://youtu.be/3-1vRVuWgBc",
    },
    {
      level: 7,
      name: "Uneven Push Up",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 20],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.PushUps[6][0],
        negative: Images.PushUps[6][1],
      },
      video: "https://youtu.be/o1abTRdwpUs",
    },
    {
      level: 8,
      name: "Half One Arm Push Up",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 20],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.PushUps[7][0],
        negative: Images.PushUps[7][1],
      },
      video: "https://youtu.be/63077t3I4Zc",
    },
    {
      level: 9,
      name: "Levered Push Up",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 20],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.PushUps[8][0],
        negative: Images.PushUps[8][1],
      },
      video: "https://youtu.be/Hwq5zdb-owA",
    },
    {
      level: 10,
      name: "On Arm Push Up",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 100],
      ],
      directions: {
        positive: "",

        negative: "",
      },
      images: {
        positive: Images.PushUps[9][0],
        negative: Images.PushUps[9][1],
      },
      video: "https://youtu.be/ReKZry7JQEQ",
    },
  ],
  Bridges: [
    {
      level: 1,
      name: "Short Bridges",
      progressions: [
        [1, 10],
        [2, 25],
        [3, 50],
      ],
      directions: {
        positive:
          "The feet should be shoulder width apart or a little less depending upon your frame.",

        negative:
          "Your thighs, trunk and torso should form a straight line, with no sagging of the hips.",
      },
      images: {
        positive: Images.Bridges[0][0],
        negative: Images.Bridges[0][1],
      },
      video: "https://youtu.be/JQFddjAFWZw",
    },
    {
      level: 2,
      name: "Straight Bridges",
      progressions: [
        [1, 10],
        [2, 20],
        [3, 40],
      ],
      directions: {
        positive:
          "Your body will now form a right angle, with your trunk perpendicular to your legs.",

        negative:
          "push your hips upwards until your legs and torso form a straight line.",
      },
      images: {
        positive: Images.Bridges[1][0],
        negative: Images.Bridges[1][1],
      },
      video: "https://youtu.be/gkTVDJHHIZ0",
    },
    {
      level: 3,
      name: "Angled Bridges",
      progressions: [
        [1, 8],
        [2, 15],
        [3, 30],
      ],
      directions: {
        positive:
          "Angled bridges require an object which is about knee height or a little higher.",

        negative:
          "the arms don't need to be fully extended, the elbows will be bent.",
      },
      images: {
        positive: Images.Bridges[2][0],
        negative: Images.Bridges[2][1],
      },
      video: "https://youtu.be/o9yKAjvUQlM",
    },
    {
      level: 4,
      name: "Head Bridges",
      progressions: [
        [1, 8],
        [2, 15],
        [2, 25],
      ],
      directions: {
        positive: "The top of your skull very gently touches the floor",

        negative: "Hold the full bridge at the top.",
      },
      images: {
        positive: Images.Bridges[3][0],
        negative: Images.Bridges[3][1],
      },
      video: "https://youtu.be/BIq3sAZAekg",
    },
    {
      level: 5,
      name: "Half Bridges",
      progressions: [
        [1, 8],
        [2, 15],
        [2, 20],
      ],
      directions: {
        positive:
          "The feet should be shoulder width apart or a little closer, and the ball should be supporting the small of your back.",

        negative: "Keep going until your back is fully arced.",
      },
      images: {
        positive: Images.Bridges[4][0],
        negative: Images.Bridges[4][1],
      },
      video: "https://youtu.be/JXHnTtE9NSk",
    },
    {
      level: 6,
      name: "Full Bridges",
      progressions: [
        [1, 6],
        [2, 10],
        [2, 15],
      ],
      directions: {
        positive:
          "Place the hands alongside the head, with the palms flat on the the floor and your fingers pointing towards yours toes.",

        negative:
          "Allow the head to tilt backwards between the arms, so that you can look at the wall behind you.",
      },
      images: {
        positive: Images.Bridges[5][0],
        negative: Images.Bridges[5][1],
      },
      video: "https://www.youtube.com/watch?v=qnU9LoO5Cyg",
    },
    {
      level: 7,
      name: "Wall Walking Bridges (Down)",
      progressions: [
        [1, 3],
        [2, 8],
        [2, 10],
      ],
      directions: {
        positive:
          "Continue smoothly bending back until you can see the wall behind you.",

        negative:
          "Keep bending backwards as you walk down the wall with your hands. Until the hands are flat on the floor.",
      },
      images: {
        positive: Images.Bridges[6][0],
        negative: Images.Bridges[6][1],
      },
      video: "https://youtu.be/LD1h45ArqcY",
    },
    {
      level: 8,
      name: "Wall Walking Bridges (Up)",
      progressions: [
        [1, 2],
        [2, 4],
        [2, 8],
      ],
      directions: {
        positive:
          "Place one palm back on the wall, pushing through it. Continue walking up the wall until you are nearly straight.",

        negative:
          "Push gently away from the wall until you are standing totally clear from the it.",
      },
      images: {
        positive: Images.Bridges[7][0],
        negative: Images.Bridges[7][1],
      },
      video: "https://youtu.be/sc_hsEM7xnA",
    },
    {
      level: 9,
      name: "Closing Bridges",
      progressions: [
        [1, 1],
        [2, 3],
        [2, 6],
      ],
      directions: {
        positive:
          "Place your hands on your hips and begin pushing your pelvis forward. As soon as you see the floor, take your hands off your hips.",

        negative:
          "Extend your arms as you keep the movement going, until your palms are resting on the floor.",
      },
      images: {
        positive: Images.Bridges[8][0],
        negative: Images.Bridges[8][1],
      },
      video: "https://youtu.be/tGv50Whxouk",
    },
    {
      level: 10,
      name: "Stand to Stand Bridges",
      progressions: [
        [1, 1],
        [2, 3],
        [3, 30],
      ],
      directions: {
        positive:
          "Perform a closing bridge (step 9) into a full bridge hold. Press through the hands and finally the fingers, lifting the palms off the floor.",

        negative:
          "Finally, pull the hips in until you are standing straight with hands by your sides.",
      },
      images: {
        positive: Images.Bridges[9][0],
        negative: Images.Bridges[9][1],
      },
      video: "https://www.youtube.com/watch?v=wZnixqvk-24",
    },
  ],
  Squats: [
    {
      level: 1,
      name: "Shoulder stand Squats",
      progressions: [
        [1, 10],
        [2, 25],
        [3, 50],
      ],
      directions: {
        positive:
          "Place your hands on your lower back for support, whilst keeping your upper arms firmly on the floor.",

        negative:
          "Keeping your torso as upright as possible, bend at the hips and knees until your knees touch your forehead.",
      },
      images: {
        negative: Images.Squats[0][1],
        positive: Images.Squats[0][0],
      },
      video:
        "https://www.youtube.com/watch?v=a-JNXY_hnSs&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=4",
    },
    {
      level: 2,
      name: "Jackknife Squats",
      progressions: [
        [1, 10],
        [2, 20],
        [3, 40],
      ],
      directions: {
        positive:
          "Tilt forwards slightly so that you can take some of your body's weight though your hands.",

        negative:
          "Bend at the knees and hips until your hamstrings reach your calves, and you can not go any further.",
      },
      images: {
        positive: Images.Squats[1][0],
        negative: Images.Squats[1][1],
      },
      video:
        "https://www.youtube.com/watch?v=QhyRsrPOkoY&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=5",
    },
    {
      level: 3,
      name: "Supported Squats",
      progressions: [
        [1, 10],
        [2, 15],
        [3, 30],
      ],
      directions: {
        positive:
          "Your arms should be out straight and angled down, holding onto a sturdy object higher than your thighs.",

        negative:
          "Slowly lower yourself down by bending at the hips and knees, keeping your back as straight as possible.",
      },
      images: {
        positive: Images.Squats[2][0],
        negative: Images.Squats[2][1],
      },
      video:
        "https://www.youtube.com/watch?v=cLQS5mZmXN0&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=6",
    },
    {
      level: 4,
      name: "Half Squats",
      progressions: [
        [1, 10],
        [2, 35],
        [2, 50],
      ],
      directions: {
        positive:
          "Don't keep your feet perfectly in line with one another, allow your toes to point very slightly outwards.",

        negative:
          "Bend at the hips and knees until your knees are angled at ninety degrees.",
      },
      images: {
        positive: Images.Squats[3][0],
        negative: Images.Squats[3][1],
      },
      video:
        "https://www.youtube.com/watch?v=tIHNkW0nGFg&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=7",
    },
    {
      level: 5,
      name: "Full Squats",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 30],
      ],
      directions: {
        positive:
          "Stand tall, with the feet shoulder width apart or a little wider, depending upon your preferences.",

        negative:
          "Continue descending at a controlled speed until the backs of your thighs are resting against your calves.",
      },
      images: {
        positive: Images.Squats[4][0],
        negative: Images.Squats[4][1],
      },
      video:
        "https://www.youtube.com/watch?v=S3bNmmxkh_k&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=8",
    },
    {
      level: 6,
      name: "Close Squats",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 20],
      ],
      directions: {
        positive:
          "Stand up straight with your heals together, toes angled out very slightly.",

        negative:
          "To prevent yourself from tipping backwards you may have to flex your shins.",
      },
      images: {
        positive: Images.Squats[5][0],
        negative: Images.Squats[5][1],
      },
      video:
        "https://www.youtube.com/watch?v=MiNzsa9MIpI&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=9",
    },
    {
      level: 7,
      name: "Chair One-Leg Squats",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 20],
      ],
      directions: {
        positive:
          "Stand up straight with one foot flat on the floor, and the other out in front of you.",

        negative:
          "Bend at the knees and hips until seated keeping the other foot off the floor.",
      },
      images: {
        positive: Images.Squats[6][0],
        negative: Images.Squats[6][1],
      },
      video: "",
    },
    {
      level: 8,
      name: "Half One-Leg Squats",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 20],
      ],
      directions: {
        positive:
          "Your elevated foot should be at about the level of your opposite thigh.",

        negative:
          "Keep the back flat and the heel of your supported leg on the floor at all times.",
      },
      images: {
        positive: Images.Squats[7][0],
        negative: Images.Squats[7][1],
      },
      video: "https://www.youtube.com/watch?v=dZON2MCVdfg",
    },
    {
      level: 9,
      name: "assisted One-Leg Squats",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 20],
      ],
      directions: {
        positive:
          "Stand up straight with one foot flat on the floor, and the other foot up in the air in front of you.",

        negative:
          "Press down on the basketball to help you over the first few centimeters.",
      },
      images: {
        positive: Images.Squats[8][0],
        negative: Images.Squats[8][1],
      },
      video:
        "https://www.youtube.com/watch?v=9Mcs9M1HORQ&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=12",
    },
    {
      level: 10,
      name: "Pistol Squats",
      progressions: [
        [1, 10],
        [2, 25],
        [3, 50],
      ],
      directions: {
        positive: "Keep your elevated leg as straight as possible.",

        negative:
          "Descend smoothly, until the back of the thigh of your supporting leg rests against the calf.",
      },
      images: {
        positive: Images.Squats[9][0],
        negative: Images.Squats[9][1],
      },
      video:
        "https://www.youtube.com/watch?v=fNCTWGl1Q8A&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=13",
    },
  ],
  "Leg Raises": [
    {
      level: 1,
      name: "Knee Tucks",
      progressions: [
        [1, 10],
        [2, 25],
        [3, 40],
      ],
      directions: {
        positive:
          "Lean back a little, grip the edge of the seat with your hands, and straighten your legs.",

        negative:
          "By the time the motion is complete, you should have exhaled fully.",
      },
      images: {
        positive: Images.LegRaises[0][0],
        negative: Images.LegRaises[0][1],
      },
      video: "https://youtu.be/N8k-SeCkR0s",
    },
    {
      level: 2,
      name: "Flat Knee Raises",
      progressions: [
        [1, 10],
        [2, 20],
        [3, 35],
      ],
      directions: {
        positive:
          "Bend your knees so that they are at approximately ninety degrees.",

        negative:
          "Keep the knees at a right angle throughout and exhale as you go.",
      },
      images: {
        positive: Images.LegRaises[1][0],
        negative: Images.LegRaises[1][1],
      },
      video: "https://youtu.be/98ragSP4gC8",
    },
    {
      level: 3,
      name: "Flat Bent Leg Raises",
      progressions: [
        [1, 10],
        [2, 15],
        [3, 30],
      ],
      directions: {
        positive:
          "Raise your legs, bending them at the knees approximately forty-five degrees from the straight aliment.",

        negative:
          "As you move, the angle of the knee should not change: it must remain 'Locked' iin the same position.",
      },
      images: {
        positive: Images.LegRaises[2][0],
        negative: Images.LegRaises[2][1],
      },
      video: "https://youtu.be/qq69_MifXAc",
    },
    {
      level: 4,
      name: "Flat Frog Raises",
      progressions: [
        [1, 8],
        [2, 15],
        [2, 25],
      ],
      directions: {
        positive: "Straighten your legs out fully.",

        negative:
          "Lower your legs, keeping them perfectly straight until they are just off the floor.",
      },
      images: {
        positive: Images.LegRaises[3][0],
        negative: Images.LegRaises[3][1],
      },
      video: "https://youtu.be/esoUyks3PZM",
    },
    {
      level: 5,
      name: "Flat Straight Leg Raises",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 20],
      ],
      directions: {
        positive:
          "Pressing down with the hands will help you keep your torso stable.",

        negative:
          "Keeping your legs locked, raise your feet until they are directly above your pelvis.",
      },
      images: {
        positive: Images.LegRaises[4][0],
        negative: Images.LegRaises[4][1],
      },
      video: "https://youtu.be/hav89ezKkPA",
    },
    {
      level: 6,
      name: "Hanging Knee Raises",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 15],
      ],
      directions: {
        positive:
          "Your body should be in a straight line, and you must keep your shoulders 'tight'.",

        negative:
          "Bring your knees up smoothly until they are level with your pelvis, and your knees are at a right angle.",
      },
      images: {
        positive: Images.LegRaises[5][0],
        negative: Images.LegRaises[5][1],
      },
      video: "https://youtu.be/t2MU4Q4V3Xk",
    },
    {
      level: 7,
      name: "Hanging Bent Leg Raises",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 15],
      ],
      directions: {
        positive:
          "Bend at the knees until your knee joints are angled off straight by around forty-five degrees.",

        negative:
          "Only move at the hips: keep your knees angle 'locked' into place.",
      },
      images: {
        positive: Images.LegRaises[6][0],
        negative: Images.LegRaises[6][1],
      },
      video: "https://youtu.be/CtFMjDbU0P4",
    },
    {
      level: 8,
      name: "Hanging Frog Raises",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 15],
      ],
      directions: {
        positive: "Extend your feet out in a line directly away from you",

        negative:
          "lower your legs, until fully extended keeping them locked straight.",
      },
      images: {
        positive: Images.LegRaises[7][0],
        negative: Images.LegRaises[7][1],
      },
      video: "https://youtu.be/GsZGSxGhcWk",
    },
    {
      level: 9,
      name: "Partial Straight Leg Raises",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 15],
      ],
      directions: {
        positive:
          "Lift the locked legs until they are at a forty-five degrees angle, and hold.",

        negative:
          "Smoothly raise your legs until they are parallel with the floor.",
      },
      images: {
        positive: Images.LegRaises[8][0],
        negative: Images.LegRaises[8][1],
      },
      video: "https://youtu.be/y4cCwSpScPo",
    },
    {
      level: 10,
      name: "Hanging Straight LegRaises",
      progressions: [
        [1, 5],
        [2, 10],
        [2, 30],
      ],
      directions: {
        positive: "Remain flexed, even in the start position.",

        negative:
          "Exhale as your legs raise, blowing all the air you can out of your lungs so that the abdomen is fully contracted.",
      },
      images: {
        positive: Images.LegRaises[9][0],
        negative: Images.LegRaises[9][1],
      },
      video: "https://youtu.be/7jI6fDNY_yM",
    },
  ],
};
