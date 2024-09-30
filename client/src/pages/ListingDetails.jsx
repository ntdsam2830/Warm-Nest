/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../styles/ListingDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ListingDetails = () => {
  const [loading, setLoading] = useState(true);

  const { listingId } = useParams();
  const [listing, setListing] = useState(null);

  const getListingDetails = async () => {
    try {
      const response = await fetch(
        `http:localhost:3001/properties/${listingId}`,
        { method: "GET" }
      );

      const data = await response.json();
      setListing(data);
    } catch (error) {
      console.log("Fetch Listing Details Failed", error.message);
    }
  };

  useEffect(() => {
    getListingDetails();
  }, []);

  return (
    <div className="listing-details">
      <div className="title">
        <h1>{listing.title}</h1>
      </div>

      <div className="photos">
        {listing.listingPhotoPaths?.map((item) => {
          <img
            src={`http:localhost:3001/${item.replace("public", "")}`}
            alt="listing photo"
          />;
        })}
      </div>

      <h2>
        {listing.type} in {listing.city}, {listing.province}, {listing.country}
      </h2>
      <p>
        {listing.guestCount} guests - {listing.bedroomCount} bedroom(s) -{" "}
        {listing.bedCount} bed(s) - {listing.bathroomCount} bathroom(s)
      </p>
      <hr />

      <div className="profile">
        <img
          src={`http://localhost:3001/${listing.creator.profileImagePath.replace(
            "public",
            ""
          )}`}
        />{" "}
      </div>
    </div>
  );
};

export default ListingDetails;
