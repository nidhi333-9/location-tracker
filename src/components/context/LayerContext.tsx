import { LatLng } from "leaflet";
import React, { useState } from "react";

const LayerContext: any = React.createContext({});

const LayerContextProvider = ({ children }: any) => {
  const [point, setPoint] = useState<LatLng>([0, 0]);
  const defaultValue = {
    point,
    setPoint,
  };

  return (
    <LayerContext.Provider value={defaultValue}>
      {children}
    </LayerContext.Provider>
  );
};

export { LayerContext, LayerContextProvider };
