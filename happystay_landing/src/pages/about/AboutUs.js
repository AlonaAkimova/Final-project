import "./AboutUs.css";

import React from "react";

export default function AboutUs() {
  return (
    <section className="section-how">
      <div className="container">
        <span className="subheading">Jak to działa</span>
        <h2 className="heading-secondary">
          Proces złożenia zamówienia ze strony gościa
        </h2>
      </div>
      <div className="container about grid--2-cols grid--center-v">
        <div className="step-text-box">
          <h3 className="heading-tertiary">Uruchomienie aplikacji</h3>
          <p className="step-description">
            Użytkownik dostaje link do aplikacji lub skanuje QR kod w pokoju.
            Mogą zostać wysłane SMSowo podczas check-in lub przed przyjazdem
            gościa. Dzięki temu gość ma możliwość zamówienia śniadania w
            dowolnym momencie ze swojego telefonu komórkowego.Użytkownik skanuje
            QR kod lub otwiera podaną stronę internetowa w przeglądarce. Pojawia
            się strona powitalna.
          </p>
        </div>
        <div className="step-img-box">
          <img src="./93shots_so.png" alt="iphone screenshot" />
        </div>
        <div className="step-img-box">
          <img src="./527shots_so.png" alt="iphone screenshot" />
        </div>
        <div className="step-text-box">
          <h3 className="heading-tertiary">
            Proces wyboru śniadań przez gościa
          </h3>
          <p className="step-description">
            Użytkownik wybiera liczbę osób oraz śniadanie.Obiekt prezentuje
            nazwę oraz opis śniadań. Możliwe jest również dodanie zdjęć jeśli
            Państwo takowe posiadają. Możemy wyświetlić cenę jeśli cena zostanie
            dodatkowo doliczona do rachunku.Po wybraniu napojów użytkownik klika
            na przycisk "Dalej" i albo jest przekierowany do kolejnego kroku lub
            w przypadku, gdy zamawia śniadanie dla wielu osób jest przekierowany
            do kroku popredniego z wyborem śniadania.
          </p>
        </div>
        <div className="step-text-box">
          <h3 className="heading-tertiary">Potwierdzenie oraz realizacja</h3>
          <p className="step-description">
            Użytkownik podaje dodatkowe informacje potrzebne do realizacji
            zamówienia takie jak imię, numer pokoju, godzina dostarczenia, data
            oraz komentarze (wpływa to na zadowolenie gości) Data oraz godzina
            są podpowiadane automatycznie. Konfigurujemy godziny odpowiednio do
            potrzeb obiektu. Użytkownik potwierdza zamówienie i jest
            przekierowany do strony z podziękowaniem.
          </p>
        </div>
        <div className="step-img-box">
          <img src="./929shots_so.png" alt="iphone screenshot" />
        </div>
      </div>
    </section>
  );
}
