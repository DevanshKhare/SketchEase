import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import MenuBar from '@/components/MenuBar'
import { FaCircleArrowRight } from "react-icons/fa6";

const page = () => {
  return (
    <div className='h-screen pt-8 bg-zinc-950 absolute inset-0 -z-10 w-full items-center px-5 py-24'>
      <div className='w-[90%] m-auto '>
        <header className='h-[5rem] flex text-white items-center justify-between px-4'>
            <div>
              <Image src="/logo.png" alt='logo' height={50} width={50}/>
            </div>
            <div>
              <MenuBar/>
            </div>
            <div>
              <Button variant="outline" className="rounded-[4rem] border-zinc-900 border-[2px] hover:bg-zinc-900">Sign Up</Button>
            </div>
        </header>
      </div>
      <div className='text-white w-[90%] m-auto h-full flex items-center justify-center flex-col'>
        <h1 className='text-[5rem] leading-9 tracking-wide font-medium'>Unleashing the</h1>
        <h1 className='text-[5rem]'>Magic of <span className='text-[#63e] font-medium'>Design</span></h1>
        <p className='text-center text-zinc-600'>Build Professional Websites Without a Single Line of Code,<br/>Blasting Speed and Elevate SEO and Performance.</p>
        <Button className='mt-4 bg-[#63e] rounded-full'>
            <FaCircleArrowRight fontSize={20}/>&nbsp;&nbsp;Start Designing - Free
        </Button>
        <p className='text-center mt-3 text-zinc-700'>No credit card required</p>
      </div>
    </div>
  )
}

export default page
