"use client";

import { CartDrawer } from "./CartDrawer";
import { CustomCursor } from "./CustomCursor";
import { ToastNotification } from "./ToastNotification";
import { WhatsAppButton } from "./WhatsAppButton";

export function CartProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CartDrawer />
      <ToastNotification />
      <WhatsAppButton />
      <CustomCursor />
    </>
  );
}
