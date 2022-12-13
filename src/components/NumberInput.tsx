import styles from "./NumberInput.module.less";
import React, { ChangeEventHandler, HTMLProps, useRef } from "react";
import cn from "classnames"

type Props = {
  id: string;
  label: string;
  value?: number;
  setValue?: React.Dispatch<React.SetStateAction<any>>;
} & Omit<HTMLProps<HTMLInputElement>, "id">;

export default function NumberInput({
  id,
  label,
  value,
  setValue,
  className,
  ...rest
}: Props) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (setValue) {
      const parsed = parseFloat(event.target.value);
      if (!isNaN(parsed)) {
        setValue(parsed);
      } else {
        console.error("target value was NaN", event.target.value);
      }
    }
  };

  const inputEl = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputEl.current) {
      inputEl.current.select();
    }
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        ref={inputEl}
        className={cn(styles.input, className)}
        type="number"
        onChange={handleChange}
        onClick={handleClick}
        value={value ?? ""}
        {...rest}
      />
    </>
  );
}
