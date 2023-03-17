import React from 'react';
// COMPONENTS
import NavBar from '../components/shared/navBar';
import SideBar from '../components/shared/sideBar';
import InboxEmails from '../components/inbox';

const Inbox = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <InboxEmails />
        </div>
      </div>
    </div>
  );
};

export default Inbox;
