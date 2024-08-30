// components/GradientCard.tsx
import React from "react";
import { BackgroundGradient } from "../Components/UI/background-gradient"

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientCard: React.FC<GradientCardProps> = ({ children, className }) => {
  return (
    <BackgroundGradient className={`rounded-lg shadow-lg p-6 ${className}`}>
      {children}
    </BackgroundGradient>
  );
};
