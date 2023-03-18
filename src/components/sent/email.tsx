import React, { useContext } from 'react';
// UTILS
import { formatDate } from '../../utils/functions';
import { EmailType } from '../../utils/types';
// CONTEXT
import AppContext from '../../context/AppContext';

const EmailSent = ({ from, to, subject, body, createdAt }: EmailType) => {
  const appContext: any = useContext(AppContext);

  return (
    <div
      id="email"
      onClick={() => {
        appContext.openEmailPage({
          email: {
            to,
            from: from.email,
            subject,
            body,
          },
        });
      }}
      className="flex justify-between border-b py-1.5 px-6 bg-gray-100"
    >
      <p className="w-[8rem] font-bold"> {to}</p>
      <div className="flex items-center w-[16rem] sm:w-[30rem] truncate   lg:w-[40rem]">
        <p id="subject-sent" className="font-semibold  ">
          {subject} -
        </p>
        <p className="pl-1 text-gray-500 truncate">{body}</p>
      </div>

      <p className="text-gray-500 w-[6rem] text-end">{formatDate(createdAt)}</p>
    </div>
  );
};

export default EmailSent;
