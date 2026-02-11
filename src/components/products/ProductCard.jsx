import React from "react";
import { FaStar, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { RiCloseLargeLine, RiExpandDiagonalLine } from "react-icons/ri";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

import IconButton from "@mui/material/IconButton";
import { Link } from "react-router";
import ProductQuickLook from "./ProductQuickLook";
import { MdOutlineClose } from "react-icons/md";
const ProductCard = () => {

    const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [maxWidth, setMaxWidth] = React.useState('lg');


  const handleClickOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (

    <div className="w-full m-2 group overflow-hidden rounded-2xl bg-white shadow-md">

        <Dialog
        fullScreen={fullScreen}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="">
<button onClick={handleClose} className="absolute right-5 top-5"><RiCloseLargeLine className="text-primary"/></button>
   <ProductQuickLook id={'helloI3 '}/>
        </div>


      </Dialog>



      {/* Image section */}
      <div className="relative">
        <span className="absolute left-3 top-3 rounded-full bg-primary px-2 py-1 text-xs font-semibold z-10 text-white">
          14%
        </span>

        <div className=" absolute z-10 right-0 px-2 py-2 transition flex-col hidden group-hover:flex gap-1">
          <IconButton size="small" className="!bg-white !h-8 !w-8 z-30"  onClick={handleClickOpen}>
            <RiExpandDiagonalLine  />
          </IconButton>
          <IconButton className="!bg-white !h-8 !w-8">
            <FaRegHeart />
          </IconButton>
        </div>
    <Link to={"/product-details/id"}>
       <div className="relative h-[200px] w-full overflow-hidden">

  <img
    src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
    alt="Product"
    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
  />

  <img
    src="https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg"
    alt="Product Hover"
    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
  />
</div>
</Link>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs line-clamp-1 text-gray text-left">
          Campus Sutra{" "}
        </p>

        <h3 className="mt-1 line-clamp-2 text-left text-sm 2xl:text-lg font-semibold text-gray-900">
          Men Comfort Cuban Collar Men Comfort Cuban Collar
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" size={16} />
          ))}
        </div>

        {/* Price */}
        <div className="mt-3 flex justify-between items-center gap-3">
          <span className="text-sm font-semibold text-primary">₹1,850.00</span>
          <span className="text-sm text-gray-400 line-through">₹2,200.00</span>
        </div>

        {/* Button */}
        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-primary py-2  text-sm text-primary transition hover:bg-primary cursor-pointer hover:text-white">
          <FaShoppingCart />
          ADD TO CART
        </button>
      </div>
    </div>

  );
};

export default ProductCard;
