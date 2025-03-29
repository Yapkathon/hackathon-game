"use client";
import { useState } from "react";
import styles from "./carCard.module.css";

type CarCardProps = {
  imageUrl: string;
  name: string;
  price: string;
  specs: string[];
};

export default function CarCard({
  imageUrl,
  name,
  price,
  specs,
}: CarCardProps) {
  // State to show/hide the detail popup
  const [showDetail, setShowDetail] = useState(false);

  // State to show/hide the final confirmation popup
  const [showConfirmation, setShowConfirmation] = useState(false);

  // The text for confirmation header and sub-header
  const [confirmHeader, setConfirmHeader] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");

  const handleViewDetail = () => {
    setShowDetail(true);
  };

  const handleBuy = () => {
    // Close detail popup
    setShowDetail(false);

    // Set confirmation text
    setConfirmHeader("Asset Bought");
    setConfirmMessage(`You've bought ${name}`);

    // Show confirmation popup
    setShowConfirmation(true);
  };

  return (
    <div className={styles.card} style={{ fontFamily: "var(--font-adlam)" }}>
      <img src={imageUrl} alt={name} className={styles.image} />

      <div className={styles.content}>
        <div className={styles.name}>{name}</div>

        <div className={styles.headerRow}>
          <div className={styles.price}>{price}</div>
          {/* "View Detail" opens the detail popup */}
          <button className={styles.button} onClick={handleViewDetail}>
            View Detail
          </button>
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

      {/* ─────────────────────────────────────────────────────────────────
          DETAIL POPUP (for "Buy" only)
      ───────────────────────────────────────────────────────────────── */}
      {showDetail && (
        <>
          {/* Overlay (clicking it also closes the popup) */}
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setShowDetail(false)}
          />
          {/* Popup Content */}
          <div className="fixed top-1/2 left-1/2 w-[280px] max-w-[90%] -translate-x-1/2 -translate-y-1/2 bg-white z-50 rounded-md p-4 shadow-md flex flex-col gap-3 border border-black">
            <h2 className="font-bold text-lg text-center">Car Options</h2>
            <p className="text-center">{name}</p>
            <p className="text-center">Price: {price}</p>

            <div className="flex justify-center mt-2">
              <button
                className="bg-blue-500 text-white py-1 px-3 rounded-md"
                onClick={(e) => {
                  e.stopPropagation();
                  handleBuy();
                }}
              >
                Buy
              </button>
            </div>

            <button
              className="mt-2 text-sm text-gray-600 underline"
              onClick={() => setShowDetail(false)}
            >
              Close
            </button>
          </div>
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────────
          CONFIRMATION POPUP (after buying)
      ───────────────────────────────────────────────────────────────── */}
      {showConfirmation && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setShowConfirmation(false)}
          />
          {/* Confirmation Box */}
          <div className="fixed top-1/2 left-1/2 w-[280px] max-w-[90%] -translate-x-1/2 -translate-y-1/2 bg-[#f0f0d0] z-50 rounded-md p-4 shadow-md flex flex-col items-center gap-2 border border-black">
            <h2 className="font-bold text-xl">{confirmHeader}</h2>
            <p className="text-center text-sm">{confirmMessage}</p>
            <button
              className="bg-gray-200 border border-gray-400 px-3 py-1 rounded-md"
              onClick={() => setShowConfirmation(false)}
            >
              Ok
            </button>
          </div>
        </>
      )}
    </div>
  );
}
