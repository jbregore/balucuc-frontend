import React from "react";

interface ResidentCategoryModalProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResidentCategoryModal = ({ closeModal }: ResidentCategoryModalProps) => {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="fixed top-0 left-0 z-50 bg-[#00000096] h-modal md:h-full w-full items-center"
    >
      <div className="relative p-4 w-full h-full flex items-center justify-center">
        <div className="relative bg-white w-[500px] max-h-[80%] overflow-auto rounded-lg shadow dark:bg-gray-700 mb-4">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
            onClick={() => closeModal(false)}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <br />
          <div className=" w-full mt-4 p-4">
            <h3 className="mb-5 text-lg text-[#525F7F] dark:text-gray-400 font-bold">
              Resident Categories
            </h3>
            <div>
              <div className="relative mb-8">
                <input
                  type="search"
                  id="default-search"
                  className="block p-4 w-full 
                    text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300
                    focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add Category"
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Toast />
              <Toast />
              <Toast />
              <Toast />
            </div>
          </div>
          <div className="p-6">
            <div className="text-right">
              <button
                data-modal-toggle="popup-modal"
                type="button"
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-md text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Toast = () => {
  return (
    <div
      className="flex items-center p-4 w-full max-w-xs text-gray-500 bg-white
     rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 "
    >
      <div className="ml-3 text-sm font-normal text-[#525F7F]">
        Set yourself free.
      </div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-default"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ResidentCategoryModal;
