export type OfferFeature = {
  text: string;
  included: boolean;
};

export type Offer = {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  price: number;
  badge?: string;
  save?: string;
  features: OfferFeature[];
  showDiet: boolean;
  showTraining: boolean;
};