import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Service } from "@/types";

const IVA_RATE = 0.19;

function calculateTotals(items: CartItem[]) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.service.price * item.quantity,
    0,
  );
  const iva = Math.round(subtotal * IVA_RATE);
  const total = subtotal + iva;
  return { subtotal, iva, total };
}

interface CartStore {
  items: CartItem[];
  subtotal: number;
  iva: number;
  total: number;
  isOpen: boolean;
  toastMessage: string | null;
  addItem: (service: Service) => void;
  removeItem: (serviceId: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
  closeCart: () => void;
  openCart: () => void;
  hideToast: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      subtotal: 0,
      iva: 0,
      total: 0,
      isOpen: false,
      toastMessage: null,

      addItem: (service) => {
        const items: CartItem[] = [{ service, quantity: 1 }];
        const totals = calculateTotals(items);
        set({
          items,
          ...totals,
          toastMessage: `${service.name} agregado al carrito`,
        });
        setTimeout(() => {
          const current = get().toastMessage;
          if (current?.includes(service.name)) {
            set({ toastMessage: null });
          }
        }, 3000);
      },

      removeItem: () => {
        set({ items: [], subtotal: 0, iva: 0, total: 0 });
      },

      clearCart: () => {
        set({ items: [], subtotal: 0, iva: 0, total: 0 });
      },

      toggleCart: () => set({ isOpen: !get().isOpen }),

      closeCart: () => set({ isOpen: false }),

      openCart: () => set({ isOpen: true }),

      hideToast: () => set({ toastMessage: null }),
    }),
    {
      name: "bsd-cart-storage",
      partialize: (state) => ({ items: state.items }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          const totals = calculateTotals(state.items);
          state.subtotal = totals.subtotal;
          state.iva = totals.iva;
          state.total = totals.total;
        }
      },
    },
  ),
);
