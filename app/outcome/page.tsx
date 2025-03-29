"use client";

import { useState } from "react";
import styles from "./outcome.module.css";
import { useGame } from "../context/GameProvider";
import { useRouter } from "next/navigation";


export default function YearReview() {
  const [year, setYear] = useState(32);

  const { player, setPlayer } = useGame();
  const router = useRouter();
  function end() {

    setPlayer((prev) => ({
      ...prev,
      // Increase money by `amount`
      age: prev.age + 1,
      
    }));
    router.push("/dashboard");

  }

  const income = [
    { item: "Salary", lastYear: 100, thisYear: 120 },
    { item: "Sell Investment", lastYear: 7, thisYear: 2 },
    { item: "Events", lastYear: 1, thisYear: 2 },
  ];

  const expenses = [
    { item: "Accommodation", lastYear: 20, thisYear: 24 },
    { item: "Food", lastYear: 5, thisYear: 7 },
    { item: "Transport", lastYear: 4, thisYear: 2 },
    { item: "Insurance", lastYear: 10, thisYear: 18 },
    { item: "Loan Payment", lastYear: 2, thisYear: 2 },
    { item: "Assets", lastYear: 0, thisYear: 45 },
    { item: "Buy Investment", lastYear: 10, thisYear: 8 },
    { item: "Tutor", lastYear: 10, thisYear: 10 },
    { item: "Travel", lastYear: 20, thisYear: 20 },
    { item: "Events", lastYear: 3, thisYear: 1 },
  ];

  const stats = [
    { item: "Net Worth", lastYear: 120, thisYear: 135 },
    { item: "Knowledge", lastYear: 16, thisYear: 18 },
    { item: "Happiness", lastYear: 27, thisYear: 35 },
  ];

  return (
    <div>
      <div className={styles.head}>
            <div className={styles.topic}>Outcome</div>
            <div className={styles.topic}>⌛️3/9</div>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>Year 32 Review</h2>
        
        <div className={styles.section}>
          <h1 className="text-center">Income</h1>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Items</th>
                <th>Last Year</th>
                <th>This Year</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Salary</td><td>100k</td><td>120k (▲20%)</td></tr>
              <tr><td>Sell Investment</td><td>7k</td><td className={styles.negative}>2k (▼71%)</td></tr>
              <tr><td>Events</td><td>1k</td><td>2k (▲100%)</td></tr>
              <tr><td><strong>Total</strong></td><td>108k</td><td>124k (▲15%)</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h1 className="text-center">Expense</h1>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Items</th>
                <th>Last Year</th>
                <th>This Year</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Accommodation</td><td>20k</td><td className={styles.negative}>24k (▲20%)</td></tr>
              <tr><td>Food</td><td>5k</td><td className={styles.negative}>7k (▲40%)</td></tr>
              <tr><td>Transport</td><td>4k</td><td className={styles.positive}>2k (▼50%)</td></tr>
              <tr><td>Insurance</td><td>10k</td><td className={styles.negative}>18k (▲80%)</td></tr>
              <tr><td>Loan Payment</td><td>2k</td><td>2k</td></tr>
              <tr><td>Assets</td><td>-</td><td className={styles.new}>45k (NEW)</td></tr>
              <tr><td>Buy Investment</td><td>10k</td><td className={styles.positive}>8k (▼20%)</td></tr>
              <tr><td>Travel</td><td>20k</td><td>10k</td></tr>
              <tr><td>Events</td><td>3k</td><td className={styles.positive}>1k (▼67%)</td></tr>
              <tr><td><strong>Total</strong></td><td>84k</td><td className={styles.negative}>109k (▲30%)</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h1 className="text-center">Stats</h1>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Items</th>
                <th>Last Year</th>
                <th>This Year</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Net Worth</td><td>120k</td><td>135k (▲13%)</td></tr>
              <tr><td>Knowledge</td><td>16</td><td>18 (▲13%)</td></tr>
              <tr><td>Happiness</td><td>27</td><td>35 (▲30%)</td></tr>
              <tr><td>Occupation</td><td>Software Engineer</td><td>Entrepreneur</td></tr>
            </tbody>
          </table>
        </div>

        <button className={styles.continueButton} onClick={() => end()}>Continue</button>
      </div>
    </div>
  );
} 
