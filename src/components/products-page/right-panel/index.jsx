import React, { useState } from "react"
import { IoGridOutline, IoListOutline } from "react-icons/io5"
import IconButton from "@mui/material/IconButton"
import ProductCardRow from "../../products/ProductCardRow"
import ProductCard from "../../products/ProductCard"

import './style.css'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Pagination from '@mui/material/Pagination';



const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  price: `$${(i + 1) * 10}`,
}))

function RightPanel() {
  const [view, setView] = useState("grid") // grid | list


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="w-full ">

      {/* VIEW TOGGLE */}
      <div className="flex justify-between items-center border-b p-4 mb-4">
  <div className="flex items-center gap-2 ">
        <IconButton
          size="small"
          onClick={() => setView("grid")}
          className={`!rounded-md ${
            view === "grid" ? "!bg-gray-200" : ""
          }`}
        >
          <IoGridOutline />
        </IconButton>

        <IconButton
          size="small"
          onClick={() => setView("list")}
          className={`!rounded-md ${
            view === "list" ? "!bg-gray-200" : ""
          }`}
        >
          <IoListOutline />
        </IconButton>
      </div>

<div className="flex items-center gap-2">
  <span className="text-sm 2xl:text-md">Sort by</span>
 <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className=" !px-4 !py-1 !bg-lightGray/10 !text-primary"
      >
        Sort by A - Z
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose}>Price Low to High</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
</div>
        
      </div>
    

      {/* PRODUCTS */}
      <div
        className={
          view === "grid"
            ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            : "flex flex-col gap-4"
        }
      >
       {products.map((p) =>
  view === "grid" ? (
    <ProductCard key={p.id} />
  ) : (
    <ProductCardRow key={p.id} />

  )
)}
      </div>


<div className="w-full justify-center flex py-5 mt-5">

      <Pagination count={10} variant="outlined" />
</div>
    


    </div>
  )
}

export default RightPanel
