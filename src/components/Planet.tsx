import React, { Fragment } from "react";
import { useOrbit } from "../context/OrbitContext";
import classnames from "classnames";

const LAYOUTS = [
  null,
  [
    "absolute top-[13%] left-[13%] h-[45%] w-[45%] rounded-full",
    "absolute top-[50%] right-[13%] h-[35%] w-[35%] rounded-full",
  ],
  [
    "absolute top-[13%] left-[13%] h-[40%] w-[40%] rounded-full",
    "absolute top-[35%] right-[10%] h-[35%] w-[35%] rounded-full",
    "absolute top-[60%] left-[25%] h-[30%] w-[30%] rounded-full",
  ],
];

export const Planet = ({
  children,
  className,
  idx,
}: {
  children: any;
  className: string;
  idx: number;
}) => {
  const { items } = useOrbit();
  return (
    <div className={classnames(LAYOUTS[items.length - 1][idx], className)}>
      {children}
    </div>
  );
};

// const TwoPlanetLayout = ({ classNames = "" }: { classNames?: string }) => (
//   <>
//     <div
//       className={classnames(
//         "absolute top-[13%] left-[13%] h-[45%] w-[45%] rounded-full",
//         classNames
//       )}
//     >{children}
//     <div
//       className={classnames(
//         "absolute top-[50%] right-[13%] h-[35%] w-[35%] rounded-full",
//         classNames
//       )}
//     />
//   </>
// );
