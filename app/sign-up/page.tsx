"use client";

import Button from "../components/Button";
import FormInput from "../components/inputs/FormInput";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

// import jwt_decode from "jwt-decode";


const SignUp = () => {
  // const [user, setUser] = useState({})
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Registered!");
        router.push("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  // function handleCredentialResponse(response: any) {
  //   console.log("Encoded JWT ID token: " + response.credential)
  //   let userObject = jwt_decode(response.credential)
  //   console.log(userObject)
  //   setUser(userObject)
  //   console.log(JSON.stringify(user))
  // }

  // useEffect(() => {
  //   /*global google*/
  //   google.accounts.id.initialize({
  //     client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  //     callback: handleCredentialResponse,
  //     auto_select: false,
  //     ux_mode: "popup",
  //   });

  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     theme: "outline",
  //     size: "large",
  //     text: "Continue with Google",
  //     shape: "circle",
  //     width: "100%",
  //   });
  // }, []);

  return (
    <>
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
              <FormInput
                id='confirmPassword'
                type='password'
                placeholder='Confirm Password'
                errors={errors}
                register={register}
                required
              />
              {/* <div
                id='signInDiv'
                data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                data-callback={handleCredentialResponse}
                data-context='signup'
                data-ux_mode='popup'
                data-login_uri='http://localhost:3000/'
                data-auto_prompt='false'></div>

              <div
                className='g_id_signin'
                data-type='standard'
                data-shape='pill'
                data-theme='filled_blue'
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
    </>
  );
};

export default SignUp;
