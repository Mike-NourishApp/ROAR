export interface PriceRow {
  label: string;
  note?: string;
  price: string;
  unit?: string;
}

export interface PricingOffer {
  title: string;
  price: string;
  tag: string;
  items: string[];
  ends: string;
}

export interface PricingGroup {
  id: string;
  title: string;
  tagline: string;
  /** Short summary used on the Join ROAR cards. */
  description: string;
  /** Headline price shown on the Join ROAR cards. */
  from: string;
  fromNote: string;
  rows: PriceRow[];
  offer?: PricingOffer;
}

export const pricingGroups: PricingGroup[] = [
  {
    id: "group-classes",
    title: "Group Classes",
    tagline: "Coached Sessions",
    description:
      "Coach-led group training across Roar Zone, Barbell Club, Engine Room and Hybrid Run. Buy a pack or go unlimited.",
    from: "$480",
    fromNote: "12 class pack",
    rows: [
      { label: "Drop In", price: "$60" },
      { label: "10 Pack", note: "Valid for 60 days", price: "$500" },
      { label: "12 Pack", note: "Valid for 30 days", price: "$480" },
      { label: "Unlimited", note: "Valid for 30 days", price: "$600" },
    ],
    offer: {
      title: "20 Pack",
      price: "$700",
      tag: "Limited Offer",
      items: [
        "Valid for 6 months",
        "Any group class",
        "Limited to one purchase per member",
      ],
      ends: "Offer ends 31 August",
    },
  },
  {
    id: "open-gym",
    title: "Open Gym",
    tagline: "Train Your Way",
    description:
      "Full access to the training floor during open gym hours. Ideal if you run your own programming.",
    from: "$200",
    fromNote: "per month on 12 months",
    rows: [
      { label: "Day Pass", price: "$50" },
      { label: "1 Month", price: "$300", unit: "per month" },
      { label: "3 Months", price: "$270", unit: "per month" },
      { label: "6 Months", price: "$250", unit: "per month" },
      { label: "12 Months", price: "$200", unit: "per month" },
    ],
  },
  {
    id: "drop-in",
    title: "Drop In",
    tagline: "One Session",
    description:
      "Visiting or want to try us out? Drop into a coached group class, or grab an open gym day pass and train on your own.",
    from: "$25",
    fromNote: "open gym, limited time",
    rows: [
      { label: "Group Class Drop In", price: "$60" },
      { label: "Open Gym Day Pass", price: "$50" },
    ],
    offer: {
      title: "Open Gym Drop In",
      price: "$25",
      tag: "Limited Time",
      items: ["Self training", "Great community", "HYROX equipment"],
      ends: "Offer ends 31 August",
    },
  },
];
