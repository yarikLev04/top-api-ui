import { JSX } from "react";
import { FooterProps } from "@/layout/Footer/Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = ({
  className,
  ...otherProps
}: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...otherProps}>
      <div>
        OwlTop © 2020 - {format(new Date(), "yyyy")} All Rights Reserved
      </div>
      <a href="#" target="_blank">
        Terms of Use
      </a>
      <a href="#" target="_blank">
        Privacy Policy
      </a>
    </footer>
  );
};
