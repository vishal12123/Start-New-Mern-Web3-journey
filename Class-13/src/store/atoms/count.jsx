
import { selector , atom } from "recoil";

// export const countAtom = atom({
//   key:"countAtom",
//   default:0
// });


export const workName = atom({
  key: "workName",
  default: "",
});

export const descriptionTodo = atom({
  key: "descriptionTodo",
  default: "",
});


export const todoListState = atom({
  key: "todoListState", // Unique identifier for the atom
  default: [], // Default value is an empty array
}); 



export const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const count = get(countAtom);

    if (count % 2 == 0) return "Even";
  },
});
