import React, { useState } from "react";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

// type pramasProps = {
//   q: string
//   format: string
//   addressdetails: string

// }
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};
const SearchBox = (props: any) => {
  const { selectPosition, setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");
  // console.log(searchText);

  const [listPlace, setListPlace] = useState<any[]>([]);
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          style={{ width: "80%", border: "1px solid blue", padding: "5px" }}
          value={searchText}
          onChange={(event) => {
            setSearchText(event?.target.value);
          }}
        />
        <button
          style={{
            border: "none",
            backgroundColor: "blue",
            padding: "5px",
            fontWeight: "bold",
            color: "white",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
          onClick={() => {
            //search
            const params: {} = {
              q: searchText,
              format: "json",
              addressdetails: "addressdetails",
              polygon_geojson: 0,
            };
            const queryString = new URLSearchParams(params).toString();

            const requestOptions: {} = {
              method: "GET",
              redirect: "follow",
            };
            fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
              .then((response) => response.text())
              .then((result) => {
                console.log(JSON.parse(result));
                setListPlace(JSON.parse(result));
              })
              .catch((err) => console.log("err:", err));
          }}
        >
          Search
        </button>
      </div>
      <div>
        <ul>
          {listPlace.map((item) => {
            return (
              <div key={item?.place_id}>
                <li
                  style={{
                    display: "flex",
                    listStyle: "none",
                    alignItems: "center",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSelectPosition(item);
                  }}
                >
                  <img
                    src="./location.png"
                    style={{ width: 18, paddingRight: "5px" }}
                  />
                  <p>{item?.display_name}</p>
                </li>
                <hr />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;
