import { useField } from 'formik';
import React from 'react';

interface CustomInputProps {
  label: string;
  name: string;
  type: string;
  className?: string | any;
}

function InputField({ label, name, type, className }: CustomInputProps) {
  const [field, meta] = useField({ name });

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name} className="text-text-primary font-medium ">
        {label}
      </label>
      <input
        type={type}
        id={name}
        {...field}
        className={`${
          meta.touched && meta.error ? 'is-invalid ' : ''
        } p-5 rounded-md outline-none `}
      />
      {meta.touched && meta.error ? (
        <div className="invalid-feedback text-primary-danger">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default InputField;
