'use client'

import React from 'react'

interface FormInputProps {
  type: string;
  className?: string
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({ type = 'text', className, placeholder }) => {
  return (
    <input type={type} className={`border border-solid-1px border-gray-300 ${className ?? ''}`} placeholder={placeholder}/>
  )
}

export default FormInput;
