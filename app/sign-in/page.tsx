'use client'

import React from 'react'
import { toast } from 'react-hot-toast';

import { signIn } from 'next-auth/react'
import { 
    FieldValues, 
    SubmitHandler, 
    useForm
  } from "react-hook-form";
  import { BsGoogle } from "react-icons/bs";
  import { useRouter } from "next/navigation";
  import Button from "../components/Button";
  import FormInput from '../components/inputs/FormInput';

const SignIn = () => {
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
          password: ''
        },
      });
      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        signIn('credentials', {
            ...data,
            redirect: false
        }).then((callback) => {
            if (callback?.ok) {
                toast.success('You are logged')
                router.push('/')
            }
            if (callback?.error) {
              toast.error(callback.error)
            }
        })
      }
    return (
        <div className='max-w-full h-[75vh] px-4'>
          <div className='max-w-[1440px] h-[75%] mx-auto text-center relative'>
            <div className="w-[75%] lg:w-[50%] bg-[#e4eee3] rounded-lg border border-solid-1px border-black absolute left-[50%] -translate-x-[50%] top-[20%] ">
              <form className="flex flex-col gap-4 p-4">
                <FormInput id="email" type='email' placeholder="Email" errors={errors} register={register} required/>
                <FormInput id="password" type='password' placeholder="Password" errors={errors} register={register} required />
                <Button label="Sign in with Google" icon={BsGoogle} color="#fff" className="py-2 hover:bg-[#f4f4f4] transition" />
                <Button onClick={handleSubmit(onSubmit)} label="Submit" color="#C5D8DF" className="py-4 hover:bg-[#fff] transition" />
              </form>
            </div>
          </div>
        </div>
      );
}

export default SignIn
