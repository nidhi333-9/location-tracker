import React from "react";
import { LayerContextProvider } from "./context/LayerContext";
import LeafletMap from "./LeafletMap";
const App: React.FC = () => {
  return (
    <LayerContextProvider>
      <LeafletMap />
    </LayerContextProvider>
  );
};

export default App;
