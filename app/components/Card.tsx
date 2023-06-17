'use client'
import { SafeNumber } from "../types";

interface CardProps {
    width: SafeNumber  | undefined;
    height: SafeNumber | undefined;
    color: string
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ width, height, color, children }) => {
  return (
    <div className={`w-[${width}] h-[${height}] bg-[${color}] rounded-[80px] p-24`}>
      {children}
    </div>
  )
};

export default Card;
