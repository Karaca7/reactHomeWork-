import { create } from "zustand";


const useFurits = create(set => ({
    fruits: ['apple', 'banana', 'orange'],
    addFruits: (fruit) => {
      set(state => ({
        fruits: [...state.fruits, fruit]
      }));
    }
  }));

  export default useFurits