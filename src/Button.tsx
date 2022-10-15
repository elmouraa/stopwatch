import { MouseEventHandler, ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children?: ReactNode;
  variant?: "success" | "error" | "info";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ children, variant = "success", onClick }: Props) => {
  return (
    <button
      className={clsx("text-white px-8 py-2 rounded-md", {
        "bg-green-500 hover:bg-green-600": variant === "success",
        "bg-red-500 hover:bg-red-600": variant === "error",
        " bg-blue-500 hover:bg-blue-600": variant == "info",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
