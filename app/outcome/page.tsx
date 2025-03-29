"use client";

import { useState } from "react";

export default function YearReview() {
  const [year, setYear] = useState(32);

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
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center">Year {year} Review</h2>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Income</h3>
        <table className="w-full mt-2 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Item</th>
              <th className="border p-2">Last Year</th>
              <th className="border p-2">This Year</th>
              <th className="border p-2">Change</th>
            </tr>
          </thead>
          <tbody>
            {income.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{row.item}</td>
                <td className="border p-2">{row.lastYear}k</td>
                <td className="border p-2">{row.thisYear}k</td>
                <td
                  className={`border p-2 ${
                    (row.lastYear == 0
                      ? 1
                      : Math.round(
                          (100.0 * row.thisYear) / row.lastYear - 100
                        )) < 0
                      ? "text-red-500"
                      : "text-black"
                  }`}
                >
                  {row.lastYear == 0
                    ? 1
                    : Math.round((100.0 * row.thisYear) / row.lastYear - 100)}
                  %
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Expense</h3>
        <table className="w-full mt-2 border-collapse border border-gray-300">
          <tbody>
            {expenses.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{row.item}</td>
                <td className="border p-2">{row.lastYear}k</td>
                <td className="border p-2">{row.thisYear}k</td>
                <td
                  className={`border p-2 ${
                    (row.lastYear == 0
                      ? 1
                      : Math.round(
                          (100.0 * row.thisYear) / row.lastYear - 100
                        )) < 0
                      ? "text-red-500"
                      : "text-black"
                  }`}
                >
                  {row.lastYear == 0
                    ? 1
                    : Math.round((100.0 * row.thisYear) / row.lastYear - 100)}
                  %
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Stats</h3>
        <table className="w-full mt-2 border-collapse border border-gray-300">
          <tbody>
            {stats.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{row.item}</td>
                <td className="border p-2">{row.lastYear}</td>
                <td className="border p-2">{row.thisYear}</td>
                <td
                  className={`border p-2 ${
                    (row.lastYear == 0
                      ? 1
                      : Math.round(
                          (100.0 * row.thisYear) / row.lastYear - 100
                        )) < 0
                      ? "text-red-500"
                      : "text-black"
                  }`}
                >
                  {row.lastYear == 0
                    ? 1
                    : Math.round((100.0 * row.thisYear) / row.lastYear - 100)}
                  %
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
        Continue
      </button>
    </div>
  );
}
