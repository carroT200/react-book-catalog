import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { useState } from 'react';

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Header onSearch={setSearchQuery} />
      <Outlet context={{ searchQuery }} />
    </>
  );
};

export default Layout;
