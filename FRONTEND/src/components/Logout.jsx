import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Effettua l'operazione di logout, ad esempio:
    localStorage.removeItem("accessToken");

    // Reindirizza alla pagina di login
    navigate("/");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
