import React, { Fragment, useState } from 'react';
// ROUTER
import { useNavigate } from 'react-router-dom';
// ICONS
import { BsPencilSquare, BsTrash3 } from 'react-icons/bs';
import { AiOutlineSend } from 'react-icons/ai';
import { FaInbox } from 'react-icons/fa';
// COMPONENTS
import Compose from './compose';

const SideBar = () => {
  const navigate = useNavigate();
  const [showCompose, setShowCompose] = useState(false);

  const changePage = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <Fragment>
      <div className="hidden lg:block w-[15rem] p-4 sticky top-20 h-full">
        {/* Write Message */}
        <button
          onClick={() => {
            setShowCompose(true);
          }}
          className="flex items-center justify-center rounded-full h-14 w-36 shadow-sm  shadow-gray-600"
        >
          <BsPencilSquare className="w-5 h-5 mr-2" />
          <p>Compose</p>
        </button>
        <div className="pl-6 pt-4 space-y-6">
          <button
            onClick={() => {
              changePage('');
            }}
            className="text-gray-600 flex items-center gap-2"
          >
            {<FaInbox className="w-[1.7rem]  h-[1.7rem]" />}
            <p className="font-semibold">Inbox</p>
          </button>
          <button
            onClick={() => {
              changePage('sent');
            }}
            className="text-gray-600 flex items-center gap-2"
          >
            {<AiOutlineSend className="w-[1.7rem]  h-[1.7rem]" />}
            <p className="font-semibold">Sent</p>
          </button>
          <button
            onClick={() => {
              changePage('trash');
            }}
            className="text-gray-600 flex items-center gap-2"
          >
            {<BsTrash3 className="w-[1.7rem]  h-[1.7rem]" />}
            <p className="font-semibold">Trash</p>
          </button>
        </div>
      </div>
      <Compose isVisible={showCompose} onClose={setShowCompose} />
    </Fragment>
  );
};

export default SideBar;
