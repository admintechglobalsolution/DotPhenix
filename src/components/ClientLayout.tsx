"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import SidebarForm from "@/components/SidebarForm";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

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

      {/* ENTER-ONLY animation (no blink) */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{ minHeight: "100vh" }}
      >
        {children}
      </motion.div>
    </>
  );
}
