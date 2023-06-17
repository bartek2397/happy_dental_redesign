"use client";

import Link from "next/link";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, color }) => {
  return (
    <button onClick={onClick} disabled={disabled} color={color} className="uppercase text-[32px]">
        <Link href='/'>{label}</Link>
    </button>
  );
};

export default Button;
