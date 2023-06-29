"use client";

import Link from "next/link";

import { Breadcrumbs, Stack, Typography } from "@mui/material";
import Heading from "../components/Heading";

const Happysets = () => {
  const breadcrumbs = [
    <Link key='1' color='inherit' href='/'>
      Home
    </Link>,
    
    <Typography key='3' color='text.primary'>
      Happyset
    </Typography>,
  ];
  return (
    <main className='max-w-full h-screen'>
      <div className='max-w-[1440px] m-auto'>
        <div className="py-6">
          <Stack>
            <Breadcrumbs separator='>' aria-label='breadcrumb'>
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </div>
        <div className="font-heading font-bold text-2xl">
          <Heading title='Happyset' />
        </div>
        <div>
          <ul className="flex justify-between py-6 text-[#909B93] uppercase">
            <li>Dla niej</li>
            <li>Dla niego</li>
            <li>Okazje</li>
            <li>Dla dzieci</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Happysets;
