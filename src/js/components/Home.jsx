//include images into your bundle
import React from "react";
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer'

export default function Home() {
  return (
    <>
     <Navbar />
      <div className="container mt-4">
        <Jumbotron />
        <div className="d-flex justify-content-around mt-4">
          <Card
            title="Card 1"
            text="Texto descriptivo para la tarjeta 1"
            imageUrl="https://via.placeholder.com/150"
            buttonLabel="Ver más"
          />
          <Card
            title="Card 2"
            text="Texto descriptivo para la tarjeta 2"
            imageUrl="https://via.placeholder.com/150"
            buttonLabel="Ver más"
          />
          <Card
            title="Card 3"
            text="Texto descriptivo para la tarjeta 3"
            imageUrl="https://via.placeholder.com/150"
            buttonLabel="Ver más"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
