import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./api";
// import  Header  from './components/Header/Header';
// import Banner from './components/Banner/Banner';
// import More from './components/More/More';
import HeaderSecond from "./components/HeaderSecond/HeaderSecond";
import List from "./components/List/List";
import Map from "./components/Map/Map";
 import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

function App() {
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null)

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [type, setType] = useState('restaurant');
  const [rating, setRating] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      console.log(data, "data");
      setPlaces(data);
    });
  }, [type,coordinates, bounds]);

  return (
    <div>
      <BrowserRouter>
        {/* <Header/>
      <Banner/>
      <More/>  */}
        <CssBaseline />
        <HeaderSecond />
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <List 
               places={places} 
               childClicked={childClicked}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
              setChildClicked={setChildClicked}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating }
            />
          </Grid>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
