import React, { useState } from "react";
import logo from "../assets/images/AM-logo.svg";
import styles from "../assets/styles/Header.module.scss";
import HeaderMenu from "./HeaderMenu";
import Connexion from "./Connexion";
import User from "./User";
import Logo from "./Logo";
import { users } from "../data/data";

const Header = ({ produitsFavoris, setProduitsFavoris }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showConnexion, setShowConnexion] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [user, setUser] = useState(null);

  const handleOnChangeEmail = (e) => {
    setEmailInput(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setPasswordInput(e.target.value);
  };
  const handleOnClickConnexion = (e) => {
    e.stopPropagation();
    const userFound = users.filter(
      (user) => user.email.toLowerCase() === emailInput.toLowerCase()
    );
    if (userFound.length > 0 && userFound[0].password === passwordInput) {
      setUser(userFound[0]);
      setEmailInput("");
      setPasswordInput("");
      setShowConnexion(false);
    } else setUser(false);
  };
  const handleOnClickDeconnexion = (e) => {
    e.stopPropagation();
    setUser(null);
    setProduitsFavoris([]);
  };
  return (
    <div className={`${styles.header} d-flex flex-row align-items-center`}>
      <Logo logo={logo} />
      <User user={user} handleDeconnexion={handleOnClickDeconnexion} />
      <ul>
        <li>
          <span className={styles.produitsFavoris}>
            {produitsFavoris.length}
          </span>
          <i
            onClick={() => {
              setShowMenu(true);
              setShowConnexion(false);
            }}
            className="fa-solid fa-bag-shopping fa-xl panier hover_opacity"
          ></i>
        </li>
        <li className="mr-15">
          <i
            onClick={() => {
              setShowMenu(false);
              setShowConnexion(true);
            }}
            className="fa-solid fa-user fa-xl connexion hover_opacity"
          ></i>
        </li>
      </ul>

      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu produitsFavoris={produitsFavoris} />
        </>
      )}
      {showConnexion && (
        <>
          <div onClick={() => setShowConnexion(false)} className="calc"></div>
          <Connexion
            handleEmail={handleOnChangeEmail}
            handlePassword={handleOnChangePassword}
            handleDeconnexion={handleOnClickDeconnexion}
            handleConnexion={handleOnClickConnexion}
            email={emailInput}
            password={passwordInput}
            user={user}
          />
        </>
      )}
    </div>
  );
};

export default Header;
