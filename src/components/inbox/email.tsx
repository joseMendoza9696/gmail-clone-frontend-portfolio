import React from 'react';
// TYPES
import { EmailType } from '../../utils/types';

const Email = ({ from, subject, body, time }: EmailType) => {
  return (
    <div className="flex justify-between border-b py-1.5 px-6 bg-gray-100">
      <p className="w-[8rem] font-bold  "> {from.email}</p>
      <div className="flex items-center w-[16rem] sm:w-[30rem] truncate   lg:w-[40rem]">
        <p className="font-semibold  ">{subject} -</p>
        <p className="pl-1 text-gray-500 truncate">{body}</p>
      </div>

      <p className="text-gray-500 w-[6rem] text-end">{time}</p>
    </div>
  );
};

export default Email;
