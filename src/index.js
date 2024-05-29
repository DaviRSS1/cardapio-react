import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  return (
    <div className="container">
      <Cabecalho />
      <Cardapio pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}

function Cabecalho() {
  return (
    <header className="header">
      <h1>Pizzaria React</h1>
    </header>
  );
}

function Cardapio({ pizzaData }) {
  return (
    <main className="menu">
      <h2>Nosso Cardápio</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizza={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}

function Pizza({ pizza }) {
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <p>{pizza.soldOut ? "ESGOTADO" : pizza.price}</p>
      </div>
    </li>
  );
}

function Footer() {
  const hora = new Date().getHours();
  const horaAberto = 12;
  const horaFechado = 22;
  const estaAberto = hora >= horaAberto && hora <= horaFechado;

  return (
    <footer className="footer">
      {estaAberto ? (
        <Order horaFechado={horaFechado} />
      ) : (
        <div className="order">
          <p>{`Estamos fechados, abriremos ás ${horaAberto}:00!!`}</p>
        </div>
      )}
    </footer>
  );
}

function Order({ horaFechado }) {
  return (
    <div className="order">
      <p>{`Estamos abertos até ás ${horaFechado}:00!!`}</p>
      <button className="btn">Pedir</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
