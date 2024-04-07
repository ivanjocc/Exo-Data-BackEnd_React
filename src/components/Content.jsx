import React, { useState } from "react";
import Produits from "./Produits";
import styles from "../assets/styles/Content.module.scss";
import Accueil from "./Accueil";

const Content = ({
  produits,
  accueil,
  handleAjusterProduitFavoris,
  produitsFavoris,
}) => {
  const [visible, setVisible] = useState(true);
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <div className={`container mt-50 ${styles.content}`}>
        <Accueil accueil={accueil} handleDecouvrir={handleVisible} />
      </div>
      <Produits
        produits={produits}
        visible={visible}
        handleAjusterProduitFavoris={handleAjusterProduitFavoris}
        produitsFavoris={produitsFavoris}
      />
    </div>
  );
};

export default Content;
