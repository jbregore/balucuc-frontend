import { useRouter } from "next/router";
import React, { useState } from "react";
import capitalizeLetter from "../hooks/useCapitalize";
import EmployeeSidebar from "./EmployeeSidebar";

const EmployeeLayout: any = ({ children }: any) => {
  const router = useRouter();
  const location = router.pathname.split("/");
  const title: string = capitalizeLetter(
    location[2].toString().replace(/-/g, " ")
  );
  return (
    <div className="min-h-screen h-auto bg-slate-100">
      <EmployeeSidebar />

      <div className="h-full ml-64 w-[calc(100%-256px)] ">
        <div className="sticky top-0 z-50">
          <div
            className="h-[67px] flex items-center shadow-[2px_3px_6px_#00000008] 
              px-6 w-full bg-white z-10 text-[#525F7F] font-bold text-lg"
          >
            <p className="text-xl">{title}</p>
          </div>
        </div>
        <div className="h-auto w-full py-10 px-14">
          {/* <div className="h-auto w-full bg-white rounded-md py-4 px-6"> */}
          {children}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default EmployeeLayout;

export const getEmployeeLayout = (page: any) => (
  <EmployeeLayout>{page}</EmployeeLayout>
);
