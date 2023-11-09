let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;

  const charactersRepeated = myFavorites.find((fav) => {
    return fav.id == character.id;
  });
  if (!charactersRepeated) myFavorites.push(character);

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((favorite) => {
    return favorite.id != id;
  });
  return res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
