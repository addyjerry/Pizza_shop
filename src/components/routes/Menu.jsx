import React, { useState } from "react";
import "./Menu.css";
import tuna from "../../assets/tuna_pizza.jpeg";
import chicken from "../../assets/chicken pizza.jpg";
import astil from "../../assets/astil.jpeg";
import pepperoni from "../../assets/Pepperoni.jpeg";

const Menu = () => {
  const spizza = [
    {
      id: 1,
      name: "Tuna Pizza",
      img: tuna,
      small: "Small (GHC 60.00)",
      medium: "Medium (GHC 80.00)",
      large: "Large (GHC 90.00)",
    },
    {
      id: 2,
      name: "Chicken Pizza",
      img: chicken,
      small: "Small (GHC 70.00)",
      medium: "Medium (GHC 80.00)",
      large: "Large (GHC 90.00)",
    },
    {
      id: 3,
      name: "Astil Pizza",
      img: astil,
      small: "Small (GHC 65.00)",
      medium: "Medium (GHC 80.00)",
      large: "Large (GHC 90.00)",
    },
    {
      id: 4,
      name: "Pepperoni Pizza",
      img: pepperoni,
      small: "Small (GHC 60.00)",
      medium: "Medium (GHC 80.00)",
      large: "Large (GHC 90.00)",
    },
  ];

  const [selectedImg, setSelectedImg] = useState(null);
  const handleSelectedImg = (event) => {
    setSelectedImg(event.target.value);
  };

  const [size, setSize] = useState();
  const handleSize = () => {
    setSize(!size);
  };

  const [price, setPrice] = useState(null);
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  {
    /*function to handle user input */
  }

  const [name, setName] = useState("");
  const [transaction, setTransaction] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleInput = async (e) => {
    e.preventDefault();

    //gettiong the input
    const formData = new FormData();
    formData.append("name", name);
    formData.append("transaction", transaction);

    //using try and catch
    try {
      //sending data to backend
      const response = await fetch(
        "http://localhost:8012/Danny's%20Pizza/Pizza.php",
        {
          method: "POST",
          body: formData,
        }
      );
      //response from backend
      const result = await response.json();
      setResponseMessage(response.message);
    } catch (error) {
      console.error("error", error);
      setResponseMessage("There is an error in connection");
    }
  };
  return (
    <div id="Menu">
      <h2>Make your Order here ✍</h2>
      <h1>PIZZA ORDER</h1>

      <div id="form">
        <div id="list">
          {spizza.map((pizzas) => (
            <p key={pizzas.id} onClick={handleSize}>
              <input
                type="radio"
                name="pizza"
                id=""
                value={pizzas.name}
                checked={selectedImg === pizzas.name && pizzas.small}
                onChange={handleSelectedImg}
              />
              {pizzas.name}
            </p>
          ))}
        </div>

        <div id="image__area">
          {selectedImg && (
            <img
              src={spizza.find((img) => img.name === selectedImg).img}
              alt="selected-pizza"
            />
          )}
          {selectedImg && (
            <h2>{spizza.find((size) => size.name === selectedImg).small}</h2>
          )}
          {selectedImg && (
            <h2>{spizza.find((size) => size.name === selectedImg).medium}</h2>
          )}
          {selectedImg && (
            <h2>{spizza.find((size) => size.name === selectedImg).large}</h2>
          )}
          {/* <div id="cost">
            <p>Price</p>
            {size && (
              <h3>{spizza.find((sizes) => sizes.small === size).small}</h3>
            )}
          
          </div> */}
        </div>
      </div>

      <h2>Send money to : 0552869466</h2>
      <form onSubmit={handleInput}>
        <label>Name</label>
        <br />
        <input
          type="text"
          placeholder="Kofi"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label>Transaction Id</label> <br />
        <input
          required
          type="text"
          placeholder="435672245678962"
          value={transaction}
          onChange={(e) => setTransaction(e.target.value)}
        />{" "}
        <br />
        <h2>* Please do not delete transaction message</h2> <br />
        <button type="submit"> SUBMIT</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Menu;
