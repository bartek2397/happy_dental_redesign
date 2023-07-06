"use client";

import Button from "../components/Button";
import FormInput from "../components/inputs/FormInput";

import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

import axios from "axios";

const {
  register,
  handleSubmit,
  formState: {
    errors,
  },
} = useForm<FieldValues>({
  defaultValues: {
    email: '',
    password: '',
    confirmPassword: ''
  }
})

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string
}

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    axios.post('/api/register', data).then(() => {
      
    })
  } 
  return (
    <div className='max-w-full h-[75vh] px-4'>
      <div className='max-w-[1440px] h-[75%] mx-auto text-center relative'>
        <div className="w-[75%] lg:w-[50%] bg-[#e4eee3] rounded-lg border border-solid-1px border-black absolute left-[50%] -translate-x-[50%] top-[20%] ">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 px-4 py-4">
            <FormInput type='email' placeholder="Email" className=""/>
            <FormInput type='password' placeholder="Password" className="" />
            <FormInput type='password' placeholder='Confirm Password' className="" />
            <Button label="Submit" color="#C5D8DF" className=" py-4" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
