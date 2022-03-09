import React from "react";
import classnames from "classnames";

export const Galaxy = ({
  classNames,
  children,
}: {
  classNames?: string;
  children: any;
}) => {
  return (
    <div
      className={classnames("rounded-full h-full w-full relative", classNames)}
    >
      {children}
    </div>
  );
};
