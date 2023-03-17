import { useState } from 'react';
import initialState from '../utils/initialState';

interface OpenEmailInt {
  email: { from: string; to: string; subject: string; body: string };
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const openEmailPage = (payload: OpenEmailInt) => {
    setState({
      open: true,
      email: payload.email,
    });
  };

  const closeEmailPage = () => {
    setState({
      email: {
        to: '',
        from: '',
        subject: '',
        body: '',
      },
      open: false,
    });
  };

  return {
    openEmailPage,
    closeEmailPage,
    state,
  };
};

export default useInitialState;
