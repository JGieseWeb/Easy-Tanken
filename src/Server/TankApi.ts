import fetch from "node-fetch";
import { All, fetchListProps, TankResult } from "./types";

const { API_KEY } = process.env;

if (!API_KEY) {
  throw new Error("API Key is missing!");
}
const BASE_URL = "https://creativecommons.tankerkoenig.de/json";

export async function fetchPrize(id: string): Promise<All> {
  const response = await fetch(
    `${BASE_URL}/prices.php?ids=${id}&apikey=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Error something is wrong here!");
  }
  const result = await response.json();
  return result;
}

export async function fetchList({
  lat,
  lng,
  dist,
  rad,
  type,
}: fetchListProps): Promise<All> {
  const response = await fetch(
    `${BASE_URL}/list.php?lat=${lat}&lng=${lng}&dist=${dist}&rad=${rad}&type=${type}&apikey=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Error something is wrong here!");
  }
  const resultOfList = await response.json();
  return resultOfList;
}
export async function getStation({
  lat,
  lng,
  dist,
  rad,
  type,
}: fetchListProps): Promise<TankResult> {
  const allStation = await fetchList({ lat, lng, dist, rad, type });

  const station: TankResult = {
    stations: allStation.stations.map((station) => ({
      id: station.id,
      brand: station.brand,
      street: station.street,
      lat: station.lat,
      lng: station.lng,
      dist: station.dist,
      diesel: station.diesel,
      e5: station.e5,
      e10: station.e10,
      houseNumber: station.houseNumber,
      postcode: station.postcode,
    })),
  };
  return station;
}
