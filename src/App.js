import React from "react";
import {BrowserRouter , Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import Slider from "./components/Slider";
import data from './data/data.json'
import Offers from "./components/Offers";
import Heading from './components/Heading.js'
import StarProduct from './components/StarProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from "./components/HotAccessories";
import ProductReviews from './components/ProductReviews.js';
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavOptions from "./components/NavOptions";


function App() {
  return (
<BrowserRouter>
 
<PreNavbar/>
 <Navbar />

<NavOptions miphones={data.miPhones} redmiphones={data.redmiPhones} tv={data.tv}
laptops={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home}
audio={data.audio} accessories={data.accessories} />

 <Slider start={data.banner.start} />
 <Offers offer={data.offer} />
 <Heading text="STAR PRODUCTS"/>
 <StarProduct starproduct={data.starProduct}  />
 <HotAccessoriesMenu />
 <Routes>
 <Route path="/music"  
  element ={
 <HotAccessories music={data.hotAccessories.music} musciCover={data.hotAccessoriesCover.music} /> 
} >
 </Route>
 <Route path="/smartDevice"
  element ={
  <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} /> 
  } >
  </Route>
  <Route path="/home"
  element ={
  <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} /> 
  } >
  </Route>
  <Route path="/lifestyle"
  element ={
  <HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} /> 
  } >
  </Route>
  <Route path="/mobileAccessories"
  element ={
  <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} /> 
  } >
  </Route>
 </Routes>
 <Heading text='PRODUCT REVIEWS' />
 <ProductReviews productReviews={data.productReviews} />
<Heading text='VIDEOS' />
<Videos videos={data.videos} />

<Heading text="IN THE PRESS" />
<Banner  banner={data.banner}/>
<Footer footer={data.footer}/>

</BrowserRouter>
  );
}

export default App;
