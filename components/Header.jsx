import Image from 'next/image';
import React from 'react';
import Logo from "@/public/logo.svg"

const Header = () => {
  return (
    <header className='h-auto flex items-center justify-center px-8 py-4 mb-12'>
      <div className='w-20 h-20 flex items-center justify-center gap-4'>
        <Image
          src={Logo}
          alt='MI ELEVEN LOGO'
        />
        <h1 className='font-poppins flex flex-col font-bold text-white leading-none text-xl'>
          <span>MI</span>
          <span>ELEVEN</span>
          <span>STUDIO</span>
        </h1>
      </div>
    </header>
  )
}

export default Header
