import { create } from "zustand";

interface PaymentTypeState {
  paymentType: string;
  setPaymentType: (type: string) => void;
  deliveryMethod: string;
  setDeliveryMethod: (method: string) => void;
  deliveryAddress: string;
  setDeliveryAddress: (address: string) => void;
  deliverySchedule: string;
  setDeliverySchedule: (schedule: string) => void;
}

export const paymentTypeStore = create<PaymentTypeState>((set) => ({
  paymentType: "Efectivo",
  setPaymentType: (type) => set({ paymentType: type }),
  deliveryMethod: "Retiro en local",
  setDeliveryMethod: (method) => set({ deliveryMethod: method }),
  deliveryAddress: "",
  setDeliveryAddress: (address) => set({ deliveryAddress: address }),
  deliverySchedule: "",
  setDeliverySchedule: (schedule) => set({ deliverySchedule: schedule }),
}));
