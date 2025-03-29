// components/HouseCard.tsx
import styles from "./houseCard.module.css";

type HouseCardProps = {
  imageUrl: string;
  title: string;
  price: string;
  beds: number;
  baths: number;
  size: string;
  address: string;
};

export default function HouseCard({
  imageUrl,
  title,
  price,
  beds,
  baths,
  size,
  address,
}: HouseCardProps) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.headerRow}>
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>{price}</div>
          <button className={styles.button}>View Detail</button>
        </div>
        <div className={styles.details}>
          {beds} beds | {baths} baths | {size}
        </div>
        <div className={styles.address}>{address}</div>
      </div>
    </div>
  );
}
