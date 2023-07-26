import { Metadata } from "next";
import styles from "./layout.module.scss";

import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "Task Manage App",
  description: "Task management app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>Task Management App</header>
        {children}
      </body>
    </html>
  );
}
