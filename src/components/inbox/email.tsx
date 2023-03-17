import React from 'react';
// ICONS
import { BsTrash3 } from 'react-icons/bs';
// UTILS
import { formatDate } from '../../utils/functions';
// TYPES
// import { EmailType } from '../../utils/types';

const Email = ({ from, subject, body, createdAt, index, removeEmail }: any) => {
  return (
    <div className="flex justify-between border-b py-1.5 px-6 bg-gray-100">
      <p className="w-[8rem] font-bold  "> {from.email}</p>
      <div className="flex items-center w-[16rem] sm:w-[30rem] truncate lg:w-[40rem]">
        <p className="font-semibold  ">{subject} -</p>
        <p className="pl-1 text-gray-500 truncate">{body}</p>
      </div>
      <p className="text-gray-500 w-[6rem] text-end">{formatDate(createdAt)}</p>
      <button
        onClick={() => {
          removeEmail(index);
        }}
      >
        <BsTrash3 className="w-[1.7rem]  h-[1.7rem]" />
      </button>
    </div>
  );
};

export default Email;
