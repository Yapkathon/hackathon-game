// components/ActionCard.tsx
import { useEffect, useState } from "react";
import styles from "./actionCard.module.css";

type ActionCardProps = {
  sendOnClick: (a: string, b: boolean) => void;
  icon: string; // emoji for the action (e.g. 📚)
  title: string; // action name (e.g. Study)
  value: string; // stat value (e.g. 🎓 +2)
  cost: string; // cost from action (e.g. $ 10K)
  goal: number; // 🎯 value
  update: boolean;
};

export default function ActionCard({
  sendOnClick,
  icon,
  title,
  value,
  cost,
  goal,
  update,
}: ActionCardProps) {
  const [isChosen, setIsChosen] = useState<boolean>(false);

  useEffect(() => {
    () => alert(1);
  }, [update]);

  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      {value && <p className={styles.value}>{value}</p>}
      {cost && <p className={styles.cost}>{cost}</p>}

      {goal && (
        <button
          className={styles.goalBox}
          onClick={(e) => {
            sendOnClick(title, !isChosen);
          }}
        >
          🎯 <span>{goal}</span>
        </button>
      )}
    </div>
  );
}
