import { selector, atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
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

export const pageNumber = atom({
  key: "pages",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const HeightState = atom({
  key: "height",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
