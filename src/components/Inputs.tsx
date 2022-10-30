import { ChangeEventHandler } from "react";

interface StyledTextInputProps {
  title: string;
  isDisabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name?: string;
  value?: string;
  isNumber?: boolean;
}

export const StyledTextInput = ({
  title,
  isDisabled,
  onChange,
  name,
  value,
  isNumber,
}: StyledTextInputProps) => {
  return (
    <div>
      <label
        htmlFor={title}
        className="block mb-2 text-sm font-medium text-[#525F7F] dark:text-gray-300"
      >
        {title}
      </label>
      <input
        type={!isNumber ? "text" : "number"}
        id={title}
        className="bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={title}
        disabled={isDisabled}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
};

interface StyledSelectInputProps {
  title: string;
  options?: string[];
  isDisabled?: boolean;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  name?: string;
  value?: string;
}

export const StyledSelectInput = ({
  title,
  options,
  isDisabled,
  onChange,
  name,
  value,
}: StyledSelectInputProps) => {
  return (
    <div>
      <label
        htmlFor={title}
        className="block mb-2 text-sm font-medium text-[#525F7F] dark:text-gray-400"
      >
        {title}
      </label>
      <select
        id={title}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        disabled={isDisabled}
        onChange={onChange}
        name={name}
        value={value}
      >
        {options?.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

interface StyledPasswordInputProps {
  title: string;
  isDisabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name?: string;
  value?: string;
}

export const StyledPasswordInput = ({
  title,
  isDisabled,
  onChange,
  name,
  value,
}: StyledPasswordInputProps) => {
  return (
    <div>
      <label
        htmlFor={title}
        className="block mb-2 text-sm font-medium text-[#525F7F] dark:text-gray-300"
      >
        {title}
      </label>
      <input
        type="password"
        id={title}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
           dark:focus:border-blue-500"
        placeholder={title}
        disabled={isDisabled}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
};

interface StyledDateInputProps {
  title: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name?: string;
  value?: string;
  isDisabled?: boolean;
}

export const StyledDateInput = ({
  title,
  onChange,
  name,
  value,
  isDisabled,
}: StyledDateInputProps) => {
  return (
    <div className="relative">
      <label className="block mb-2 text-sm font-medium text-[#525F7F] dark:text-gray-400">
        {title}
      </label>
      <input
        type="date"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500
             focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={title}
        onChange={onChange}
        disabled={isDisabled}
        name={name}
        value={value}
      />
    </div>
  );
};
