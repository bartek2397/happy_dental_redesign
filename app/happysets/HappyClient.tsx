'use client'

import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import React from 'react'
import Heading from '../components/Heading';
import { SafeOrder, ProductType, SafeUser } from '../types';
import ProductCard from '../components/products/ProductCard';

const HappyClient = () => {

  const breadcrumbs = [
    <Link key='1' color='inherit' href='/'>
        Home
      </Link>,
      
      <Typography key='3' color='text.primary'>
        Happyset
      </Typography>,
    ];
    return (
      <main className='max-w-full px-4'>
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
  )
}

export default HappyClient;