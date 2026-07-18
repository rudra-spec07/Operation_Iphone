export const questions = [
  {
    id: 1,
    title: "I want something from you 🥺",
    options: [
      {
        text: "OK",
        next: 2,
      },
      {
        text: "Don't Care",
        next: 3,
      },
    ],
  },

  {
    id: 2,
    title: "I want an iPhone 17 📱\nWill you buy it for me?",
    options: [
      {
        text: "OK",
        action: "BUY_IPHONE",
      },
      {
        text: "Hell No",
        next: 4,
      },
    ],
  },

  {
    id: 3,
    title: "Whyyy 😭\nI want something from you...",
    options: [
      {
        text: "OK",
        next: 2,
      },
    ],
  },

  {
    id: 4,
    title: "Whyyy 😭\nPlease buy it for me...",
    options: [
      {
        text: "OK",
        action: "BUY_IPHONE",
      },
      {
        text: "Bilkul Nii",
        next: 5,
      },
    ],
  },

  {
    id: 5,
    title: "Please 🥺🙏\nI am begging you...",
    options: [
      {
        text: "OK",
        action: "BUY_IPHONE",
      },
      {
        text: "No Chance",
        next: 6,
      },
    ],
  },

  {
    id: 6,
    title: "😈 Buy it or I will stop talking to you!",
    options: [
      {
        text: "OK ❤️",
        action: "BUY_IPHONE",
      },
      {
        text: "No Chance",
        action: "RUN_AWAY",
      },
    ],
  },
];