"use client";

import { useEffect, useState } from "react";
import SidebarForm from "@/components/SidebarForm";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsSidebarOpen(true);
    const handleClose = () => setIsSidebarOpen(false);

    window.addEventListener("open-sidebar", handleOpen);
    window.addEventListener("close-sidebar", handleClose);

    return () => {
      window.removeEventListener("open-sidebar", handleOpen);
      window.removeEventListener("close-sidebar", handleClose);
    };
  }, []);

  return (
    <>
      <SidebarForm
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      {children}
    </>
  );
}
