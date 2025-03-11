export type bookType = {
  author: authorType;
  stocks: stocksType[];
  deletedAt: null;
  description: null;
  id: number;
  image: string;
  name: string;
  updatedAt: string;
};

export type stocksType = {
  busy: boolean;
  id: number;
  locationId: number;
};

export type authorType = {
  name: string;
};
