export type fetchListProps = {
  lat: number;
  lng: number;
  dist: number;
  rad: number;
  type: string;
};
export type TankResult = {
  stations: {
    id: string;
    brand: string;
    street: string;
    lat: number;
    lng: number;
    dist: number;
    diesel: number;
    e5: number;
    e10: number;
    houseNumber: string;
    postcode: number;
  }[];
};
export type All = {
  stations: {
    id: string;
    name: string;
    brand: string;
    street: string;
    place: string;
    lat: number;
    lng: number;
    dist: number;
    diesel: number;
    e5: number;
    e10: number;
    isOpen: boolean;
    houseNumber: string;
    postcode: number;
  }[];
};
