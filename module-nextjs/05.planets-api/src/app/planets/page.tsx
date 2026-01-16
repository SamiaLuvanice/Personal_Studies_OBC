import { PlanetForm } from "@/components/PlanetForm";
import { PlanetItem } from "@/components/PlanetItem";
import styles from "./page.module.css";
import * as Planet from "@/models/Planet";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: " Planetas | Planets APP",
    description: "Saiba mais sobre o Planets APP, um projeto desenvolvido ao longo das aulas da OBC.",
};


export default async function Home() {
  const planets = await Planet.getPlanets();

  return (
    <div className={styles.page}>
      <h1>Planetas</h1>

      <div className={styles.container}>
        <Suspense fallback={<h2>Carregando formulário...</h2>}>
          <PlanetForm />
        </Suspense>

        <section className={styles.planets}>
          {planets.map((planet) => (
            <PlanetItem key={planet.id} planet={planet} />
          ))}
        </section>
      </div>
    </div>
  );
}