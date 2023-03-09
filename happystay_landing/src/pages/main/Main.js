import "./Main.css";
import React from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

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
          <Link to="/about">
            <Button label="Jak to działa" className="btn btn--full" />
          </Link>
          <Link to="/Contact">
            <Button
              label="Kontakt"
              severity="secondary"
              className="btn btn--outline"
            />
          </Link>
        </div>
        <div className="img-box">
          <img src="./pexels.jpg" className="hero-img" alt="breakfast" />
        </div>
      </div>
    </section>
  );
}
