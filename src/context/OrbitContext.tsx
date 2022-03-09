import React, { useContext, createContext, ReactNode } from "react";
import { omit } from "../utils";

export const OrbitContext = createContext<UseOrbitReturn>({
  items: [],
});

export const useOrbit = (): UseOrbitReturn => useContext(OrbitContext);

export const OrbitProvider = (
  props: UseOrbitReturn & { children: ReactNode }
) => (
  <OrbitContext.Provider
    value={{
      ...(omit(props, "children") as UseOrbitReturn),
    }}
  >
    {props.children}
  </OrbitContext.Provider>
);

export type UseOrbitReturn = {
  items: any[];
};
