import React, { createContext, useState, useEffect, useContext } from "react";
//Import for local Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../auth/auth.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [favourites, setFavourites] = useState([]);

  //Building aut Local Data
  //Write Data
  //TODO: Fix Bug that favourites are not stored in local storage Correctly
  //TODO: See why Local Storage is overwritten on user change
  const saveFavorites = async (value, uid) => {
    try {
      console.log("Saving Favorites");
      console.log(value);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  //Reading Data
  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      console.log("Get Value");
      console.log(value);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  // useEffect Hook for storing Data on Change
  //Initial Load
  useEffect(() => {
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user]);

  //Save on change
  useEffect(() => {
    if (user) {
      saveFavorites(favourites, user.uid);
    }
  }, [favourites, user]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  };
  return (
    <FavouritesContext.Provider
      value={{
        favourites: favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

//TODO: Fix why favourites are not stored on Device.
