'use client'

import { IconType } from "react-icons";

interface InputProps {
    type: string,
    icon?: IconType,
    disabled?: boolean
    value?: string;
}

const NavInput: React.FC<InputProps> = ({ type = 'text', icon: Icon, disabled, value }) => {
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
                className="absolute right-4 top-3"
                color="#fff"
            />
        )}
    </div>
  )
};

export default NavInput;
