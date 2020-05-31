import React from 'react';

const Layout = ({ children, ...props }) => {
  return (
    <div className="layout">
      HEADER
      {children}
    </div>
  );
};

export default Layout;
