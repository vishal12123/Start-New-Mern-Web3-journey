import { selector } from "recoil";


export const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const count = get(count);

    if(count%2==0) return text.length;
  },
});
