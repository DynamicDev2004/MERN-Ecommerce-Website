import React from "react";

export default function FormInput({
  label,
  type = "text",
  register,
  name,
  error,
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-darkGray font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`px-4 py-2 border rounded-lg outline-none
          focus:border-primary transition
          ${error ? "border-red-500" : "border-gray-300"}
        `}
      />

      {error && (
        <span className="text-xs text-red-500">
          {error.message}
        </span>
      )}
    </div>
  );
}
