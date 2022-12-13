import styles from "./Button.module.less";
import React, { MouseEventHandler, PropsWithChildren } from "react";

type Props = {
  onClick: MouseEventHandler;
} & PropsWithChildren;

export default function Button({ children, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.button}
    >
      {children}
    </button>
  );
}
