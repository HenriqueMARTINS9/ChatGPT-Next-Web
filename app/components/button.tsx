/*
import * as React from "react";

import styles from "./button.module.scss";

export type ButtonType = "primary" | "danger" | null;

export function IconButton(props: {
  onClick?: () => void;
  icon?: JSX.Element;
  type?: ButtonType;
  text?: string;
  bordered?: boolean;
  shadow?: boolean;
  className?: string;
  title?: string;
  disabled?: boolean;
  tabIndex?: number;
  autoFocus?: boolean;
}) {
  return (
    <button
      className={
        styles["icon-button"] +
        ` ${props.bordered && styles.border} ${props.shadow && styles.shadow} ${
          props.className ?? ""
        } clickable ${styles[props.type ?? ""]}`
      }
      onClick={props.onClick}
      title={props.title}
      disabled={props.disabled}
      role="button"
      tabIndex={props.tabIndex}
      autoFocus={props.autoFocus}
    >
      {props.icon && (
        <div
          className={
            styles["icon-button-icon"] +
            ` ${props.type === "primary" && "no-dark"}`
          }
        >
          {props.icon}
        </div>
      )}

      {props.text && (
        <div className={styles["icon-button-text"]}>{props.text}</div>
      )}
    </button>
  );
}
  
*/

import * as React from "react";
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

import styles from "./button.module.scss";

export type ButtonType = "primary" | "link" | "text" | "default" | "dashed";

interface IconButtonProps extends ButtonProps {
  icon?: JSX.Element;
  type?: ButtonType;
  text?: string;
  bordered?: boolean;
  shadow?: boolean;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <button
      className={
        styles["icon-button"] +
        ` ${props.bordered && styles.border} ${props.shadow && styles.shadow} ${
          props.className ?? ""
        } clickable ${styles[props.type ?? ""]}`
      }
      onClick={props.onClick}
      title={props.title}
      disabled={props.disabled}
      tabIndex={props.tabIndex}
      autoFocus={props.autoFocus}
      type={props.type as any} // Cast to any to match Ant Design's type
    >
      {props.icon && (
        <div
          className={
            styles["icon-button-icon"] +
            ` ${props.type === "primary" && "no-dark"}`
          }
        >
          {props.icon}
        </div>
      )}
      {props.text && (
        <span className={styles["icon-button-text"]}>{props.text}</span>
      )}
    </button>
  );
};

