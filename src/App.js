import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Thriller: [
    { name: "The VinCi Code" },
    { name: "Inferno" },
    { name: "Gone Girl " },
    { name: "The Shining" },
    { name: "The Widow" }
  ],

  Romance: [
    {
      name: "Notebook"
    },
    {
      name: "Pride & Prejudice"
    },
    {
      name: "A Tale of Two Cities"
    },
    {
      name: "Me Before You"
    },
    {
      name: "The Fault in Our Stars"
    }
  ],
  business: [
    {
      name: "Rich Dad, Poor Dad"
    },
    {
      name: "Steel King:Lakshmi Mittal"
    },
    {
      name: "Dreams With Your Eyes Open"
    },
    {
      name: "Dhirubhai Ambani:Against All odds"
    },
    {
      name: "E-Myth"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>BOOKWORM</h1>
      <p style={{ fontSize: "large", color: "white", fontWeight: "750" }}>
        Here are Some Recommendation From My Bookshelf{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              maxWidth: "50%",
              cursor: "pointer",
              background: "#63ff99",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1.5px solid black",
              margin: "1rem 0.5rem",
              color: "black"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem 0.5rem",
                border: "1.7px solid black",
                width: "70%",
                margin: "1rem auto",
                borderRadius: "0.5rem",
                textAlign: "center",
                background: "#63ff99",
                color: "black"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
