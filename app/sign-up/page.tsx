"use client";

import Button from "../components/Button";
import FormInput from "../components/inputs/FormInput";

import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { BsGoogle } from 'react-icons/bs'

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";



const SignUp = () => {

  const router = useRouter()

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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post('/api/register', data)
    .then(() => {
      toast.success('Registered!')
      router.push('/')
    }).catch((error) => {
      toast.error(error)
    })
  } 
  return (
    <div className='max-w-full h-[75vh] px-4'>
      <div className='max-w-[1440px] h-[75%] mx-auto text-center relative'>
        <div className="w-[75%] lg:w-[50%] bg-[#e4eee3] rounded-lg border border-solid-1px border-black absolute left-[50%] -translate-x-[50%] top-[20%] ">
          <form className="flex flex-col gap-4 p-4">
            <FormInput id="email" type='email' placeholder="Email" errors={errors} register={register} required/>
            <FormInput id="password" type='password' placeholder="Password" errors={errors} register={register} required />
            <FormInput id="confirmPassword" type='password' placeholder='Confirm Password' errors={errors} register={register} required/>
            <Button onClick={() => signIn('google')} label="Sign up with Google" icon={BsGoogle} color="#fff" className="py-2 hover:bg-[#f4f4f4] transition" />
            <Button onClick={handleSubmit(onSubmit)} label="Submit" color="#C5D8DF" className="py-4 hover:bg-[#fff] transition" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
