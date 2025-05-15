"use client";

import React from 'react';
import { FramerComponent } from '@/shared/components/Framer/FramerComponent';
import Image from 'next/image';

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#f8f2ff] z-0" />

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e3333c] to-[#5a3f85]" />

      <FramerComponent
        style="max-w-3xl w-full text-center space-y-10 z-10"
        animationInitial={{ opacity: 0, y: 50 }}
        animationAnimate={{ opacity: 1, y: 0 }}
        animationTransition={{ duration: 0.8 }}
      >
        <div className="space-y-10">
          <FramerComponent
            animationInitial={{ scale: 0.8 }}
            animationAnimate={{ scale: 1 }}
            animationTransition={{ duration: 0.5 }}
          >
            <div className="mx-auto relative w-72 h-72 flex items-center justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src="/logo.png"
                  alt="Luso Insumos"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </FramerComponent>

          <FramerComponent
            animationInitial={{ opacity: 0 }}
            animationAnimate={{ opacity: 1 }}
            animationTransition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#e3333c] to-[#5a3f85] text-transparent bg-clip-text">
              Sitio en Mantenimiento
            </h1>
          </FramerComponent>

          <FramerComponent
            animationInitial={{ opacity: 0 }}
            animationAnimate={{ opacity: 1 }}
            animationTransition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-gray-700 text-2xl">
              Estamos realizando mejoras para brindarte una mejor experiencia.
              <br />
              Regresaremos pronto.
            </p>
          </FramerComponent>

          <FramerComponent
            style="pt-4"
            animationInitial={{ opacity: 0, scale: 0.8 }}
            animationAnimate={{ opacity: 1, scale: 1 }}
            animationTransition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="flex justify-center space-x-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`w-5 h-5 rounded-full ${
                    i % 2 === 0 ? "bg-[#e3333c]" : "bg-[#5a3f85]"
                  }`}
                  style={{
                    animation: `bounce 1.4s infinite ease-in-out both`,
                    animationDelay: `${i * 0.16}s`,
                  }}
                />
              ))}
            </div>
          </FramerComponent>
        </div>
      </FramerComponent>

      <style jsx global>{`
        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default MaintenancePage;