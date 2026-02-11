import React from "react";

import { FaRegHeart } from "react-icons/fa6";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Search from "./Search";
import { Link } from "react-router";
import Tooltip from '@mui/material/Tooltip';
import { MdOutlineShoppingCart } from "react-icons/md";
import ProductsNavigation from "./ProductsNavigation";


import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CartItem from "../cart/CartItem";


function Navigation() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#ef0f0f",
      color:"white",
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: "0 4px",
    },
  }));



   const [open, setOpen] = React.useState(false);

  const toggleDrawer = (value) => () => {
    setOpen(value);
  };



  return (
    <>
     {/* Right Drawer CART*/}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 360 , height:'100vh' }} role="presentation">
          <div className="flex flex-col h-full border font-primary">
        
          <div className="p-4 font-semibold text-lg">
            Your Cart
          </div>

          <Divider />

          {/* Cart Items */}
          <div className="p-4 space-y-3 flex-1 overflow-scroll">
            <p className="text-sm text-gray-500">Cart is empty</p>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
          </div>
          <Divider />


          {/* Footer */}
          <div className="p-4 text-sm 2xl:text-md font-semibold ">

            <div className="flex justify-between text-darkGray py-1">
              <span>1 item</span>
              <span className="text-primary">99 PKR</span>
            </div>
                
            <div className="flex justify-between text-darkGray py-1">
              <span>Shipping</span>
              <span className="text-primary">100 PKR</span>
            </div>
                    <Divider className="!my-2"/>
           
           
            <div className="flex justify-between text-darkGray py-1">
              <span>Total (Ex. Tax)</span>
              <span className="text-primary">10 PKR</span>
            </div>

            <div className="flex justify-between text-darkGray py-1">
              <span>Total (Incl. Tax)</span>
              <span className="text-primary">4 PKR</span>
            </div>

            <div className="flex justify-between text-darkGray py-1">
              <span>Total</span>
              <span className="text-primary">204 PKR</span>
            </div>




            <div className="flex gap-3">
            <button className="w-full bg-primary text-white py-2 rounded-lg">
              View Cart
            </button>
            <button className="w-full bg-primary text-white py-2 rounded-lg">
              Checkout
            </button>
            </div>
          </div>
          </div>
        </Box>
      </Drawer>
 


      <nav className="sticky top-0 z-50 bg-white shadow-md py-2">
        <div className="container grid grid-cols-3">
          <img
            src="/logos/horizontal-logo.svg"
            alt=""
            className="w-[40%] min-w-32"
          />
         <Search/>
          <div className="flex gap-2 items-center justify-end">

            <div className="flex gap-2  items-center">
              <Link className="hover:text-primary transition text-sm 2xl:text-md" to={"/auth/login"}> Login</Link>     |
              <Link className="hover:text-primary transition text-sm 2xl:text-md" to={"/auth/register"}> Register</Link>
            
            </div>

            <span className="w-9 h-9 ">
               <Tooltip title="Favourites" placement="bottom">
              <IconButton aria-label="favourite">
                <StyledBadge badgeContent={4}>
                  <FaRegHeart size={18} />
                </StyledBadge>
              </IconButton>
              </Tooltip>
            </span>
            <span className="w-9 h-9 ">
                         <Tooltip title="Cart" placement="bottom">
              <IconButton aria-label="favourite" onClick={toggleDrawer(true)}>
                <StyledBadge badgeContent={4} color="secondary">
                 <MdOutlineShoppingCart size={21}/>
                </StyledBadge>
              </IconButton>
              </Tooltip>
            </span>

         
          </div>
        </div>

        <ProductsNavigation/>
      </nav>
    </>
  );
}

export default Navigation;
