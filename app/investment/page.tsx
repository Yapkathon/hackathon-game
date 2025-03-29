"use client";
import React, { useState } from "react";
import TabBook from "../components/tabBook";

export default function InvestmentPage() {
  const [shares, setShares] = useState(10);

  return (
    <div className="text-black p-4 flex flex-col items-center">
      <img
        src="/investSign/investSign.png" // Make sure this image is in /public folder
        alt="Invest Sign"
        className="absolute top-9 w-[350px]"
      />
      <div className="relative overflow-clip bg-gray-900 text-white py-2 mt-12 w-[393px]">
        <div className="ticker-container flex whitespace-nowrap w-max">
          <div className="ticker-item inline-flex items-center mx-4">
            <span className="font-bold text-green-400">APLE</span>
            <span className="text-green-400">&nbsp;▲172.63 1.23%</span>
          </div>
          <div className="ticker-item inline-flex items-center mx-4">
            <span className="font-bold text-red-400">MSHD</span>
            <span className="text-red-400">&nbsp;▼328.39 0.87%</span>
          </div>
          <div className="ticker-item inline-flex items-center mx-4">
            <span className="font-bold text-green-400">GAAGL</span>
            <span className="text-green-400">&nbsp;▲138.21 2.15%</span>
          </div>
          <div className="ticker-item inline-flex items-center mx-4">
            <span className="font-bold text-red-400">AMSN</span>
            <span className="text-red-400">&nbsp;▼178.75 0.42%</span>
          </div>
          <div className="ticker-item inline-flex items-center mx-4">
            <span className="font-bold text-green-400">NAS</span>
            <span className="text-green-400">&nbsp;▲170.83 3.67%</span>
          </div>

          <div className="ticker-item inline-flex items-center mx-4">
            <span className="font-bold text-green-400">APLE</span>
            <span className="text-green-400">&nbsp;▲172.63 1.23%</span>
          </div>
          <div className="ticker-item inline-flex items-center mx-4">
            <span className="font-bold text-red-400">MSHD</span>
            <span className="text-red-400">&nbsp;▼328.39 0.87%</span>
          </div>
          <div className="ticker-item inline-flex items-center mx-4">
            <span className="font-bold text-green-400">GAAGL</span>
            <span className="text-green-400">&nbsp;▲138.21 2.15%</span>
          </div>
          <div className="ticker-item inline-flex items-center mx-4">
            <span className="font-bold text-red-400">AMSN</span>
            <span className="text-red-400">&nbsp;▼178.75 0.42%</span>
          </div>
          <div className="ticker-item inline-flex items-center mx-4">
            <span className="font-bold text-green-400">NAS</span>
            <span className="text-green-400">&nbsp;▲170.83 3.67%</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-2 rounded-lg mb-4 w-full mt-2 h-[200px] flex flex-col">
        <p className="font-semibold absolute text-[#ffffff] mx-2 my-1">
          NVDI $109
        </p>
        <div className="bg-black rounded flex items-center justify-center h-full">
          <span className="text-green-400">Chart</span>
        </div>
      </div>
      <TabBook>
        <div className="book p-4 bg-white rounded-l-xl w-full flex flex-col items-center">
          <div className="mb-4">
            <div className="flex space-x-2 mb-2 items-center text-sm">
              Range
              <button className="bg-[#ffffff] ml-1 px-2 py-1 rounded-xl border-1">
                3m
              </button>
              <button className="bg-[#ffffff] px-2 py-1 rounded-xl border-1">
                6m
              </button>
              <button className="bg-[#ffffff] px-2 py-1 rounded-xl border-1">
                1yr
              </button>
              <button className="bg-[#ffffff] px-2 py-1 rounded-xl border-1">
                All Time
              </button>
            </div>

            <div className="flex flex-col space-y-2">
              <button className="bg-yellow-400 font-semibold px-2 py-1 rounded border-1">
                NVIDI Corp (High Risk)
              </button>
              <button className="bg-[#ffffff] px-2 py-1 rounded border-1">
                J.K.Mogging (Moderate Risk)
              </button>
              <button className="bg-[#ffffff] px-2 py-1 rounded border-1">
                Nikola Inc (Low Risk)
              </button>
              <button className="bg-[#ffffff] px-2 py-1 rounded border-1">
                SnP 50 (Mutual Funds)
              </button>
            </div>
          </div>
          <div className="mb-2 flex">
            <div className="flex flex-col space-x-2 w-3/5 mr-2">
              <div className="flex space-x-2 w-full mb-2 items-center">
                <span className="text-skin min-w-[84px]">Stop Loss</span>
                <div className="bg-[#ffffff] px-2 py-1 rounded border-1 text-skin w-full">
                  $98
                </div>
              </div>
              <div className="flex space-x-2 w-full  items-center">
                <span className="text-skin min-w-[84px]">Take Profit</span>
                <div className="bg-[#ffffff] px-2 py-1 rounded border-1 text-skin w-full">
                  $115
                </div>
              </div>
            </div>

            <div className="flex flex-col w-2/5 items-center justify-center">
              <span className="px-2 py-1 rounded border-1 text-skin mb-2">
                Shares
              </span>
              <div className="w-full flex justify-center">
                <button
                  className="bg-[#ffffff] px-2 rounded-2xl border-1 w-[35px]"
                  onClick={() => setShares(Math.max(1, shares - 1))}
                >
                  -
                </button>
                <div className="bg-[#ffffff] px-2 py-1 rounded border-1 text-skin w-[50px] mx-1">
                  {shares}
                </div>
                <button
                  className="bg-[#ffffff] px-2 rounded-2xl border-1 w-[35px]"
                  onClick={() => setShares(shares + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          Total: ${shares * 100}
          <div className="flex space-x-2 mt-2 justify-center">
            <button className="bg-green-500 text-[#ffffff] border-black px-4 py-2 rounded border-1 font-bold w-[70px]">
              BUY
            </button>
            <button className="bg-red-600 text-[#ffffff] border-black px-4 py-2 rounded border-1 font-bold w-[70px]">
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
