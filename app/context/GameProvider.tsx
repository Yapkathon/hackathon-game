"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface PlayerState {
  name: string;
  money: number;
  happiness: number;
  knowledge: number;
  occupation: string;
  age:number;
}

interface GameContextType {
  player: PlayerState;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerState>>;
  formatLargeNumber: (amount: number) => string;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  // Initially empty or minimal; will be overwritten from HomePage
  const [player, setPlayer] = useState<PlayerState>({
    name: "",
    money: 0,
    happiness: 0,
    knowledge: 0,
    occupation: "",
    age:0,
  });

  // Helper function
  function formatLargeNumber(amount: number) {
    if (amount >= 1_000_000) {
      return `$${(amount / 1_000_000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(1)}k`;
    } else {
      return `$${amount}`;
    }
  }

  return (
    <GameContext.Provider value={{ player, setPlayer, formatLargeNumber }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}
