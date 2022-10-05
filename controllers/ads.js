const getAllAds = async (req, res) => {
  res.send("get all ads");
};

const getAd = async (req, res) => {
  res.send("get ad");
};

const createAd = async (req, res) => {
  res.send("create ad");
};

const updateAd = async (req, res) => {
  res.send("update ad");
};

const deleteAd = async (req, res) => {
  res.send("delete ad");
};

module.exports = { getAllAds, getAd, createAd, updateAd, deleteAd };
