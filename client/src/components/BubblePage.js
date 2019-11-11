import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../components/axiosAuth";


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  // bringing useEffect into work to get our API
useEffect(() => {
  axiosWithAuth()
  .get('http://localhost:5000/api/colors')
  .then(res => {
    setColorList(res.data)
  })
  .catch(error => console.log(error))
}, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
