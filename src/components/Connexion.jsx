import React from "react";
import styles from "../assets/styles/Connexion.module.scss";

const Connexion = ({
  handleEmail,
  handlePassword,
  handleConnexion,
  handleDeconnexion,
  email,
  password,
  user,
}) => {
  return (
    <div className={`${styles.menuConnexion} border p-20`}>
      {user ? (
        <a onClick={handleDeconnexion} href="#">
          Déconnexion
        </a>
      ) : (
        <>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Courriel"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePassword}
          />
          <a onClick={handleConnexion} href="#">
            Connexion
          </a>
          {user === false && (
            <span className="error">* Utilisateur inexistant</span>
          )}
        </>
      )}
    </div>
  );
};

export default Connexion;
