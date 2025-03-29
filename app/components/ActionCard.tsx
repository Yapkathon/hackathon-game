// components/ActionCard.tsx
import styles from "./actionCard.module.css";

type ActionCardProps = {
  icon: string;       // emoji for the action (e.g. 📚)
  title: string;      // action name (e.g. Study)
  value: number;      // stat value (e.g. +2)
  goal: number;       // 🎯 value
};

export default function ActionCard({ icon, title, value, goal }: ActionCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>🎓 +{value}</div>

      <div className={styles.goalBox}>
        🎯 <span>{goal}</span>
      </div>
    </div>
  );
}
