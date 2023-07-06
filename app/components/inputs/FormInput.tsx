"use client";

import React from "react";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface FormInputProps {
  id: string;
  type: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  type = "text",
  className,
  placeholder,
  required,
  register,
  errors,
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      {...register(id, { required })}
      className={`border border-solid-1px border-gray-300 ${className ?? ""} ${
        errors[id] ? "border-rose-500" : "border-gray-300"
      }`}
    />
  );
};

export default FormInput;
