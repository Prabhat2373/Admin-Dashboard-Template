import { useField } from "formik";
import React from "react";

interface CustomInputProps {
  label: string;
  name: string;
  type: string;
  className?: string | any;
}

function InputField({ label, name, type, className }: CustomInputProps) {
  const [field, meta] = useField({ name });

  return (
    <div className={`flex flex-col gap-1 mb-6`}>
      <label htmlFor={name} className="block text-gray-700 text-sm font-bold">
        {label}
      </label>
      <input
        type={type}
        id={name}
        {...field}
        placeholder={label}
        className={`${meta.touched && meta.error ? "is-invalid " : ""
          } ${className} appearance-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
      />
      {meta.touched && meta.error ? (
        <div className="invalid-feedback text-primary-danger">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default InputField;
