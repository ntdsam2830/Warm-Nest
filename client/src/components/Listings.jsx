import React, { useState } from "react";
import { categories } from "../data";
import "../styles/Listings.scss";
import ListingCard from "./ListingCard";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";

const Listings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("");

  const Listings = useSelector((state) => state.listings);

  const getFeedListings = async () => {
    try {
      const response = await fetch("http://localhost3001/properties");
    } catch (error) {}
  };
  return (
    <div className="category-list">
      {categories?.map((category, index) => (
        <div className={`category`} key={index}>
          <div className="category_icon">{category.icon}</div>
          <p>{category.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Listings;
