import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter((x) => {
      return x.placeId !== restaurant.placeId;
    });

    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFavorites: add,
        removeFavorites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
