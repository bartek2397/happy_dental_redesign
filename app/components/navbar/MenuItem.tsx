"use client";

import Link from "next/link";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, className }) => {
  return (
    <div
      onClick={onClick}
      className={`h-[10%] w-full text-center leading-[10vh] uppercase max-lg:hover:bg-[#C5D8DF] transition hover:drop-shadow-md lg:text-white ${
        className ?? ""
      }`}
    >
      <Link href={`/${label}`}>{label}</Link>
    </div>
  );
};

export default MenuItem;
