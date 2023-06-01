import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registrazione = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Verifica se tutti i campi sono stati compilati
    if (!name || !username || !email || !password) {
      setErrorMessage("Tutti i campi sono obbligatori.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, email, password }),
      });

      if (response.ok) {
        // Registrazione completata con successo, reindirizza alla pagina di login
        console.log("registrazione effettuata con successo");
        navigate("/login");
      } else {
        const errorMessage = await response.text();

        setErrorMessage(errorMessage);
      }
    } catch (error) {
      console.log("Errore durante la registrazione:", error);
      setErrorMessage("Si è verificato un errore durante la registrazione.");
    }
  };

  return (
    <div
      className="container-fluid "
      style={{
        backgroundImage: `url(${require("../img/armo.webp")})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0",
        MozBackgroundSize: "cover",
        WebkitBackgroundSize: "cover",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <h2 className="text-center pt-5 pb-5 " style={{ fontSize: "50px", color: "darkblue" }}>
        Registrazione
      </h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form className="d-flex flex-column align-items-center" onSubmit={handleRegister}>
        <input
          style={{ width: "55%", height: "5vh" }}
          className="mb-3"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={{ width: "55%", height: "5vh" }}
          className="mb-3"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{ width: "55%", height: "5vh" }}
          className="mb-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ width: "55%", height: "5vh" }}
          className="mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={{ width: "35%", height: "5vh" }} type="submit">
          Registra
        </button>
      </form>
    </div>
  );
};

export default Registrazione;
