import { defineStore } from "pinia";
import utils from "../utils.js";

const breakpoints = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};

export const useAppStore = defineStore({
  id: "app",
  state: () => ({}),
  getters: {
    isMobile: function () {
      return window.innerWidth < breakpoints.mobile;
    },
    
    isTablet: function () {
      return (
        window.innerWidth >= breakpoints.tablet &&
        window.innerWidth < breakpoints.laptop
      );
    },
  },
  actions: {},
});
