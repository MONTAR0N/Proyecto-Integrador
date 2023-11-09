const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}?`
    );

    if (data.id) {
      const { id, name, status, origin, image, gender, species, location } =
        data;
      res
        .status(200)
        .json({ id, name, status, origin, image, gender, species, location });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { getCharById };
