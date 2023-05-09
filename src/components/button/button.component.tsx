import { IComponentWithProps } from "@/lib";

import styles from "./button.module.scss";

type IProps = React.HTMLAttributes<HTMLButtonElement> & {};

export const Button: IComponentWithProps<IProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={className ? `${className} ${styles.button}` : styles.button}
    >
      {children}
    </button>
  );
};
