import React from 'react';
// COMPONENTS
import NavBar from '../components/shared/navBar';
import SideBar from '../components/shared/sideBar';
import TrashComponent from '../components/trash';

const Trash = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <TrashComponent />
        </div>
      </div>
    </div>
  );
};

export default Trash;
