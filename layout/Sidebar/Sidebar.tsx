import cn from "classnames";
import { JSX } from "react";
import { SidebarProps } from "@/layout/Sidebar/Sidebar.props";
import { Menu } from "@/layout/Menu/Menu";
import Logo from "../logo.svg";
import styles from "./Sidebar.module.css";

export const Sidebar = ({
  className,
  ...otherProps
}: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...otherProps}>
      <Logo className={cn(styles.logo)} />
      <div>search</div>
      <Menu />
    </div>
  );
};
