import React from 'react';

import Header from './Header';
import './Layout.css';

function Layout({ children, title, ...props }) {
  return (
    <div className="layout">
      <Header className="layout-header bordered" {...props} />
      <h1 className="layout-title bordered">{title}</h1>
      <main className="layout-main bordered">
        <section className="layout-content">{children}</section>
      </main>
      <footer className="layout-footer bordered">© Nodepop React</footer>
    </div>
  );
}

export default Layout;
