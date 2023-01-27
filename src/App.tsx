import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import Maps from "./Maps";
import SearchBox from "./SearchBox";

const App = () => {
  // const [url, setUrl] = useState("None");
  // useEffect(() => {
  //   const currentUrl = window.location.href;
  //   setUrl(currentUrl);
  // }, []);
  const [selectPosition, setSelectPosition] = useState(null);
  // console.log(selectPosition);
  return (
    <>
      {/* <p>Current Url = {url}</p> */}
      <div
        style={{
          display: "flex",
          border: "1px solid red",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div style={{ border: "1px solid red", width: "50%" }}>
          <Maps selectPosition={selectPosition} />
        </div>
        <div style={{ border: "1px solid red", width: "50%" }}>
          <SearchBox
            selectPosition={selectPosition}
            setSelectPosition={setSelectPosition}
          />
        </div>
      </div>
    </>
  );
};

export default App;
