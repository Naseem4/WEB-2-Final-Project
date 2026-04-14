import type { Offer } from "../types/offer";

export const offers: Offer[] = [
  {
    id: 1,
    title: "Training Only",
    subtitle: "Personal training program",
    features: ["Workout plan", "Progress tracking"],
  },
  {
    id: 2,
    title: "Diet Plan Only",
    subtitle: "Nutrition program",
    features: ["Meal plan", "Calories tracking"],
  },
  {
    id: 3,
    title: "Both Together",
    subtitle: "Full fitness package",
    features: ["Workout + Diet", "Full tracking"],
  },
];