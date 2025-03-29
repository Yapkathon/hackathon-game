"use client";

import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

export default function NavBar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const isHomePage = pathname.startsWith("/");

  if (isDashboard) {
    return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.content}>{children}</div>
          <div className={styles.bottomBar}>
            {["Port", "Invest", "Expense", "Bank", "Action"].map((label) => (
              <button key={label} className={styles.button}>
                {label}
              </button>
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
          <div className={styles.stat}>
            🎓 <span>16</span>
          </div>
          <div className={styles.centerStatWrapper}>
            <div className={styles.centerStat}>$120k</div>
          </div>
          <div className={styles.stat}>
            😄 <span>27</span>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>{children}</div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          {["Port", "Invest", "Expense", "Bank", "Action"].map((label) => (
            <button key={label} className={styles.button}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
