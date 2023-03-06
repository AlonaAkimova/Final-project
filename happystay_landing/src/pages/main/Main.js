import "./Main.css";
import React from "react";
import { Button } from "primereact/button";

export default function Main() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="text-box">
          <h1 className="heading-primary">
            Znamy najlepszy sposób na podniesienie ocen twojego obiektu!
          </h1>
          <p className="hero-description">
            Wirtualne menu śniadaniowe w smartfonie. Pozwól gościom hotelowym
            zamówić śniadanie pod drzwi bez żadnych formularzy oraz dodatkowych
            kontaktów z recepcja.
          </p>
          <Button label="Jak to działa" className="btn btn--full" />
          <Button
            label="Blog"
            severity="secondary"
            className="btn btn--outline"
          />
        </div>
        <div className="img-box">
          <img src="./pexels.jpg" className="hero-img" alt="breakfast image" />
        </div>
      </div>
    </section>
  );
}
