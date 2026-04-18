// Import React, components, states, effects, and components
import React from "react";
import ToyCard from "./ToyCard";

// Create a function to receive the toys and handler functions from the main App
function ToyContainer({ toys, onLike, onDelete }) {
  return (
    <div id="toy-collection">
      {/* Render the collection of ToyCards using a map to render make sure to use props*/}
      {toys.map(toy => (
        <ToyCard key={toy.id} toy={toy} onLike={onLike} onDelete={onDelete} />
      ))}
    </div>
  );
}

// Make globally available
export default ToyContainer;
