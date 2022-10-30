import React from "react";

interface FilterProps {
  label: string;
  options?: string[];
  type: string;
}

const TableFilter = ({ label, options, type }: FilterProps) => {
  return (
    <div className="w-40 mr-6">
      {type === "select" ? (
        <>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-[#525F7F] dark:text-gray-400"
          >
            {label}
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {options?.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </>
      ) : (
        <div className="relative">
          <label className="block mb-2 text-sm font-medium text-[#525F7F] dark:text-gray-400">
            {label}
          </label>
          <input
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500
             focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
          />
        </div>
      )}
    </div>
  );
};

export default TableFilter;
