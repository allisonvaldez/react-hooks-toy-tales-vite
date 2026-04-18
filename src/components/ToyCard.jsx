// Import necessary states, effects, and components 
import React from "react";

// Create a function to receive a toy and handler functions from ToyContainer
function ToyCard({ toy, onLike, onDelete }) {
  return (
    <div className="card" data-testid="toy-card">
      {/* Display Toy's Name */}
      <h2>{toy.name}</h2>
      {/* Create Toy's Image, alternative display, and classname*/}
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      {/* Toy's Likes */}
      <p>{toy.likes} Likes </p>
      {/* Increment a toy's like by using onLike */}
      <button className="like-btn" onClick={() => onLike(toy)}>Like {"<3"}</button>
      {/* Delete the toy to donate onLike*/}
      <button className="del-btn" onClick={() => onDelete(toy.id)}>Donate to GoodWill</button>
    </div>
  );
}

// Make it globally available
export default ToyCard;
