import create from "zustand";
import { persist } from "zustand/middleware";

export interface IObjArrStore {
  objArr: {}[];
  addObj: (newObj: {}) => void;
}

export const useObjArrStore = create<IObjArrStore>()(
  persist(
    (set, get) => ({
      objArr: [],
      addObj: (newObj) =>
        set((state: IObjArrStore) => ({
          objArr: [...state.objArr, newObj],
        })),
    }),
    { name: "some" }
  )
);
