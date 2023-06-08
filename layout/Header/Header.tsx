import { JSX } from "react";
import { HeaderProps } from "@/layout/Header/Header.props";
import styles from "./Header.module.css";

export const Header = ({ ...otherProps }: HeaderProps): JSX.Element => {
  return <div {...otherProps}>Header</div>;
};
