import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import MenuBar from '@/components/MenuBar'

const page = () => {
  return (
    <div className='h-screen pt-8 bg-zinc-950 absolute inset-0 -z-10 w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
      <div className='w-[90%] m-auto h-full'>
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
    </div>
  )
}

export default page
