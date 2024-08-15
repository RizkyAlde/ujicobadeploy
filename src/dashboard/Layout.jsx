import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import classNames from 'classnames';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarWidth = 255; // Definisikan lebar sidebar di sini

  return (
    <div className="flex">
      <Sidebar />
      <div
        className="flex flex-col flex-1"
        style={{ backgroundColor: "#ECEAE2" }}
      >
        <div style={{ paddingLeft: `${sidebarWidth}px` }}>
          {/* Menjaga konten tetap di sebelah kanan Sidebar */}
          <TopBar setIsSidebarOpen={setIsSidebarOpen} />
          {/* Konten utama dengan padding atas yang cukup untuk TopBar */}
          <main
            className={classNames(
              "flex-1 overflow-y-auto",
              { "blur-sm": isSidebarOpen }
            )}
            style={{ paddingTop: "64px" }}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
