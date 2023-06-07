import { ButtonProps } from "@/components/Button/Button.props";
import styles from "./Button.module.css";
import { JSX } from "react";
import ArrowIcon from "./arrow.svg";
import cn from "classnames";

export const Button = ({
  appearance,
  children,
  arrow = "none",
  ...otherProps
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...otherProps}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.arrowDown]: arrow === "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
