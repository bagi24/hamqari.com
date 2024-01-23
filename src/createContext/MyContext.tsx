import { createContext } from "react";

interface TypeData {
  firstname: string;
  professions: string;
  imgSrc: string;
}

interface MyContextProps {
  value: TypeData;
}

export const MyContext = createContext<MyContextProps | undefined>(undefined);
