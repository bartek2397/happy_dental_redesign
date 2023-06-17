'use client'

import { IconType } from "react-icons";

interface InputProps {
    type: string,
    icon?: IconType,

}

const Input: React.FC<InputProps> = ({ type = 'text', icon: Icon }) => {
  return (
    <div className="w-[107px] h-full relative bg-transparent border-solid border rounded-full">
      <input
          className='w-[107px] h-full bg-transparent rounded-full'
          type={type}
          
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

export default Input;
