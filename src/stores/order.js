import { create } from "zustand";

// const header = {
//   name: "Planet Instance",
//   description: "",
//   renders: ["application/json", "text/html", "application/json"],
//   parses: [
//     "application/json",
//     "application/x-www-form-urlencoded",
//     "multipart/form-data",
//   ],
// };

const useOrders = create((set) => ({
  orders: [],
  setOrders: (order) => {
    set((state) => ({
      orders: [...state.orders, order],
    }));
  },
}));

export default useOrders;
