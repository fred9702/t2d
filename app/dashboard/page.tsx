import T2DForm from '@/components/Form'
import React from 'react'

type Props = {}

import dynamic from 'next/dynamic'

const NoSSRForm = dynamic(() => Promise.resolve(T2DForm), { ssr: false })


function Dashboard({}: Props) {
  return (
    <div className='max-h-screen w-screen justify-center items-center'>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <NoSSRForm />
      </div>
    </div>
  )
}

export default Dashboard