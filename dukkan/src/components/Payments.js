import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Payments = () => {
  return (
    <div className="p-2 text-sm ">
      <div className="flex justify-between mb-4">
        <span className="text-sm font-semibold">Overview</span>
        <div className="border-solid border-gray-400 text-gray-600 bg-white border-[1px] px-1 py-1 rounded cursor-pointer text-sm">
          Last Month <KeyboardArrowDownIcon fontSize="small"/>
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex flex-col gap-2 w-1/2 bg-white rounded p-4">
          <span className="text-slate-500 text-xs">Online orders</span>
          <span className="text-lg">231</span>
        </div>
        <div className="flex flex-col gap-2 w-1/2 bg-white rounded p-4">
          <span className="text-slate-500 text-xs">Amount received</span>
          <span className="text-lg">$23,92,312.19</span>
        </div>
      </div>

      <span className="text-sm font-semibold ">Transactions | This Month</span>

      <div className="bg-white flex flex-col gap-2 p-2 mt-2 ">
        <div className="flex justify-between ">
          <div className="w-60 border-solid border-gray-400 bg-white border-[1px]  rounded cursor-pointer">
            <div className="relative flex items-center w-full h-8 rounded-lg  bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
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
                className="peer  bg-white h-full w-full outline-none text-xs text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search by order ID..."
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="border-solid border-gray-400 bg-white border-[1px]  rounded cursor-pointer p-1 items-center text-xs text-gray-600">
              <span className="text-center pt-2">Sort</span> <SwapVertIcon fontSize="small" />
            </div>
            <div className="border-solid border-gray-400 bg-white border-[1px]  rounded cursor-pointer p-1 items-center text-xs text-gray-600">
              <FileDownloadIcon fontSize="small"/>
            </div>
          </div>
        </div>
        <table className="table-auto p-2 text-xs ">
          <thead className="bg-gray-300 font-normal rounded text-left ">
            <tr>
              <th className="p-2">Order ID</th>
              <th className="p-2">Order Date</th>
              <th className="p-2">Order Amount</th>
              <th className="p-2">Transaction Fee</th>
            </tr>
          </thead>
          <tbody className="p-2">
            <tr className="border border-b-slate-400 p-2 ">
              <td className="text-blue-600 p-2">#281209</td>
              <td>7 July 2023</td>
              <td>$1278.23</td>
              <td>$22</td>
            </tr>
            <tr className="border border-b-slate-400 ">
              <td className="text-blue-600 p-2">#281209</td>
              <td>7 July 2023</td>
              <td>$1278.23</td>
              <td>$22</td>
            </tr>
            <tr className="border border-b-slate-400 ">
              <td className="text-blue-600 p-2">#281209</td>
              <td>7 July 2023</td>
              <td>$1278.23</td>
              <td>$22</td>
            </tr>
            <tr className="border border-b-slate-400 ">
              <td className="text-blue-600 p-2">#281209</td>
              <td>7 July 2023</td>
              <td>$1278.23</td>
              <td>$22</td>
            </tr>
            <tr className="border border-b-slate-400 ">
              <td className="text-blue-600 p-2">#281209</td>
              <td>7 July 2023</td>
              <td>$1278.23</td>
              <td>$22</td>
            </tr>
            <tr className="border border-b-slate-400 ">
              <td className="text-blue-600 p-2">#281209</td>
              <td>7 July 2023</td>
              <td>$1278.23</td>
              <td>$22</td>
            </tr>
            <tr className="border border-b-slate-400 ">
              <td className="text-blue-600 p-2">#281209</td>
              <td>7 July 2023</td>
              <td>$1278.23</td>
              <td>$22</td>
            </tr>
            <tr className="border border-b-slate-400 ">
              <td className="text-blue-600 p-2">#281209</td>
              <td>7 July 2023</td>
              <td>$1278.23</td>
              <td>$22</td>
            </tr>
            <tr className="border border-b-slate-400 ">
              <td className="text-blue-600 p-2">#281209</td>
              <td>7 July 2023</td>
              <td>$1278.23</td>
              <td>$22</td>
            </tr>
            <tr className="border border-b-slate-400 ">
              <td className="text-blue-600 p-2">#281209</td>
              <td>7 July 2023</td>
              <td>$1278.23</td>
              <td>$22</td>
            </tr>
            <tr className="border border-b-slate-400 ">
              <td className="text-blue-600 p-2">#281209</td>
              <td>7 July 2023</td>
              <td>$1278.23</td>
              <td>$22</td>
            </tr>
            <tr className="border border-b-slate-400 ">
              <td className="text-blue-600 p-2">#281209</td>
              <td>7 July 2023</td>
              <td>$1278.23</td>
              <td>$22</td>
            </tr>
            <tr className="border border-b-slate-400 ">
              <td className="text-blue-600 p-2">#281209</td>
              <td>7 July 2023</td>
              <td>$1278.23</td>
              <td>$22</td>
            </tr>
            <tr className="border border-b-slate-400 ">
              <td className="text-blue-600 p-2">#281209</td>
              <td>7 July 2023</td>
              <td>$1278.23</td>
              <td>$22</td>
            </tr>
            <tr className="border border-b-slate-400 ">
              <td className="text-blue-600 p-2">#281209</td>
              <td>7 July 2023</td>
              <td>$1278.23</td>
              <td>$22</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center " >
          <ul class="inline-flex -space-x-px  gap-2 text-xs">
            <li>
              <a
                href="/"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border  border-gray-400 rounded-s-lg hover:bg-blue-700 hover:text-white"
              >
               <ArrowBackIosIcon/>Previous
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  border-gray-400 rounded-lg hover:bg-blue-700 hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  border-gray-400 rounded-lg hover:bg-blue-700 hover:text-white"
              >
               ...
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  border-gray-400 rounded-lg hover:bg-blue-700 hover:text-white"
              >
                10
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  border-gray-400 rounded-lg hover:bg-blue-700 hover:text-white"
              >
                11
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  border-gray-400 rounded-lg hover:bg-blue-700 hover:text-white"
              >
                12
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  border-gray-400 rounded-lg hover:bg-blue-700 hover:text-white"
              >
                13
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  border-gray-400 rounded-lg hover:bg-blue-700 hover:text-white"
              >
                14
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  border-gray-400 rounded-lg hover:bg-blue-700 hover:text-white"
              >
                15
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  border-gray-400 rounded-lg hover:bg-blue-700 hover:text-white"
              >
                16
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  border-gray-400 rounded-lg hover:bg-blue-700 hover:text-white"
              >
                17
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  border-gray-400 rounded-lg hover:bg-blue-700 hover:text-white"
              >
                18
              </a>
            </li>
            <li>
              <a
                href="/"
                class="flex items-center justify-center px-3 h-8 leading-tight rounded-e-lg text-gray-500 bg-white border  border-gray-400  hover:bg-blue-700 hover:text-white "
              >
                Next<ArrowForwardIosIcon/>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Payments;
