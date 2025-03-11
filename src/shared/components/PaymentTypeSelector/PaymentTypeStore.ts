import { create } from "zustand";

interface PaymentTypeState {
  paymentType: string;
  setPaymentType: (type: string) => void;
}

export const paymentTypeStore = create<PaymentTypeState>((set) => ({
  paymentType: "Efectivo",
  setPaymentType: (type) => set({ paymentType: type }),
}));
