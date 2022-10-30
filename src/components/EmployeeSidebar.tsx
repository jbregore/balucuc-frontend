import React, { useEffect, useState } from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { GiMedicines } from "react-icons/gi";
import { HiOutlineUsers, HiOutlineDocumentDuplicate } from "react-icons/hi";
import { TbVaccine } from "react-icons/tb";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useRouter } from "next/router";
import Image from "next/image";
import { logo } from "../images";
import Link from "next/link";

const EmployeeSidebar = () => {
  const [showRecords, setShowRecords] = useState(false);
  const [showVaccinations, setShowVaccinations] = useState(false);

  const router = useRouter();
  const location = router.pathname.split("/");
  const isActive = "/" + location[1].toString() + "/" + location[2].toString();

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      router.push("/");
    }
  };

  return (
    <div
      className={`w-64 flex flex-col p-3 h-full bg-teal-900 shadow duration-300 fixed`}
    >
      <div className="space-y-3">
        <div className="h-40 flex items-center justify-center">
          <Image src={logo} alt="" width={150} height={150} />
        </div>
        <div className="flex-1">
          <span className="hidden bg-[#047481]"></span>
          <ul className="pt-2 pb-4 space-y-1 text-sm ">
            {/* DASHBOARD */}
            <Link href="/employee/dashboard">
              <li
                className={`flex items-center p-2 space-x-3 rounded-md cursor-pointer w-full hover:bg-teal-600 bg-[${
                  isActive === "/employee/dashboard" ? "#047481" : "#333333"
                }]`}
                onClick={() => router.push("/employee/dashboard")}
              >
                <MdOutlineDashboardCustomize size={26} color="#fff" />
                <span className="text-gray-100 text-lg pl-2">Dashboard</span>
              </li>
            </Link>
            {/* RESIDENTS */}
            <Link href="/employee/residents">
              <li
                className={`flex items-center p-2 space-x-3 rounded-md cursor-pointer w-full hover:bg-teal-600 bg-[${
                  isActive === "/employee/residents" ? "#047481" : "#333333"
                }]`}
                onClick={() => router.push("/employee/residents")}
              >
                <HiOutlineUsers size={26} color="#fff" />
                <span className="text-gray-100 text-lg pl-2">Residents</span>
              </li>
            </Link>
            {/* MEDICINES */}
            <Link href="/employee/medicines">
              <li
                className={`flex items-center p-2 space-x-3 rounded-md cursor-pointer w-full hover:bg-teal-600 bg-[${
                  isActive === "/employee/medicines" ? "#047481" : "#333333"
                }]`}
                onClick={() => router.push("/employee/medicines")}
              >
                <GiMedicines size={26} color="#fff" />
                <span className="text-gray-100 text-lg pl-2">Medicines</span>
              </li>
            </Link>
            {/* VACCINES */}
            <li className="">
              <button
                type="button"
                className={`flex items-center p-2 space-x-3 rounded-md cursor-pointer w-full hover:bg-teal-600 bg-[${
                  isActive === "/employee/vaccinations" ? "#047481" : "#333333"
                }]`}
                onClick={() => setShowVaccinations(!showVaccinations)}
              >
                <div className="flex-shrink-0">
                  <TbVaccine size={26} color="white" />
                </div>
                <span className="text-gray-100 text-lg pl-2">Vaccinations</span>
                <svg
                  className="w-6 h-6 grow text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {showVaccinations && (
                <ul className="py-2 space-y-2 pl-2">
                  <li className="text-gray-100 text-md flex items-center p-2 pl-11 w-full rounded-md transition duration-75 group ">
                    <Link href="/employee/vaccinations/infants">Infants</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* RECORDS */}
            <li className="">
              <button
                type="button"
                className={`flex items-center p-2 space-x-3 rounded-md cursor-pointer w-full hover:bg-teal-600 bg-[${
                  isActive === "/employee/records" ? "#047481" : "#333333"
                }]`}
                onClick={() => setShowRecords(!showRecords)}
              >
                <div className="flex-shrink-0">
                  <HiOutlineDocumentDuplicate size={26} color="white" />
                </div>
                <span className="text-gray-100 text-lg pl-2">View Records</span>
                <svg
                  className="w-6 h-6 grow text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {showRecords && (
                <ul className="py-2 space-y-2 pl-2">
                  <li className="text-gray-100 text-md flex items-center p-2 pl-11 w-full rounded-md transition duration-75 group ">
                    <Link href="/employee/records/medicines">Medicines</Link>
                  </li>
                  <li className="text-gray-100 text-md flex items-center p-2 pl-11 w-full rounded-md transition duration-75 group ">
                    <Link href="/employee/records/vaccines">Vaccines</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="cursor-pointer flex items-center p-2 space-x-3 rounded-md hover:bg-teal-500"
              onClick={logout}
            >
              <RiLogoutCircleLine size={26} color="white" />
              <span className="text-gray-100 text-lg pl-2">Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSidebar;
