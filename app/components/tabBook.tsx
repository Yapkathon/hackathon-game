"use client";
import "./tabBook.css";

export default function TabBook({ children }: { children: React.ReactNode }) {
  return (
    <div className="tab-book w-full h-full">
      <div className="flex flex-row">{children}</div>
    </div>
  );
}
