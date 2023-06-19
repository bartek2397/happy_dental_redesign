"use client";

import Link from "next/link";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`w-[244px] h-[122px] lg:w-[183px] lg:h-[91px] uppercase text-[32px] lg:text-[24px] rounded-[50px] text-center leading-[122px] lg:leading-[61px] font-heading font-semibold `}>
        <Link href='/'>{label}</Link>
    </button>
  );
};

export default Button;
