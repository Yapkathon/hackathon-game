import { useGame } from "../context/GameProvider"
import styles from "./loan.module.css"


export default function Loan() {
  const { player, setPlayer } = useGame();
  function addMoney(m:number) {
    setPlayer((prev) => ({
      ...prev,
      // Increase money by `amount`
      money: prev.money + m,
    }));
  }
    return (
      <div className={styles.loan_container}>
        <div className={styles.loan_card}>
          <h2 className={styles.loan_title}>Loan</h2>
          <div className={styles.loan_info}>
            <div className={styles.credit}>
              <span>Credit</span>
              <strong>700</strong>
            </div>
            <div className={styles.payment}>
              <span>Payment (per year)</span>
              <strong>$1.6K</strong>
            </div>
          </div>
          <div className={styles.loan_description}>
            You are able to loan $1.8M with an interest rate of 6% for 30 years, so you would have to pay $1.6K per year. Would you accept that?
          </div>
          <div className={styles.loan_buttons}>
            <button className={styles.accept_btn}>Yeahhh</button>
            <button className={styles.decline_btn}>Maybe later</button>
          </div>
        </div>
      </div>
    )
}
