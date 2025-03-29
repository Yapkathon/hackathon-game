"use client";
import React, { useState } from "react";
import TabBook from "../components/tabBook";

export default function InvestmentPage() {
  const [shares, setShares] = useState(10);

  return (
    <div className="p-4 foreground flex flex-col items-center">
      <div className="bg-yellow-500 text-black text-center text-xl font-bold p-2 rounded-t-xl w-full">
        $ INVESTMENT $
      </div>
      <div className="bg-white p-2 rounded-lg mb-4 w-full">
        <p className="text-black font-semibold">NVDI $109</p>
        <div className="bg-black h-32 rounded mt-2 flex items-center justify-center">
          <span className="text-green-400">Chart</span>
        </div>
      </div>
      <TabBook>
        <div className="book p-4 bg-white rounded-l-xl w-full">
          <div className="mb-4">
            <div className="flex space-x-2 mb-2">
              <button className="bg-gray-300 text-black px-2 py-1 rounded">
                3m
              </button>
              <button className="bg-gray-300 text-black px-2 py-1 rounded">
                6m
              </button>
              <button className="bg-gray-300 text-black px-2 py-1 rounded">
                1yr
              </button>
              <button className="bg-gray-300 text-black px-2 py-1 rounded">
                All Time
              </button>
            </div>

            <div className="flex flex-col space-y-2">
              <button className="bg-yellow-400 text-black font-semibold px-2 py-1 rounded">
                NVIDI Corp (High Risk)
              </button>
              <button className="bg-[#ffffff] text-black px-2 py-1 rounded">
                J.K.Mogging (Moderate Risk)
              </button>
              <button className="bg-[#ffffff] text-black px-2 py-1 rounded">
                Nikola Inc (Low Risk)
              </button>
              <button className="bg-[#ffffff] text-black px-2 py-1 rounded">
                SnP 50 (Mutual Funds)
              </button>
            </div>
          </div>

          <div className="mb-4 flex">
            <div className="flex flex-col space-x-2 mb-2 w-full">
              <div className="flex space-x-2 mb-2 w-full">
                <span className="bg-red-600 px-2 py-1 rounded text-skin w-full">
                  Stop Loss
                </span>
                <span className="bg-pink-500 px-2 py-1 rounded text-skin">
                  $98
                </span>
              </div>
              <div className="flex space-x-2 mb-2 w-full">
                <span className="bg-red-600 px-2 py-1 rounded text-skin w-full">
                  Take Profit
                </span>
                <span className="bg-pink-500 px-2 py-1 rounded text-skin">
                  $115
                </span>
              </div>
            </div>

            <div className="flex flex-col space-x-2 w-full items-center justify-center">
              Shares
              <div>
                <button
                  className="bg-gray-600 px-2 rounded"
                  onClick={() => setShares(Math.max(1, shares - 1))}
                >
                  -
                </button>
                <span className="px-2">{shares}</span>
                <button
                  className="bg-gray-600 px-2 rounded"
                  onClick={() => setShares(shares + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="mt-2 text-black bg-skin p-1 rounded inline-block">
            Total: ${shares * 100}
          </div>

          <div className="flex space-x-2">
            <button className="bg-green-500 text-black px-4 py-2 rounded font-bold">
              BUY
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded font-bold">
              SELL
            </button>
          </div>
        </div>
        <div className="tabs flex flex-col">
          <div>
            <p>Lottery</p>
          </div>
          <div>
            <p>
              Government
              <br />
              bond
            </p>
          </div>
          <div>
            <p>Stock</p>
          </div>
          <div>
            <p>Crypto</p>
          </div>
        </div>
      </TabBook>
    </div>
  );
}
