import { create } from "zustand";
import { GlobalStoreType } from "./store.type";
import { GetRandomId } from "../utils/utils";

export const useGlobalStore = create<GlobalStoreType>(() => {
  const studentId =GetRandomId()
  const groupId =GetRandomId()
  const productId =GetRandomId()
  const catigoriaId =GetRandomId()
  const buyurtmaId =GetRandomId()
  return {
    students: [
      {
        id: studentId,
        firstName: "Samandar",
        lastName: "Zafarov",
        age: 16,
        gender: "male",
        active: true,
      },
    ],
    groups: [
      {
        id: groupId,
        name: "Guruh 1",
        students_count: 0,
        active: true,
      },
      
    ],
    products: [
      {
        id: productId,
        nomi: "noutbook",
        narxi: 200000,
      },
    ],
    catigoria: [
      {
        id: catigoriaId,
        nomi: "Noutbook",
        image: "",
      },
    ],
    buyurtma: [
      {
        id: buyurtmaId,
        student_id: studentId,
        product_id: productId,
        count: 5,
        total_price: 100,
        manzil: `Chilonzor Najot Ta'lim`,
      },
    ],
    lang:"uz"
  };
});
