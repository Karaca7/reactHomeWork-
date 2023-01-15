import { create } from "zustand";

const useCounter = create((set) => ({
  count: 1,

  incerment: () => set((state) => {
    return ({ count: state.count + 1 })}),
}));

export default useCounter;
