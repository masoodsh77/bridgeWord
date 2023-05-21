import { ReactNode } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";

export default async function UserLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    //@ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
