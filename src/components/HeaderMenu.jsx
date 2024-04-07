import styles from "../assets/styles/HeaderMenu.module.scss";
import ProduitsFavoris from "./ProduitsFavoris";

function HeaderMenu({ produitsFavoris }) {
  return (
    <ul className={`${styles.menuContainer} border p-20`}>
      {produitsFavoris.length > 0 ? (
        produitsFavoris.map((favoris) => (
          <li key={favoris._id}>
            <ProduitsFavoris produit={favoris} />
          </li>
        ))
      ) : (
        <li>Aucun Favoris</li>
      )}
    </ul>
  );
}

export default HeaderMenu;
