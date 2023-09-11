"use client";

import Link from "next/link";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  color?: string;
  className?: string;
  link?: string
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  color,
  className,
  link,
  icon: Icon
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-[${color}] uppercase rounded-[50px] text-center font-heading font-semibold relative ${
        className ?? ""
      }`}
    >
      {Icon && (
        <Icon size={24} className="absolute right-4 top-[50%] -translate-y-[50%]" />
      )}
      <Link href={`${link}`}>{label}</Link>
    </button>
  );
};

export default Button;
