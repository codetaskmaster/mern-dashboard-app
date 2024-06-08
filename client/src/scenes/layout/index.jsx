import { Box, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  return (
    <Box
      display={isNonMobile ? 'flex' : 'block'}
      width="100%"
      height="100%"
    >
      <Box flexGrow={1}>
        <Navbar
          // user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
