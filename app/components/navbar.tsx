"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function NavBar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const isHomePage = pathname == "/";

  const navLinks = [
    { label: "Port", href: "/dashboard" },
    { label: "Invest", href: "/investment" },
    { label: "Expense", href: "/expense" },
    { label: "Bank", href: "/loan" },
    { label: "Action", href: "/action" },
  ];

  if (isDashboard) {
    return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.content}>{children}</div>
          <div className={styles.bottomBar}>
            {navLinks.map(({ label, href }) => (
              <Link key={label} href={href} passHref>
                <button className={styles.button}>{label}</button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  } else if (isHomePage) {
    return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <div className={styles.stat}>🎓 <span>16</span></div>
          <div className={styles.centerStatWrapper}>
            <div className={styles.centerStat}>$120k</div>
          </div>
          <div className={styles.stat}>😄 <span>27</span></div>
        </div>

        {/* Content */}
        <div className={styles.content}>{children}</div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href} passHref>
              <button className={styles.button}>{label}</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}