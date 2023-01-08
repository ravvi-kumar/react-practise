import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface IMyContext {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}
export const MyContext = createContext<null | IMyContext>(null);

export function MyContextProvider({ children }: PropsWithChildren) {
  const [count, setCount] = useState(0);
  return (
    <MyContext.Provider value={{ count, setCount }}>
      {children}
    </MyContext.Provider>
  );
}
export const useMyContext = <T,>(): T => {
  const myContext = useContext(MyContext);
  return myContext as T;
};
