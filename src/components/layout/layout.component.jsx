import React from 'react';

const Layout = ({ children, ...props }) => {
  return (
    <div className="layout">
      <h2>HEADER</h2>

      {children}
    </div>
  );
};

export default Layout;
