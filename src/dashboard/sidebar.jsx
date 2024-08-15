import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faPumpSoap, faBasketShopping, faDesktop, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const SidebarMenuItem = ({ href, icon, label, isActive }) => {
  const handleClick = (href) => {
    console.log(`Navigating to: ${href}`);
  };

  return (
    <Link
      href={href}
      className={`text-white text-base font-semibold flex items-center gap-x-3 px-4 py-3 ${
        isActive ? "bg-gray-600/25" : ""
      } hover:bg-gray-400/25 rounded-2xl flex-grow my-2`}
      onClick={() => handleClick(href)}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
      {label}
    </Link>
  );
};

const Sidebar = () => {
  const router = useRouter();

  const isActive = (href) => router.pathname === href;

  return (
    <div
      className="fixed top-0 left-0 z-40 h-screen overflow-y-auto"
      style={{
        width: "250px",
        background: "linear-gradient(to bottom, #FFC224, #9EFF3D)",
      }}
    >
      <div className="flex flex-col items-center p-5">
        <Image
          src="/img/logo.png"
          width={82} // Set width directly
          height={82} // Set height directly
          className="mb-2"
          alt="Logo"
        />
        <span className="text-white font-bold text-xl">DASHBOARD REPLON</span>
      </div>
      <div className="flex-grow ml-3 py-4">
        <SidebarMenuItem
          href="/admin/home"
          icon={faHome}
          label="Home"
          isActive={isActive("/admin/home")}
        />
        <SidebarMenuItem
          href="/admin/monitoring"
          icon={faDesktop}
          label="Monitoring"
          isActive={isActive("/admin/monitoring")}
        />
        <SidebarMenuItem
          href="/admin/produksi"
          icon={faBasketShopping}
          label="Production"
          isActive={isActive("/admin/produksi")}
        />
        <SidebarMenuItem
          href="/admin/prediksi"
          icon={faChartLine}
          label="Predictions"
          isActive={isActive("/admin/prediksi")}
        />
        <SidebarMenuItem
          href="/admin/pompa"
          icon={faPumpSoap}
          label="Pump"
          isActive={isActive("/admin/pompa")}
        />
      </div>
      <div className="fixed bottom-0 left-0 w-full p-3">
        <div className="w-full" style={{ maxWidth: "238px" }}>
          <SidebarMenuItem
            href="/login/landing"
            icon={faSignOutAlt}
            label="Logout"
            isActive={isActive("/login/landing")}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
