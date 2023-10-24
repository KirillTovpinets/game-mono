import Link from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";
import layout from "../layout.module.css";
interface AppLinkProps extends PropsWithChildren {
  href: string;
}

const AppLink: FunctionComponent<AppLinkProps> = ({ children, href }) => {
  return (
    <Link href={href} className={layout.link}>
      {children}
    </Link>
  );
};

export default AppLink;
