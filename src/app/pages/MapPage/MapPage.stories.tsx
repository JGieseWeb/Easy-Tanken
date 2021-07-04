import React from "react";
import MapPage from "./MapPage";

export default {
  title: "pages/MapPage",
  component: MapPage,
  parameters: {
    layout: "fullscreen",
  },
};
export const MapPages = (): JSX.Element => <MapPage />;
