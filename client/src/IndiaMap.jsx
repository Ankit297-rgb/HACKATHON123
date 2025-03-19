import React from "react";
import { useNavigate } from "react-router-dom";
import './Css/IndiaMap.css';
import ReactDatamaps from "react-india-states-map";

const STATES = {
  Maharashtra: {
    value: 50,
    content: {
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  },
  // Add other states here as needed
};

const IndiaMap = () => {
  const [activeState, setActiveState] = React.useState({
    data: STATES.Maharashtra,
    name: "India"
  });

  const navigate = useNavigate();

  const stateOnClick = (data, name) => {
    setActiveState({ data, name });
    navigate(`/state/${name}`); // Navigate to the state page on click
  };

  return (
    <ReactDatamaps
      regionData={STATES}
      mapLayout={{
        hoverTitle: "Count",
        noDataColor: "#D36418",
        borderColor: "#ffffff"
      }}
      hoverComponent={({ value }) => (
        <p>{value.name}</p>
      )}
      onClick={stateOnClick}
      activeState={activeState}
    />
  );
};

export default IndiaMap;