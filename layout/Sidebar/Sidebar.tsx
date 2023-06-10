import { JSX } from "react";
import { SidebarProps } from "@/layout/Sidebar/Sidebar.props";
import styles from "./Sidebar.module.css";

export const Sidebar = ({ ...otherProps }: SidebarProps): JSX.Element => {
  return <div {...otherProps}>Sidebar</div>;
};
