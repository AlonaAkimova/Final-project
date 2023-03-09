import "./Contact.css";
import React from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Message } from "primereact/message";
import { Button } from "primereact/button";
import { useState } from "react";
import { projectFirestore } from "../../firebase/config";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    projectFirestore
      .collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Wiadomość została wysłana");
        setIsPending(false);
      })
      .catch((err) => {
        alert(err.message);
        setIsPending(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="section-contact">
      <div className="container-contact">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Skontaktuj się z nami</h2>
            <p className="cta-text">
              Wpisz swoje dane i skontaktujemy się z Tobą
            </p>
            <form className="cta-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="full-name">Imię i Nazwisko</label>
                <InputText
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {name.trim().length === 1 && (
                  <Message severity="error" text="Wypełnij to pole" />
                )}
              </div>
              <div>
                <label htmlFor="email">Podaj adres email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {email.trim().length === 1 && (
                  <Message severity="error" text="Adres e-mail wymagany" />
                )}
              </div>
              <div>
                <label htmlFor="message">Wpisz wiadomość</label>
                <InputTextarea
                  className="textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={10}
                  cols={30}
                />
              </div>
              <Button
                className="btn-send"
                label="Wyślij"
                style={{ background: isPending ? "#ccc" : "#e9faf8" }}
              />
            </form>
          </div>
          <div className="cta-img-box">
            <img
              src="./pexels_2.jpg"
              className="form-img"
              alt="breakfast-at-room"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
