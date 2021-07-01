import express from "express";
import { fetchPrize, getStations } from "./TankApi";

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

router.get("/list/", async (req, res, next) => {
  try {
    const lat = +(req.query.lat || 0);
    const lng = +(req.query.lng || 0);

    const tankList = await getStations({
      dist: 1.2,
      rad: 10,
      type: "all",
      lat,
      lng,
    });
    res.status(200).json(tankList);
  } catch (error) {
    next(error);
  }
});
export default router;
