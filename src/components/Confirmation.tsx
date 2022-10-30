import React from "react";
interface ConfirmationProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  onAccept: any;
}

export const DeleteConfirmation = ({
  closeModal,
  title,
  onAccept,
}: ConfirmationProps) => {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="fixed top-0 left-0 z-50 bg-[#00000096] h-modal md:h-full w-full items-center"
    >
      <div className="relative p-4 w-full h-full flex items-center justify-center">
        <div className="relative bg-white max-w-md rounded-lg shadow dark:bg-gray-700 mb-4">
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
          <div className="p-6 text-center">
            <h3 className="mb-5 text-lg font-normal text-[#525F7F] dark:text-gray-400">
              {title}
            </h3>
            <button
              data-modal-toggle="popup-modal"
              type="button"
              className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-700 font-medium rounded-md text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={onAccept}
            >
              Yes, Im sure
            </button>
            <button
              data-modal-toggle="popup-modal"
              type="button"
              className="text-[#525F7F] bg-gray-100 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-md border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={() => closeModal(false)}
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AddConfirmation = ({
  closeModal,
  title,
  onAccept,
}: ConfirmationProps) => {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="fixed top-0 left-0 z-50 bg-[#00000096] h-modal md:h-full w-full items-center"
    >
      <div className="relative p-4 w-full h-full flex items-center justify-center">
        <div className="relative bg-white max-w-md rounded-lg shadow dark:bg-gray-700 mb-4">
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
          <div className="p-6 text-center">
            <h3 className="mb-5 text-lg font-normal text-[#525F7F] dark:text-gray-400">
              {title}
            </h3>
            <button
              data-modal-toggle="popup-modal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 font-medium rounded-md text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={onAccept}
            >
              Yes, Im sure
            </button>
            <button
              data-modal-toggle="popup-modal"
              type="button"
              className="text-[#525F7F] bg-gray-100 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-md border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={() => closeModal(false)}
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
