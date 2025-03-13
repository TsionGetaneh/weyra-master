"use client";
// Pricing data
export const plans = {
  monthly: {
    basic: {
      price: "$49/mo",
      features: [
        "Business Consultation",
        "Webflow Development",
        "One to One Training",
        "Phone and Live Support",
      ],
      available: [true, true, true, false],
    },
    pro: {
      price: "$149/mo",
      features: [
        "Business Consultation",
        "Webflow Development",
        "One to One Training",
        "Phone and Live Support",
      ],
      available: [true, true, true, false],
    },
  },
  yearly: {
    basic: {
      price: "$490/yr",
      features: [
        "Business Consultation",
        "Webflow Development",
        "One to One Training",
        "Phone and Live Support",
      ],
      available: [true, true, true, false],
    },
    pro: {
      price: "$1490/yr",
      features: [
        "Business Consultation",
        "Webflow Development",
        "One to One Training",
        "Phone and Live Support",
      ],
      available: [true, true, true, true],
    },
  },
};