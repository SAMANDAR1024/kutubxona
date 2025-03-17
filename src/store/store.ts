import { create } from "zustand";
import { GlobalStoreType } from "./store.type";
import { GetRandomId } from "../utils/utils";

export const useGlobalStore = create<GlobalStoreType>(() => {
  return {
    students: [
      {
        id: GetRandomId(),
        firstName: "Samandar",
        lastName: "Zafarov",
        age: 16,
        gender: "male",
        active: true,
      },
    ],
    groups: [
      {
        id: GetRandomId(),
        name: "Guruh 1",
        students_count: 0,
        active: true,
      },
      {
        id: GetRandomId(),
        name: "Guruh 2",
        students_count: 0,
        active: false,
      },
    ],
  };
});
