import { JSX } from "react";
import { FooterProps } from "@/layout/Footer/Footer.props";

export const Footer = ({ ...otherProps }: FooterProps): JSX.Element => {
  return <div {...otherProps}></div>;
};
