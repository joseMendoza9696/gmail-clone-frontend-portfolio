import React, { useContext } from 'react';
// CONTEXT
import AppContext from '../../context/AppContext';
// ICONS
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

const SingleEmail = () => {
  const appContext: any = useContext(AppContext);
  const email = appContext.state.email;

  const backButton = () => {
    appContext.closeEmailPage();
  };

  return (
    <div>
      <button
        onClick={backButton}
        className="flex items-center justify-center rounded-full h-14 w-36 shadow-sm  shadow-gray-600"
      >
        <BsFillArrowLeftSquareFill className="w-5 h-5 mr-2" />
        <p>Back</p>
      </button>
      <h1>to: {email.to}</h1>
      <h1>from: {email.from}</h1>
      <h1>subject: {email.subject}</h1>
      <h1>body: {email.body}</h1>
    </div>
  );
};

export default SingleEmail;
