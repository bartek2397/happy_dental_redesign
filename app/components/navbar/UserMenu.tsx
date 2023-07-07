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
    <div className='relative'>
      <div>
        <div onClick={toggleOpen} className="flex text-md font-semibold cursor-pointer">
          Hello {currentUser?.email} <IoIosArrowDown className={`transition ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>
      <div>
        {isOpen && (
          <div className="absolute rounded-xl ">
            <div className="flex flex-col cursor-pointer">
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
