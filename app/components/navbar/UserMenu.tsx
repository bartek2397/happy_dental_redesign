"use client";

import React from "react";
import { useCallback, useState } from "react";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

import { useRouter } from "next/navigation";

import { IoIosArrowDown } from "react-icons/io";
import MenuItem from "./MenuItem";
import Link from "next/link";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='max-w-[100%] mx-auto bg-[#E4EEE3] lg:bg-transparent lg:text-white px-6 lg:px-0 py-4 lg:py-2 rounded-xl flex flex-col lg:flex-row items-center lg:justify-between'>
      <Link href='/' className='w-full text-center font-semibold '>
        My account
      </Link>
      <div className='w-[100px] lg:w-[70px] h-[1px] bg-white lg:rotate-90'></div>
      <Link href='/' onClick={() => signOut()} className='w-full text-center font-semibold '>
        Logout
      </Link>
    </div>
  );
};

export default UserMenu;
