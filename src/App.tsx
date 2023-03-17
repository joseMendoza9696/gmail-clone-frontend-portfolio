import React from 'react';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';
// ROUTES
import { Routes, Route } from 'react-router-dom';
// PAGES
import Login from './pages/login';
import Inbox from './pages/inbox';
import Sent from './pages/sent';
import Trash from './pages/trash';
import PrivateRoutes from './privateRoutes';

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Inbox />} path="/" />
          <Route element={<Sent />} path="/sent" />
          <Route element={<Trash />} path="/trash" />
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
