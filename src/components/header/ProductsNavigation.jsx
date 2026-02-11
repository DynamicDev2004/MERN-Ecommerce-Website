import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HoverDropdown from '../utils/HoverDropdown';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import HorizontalLogo from '../utils/HorizontalLogo';
import { IoMdClose } from "react-icons/io";
import SidebarDropdown from './SidebarDropdown';


function ProductsNavigation() {

const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      padding={1}
    >
      <HorizontalLogo width={120}/>
      <div className='flex justify-between'>
      <span className='my-3 block font-primary text-sm'>Shop by category</span>
      <button><IoMdClose /></button>
      </div>
     
  <SidebarDropdown
  name="Dashboard"
  link="/dashboard"
  subList={[
    { name: "Overview", link: "/dashboard" },
    { name: "Analytics", link: "/dashboard/analytics" },
  ]}
/>

<SidebarDropdown
  name="Users"
  link="/users"
  subList={[
    { name: "All Users", link: "/users" },
    { name: "Add User", link: "/users/add" },
  ]}
/>
      
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? "<InboxIcon />" : "<MailIcon />"}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}

     
    </Box>
  );



  return (
    <>
   <div className='pt-3 container'>
    <div className=' flex items-center gap-3'>

<div className='!text-lightGray'>
  <Button onClick={toggleDrawer(true)} className='!text-lightGray !text-xs flex gap-1'><HiOutlineMenuAlt1 size={17}/>Shop by Categories</Button>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>

</div>

<div className='flex-1 lg:flex hidden justify-center flex-wrap gap-1'>
  <HoverDropdown name={"Home"}/>
  <HoverDropdown name={"Fashion"} subList={[{name: "Mens", link: 'fashion/mens'},{name: "Womens", link: 'fashion/womens'}, {name: "Girls", link: 'fashion/Girls'}]}/>
  <HoverDropdown name={"Electronics"} subList={[{name: "Smart Watch", link: 'electronics/smart-watch'},{name: "Laptop", link: 'electronics/laptop'}, {name: "Mobile", link: 'electronics/mobile'} ]}/>
  <HoverDropdown name={"Bags"} subList={[{name: "Smart Watch", link: 'electronics/smart-watch'},{name: "Laptop", link: 'electronics/laptop'}, {name: "Mobile", link: 'electronics/mobile'} ]}/>
  <HoverDropdown name={"Footwear"} subList={[{name: "Smart Watch", link: 'electronics/smart-watch'},{name: "Laptop", link: 'electronics/laptop'}, {name: "Mobile", link: 'electronics/mobile'} ]}/>
  <HoverDropdown name={"Groceries"} subList={[{name: "Smart Watch", link: 'electronics/smart-watch'},{name: "Laptop", link: 'electronics/laptop'}, {name: "Mobile", link: 'electronics/mobile'} ]}/>
  <HoverDropdown name={"Beauty"} subList={[{name: "Smart Watch", link: 'electronics/smart-watch'},{name: "Laptop", link: 'electronics/laptop'}, {name: "Mobile", link: 'electronics/mobile'} ]}/>
  <HoverDropdown name={"Wellness"} subList={[{name: "Smart Watch", link: 'electronics/smart-watch'},{name: "Laptop", link: 'electronics/laptop'}, {name: "Mobile", link: 'electronics/mobile'} ]}/>
  <HoverDropdown name={"Jewellery"} subList={[{name: "Smart Watch", link: 'electronics/smart-watch'},{name: "Laptop", link: 'electronics/laptop'}, {name: "Mobile", link: 'electronics/mobile'} ]}/>
</div>
<div className='text-lightGray flex items-center gap-2 text-xs lg:text-sm 2xl:text-md'>
<TbTruckDelivery size={20}/> Free Delivery
</div>


    </div>
    
      </div>
    </>
  )
}

export default ProductsNavigation