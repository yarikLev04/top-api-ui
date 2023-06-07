import { JSX } from "react";
import { ParagraphProps } from "@/components/Paragraph/Paragraph.props";
import cn from "classnames";
import styles from "./Paragraph.module.css";

export const Paragraph = ({
  size = "m",
  children,
  className,
  ...otherProps
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.l]: size === "l",
      })}
      {...otherProps}
    >
      {children}
    </p>
  );
};
