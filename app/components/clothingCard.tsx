// components/ClothingCard.tsx
import styles from "./clothingCard.module.css";

type ClothingCardProps = {
  imageUrl: string;
  name: string;
  price: string;
  happiness: string;
};

export default function ClothingCard({
  imageUrl,
  name,
  price,
  happiness,
}: ClothingCardProps) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}</div>
        <button className={styles.buyButton}>BUY</button>
        <div className={styles.happiness}>😄 {happiness}</div>
      </div>
    </div>
  );
}
