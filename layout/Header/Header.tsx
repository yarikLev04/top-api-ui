import { JSX } from "react";
import { HeaderProps } from "@/layout/Header/Header.props";

export const Header = ({ ...otherProps }: HeaderProps): JSX.Element => {
  return <div {...otherProps}>Header</div>;
};
