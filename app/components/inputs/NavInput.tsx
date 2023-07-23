'use client'

import { useState } from "react";
import { IconType } from "react-icons";

interface InputProps {
    type: string,
    icon?: IconType,
    disabled?: boolean
    value?: string;
    focused?: boolean;
}

const NavInput: React.FC<InputProps> = ({ type = 'text', icon: Icon, disabled, value, focused }) => {

  const [isFocused, setIsFocused] = useState(false)
  return (
    <div className="w-[107px] h-full relative text-white bg-transparent border-solid border rounded-full">
      <input
          className='w-[107px] h-full bg-transparent rounded-full px-4'
          type={type}
          disabled={disabled}
          value={value}
        />
        {Icon && (
            <Icon 
                size={24}
                className="absolute right-4 top-[50%] -translate-y-[50%]"
                color="#fff"
            />
        )}
    </div>
  )
};

export default NavInput;
