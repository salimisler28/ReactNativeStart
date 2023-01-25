export const AddFav = (fav_id) => {
  return {
    type: "ADD_FAV",
    payload: fav_id,
  };
};

export const RemoveFav = (fav_id) => {
  return {
    type: "REMOVE_FAV",
    payload: fav_id,
  };
};
