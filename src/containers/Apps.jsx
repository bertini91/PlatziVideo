import React from "react";
import Header from "../components/Header";
import Search from "../components/Search"
import Categories from '../components/Categories'
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem'
import Footer from "../components/Footer";
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/Apps.scss'

const API = "http://localhost:3000/initialState/"

const Apps = () => {
  const initialState = useInitialState(API)

  return initialState.lenght===0 ? <h1>Loading...</h1> : (
    <div className="App">
      <Header></Header>
      <Search></Search>
      {
        initialState.mylist.lenght > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
          {
              initialState.mylist.map(item => 
                <CarouselItem key ={item.id} {...item}></CarouselItem>) 
                /* {...item} significa que le pasamos todos las propiedades que tiene item como props*/
            }
          </Carousel>
      </Categories>
      }
      <Categories title="Tendencias">
          <Carousel>
            {
              initialState.trends.map(item => 
                <CarouselItem key ={item.id} {...item}></CarouselItem>) 
                /* {...item} significa que le pasamos todos las propiedades que tiene item como props*/
            }
              
          </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
          <Carousel>
          {
              initialState.originals.map(item => 
                <CarouselItem key ={item.id} {...item}></CarouselItem>) 
                /* {...item} significa que le pasamos todos las propiedades que tiene item como props*/
            }    
          </Carousel>
      </Categories>
      <Footer></Footer>
    </div>
  );
};

export default Apps;
