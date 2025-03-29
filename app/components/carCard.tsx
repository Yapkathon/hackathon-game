// components/CarCard.tsx
import styles from "./carCard.module.css";

type CarCardProps = {
  imageUrl: string;
  name: string;
  price: string;
  specs: string[];
};

export default function CarCard({ imageUrl, name, price, specs }: CarCardProps) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.headerRow}>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}>{price}</div>
          <button className={styles.button}>View Detail</button>
        </div>
        <div className={styles.specs}>
          {specs.map((spec, i) => (
            <span key={i} className={styles.spec}>
              {spec}
              {i < specs.length - 1 && " | "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
