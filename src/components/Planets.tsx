import React, { Fragment } from "react";
import { useOrbit } from "../context/OrbitContext";

export const Planets = ({ children }: { children: any }) => {
  const { items } = useOrbit();

  return (
    <>
      {items.map((planet, idx) => (
        <Fragment key={idx}>
          {children({
            idx,
            planet,
          })}
        </Fragment>
      ))}
    </>
  );
};
