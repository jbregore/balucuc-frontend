import React from "react";

// ({ title }: any) => {

interface PrimaryButtonProps {
  onClick?: any;
  href?: string;
  title?: string;
  setColor?: boolean;
}

// eslint-disable-next-line react/display-name
export const PrimaryButton = React.forwardRef(
  ({ onClick, href, title, setColor }: PrimaryButtonProps, ref: any) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        {setColor ? (
          <button
            type="button"
            className="text-white bg-green-500 hover:bg-green-600 focus:ring-4
          focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5
          dark:bg-green-400 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-green-600"
          >
            {title}
          </button>
        ) : (
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
          focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5
            dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {title}
          </button>
        )}
      </a>
    );
  }
);

// eslint-disable-next-line react/display-name
export const ViewButton = React.forwardRef(
  ({ onClick, href }: PrimaryButtonProps, ref: any) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
       focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-1.5 mr-2 
       mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          View
        </button>
      </a>
    );
  }
);

// eslint-disable-next-line react/display-name
export const EditButton = React.forwardRef(
  ({ onClick, href }: PrimaryButtonProps, ref: any) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <button
          type="button"
          className="text-white bg-green-500 hover:bg-green-600 focus:ring-4
          focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-1.5 mr-2 
          mb-2 dark:bg-green-400 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-green-600"
        >
          Edit
        </button>
      </a>
    );
  }
);

interface ButtonProps {
  onClick?: any;
}

export const DeleteButton = ({ onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4
           focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-1.5 mr-2 
           mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
      onClick={onClick}
    >
      Delete
    </button>
  );
};

export const SearchInput = () => {
  return (
    <div className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border
         border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
          focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700
           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </div>
    </div>
  );
};
