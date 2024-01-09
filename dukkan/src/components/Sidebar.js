import React from "react";
import { SIDEBAR_ITEMS } from "../constants/sidebarItems";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-600 hover:no-underline active:bg-neutral-600 rounded-sm text-xs";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between bg-indigo-950 w-60 h-fill  p-3 text-white ">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="p-2 bg-white text-black rounded">logo</div>
          <div className="flex flex-col gap-1">
            <span>Nishyan</span>
            <span className="underline text-xs cursor-pointer">Visit store</span>
          </div>
        </div>
        <KeyboardArrowDownIcon/>
      </div>
      <div className="flex-1 py-8 flex flex-col text-xs">
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="mt-24 flex gap-2 bg-neutral-600 text-neutral-300 p-1 rounded">
        <div className="border  shadow-transparent p-1 rounded">
         <AccountBalanceWalletIcon fontSize="small"/>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs">Available credits</span>
          <span className="text-xs">222.10</span>
        </div>
      </div>
    </div>
  );
};

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "bg-neutral-600 text-white"
          : "text-neutral-400",
        linkClasses
      )}
    >
      <span className="text-xs">{item.icon}</span>
      {item.label}
    </Link>
  );
}

export default Sidebar;
