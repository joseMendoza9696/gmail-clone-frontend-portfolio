import React from 'react';
// ICONS
import { IoMenuOutline } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import { GrAppsRounded } from 'react-icons/gr';
import localStorageService from '../../utils/localStorageService';
// utils
import { useJwt } from 'react-jwt';

const NavBar = () => {
  const token = localStorageService.getItem('jwt_token');
  const { decodedToken } = useJwt(token);
  const dectok: any = decodedToken;

  return (
    <div className="sticky top-0 flex items-center justify-between py-3 px-6 border-b bg-white">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <IoMenuOutline
          id="menu-icon"
          className="hidden md:flex w-8 h-8 text-gray-600"
        />
        <div className="w-14 h-[2.5rem] flex  rounded-[0.5rem]  b-red-600"></div>
        <p className="text-[26px] font-semibold   text-gray-600">Gmail</p>
      </div>
      {/* Input */}
      <div className="hidden lg:block w-full  ">
        <div className="flex items-center mx-auto max-w-[20rem] relative   ">
          <input
            type="search"
            className="bg-slate-200 py-1 rounded-full w-full  pl-5 outline-0"
            placeholder="Search"
          />
          <div className="bg-[#98d4fa] absolute right-0 p-2 rounded-r-full ">
            <FiSearch className=" mr-1" />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex items-center  gap-3">
        <GrAppsRounded className="w-6 h-6 text-[#98d4fa]" />{' '}
        <div className="flex items-center gap-3 border-2 rounded-full border-[#98d4fa]">
          <div className="w-[35px] h-[35px] flex p-[2px] bg-[#98d4fa] rounded-full"></div>
          <p
            id="account"
            className="whitespace-nowrap font-semibold text-[18px] pr-2"
          >
            {dectok !== null ? dectok.email : 'email'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
