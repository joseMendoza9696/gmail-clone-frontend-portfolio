import React from 'react';
import NavBar from '../components/shared/navBar';
import SideBar from '../components/shared/sideBar';

const Trash = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <h1>trash</h1>
        </div>
      </div>
    </div>
  );
};

export default Trash;
