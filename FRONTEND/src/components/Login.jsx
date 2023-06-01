import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Salva il token di accesso nell'app
        localStorage.setItem("accessToken", data.accessToken);
        setSuccessMessage("Login effettuato con successo!");
        setError("");
        window.location.href = "/";
      } else {
        // Gestisci gli errori di autenticazione
        setError(data.error);
        setSuccessMessage("Credenziali non valide");
      }
    } catch (error) {
      console.log("Errore durante il login:", error);
      setError("Si è verificato un errore durante il login.");
      setSuccessMessage("Credenziali non valide");
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
        Effettua il login
      </h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "red" }}>{successMessage}</p>}
      <form className="d-flex flex-column align-items-center" onSubmit={handleLogin}>
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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={{ width: "35%", height: "5vh" }} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
