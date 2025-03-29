// components/InsuranceCard.tsx
import styles from "./insuranceCard.module.css";

type InsuranceCardProps = {
  imageUrl: string;
  title: string;
  isSelected: boolean;
  description: string;
};

export default function InsuranceCard({
  imageUrl,
  title,
  isSelected,
  description,
}: InsuranceCardProps) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />

      <div className={styles.content}>
        <div className={styles.title}>{title}</div>

        <button
          className={`${styles.button} ${
            isSelected ? styles.selected : styles.unselected
          }`}
        >
          {isSelected ? "UNSELECT" : "SELECT"}
        </button>

        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}
