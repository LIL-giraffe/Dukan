import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CampaignIcon from '@mui/icons-material/Campaign';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  return (
    <div className="flex justify-between p-4 items-center border border-b-slate-300 rounded-lg">
      <div className="flex gap-4 items-center">
        <span>Payments</span>
        <div className="flex items-center ">
          <button className="text-slate-400">
            <HelpOutlineIcon fontSize="small" />
          </button>
          <span className="text-xs text-gray-400 ">How it works</span>
        </div>
      </div>

      <div className="w-96">
        <div className="relative flex items-center w-full h-12 rounded-lg  bg-gray-200 overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            className="peer bg-slate-200 h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search features, tutorial etc."
          />
        </div>
      </div>

      <div className="flex gap-2">
       <button className="bg-slate-200 rounded-full p-2"><CampaignIcon/></button>
       <button className="bg-slate-200 rounded-full p-2"><KeyboardArrowDownIcon/></button>
      </div>

    </div>
  );
};

export default Header;
