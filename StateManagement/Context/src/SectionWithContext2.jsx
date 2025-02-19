import { useContext } from "react";
import { LevelContext2 } from "./LevelContext2";

export default function SectionWithContext2({ children }) {
  const level = useContext(LevelContext2);
  return (
    <section className="section">
      <LevelContext2.Provider value={level + 1}>
        {children}
      </LevelContext2.Provider>
    </section>
  );
}
