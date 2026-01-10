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

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm py-2">
        <div className="container grid grid-cols-3">
          <img
            src="/logos/horizontal-logo.svg"
            alt=""
            className="w-[40%] min-w-32"
          />
         <Search/>
          <div className="flex gap-2 items-center justify-end">

            <div className="flex gap-2  items-center">
              <Link className="hover:text-primary transition text-sm 2xl:text-lg"> Login</Link>     |
              <Link className="hover:text-primary transition text-sm 2xl:text-lg"> Register</Link>
            
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
              <IconButton aria-label="favourite">
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
