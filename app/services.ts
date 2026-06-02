export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  startingFrom?: string;
  cta: string;
  bullets: string[];
  idealFor?: string[];
  packages?: Array<{
    name: string;
    price: string;
    description?: string;
  }>;
};

export const services: Service[] = [
  {
    id: "consultation",
    title: "Content Strategy Consultation",
    subtitle: "Build a Clear Roadmap for Your Content",
    description:
      "Our consultation sessions provide personalized guidance to position your brand and create content that delivers measurable results.",
    startingFrom: "Starting From: ₦20,000/hour",
    cta: "Book a Consultation",
    bullets: [
      "Develop a content strategy",
      "Understand your target audience",
      "Improve social media performance",
      "Plan content calendars",
      "Increase engagement and visibility",
      "Build a sustainable content system",
    ],
    idealFor: [
      "Business owners",
      "Personal brands",
      "Startups",
      "Creators",
      "Marketing teams",
    ],
  },
  {
    id: "training",
    title: "Online Classes & Training",
    subtitle: "Learn How to Create Content Like a Professional",
    description:
      "We provide practical, hands-on training designed to help individuals and teams master modern content creation.",
    startingFrom: "Starting From: ₦50,000/week",
    cta: "Join a Class",
    bullets: [
      "Smartphone video creation",
      "Video editing fundamentals",
      "Social media content strategy",
      "Reels and short-form video production",
      "Content planning and publishing",
      "Personal branding",
    ],
    idealFor: ["Beginners", "Entrepreneurs", "Content creators", "Corporate teams"],
  },
  {
    id: "speaking",
    title: "Event Facilitation & Speaking",
    subtitle: "Professional Hosting, Moderation & Speaking Engagements",
    description:
      "Need a confident and engaging speaker for your event? We provide professional facilitation services that keep audiences engaged.",
    startingFrom: "Starting From: ₦100,000/hour",
    cta: "Book a Speaker",
    bullets: [
      "Conferences",
      "Workshops",
      "Corporate events",
      "Panel discussions",
      "Training sessions",
      "Community events",
    ],
  },
  {
    id: "individual-content",
    title: "Individual Content Creation",
    subtitle: "High-Impact Content for Your Brand",
    description:
      "We create custom videos tailored to your goals and audience, designed to maximize engagement and communicate your message clearly.",
    startingFrom: "Starting From: ₦70,000 per video",
    cta: "Create My Content",
    bullets: [
      "Instagram Reels",
      "TikTok Videos",
      "Product Videos",
      "Promotional Content",
      "Educational Videos",
      "Personal Brand Content",
    ],
  },
  {
    id: "event-coverage",
    title: "Event Coverage",
    subtitle: "Capture Every Important Moment",
    description:
      "We create social-media-ready event coverage that extends the life of your event long after it ends.",
    cta: "Book Event Coverage",
    bullets: [
      "Event filming",
      "Highlight reels",
      "Speaker clips",
      "Audience reactions",
      "Behind-the-scenes content",
      "Social media edits",
    ],
    packages: [
      {
        name: "1 Video Package",
        price: "₦100,000",
        description: "Event highlight video",
      },
      {
        name: "5 Video Package",
        price: "₦300,000",
        description: "Multiple social-ready clips",
      },
      {
        name: "10 Video Package",
        price: "₦450,000",
        description: "Extensive event content library",
      },
      {
        name: "15 Video Package",
        price: "₦600,000",
        description: "Full content coverage solution",
      },
    ],
  },
  {
    id: "marketing",
    title: "Branded Video & Marketing Content",
    subtitle: "Turn Your Brand Into a Story People Want to Follow",
    description:
      "We create strategic branded content that helps businesses build trust, visibility, and connection across modern platforms.",
    cta: "Start My Campaign",
    bullets: [
      "Brand story videos",
      "Campaign videos",
      "Product showcases",
      "Customer testimonials",
      "Founder stories",
      "Social media campaigns",
    ],
    packages: [
      {
        name: "1 Premium Marketing Video",
        price: "₦150,000",
      },
      {
        name: "4 Video Campaign Package",
        price: "₦500,000",
      },
    ],
  },
];
