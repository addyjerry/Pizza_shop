import React, { useState } from "react";
import "./Home.css";
import Tuna from "../../assets/tuna_pizza.jpeg";
import Chicken from "../../assets/chicken pizza.jpg";
import Sausage from "../../assets/sausage pizza.jpeg";
import Pepperoni from "../../assets/Pepperoni.jpeg";
import pack1 from "../../assets/back.jpeg";
import pack2 from "../../assets/astil.jpeg";
import pack3 from "../../assets/sausage pizza.jpeg";
import pack4 from "../../assets/pizza and cocktail.jpeg";
import pack5 from "../../assets/pizza_and_coke.jpeg";
import pack6 from "../../assets/chicken pizza.jpg";
import pack7 from "../../assets/tuna_pizza.jpeg";
import pack8 from "../../assets/Pepperoni.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  const [pizza, setPizza] = useState([
    {
      id: 1,
      name: "Tuna Pizza",
      img: Tuna,
      price: " GHC 60.00",
    },
    {
      id: 2,
      name: "Chicken Pizza",
      img: Chicken,
      price: " GHC 60.00",
    },
    {
      id: 3,
      name: "Pepperoni Pizza",
      img: Pepperoni,
      price: " GHC 60.00",
    },
    {
      id: 4,
      name: "Sausage Pizza",
      img: Sausage,
      price: " GHC 60.00",
    },
  ]);

  const [pack, setPackage] = useState([
    {
      id: 1,
      img: pack1,
    },
    {
      id: 2,
      img: pack2,
    },
    {
      id: 3,
      img: pack3,
    },
    {
      id: 4,
      img: pack4,
    },
    {
      id: 5,
      img: pack5,
    },
    {
      id: 6,
      img: pack6,
    },
    {
      id: 7,
      img: pack7,
    },
    {
      id: 8,
      img: pack8,
    },
  ]);

  return (
    <div id="Home">
      <div id="pizza__cards">
        {pizza.map((pizzas) => (
          <div id="card" key={pizzas.id}>
            <div id="pizza__image">
              <Link to="/menu">
                {" "}
                <img src={pizzas.img} alt="pizza" />
              </Link>
            </div>
            <div id="pizza__price">
              <h4>Price</h4>
              <h2>{pizzas.price}</h2>
            </div>
          </div>
        ))}
      </div>
      <div id="pizza__texts">
        <h3>
          At Danny's Pizza, we prepare various types of pizza to fit your taste.
          If you want to taste real pizza, try Danny's Pizza. <br />
          Order your favourite pizza now
        </h3>
      </div>
      <div id="pack__cards">
        {pack.map((packages) => (
          <div id="card" key={packages.id}>
            <div id="pizza__image">
              <img src={packages.img} alt="pizza" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
