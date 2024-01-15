import { Input } from "react-daisyui";
import { RefCallback } from "react";

interface TextFieldProps {
  id: string;
  label: string;
  error?: string;
  inputProps?: {
    onChange: (ev: any) => unknown;
    onBlur: (ev: any) => unknown;
    ref: RefCallback<HTMLInputElement>;
    name: string;
    min?: string | number;
    max?: string | number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required?: boolean;
    disabled?: boolean;
  };
  type?: "text" | "password" | "phone-number";
}

export const TextField = ({
  id,
  label,
  error,
  inputProps,
  type,
}: TextFieldProps) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label htmlFor={"email"} className="label uppercase">
        <span className="label-text">{label}</span>
      </label>

      <Input
        color={"ghost"}
        id={id}
        type={type ?? "text"}
        {...(inputProps ?? {})}
      />
      {error ? <span className="label-text text-error">{error}</span> : null}
    </div>
  );
};
