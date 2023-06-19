'use client'
import { SafeNumber } from "../types";

interface CardProps {
    width?: SafeNumber  | undefined;
    height?: SafeNumber | undefined;
    color?: string
    children: React.ReactNode
    className?: string
}

const Card: React.FC<CardProps> = ({ width, height, color, children, className }) => {
  return (
    <div className={`w-[${width}] h-[${height}] bg-[${color}] rounded-[80px] px-24 pt-24 ${className}`}>
      {children}
    </div>
  )
};

export default Card;
