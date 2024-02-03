import React, { useState, useEffect } from "react";
import axios from "axios";
import HouseCard from "./HouseCard";
import "./HouseList.css";

const Home = () => {
  const [houses, setHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL
        );
        setHouses(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      {isLoading ? (
        <div className="spinner"></div>
      ) : error ? (
        <div className="error-message">{error.message}</div>
      ) : (
        <div>
          <h1 className="title">React.js API Exercices</h1>
          <div className="house-list">
            {houses.map((house) => (
              <HouseCard house={house} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
