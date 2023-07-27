import styles from "./layout.module.scss";

export default function TaskLayout({ children }) {
  return <section className={styles.section}>{children}</section>;
}
