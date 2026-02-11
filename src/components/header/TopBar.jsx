import React from 'react'
import { Link } from 'react-router'

function TopBar() {
  return (
    <div className=' py-2 border-b bg-primary'>
<div className='container flex items-center justify-between'>
      <p className='font-primary text-xs 2xl:text-[14px] text-white'>Get up to 50% off new season styles, limited time only</p>
      <div className='flex items-center gap-3 text-xs 2xl:text-[14px]'>
        <Link className=' transition text-white'>Help Center</Link>
        <Link className=' transition text-white'>Order Tracking</Link>
      </div>
</div>

    </div>
  )
}

export default TopBar