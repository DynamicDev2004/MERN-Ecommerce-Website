import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import SidePanel from '../components/products-page/side-panel';
import RightPanel from '../components/products-page/right-panel';

function Products() {

  return (
    <div className='container'>
        {/* breadcrumb */}
    <div className='py-4 mt-3 border-b'>
             <div role="presentation" >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
     
        <Typography sx={{ color: 'text.primary' }}>Products</Typography>
      </Breadcrumbs>
    </div>
        </div>
   <div className='flex w-full'>
   {/* side panel */}
<SidePanel/>

{/* right panel */}
<RightPanel/>
</div>
    </div>
  )
  
}

export default Products