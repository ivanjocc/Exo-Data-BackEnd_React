import React, { Fragment, useEffect, useState } from "react";
import Produit from "./Produit";
import styles from "../assets/styles/Produits.module.scss";
import SearchBar from "./SearchBar";

const Produits = ({ visible, handleAjusterProduitFavoris, produitsFavoris }) => {
  const [produits, setProduits] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const [filterBy, setFilterBy] = useState({ byName: true, byNote: false });

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/produits');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setProduits(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchProduits();
  }, []);

  function handleInput(e) {
    const filter = e.target.value;
    setFilterInput(filter.trim().toLowerCase());
  }

  const handleFilter = (e) => {
    const byFilter = e.target.value;
    if (byFilter === "byName")
      setFilterBy({ ...filterBy, byName: e.target.checked });
    if (byFilter === "byNote")
      setFilterBy({ ...filterBy, byNote: e.target.checked });
  };

  const getItemSavedState = (item) => {
    const test = produitsFavoris.filter((p) => item._id === p._id);
    return test.length > 0;
  };

  return (
    <div className={`${styles.produits} ${visible ? "visible" : "hidden"}`}>
      <SearchBar
        handleInput={handleInput}
        handleFilter={handleFilter}
        filterBy={filterBy}
      />
      <div className={`${styles.grid} container`}>
        {produits
          .filter((item) => {
            if (filterBy.byName === true && filterBy.byNote === false)
              return item.name.trim().toLowerCase().includes(filterInput);
            if (filterBy.byName === false && filterBy.byNote === true)
              return item.note.trim().toLowerCase().includes(filterInput);
            return (
              item.note.trim().toLowerCase().includes(filterInput) ||
              item.name.trim().toLowerCase().includes(filterInput)
            );
          })
          .map((item) => (
            <Fragment key={item._id}>
              <Produit
                data={item}
                handleAjusterProduitFavoris={handleAjusterProduitFavoris}
                saved={getItemSavedState(item)}
              />
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default Produits;
