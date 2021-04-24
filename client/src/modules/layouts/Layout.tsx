import React from "react";
import MobileNav from "components/MobileNav";
import Footer from "components/Footer";

interface Layout {}

export const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div className="layout">
      <MobileNav />
      {children}
      <Footer />
    </div>
  );
};
