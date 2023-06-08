import { JSX } from "react";
import { TagProps } from "@/components/Tag/Tag.props";
import cn from "classnames";
import styles from "@/components/Tag/Tag.module.css";

export const Tag = ({
  size = "m",
  children,
  color = "ghost",
  href,
  className,
  ...otherProps
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.ghost]: color === "ghost",
        [styles.grey]: color === "grey",
        [styles.green]: color === "green",
        [styles.red]: color === "red",
        [styles.primary]: color === "primary",
      })}
      {...otherProps}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
