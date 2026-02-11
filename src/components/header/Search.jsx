import React from 'react'
import { IoIosSearch } from "react-icons/io";
import IconButton from '@mui/material/IconButton';

function Search() {
  return (
    <div className=' flex items-center w-full'>
    <div className=' flex items-center bg-black/5 rounded-full px-2 h-max w-full py-1'>
        <input type="text"  className='focus:outline-0 focus:border-0 px-2 py-1 w-full  bg-transparent'/>
      
        <IconButton aria-label="delete" className='w-9 h-9'>
<IoIosSearch />
</IconButton>

    </div>
    </div>
  )
}

export default Search