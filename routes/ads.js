const express = require("express");
const router = express.Router();

const {
  getAllAds,
  getAd,
  createAd,
  updateAd,
  deleteAd,
} = require("../controllers/ads");

router.route("/").get(getAllAds).post(createAd);
router.route("/:id").get(getAd).patch(updateAd).delete(deleteAd);

module.exports = router;
