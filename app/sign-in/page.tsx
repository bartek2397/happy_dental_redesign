"use client";

import React from "react";
import { toast } from "react-hot-toast";

import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import FormInput from "../components/inputs/FormInput";

const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        toast.success("Logged in!");
        router.push("/");
        router.refresh()
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
  return (
    <div className='max-w-full h-[75vh] px-4'>
      <div className='max-w-[1440px] h-[75%] mx-auto text-center relative'>
        <div className='w-[75%] lg:w-[50%] bg-[#e4eee3] rounded-lg border border-solid-1px border-black absolute left-[50%] -translate-x-[50%] top-[20%] '>
          <form className='flex flex-col gap-4 p-4'>
            <FormInput
              id='email'
              type='email'
              placeholder='Email'
              errors={errors}
              register={register}
              required
            />
            <FormInput
              id='password'
              type='password'
              placeholder='Password'
              errors={errors}
              register={register}
              required
            />
            {/* <div
              id='g_id_onload'
              data-client_id='671664924838-ki9ar78a75n1ct71hlnjodqot5m6tlcr.apps.googleusercontent.com'
              data-context='signin'
              data-ux_mode='popup'
              data-login_uri='http://localhost:3000/'
              data-auto_prompt='false'></div>

            <div
              className='g_id_signin'
              data-type='standard'
              data-shape='pill'
              data-theme='filled_black'
              data-text='continue_with'
              data-size='large'
              data-locale='en-US'
              data-logo_alignment='left'></div> */}
            <Button
              onClick={handleSubmit(onSubmit)}
              label='Submit'
              color='#C5D8DF'
              className='py-4 hover:bg-[#fff] transition'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
