import { createContext } from "react";

export const context = createContext({
  currentCard: "",
  setCurrentCard: () => {},
});
