export type StudentType = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: "male" | "female";
  active: boolean;
};

export type GroupType = {
  id: number;
  name: string;
  students_count: number;
  active: boolean;
};

export type ProductsType = {
  id: number;
  nomi: string;
  narxi: number;
};
export type CatigoriaType = {
  id: number;
  nomi: string;
  image: string;
};
