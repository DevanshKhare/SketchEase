import React from 'react'
import { Room } from '../Room'
import CanvasRenderer from '@/components/CanvasRenderer'

const page = ({params}: {params: {canvas:string}}) => {
  return (
    <>
        <Room id={params.canvas}>
            <CanvasRenderer/>
        </Room>
    </>
  )
}

export default page