import { PropsWithChildren } from "react";
import styles from "./overlay.module.css";

const index = ({ children }: PropsWithChildren) => {
  return <div className={styles.overlay}>{children}</div>;
};
export default index;
