"use client";

import React from "react";
import { useCallback, useState } from "react";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

import { useRouter } from "next/navigation";

import { IoIosArrowDown } from 'react-icons/io'
import MenuItem from "./MenuItem";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div onClick={toggleOpen} className='relative bg-[#E4EEE3] lg:bg-background lg:text-white px-6 py-2 lg:px-0 rounded-xl'>
        <div className="flex text-md font-semibold cursor-pointer relative ">
          {currentUser?.email} <IoIosArrowDown className={`transition absolute top-1 right-0 translate-x-[150%] ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      <div>
        {isOpen && (
          <div className={`w-full absolute rounded-b-md bg-[#E4EEE3] lg:bg-background left-0 lg:z-20 text-center lg:text-white ${isOpen ? 'animate-dropdown' : 'animate-goUp'} `}>
            <div className={`flex flex-col cursor-pointer `}>
            {currentUser ? (
              <>
                <MenuItem 
                  label="Settings" 
                  onClick={() => router.push('/')}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
              </>
            ) : (
              <>
                <MenuItem 
                  label="Login" 
                  onClick={() => router.push('/sign-in')}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={() => router.push('/sign-up')}
                />
              </>
            )}
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
