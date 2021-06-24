import express from "express";
import { fetchPrize, getStation } from "./TankApi";

const router = express.Router();

router.get("/prices/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const tankPrizes = await fetchPrize(id);
    res.status(200).json(tankPrizes);
  } catch (error) {
    next(error);
  }
});
router.get("/list/", async (_req, res, next) => {
  try {
    const tankList = await getStation({
      lat: 51.4004,
      lng: 6.8773,
      dist: 1.2,
      rad: 10,
      type: "all",
    });
    res.status(200).json(tankList);
  } catch (error) {
    next(error);
  }
});
export default router;
