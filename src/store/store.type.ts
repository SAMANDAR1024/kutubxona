import {
  CatigoriaType,
  GroupType,
  ProductsType,
  StudentType,
} from "../types/type";

export type GlobalStoreType = {
  students: StudentType[];
  groups: GroupType[];
  products: ProductsType[];
  catigoria: CatigoriaType[];
};
