import { useContext } from "react";
import { LevelContext2 } from "./LevelContext2";

export default function SectionWithContext3({ children, isFancy }) {
  const level = useContext(LevelContext2);
  return (
    <section className={"section" + (isFancy ? "fancy" : "")}>
      <LevelContext2.Provider value={level + 1}>
        {children}
      </LevelContext2.Provider>
    </section>
  );
}
