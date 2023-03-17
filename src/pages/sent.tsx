import React from 'react';
import SideBar from '../components/shared/sideBar';
import NavBar from '../components/shared/navBar';
import SentEmails from '../components/sent';

const Sent = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <SentEmails />
        </div>
      </div>
    </div>
  );
};

export default Sent;
