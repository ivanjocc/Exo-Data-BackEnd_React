import React from "react";

const itemFavoriteReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_FAVORITE": {
      return { itemSaved: false };
    }
  }
};

export default itemFavoriteReducer;
