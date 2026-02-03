"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

import SidebarForm from "@/components/SidebarForm";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // Sidebar open / close events
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

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <>
      <SidebarForm
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Page transition wrapper */}
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
