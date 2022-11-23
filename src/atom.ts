import { selector, atom } from "recoil";

export const ThemeState = atom({
  key: "theme",
  default: false,
});

export const YState = atom({
  key: "scrollY",
  default: 0,
});

export const BoxHeight = atom({
  key: "box",
  default: 0,
});
