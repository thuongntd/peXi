import { ILayoutProps } from "@/models";
import Link from "next/link";
import * as React from "react";
import { Header, Footer, Logo } from "../common";

export function MainLayout({ children }: ILayoutProps) {
  return (
    <div>
      <Header />
      <Logo />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
