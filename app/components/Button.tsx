"use client";

import Link from "next/link";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`w-[200px] lg:w-[244px] h-[122px] uppercase text-xl rounded-[50px] text-center leading-[122px] font-heading font-semibold `}>
        <Link href='/'>{label}</Link>
    </button>
  );
};

export default Button;
