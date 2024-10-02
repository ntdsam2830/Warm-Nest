/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../styles/ListingDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { facilities } from "../data";

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
      <hr />

      <h3>Description</h3>
      <p>{listing.description}</p>
      <hr />

      <h3>{listing.highlight}</h3>
      <p>{listing.highlightDesc}</p>
      <hr />

      <div className="booking">
        <div>
          <h2>What this place offers?</h2>
          <div className="amenities">
            {JSON.parse(listing.amenities).map((item, index) => {
              <div className="facility" key={index}>
                <div className="facility_icon">
                  {" "}
                  {facilities.find((facility) => facility.name === item)?.icon}
                </div>
                <p>item</p>
              </div>;
            })}
          </div>
        </div>

        <div>
          <h2>How long do you want to stay?</h2>
          <div className="date-range-calendar"></div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
