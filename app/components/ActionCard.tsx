// components/ActionCard.tsx
import styles from "./actionCard.module.css";

type ActionCardProps = {
  icon: string;       // emoji for the action (e.g. 📚)
  title: string;      // action name (e.g. Study)
  value?: string;      // stat value (e.g. 🎓 +2)
  cost?: string;       // cost from action (e.g. $ 10K)
  goal?: number;       // 🎯 value
};

export default function ActionCard({ icon, title, value, cost, goal }: ActionCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      {value && <p className={styles.value}>{value}</p>}
      {cost && <p className={styles.cost}>{cost}</p>}

      {goal && <div className={styles.goalBox}>
        🎯 <span>{goal}</span>
      </div>}
    </div>
  );
}
