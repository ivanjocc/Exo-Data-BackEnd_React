import React, { useState } from "react";
import styles from "../assets/styles/SearchBar.module.scss";

const SearchBar = ({ handleInput, handleFilter, filterBy }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="parallax">
      <div className="container">
        <div
          className={`d-flex flex-row justify-content-center align-item-center my-20 ${styles.searchBar}`}
        >
          <i className="fa-solid fa-magnifying-glass fa-xl mr-15 mt-10"></i>
          <input
            onChange={handleInput}
            className="flex-fill"
            type="text"
            placeholder="Rechercher"
          />
          <i
            onClick={() => setShowFilter(!showFilter)}
            className="fa-solid fa-xl fa-filter mt-10"
          ></i>
        </div>
        <div className={showFilter ? "visible" : "hidden"}>
          <div
            className={`filter d-flex justify-content-end align-items-center mr-10 mb-20 ${styles.searchBarFilter}`}
          >
            <div onClick={handleFilter} className="mx-10">
              <input
                type="checkbox"
                id="byName"
                name="byName"
                value="byName"
                defaultChecked={filterBy.byName}
              />
              <label htmlFor="byName">Par nom</label>
            </div>
            <div onClick={handleFilter} className="mx-10">
              <input
                type="checkbox"
                id="byNote"
                name="byNote"
                value="byNote"
                defaultChecked={filterBy.byNote}
              />
              <label htmlFor="byNote">Par note</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
