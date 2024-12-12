import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-accent hidden md:flex justify-around items-center py-4 text-sm">
      <span>Get A Discount Of Up To 50% For Orders This Month!</span>
      <div className="flex gap-4">
        <div className="space-x-2 flex items-center">
          <MdOutlinePhone className="size-5" />
          <span>+62 864 6444 2222</span>
        </div>
        <div className="text-green">|</div>
        <div className="space-x-2 flex items-center">
          <IoMailOutline className="size-5" />
          <span>hi@logistic.com</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
