"use client";

import FormInput from "../components/inputs/FormInput";

const SignUp = () => {
  return (
    <div className='max-w-full h-[75vh] px-4'>
      <div className='max-w-[1440px] h-[75%] mx-auto text-center relative'>
        <div className="w-[75%] lg:w-[50%] border border-solid-1px border-black absolute left-[50%] -translate-x-[50%] top-[20%] ">
          <form className="flex flex-col gap-4 px-4 py-4">
            <FormInput type='email' placeholder="Email" className=""/>
            <FormInput type='password' placeholder="Password" className="" />
            <FormInput type='password' placeholder='Confirm Password' className="" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
