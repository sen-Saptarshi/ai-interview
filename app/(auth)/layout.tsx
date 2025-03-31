import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import React from "react";

export default async function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isUserAuthenticated = await isAuthenticated();

  if (isUserAuthenticated) {
    redirect("/");
  }

  return <div className="auth-layout">{children}</div>;
}
