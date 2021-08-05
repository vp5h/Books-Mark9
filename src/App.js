import "./styles.css";

import React, { useState } from "react";
import "./styles.css";

var Booksjson = {
  Productivity: [
    {
      title: "Getting Things Done",
      author: "David Allen",
      rating: "4/5",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51KNBNziJXL._SX327_BO1,204,203,200_.jpg"
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      rating: "4/5",
      image: "https://m.media-amazon.com/images/I/417yjF+Z5zL.jpg"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      rating: "4.6/5",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
    }
  ],
  Startup: [
    {
      title: "Rework",
      author: "Jason Fried",
      rating: "4.2/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/61GFc+k-5PL.jpg"
    },
    {
      title: "Zero To One",
      author: "Peter Thiel",
      rating: "4.3/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg"
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      rating: "4/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
    }
  ],
  Biography: [
    {
      title: "Steve Jobs",
      author: "Walter Isaacson",
      rating: "4/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg"
    },
    {
      title: "Wings of Fire",
      author: "Dr. Abdul Kalam and Arun Tiwari",
      rating: "4.8/5",
      image: "https://3.imimg.com/data3/VM/WT/MY-12313319/kalam-500x500.jpeg"
    },
    {
      title: "Elon Musk",
      author: "Ashlee Vance",
      rating: "4.6/5",
      image: "https://m.media-amazon.com/images/I/5179mrE+WWL.jpg"
    }
  ],
  Programming: [
    {
      title: "Clean Code",
      author: "Robert Cecil Martin",
      rating: "4/5",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX342_SY445_QL70_ML2_.jpg"
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      rating: "4.8/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg"
    },

    {
      title: "JavaScript - The Good Parts",
      author: "Douglas Crockford",
      rating: "4.6/5",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg"
    }
  ]
};

const bookarr = Object.keys(Booksjson);

export default function App() {
  const [booklists, setBookList] = useState(Booksjson.Productivity);
  function catClickHandler(cat) {
    var booklists = Booksjson[cat];
    setBookList(booklists);
  }

  return (
    <div className="App">
      <header className="hero">
        <h1 className="hero-heading">Get Book Recommendations</h1>
      </header>
      <section className="section">
        <div className="container container-center section-center">
          <p
            style={{
              textAlign: "left",
              marginBottom: "1.5rem",
              paddingLeft: "0.3rem"
            }}
          >
            Checkout my favorite books. Select a genre to get started.
          </p>

          <div>
            {bookarr.map((cat, index) => {
              return (
                <button
                  className="category-btn"
                  key={index}
                  onClick={() => catClickHandler(cat)}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <ul>
            {booklists.map((books, index) => (
              <div key={books.title}>
                <li key={books.title}>
                  <div className="img-container">
                    <img src={books.image} alt="books" />
                  </div>
                  <div className="book-content">
                    <div style={{ fontSize: "larger" }}> {books.title} </div>
                    <div style={{ fontSize: "smaller", marginTop: "0.2rem" }}>
                      {books.author}
                    </div>
                    <div className="rating"> {books.rating} </div>

                    <h3> {books.title}</h3>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
