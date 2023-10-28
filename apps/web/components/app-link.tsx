import Link from "next/link";
import type { PropsWithChildren, ReactElement } from "react";
import layout from "../styles/layout.module.css";

interface AppLinkProps extends PropsWithChildren {
  href: string;
}

function AppLink({ children, href }): ReactElement<AppLinkProps> {
  return (
    <Link className={layout.link} href={href as string}>
      {children}
    </Link>
  );
}

export default AppLink;
