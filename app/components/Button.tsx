"use client";

import Link from "next/link";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  color?: string;
  className?: string;
  route?: string
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  color,
  className,
  route
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-[${color}] uppercase rounded-[50px] text-center font-heading font-semibold ${
        className ?? ""
      }`}
    >
      <Link href={`${route}`}>{label}</Link>
    </button>
  );
};

export default Button;
