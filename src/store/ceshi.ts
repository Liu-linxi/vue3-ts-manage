import { defineStore } from "pinia";

const useCeshiStore = defineStore("ceshi", {
  state: () => ({
    count: 1,
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  actions: {
    changeCountAction(newCount: number) {
      this.count = newCount;
    },
  },
});

export default useCeshiStore;
